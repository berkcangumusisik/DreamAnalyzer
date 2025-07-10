import { create } from 'zustand';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
  dreamId?: string; // Reference to a specific dream
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  lastActivity: Date;
}

interface ChatStore {
  currentSession: ChatSession | null;
  sessions: ChatSession[];
  isLoading: boolean;
  isTyping: boolean;
  
  // Actions
  createSession: (title?: string) => ChatSession;
  setCurrentSession: (session: ChatSession | null) => void;
  addMessage: (content: string, role: 'user' | 'assistant', dreamId?: string) => void;
  updateMessage: (messageId: string, content: string) => void;
  deleteMessage: (messageId: string) => void;
  deleteSession: (sessionId: string) => void;
  setLoading: (loading: boolean) => void;
  setTyping: (typing: boolean) => void;
  
  // AI Response simulation
  sendMessage: (content: string, dreamId?: string, locale?: string) => Promise<void>;
  
  // Getters
  getSessionById: (id: string) => ChatSession | undefined;
  getRecentSessions: (limit?: number) => ChatSession[];
}

export const useChatStore = create<ChatStore>((set, get) => ({
  currentSession: null,
  sessions: [],
  isLoading: false,
  isTyping: false,

  createSession: (title) => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: title || `Chat ${new Date().toLocaleDateString()}`,
      messages: [
        {
          id: 'welcome',
          content: "Hello! I'm your AI Dream Interpreter. I'm here to help you understand the hidden meanings in your dreams. What would you like to explore today?",
          role: 'assistant',
          timestamp: new Date()
        }
      ],
      createdAt: new Date(),
      lastActivity: new Date()
    };

    set((state) => ({
      sessions: [newSession, ...state.sessions],
      currentSession: newSession
    }));

    return newSession;
  },

  setCurrentSession: (session) => {
    set({ currentSession: session });
  },

  addMessage: (content, role, dreamId) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date(),
      dreamId
    };

    set((state) => {
      if (!state.currentSession) return state;

      const updatedSession = {
        ...state.currentSession,
        messages: [...state.currentSession.messages, newMessage],
        lastActivity: new Date()
      };

      return {
        currentSession: updatedSession,
        sessions: state.sessions.map((session) =>
          session.id === state.currentSession?.id ? updatedSession : session
        )
      };
    });
  },

  updateMessage: (messageId, content) => {
    set((state) => {
      if (!state.currentSession) return state;

      const updatedSession = {
        ...state.currentSession,
        messages: state.currentSession.messages.map((message) =>
          message.id === messageId ? { ...message, content } : message
        )
      };

      return {
        currentSession: updatedSession,
        sessions: state.sessions.map((session) =>
          session.id === state.currentSession?.id ? updatedSession : session
        )
      };
    });
  },

  deleteMessage: (messageId) => {
    set((state) => {
      if (!state.currentSession) return state;

      const updatedSession = {
        ...state.currentSession,
        messages: state.currentSession.messages.filter((message) => message.id !== messageId)
      };

      return {
        currentSession: updatedSession,
        sessions: state.sessions.map((session) =>
          session.id === state.currentSession?.id ? updatedSession : session
        )
      };
    });
  },

  deleteSession: (sessionId) => {
    set((state) => ({
      sessions: state.sessions.filter((session) => session.id !== sessionId),
      currentSession: state.currentSession?.id === sessionId ? null : state.currentSession
    }));
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },

  setTyping: (typing) => {
    set({ isTyping: typing });
  },

  sendMessage: async (content, dreamId, locale = 'en') => {
    const { addMessage, setTyping } = get();
    
    // Add user message
    addMessage(content, 'user', dreamId);
    
    // Set typing indicator
    setTyping(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Generate AI response based on content and locale
    let aiResponse = '';
    
    const responses = {
      en: {
        flying: `Flying dreams are fascinating! They often represent a desire for freedom, liberation from constraints, or gaining a new perspective on life. The feeling of soaring can indicate feelings of empowerment and the ability to rise above challenges.

In your case, the context and emotions in the dream are important. Were you flying effortlessly or struggling to stay airborne? This can reveal how confident you feel about overcoming obstacles in your waking life.

Would you like to share more details about your flying dream?`,
        water: `Water in dreams is deeply symbolic and typically represents emotions, the unconscious mind, and spiritual cleansing. The state of the water often reflects your emotional state:

• Clear, calm water: Peace and emotional clarity
• Turbulent or murky water: Emotional turmoil or confusion
• Deep water: The unconscious mind or hidden emotions
• Flowing water: Life changes or emotional release

What kind of water appeared in your dream? This will help me provide a more specific interpretation.`,
        chase: `Chase dreams are among the most common dream themes and usually indicate avoidance or anxiety about something in your waking life. You might be running from:

• A difficult decision you need to make
• Confronting emotions or memories
• Responsibilities or commitments
• Aspects of yourself you're not ready to face

The key question is: what or who was chasing you? This often represents what you're trying to avoid in real life.`,
        animals: `Animals in dreams often represent our instincts, primal desires, or aspects of our personality. Different animals carry different meanings:

• Cats: Independence, mystery, feminine energy
• Dogs: Loyalty, friendship, unconditional love
• Birds: Freedom, spirituality, higher perspective
• Snakes: Transformation, healing, hidden knowledge

The animal's behavior in your dream is also significant. Was it friendly, aggressive, or neutral?`,
        generic: `That's a very interesting dream! Dreams are highly personal and their meanings can vary based on your life experiences, emotions, and current circumstances.

To provide you with the most accurate interpretation, I'd love to know more details:

• What emotions did you feel during the dream?
• Are there any recurring elements or symbols?
• What's happening in your life right now that might connect to this dream?
• Did anything in the dream remind you of real-life situations?

The more context you can provide, the deeper we can explore the meaning together.`
      },
      tr: {
        flying: `Uçma rüyaları büyüleyici! Genellikle özgürlük arzusunu, kısıtlamalardan kurtulmayı veya yaşama yeni bir perspektif kazanmayı temsil ederler. Yükseklerde süzülme hissi, güçlenme duygularını ve zorlukların üstesinden gelme yeteneğini gösterebilir.

Senin durumunda, rüyadaki bağlam ve duygular önemli. Zahmetsizce mi uçuyordun yoksa havada kalmaya çalışıyor muydun? Bu, uyanık yaşamındaki engelleri aşma konusunda ne kadar kendine güvendiğini gösterebilir.

Uçma rüyanla ilgili daha fazla detay paylaşmak ister misin?`,
        water: `Rüyalarda su derinlemesine semboliktir ve tipik olarak duyguları, bilinçdışını ve ruhsal temizlenmeyi temsil eder. Suyun durumu genellikle duygusal durumunu yansıtır:

• Berrak, sakin su: Huzur ve duygusal berraklık
• Çalkantılı veya bulanık su: Duygusal karmaşa veya kafa karışıklığı
• Derin su: Bilinçdışı veya gizli duygular
• Akan su: Yaşam değişiklikleri veya duygusal salınım

Rüyanda nasıl bir su belirdi? Bu, daha spesifik bir yorum yapmama yardımcı olacak.`,
        chase: `Kovalama rüyaları en yaygın rüya temalarından biridir ve genellikle uyanık yaşamında bir şeyden kaçınma veya kaygı duyduğunu gösterir. Şunlardan kaçıyor olabilirsin:

• Vermeniz gereken zor bir karar
• Duygularla veya anılarla yüzleşmek
• Sorumluluklar veya taahhütler
• Henüz yüzleşmeye hazır olmadığın öz yönlerin

Temel soru şu: seni kim veya ne kovalıyordu? Bu genellikle gerçek yaşamda kaçınmaya çalıştığın şeyi temsil eder.`,
        animals: `Rüyalarda hayvanlar genellikle içgüdülerimizi, ilkel arzularımızı veya kişiliğimizin yönlerini temsil eder. Farklı hayvanlar farklı anlamlar taşır:

• Kediler: Bağımsızlık, gizem, dişil enerji
• Köpekler: Sadakat, dostluk, koşulsuz sevgi
• Kuşlar: Özgürlük, maneviyat, yüksek perspektif
• Yılanlar: Dönüşüm, şifa, gizli bilgi

Rüyandaki hayvanın davranışı da önemli. Dostça, saldırgan mı yoksa nötr müydü?`,
        generic: `Bu çok ilginç bir rüya! Rüyalar oldukça kişiseldir ve anlamları yaşam deneyimlerine, duygularına ve mevcut koşullarına göre değişebilir.

Sana en doğru yorumu verebilmek için daha fazla detay bilmek istiyorum:

• Rüya sırasında hangi duyguları hissettin?
• Tekrarlayan öğeler veya semboller var mı?
• Şu anda yaşamında bu rüyayla bağlantılı olabilecek neler oluyor?
• Rüyada gerçek yaşam durumlarını hatırlatan bir şey var mıydı?

Ne kadar çok bağlam sağlarsan, anlamı o kadar derinlemesine keşfedebiliriz.`
      }
    };
    
    const currentResponses = responses[locale as keyof typeof responses] || responses.en;
    
    if (content.toLowerCase().includes('uç') || content.toLowerCase().includes('fly')) {
      aiResponse = currentResponses.flying;
    } else if (content.toLowerCase().includes('su') || content.toLowerCase().includes('water')) {
      aiResponse = currentResponses.water;
    } else if (content.toLowerCase().includes('koval') || content.toLowerCase().includes('chase') || content.toLowerCase().includes('koş') || content.toLowerCase().includes('run')) {
      aiResponse = currentResponses.chase;
    } else if (content.toLowerCase().includes('hayvan') || content.toLowerCase().includes('animal') || content.toLowerCase().includes('kedi') || content.toLowerCase().includes('köpek') || content.toLowerCase().includes('cat') || content.toLowerCase().includes('dog')) {
      aiResponse = currentResponses.animals;
    } else {
      aiResponse = currentResponses.generic;
    }
    
    setTyping(false);
    addMessage(aiResponse, 'assistant');
  },

  getSessionById: (id) => {
    return get().sessions.find((session) => session.id === id);
  },

  getRecentSessions: (limit = 10) => {
    return get().sessions
      .sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime())
      .slice(0, limit);
  }
})); 