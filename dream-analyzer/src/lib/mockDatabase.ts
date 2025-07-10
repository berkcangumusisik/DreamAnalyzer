import { Dream } from '@/store/dreamStore';

// Mock user data
export const mockUser = {
  id: 'user-1',
  name: 'Dream Explorer',
  email: 'user@dreamanalyzer.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dream',
  preferences: {
    language: 'en',
    theme: 'dark',
    notifications: {
      dreamReminders: true,
      aiInsights: true,
      patterns: true,
      weeklyReports: true
    },
    aiPersonality: {
      style: 'friendly',
      detailLevel: 'moderate',
      focusArea: 'general'
    }
  },
  subscription: {
    plan: 'premium',
    status: 'active',
    expiresAt: '2025-12-01'
  }
};

// Mock dreams database with both Turkish and English content
export const mockDreamsDatabase: Dream[] = [
  {
    id: 'dream-1',
    title: 'Flying Over Mountains',
    content: 'I was soaring through the clouds above snow-capped mountains. The feeling of freedom was incredible, and I could control my direction just by thinking about it. The landscape below was breathtaking with crystal clear lakes and dense forests.',
    date: '2025-01-10',
    mood: 'positive',
    tags: ['freedom', 'adventure', 'nature', 'flying'],
    symbols: ['flying', 'mountains', 'clouds', 'nature', 'freedom'],
    clarity: 5,
    lucid: true,
    createdAt: new Date('2025-01-10T08:30:00'),
    updatedAt: new Date('2025-01-10T08:30:00'),
    aiInsight: 'Flying dreams often represent liberation from constraints and a desire for freedom in your waking life. The mountain symbolism suggests you\'re rising above challenges with a new perspective.'
  },
  {
    id: 'dream-2',
    title: 'Lost in a Library',
    content: 'I was in an enormous library with endless shelves reaching up to the sky. I was searching for a specific book but could never find it. The librarian kept changing into different people - my teacher, my mother, then a stranger.',
    date: '2025-01-09',
    mood: 'anxious',
    tags: ['searching', 'knowledge', 'confusion', 'transformation'],
    symbols: ['library', 'books', 'maze', 'searching', 'transformation'],
    clarity: 3,
    lucid: false,
    createdAt: new Date('2025-01-09T07:15:00'),
    updatedAt: new Date('2025-01-09T07:15:00'),
    aiInsight: 'This dream reflects feelings of being overwhelmed by information or searching for answers in your life. The changing librarian represents different sources of guidance you\'re considering.'
  },
  {
    id: 'dream-3',
    title: 'Childhood Home',
    content: 'I was back in my childhood bedroom, exactly as it was when I was 8 years old. My grandmother was there, making cookies in the kitchen. The smell was so vivid and comforting. Everything felt safe and warm.',
    date: '2025-01-08',
    mood: 'nostalgic',
    tags: ['family', 'memories', 'comfort', 'childhood'],
    symbols: ['home', 'grandmother', 'food', 'childhood', 'safety'],
    clarity: 4,
    lucid: false,
    createdAt: new Date('2025-01-08T06:45:00'),
    updatedAt: new Date('2025-01-08T06:45:00'),
    aiInsight: 'Dreams of childhood homes often represent a longing for security and simpler times. Your grandmother symbolizes wisdom, nurturing, and unconditional love.'
  },
  {
    id: 'dream-4',
    title: 'Ocean Waves',
    content: 'I was standing on a beach watching massive waves crash against the shore. The water was crystal clear but incredibly powerful. I felt both scared and fascinated by the ocean\'s raw energy.',
    date: '2025-01-07',
    mood: 'neutral',
    tags: ['water', 'ocean', 'power', 'emotions'],
    symbols: ['water', 'ocean', 'waves', 'beach', 'power'],
    clarity: 4,
    lucid: false,
    createdAt: new Date('2025-01-07T09:20:00'),
    updatedAt: new Date('2025-01-07T09:20:00'),
    aiInsight: 'Ocean dreams often represent your emotional state and subconscious mind. The powerful waves suggest you\'re processing intense emotions or life changes.'
  },
  {
    id: 'dream-5',
    title: 'Talking Cat',
    content: 'A wise old cat was giving me life advice in my kitchen. It spoke in a calm, soothing voice and seemed to know all my secrets. The cat had bright green eyes that seemed to look into my soul.',
    date: '2025-01-06',
    mood: 'positive',
    tags: ['animals', 'wisdom', 'communication', 'guidance'],
    symbols: ['cat', 'communication', 'wisdom', 'kitchen', 'guidance'],
    clarity: 5,
    lucid: true,
    createdAt: new Date('2025-01-06T05:30:00'),
    updatedAt: new Date('2025-01-06T05:30:00'),
    aiInsight: 'Animals speaking in dreams often represent your intuition or inner wisdom trying to communicate important messages. Cats symbolize independence and mysterious knowledge.'
  },
  {
    id: 'dream-6',
    title: 'Running Through Forest',
    content: 'I was running through a dark forest, but not from fear - from pure joy and energy. The trees seemed to part as I approached, creating a clear path. I felt incredibly fast and agile.',
    date: '2025-01-05',
    mood: 'positive',
    tags: ['running', 'forest', 'energy', 'freedom'],
    symbols: ['forest', 'running', 'trees', 'path', 'speed'],
    clarity: 3,
    lucid: false,
    createdAt: new Date('2025-01-05T07:00:00'),
    updatedAt: new Date('2025-01-05T07:00:00'),
    aiInsight: 'Running dreams with positive emotions indicate you\'re making good progress in life. The forest represents your subconscious, and the clear path suggests clarity in your direction.'
  }
];

// Mock AI insights in multiple languages
export const mockAIResponses = {
  en: {
    welcome: "Hello! I'm your AI Dream Interpreter. I'm here to help you understand the hidden meanings in your dreams. What would you like to explore today?",
    flying: "Flying dreams are fascinating! They often represent a desire for freedom, liberation from constraints, or gaining a new perspective on life. The feeling of soaring can indicate feelings of empowerment and the ability to rise above challenges.",
    water: "Water in dreams is deeply symbolic and typically represents emotions, the unconscious mind, and spiritual cleansing. The state of the water often reflects your emotional state.",
    animals: "Animals in dreams often represent our instincts, primal desires, or aspects of our personality. Different animals carry different meanings and can offer insights into your inner nature.",
    chase: "Chase dreams are among the most common dream themes and usually indicate avoidance or anxiety about something in your waking life.",
    generic: "That's a very interesting dream! Dreams are highly personal and their meanings can vary based on your life experiences, emotions, and current circumstances."
  },
  tr: {
    welcome: "Merhaba! Ben senin Yapay Zeka Rüya Yorumcun. Rüyalarındaki gizli anlamları anlamana yardımcı olmak için buradayım. Bugün neyi keşfetmek istersin?",
    flying: "Uçma rüyaları büyüleyici! Genellikle özgürlük arzusunu, kısıtlamalardan kurtulmayı veya yaşama yeni bir perspektif kazanmayı temsil ederler.",
    water: "Rüyalarda su derinlemesine semboliktir ve tipik olarak duyguları, bilinçdışını ve ruhsal temizlenmeyi temsil eder.",
    animals: "Rüyalarda hayvanlar genellikle içgüdülerimizi, ilkel arzularımızı veya kişiliğimizin yönlerini temsil eder.",
    chase: "Kovalama rüyaları en yaygın rüya temalarından biridir ve genellikle uyanık yaşamında bir şeyden kaçınma veya kaygı duyduğunu gösterir.",
    generic: "Bu çok ilginç bir rüya! Rüyalar oldukça kişiseldir ve anlamları yaşam deneyimlerine, duygularına ve mevcut koşullarına göre değişebilir."
  }
};

// Mock dream patterns and insights
export const mockDreamPatterns = [
  {
    id: 'pattern-1',
    title: 'Flying Dreams Correlation',
    description: 'Flying dreams occur 65% more frequently after stressful days',
    confidence: 'High',
    category: 'Behavioral',
    discoveries: [
      'Stress triggers escapist dream themes',
      'Freedom dreams correlate with feeling restricted',
      'Higher occurrence on Sunday nights (work anxiety)'
    ]
  },
  {
    id: 'pattern-2',
    title: 'Water Symbol Pattern',
    description: 'Water appears in dreams during emotional processing periods',
    confidence: 'Medium',
    category: 'Symbolic',
    discoveries: [
      'Clear water = emotional clarity',
      'Turbulent water = emotional turmoil',
      'Ocean dreams = major life transitions'
    ]
  },
  {
    id: 'pattern-3',
    title: 'Sleep Quality Impact',
    description: 'Better sleep quality correlates with more vivid dream recall',
    confidence: 'High',
    category: 'Physiological',
    discoveries: [
      '7+ hours sleep = 40% better recall',
      'REM sleep optimization improves lucidity',
      'Consistent sleep schedule enhances dream clarity'
    ]
  }
];

// Mock notification data
export const mockNotifications = [
  {
    id: 'notif-1',
    type: 'insight',
    title: 'New Pattern Discovered',
    message: 'AI found a correlation between your flying dreams and stress levels',
    timestamp: new Date('2025-01-10T10:30:00'),
    read: false
  },
  {
    id: 'notif-2', 
    type: 'reminder',
    title: 'Dream Journal Reminder',
    message: 'Don\'t forget to record last night\'s dream',
    timestamp: new Date('2025-01-10T08:00:00'),
    read: true
  },
  {
    id: 'notif-3',
    type: 'weekly',
    title: 'Weekly Dream Report',
    message: 'Your dream analysis report for this week is ready',
    timestamp: new Date('2025-01-09T09:00:00'),
    read: false
  }
];

// Database simulation functions
export const dreamDatabase = {
  // Get all dreams for a user
  getUserDreams: async (userId: string): Promise<Dream[]> => {
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
    return mockDreamsDatabase.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },

  // Add a new dream
  addDream: async (dreamData: Omit<Dream, 'id' | 'createdAt' | 'updatedAt'>): Promise<Dream> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newDream: Dream = {
      ...dreamData,
      id: `dream-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      aiInsight: dreamData.aiInsight || 'AI analysis will be available shortly...'
    };
    mockDreamsDatabase.unshift(newDream);
    return newDream;
  },

  // Update a dream
  updateDream: async (dreamId: string, updates: Partial<Dream>): Promise<Dream | null> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const dreamIndex = mockDreamsDatabase.findIndex(d => d.id === dreamId);
    if (dreamIndex === -1) return null;
    
    mockDreamsDatabase[dreamIndex] = {
      ...mockDreamsDatabase[dreamIndex],
      ...updates,
      updatedAt: new Date()
    };
    return mockDreamsDatabase[dreamIndex];
  },

  // Delete a dream
  deleteDream: async (dreamId: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const dreamIndex = mockDreamsDatabase.findIndex(d => d.id === dreamId);
    if (dreamIndex === -1) return false;
    
    mockDreamsDatabase.splice(dreamIndex, 1);
    return true;
  },

  // Search dreams
  searchDreams: async (query: string): Promise<Dream[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const lowercaseQuery = query.toLowerCase();
    return mockDreamsDatabase.filter(dream =>
      dream.title.toLowerCase().includes(lowercaseQuery) ||
      dream.content.toLowerCase().includes(lowercaseQuery) ||
      dream.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      dream.symbols.some(symbol => symbol.toLowerCase().includes(lowercaseQuery))
    );
  }
};

// AI Chat simulation
export const aiChatService = {
  sendMessage: async (message: string, locale: string = 'en'): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = mockAIResponses[locale as keyof typeof mockAIResponses] || mockAIResponses.en;
    
    const messageWords = message.toLowerCase();
    
    if (messageWords.includes('uç') || messageWords.includes('fly')) {
      return responses.flying;
    } else if (messageWords.includes('su') || messageWords.includes('water')) {
      return responses.water;
    } else if (messageWords.includes('hayvan') || messageWords.includes('animal')) {
      return responses.animals;
    } else if (messageWords.includes('koval') || messageWords.includes('chase')) {
      return responses.chase;
    } else {
      return responses.generic;
    }
  }
};

// Analytics and patterns
export const analyticsService = {
  getDreamStats: async (): Promise<any> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const totalDreams = mockDreamsDatabase.length;
    const lucidDreams = mockDreamsDatabase.filter(d => d.lucid).length;
    const thisWeekDreams = mockDreamsDatabase.filter(d => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return d.createdAt > weekAgo;
    }).length;
    
    const moodValues = {
      positive: 8,
      neutral: 5,
      negative: 3,
      nostalgic: 6,
      anxious: 4
    };
    
    const averageMood = mockDreamsDatabase.length > 0
      ? mockDreamsDatabase.reduce((sum, dream) => sum + moodValues[dream.mood], 0) / mockDreamsDatabase.length
      : 5;

    return {
      total: totalDreams,
      thisWeek: thisWeekDreams,
      lucidCount: lucidDreams,
      lucidPercentage: totalDreams > 0 ? (lucidDreams / totalDreams) * 100 : 0,
      averageMood: Math.round(averageMood * 10) / 10
    };
  },

  getSymbolDistribution: async (): Promise<Array<{symbol: string; count: number}>> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const symbolCounts: Record<string, number> = {};
    mockDreamsDatabase.forEach(dream => {
      dream.symbols.forEach(symbol => {
        symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
      });
    });

    return Object.entries(symbolCounts)
      .map(([symbol, count]) => ({ symbol, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  },

  getMoodTrends: async (): Promise<Array<{positive: number; neutral: number; negative: number}>> => {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    // Simulate weekly mood trends
    return [
      { positive: 65, neutral: 25, negative: 10 },
      { positive: 70, neutral: 20, negative: 10 },
      { positive: 60, neutral: 30, negative: 10 },
      { positive: 75, neutral: 20, negative: 5 }
    ];
  }
}; 