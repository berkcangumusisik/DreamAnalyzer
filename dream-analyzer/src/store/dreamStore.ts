import { create } from 'zustand';

export interface Dream {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: 'positive' | 'neutral' | 'negative' | 'nostalgic' | 'anxious';
  tags: string[];
  symbols: string[];
  clarity: number; // 1-5 stars
  lucid: boolean;
  aiInsight?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DreamStore {
  dreams: Dream[];
  currentDream: Dream | null;
  isLoading: boolean;
  searchTerm: string;
  selectedMood: string;
  
  // Actions
  addDream: (dream: Omit<Dream, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateDream: (id: string, updates: Partial<Dream>) => void;
  deleteDream: (id: string) => void;
  setCurrentDream: (dream: Dream | null) => void;
  setSearchTerm: (term: string) => void;
  setSelectedMood: (mood: string) => void;
  setLoading: (loading: boolean) => void;
  
  // Getters
  getFilteredDreams: () => Dream[];
  getDreamById: (id: string) => Dream | undefined;
  getDreamStats: () => {
    total: number;
    thisWeek: number;
    lucidCount: number;
    averageMood: number;
  };
}

export const useDreamStore = create<DreamStore>((set, get) => ({
  dreams: [],
  currentDream: null,
  isLoading: false,
  searchTerm: '',
  selectedMood: 'all',

  addDream: (dreamData) => {
    const newDream: Dream = {
      ...dreamData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    set((state) => ({
      dreams: [newDream, ...state.dreams]
    }));
  },

  updateDream: (id, updates) => {
    set((state) => ({
      dreams: state.dreams.map((dream) =>
        dream.id === id
          ? { ...dream, ...updates, updatedAt: new Date() }
          : dream
      )
    }));
  },

  deleteDream: (id) => {
    set((state) => ({
      dreams: state.dreams.filter((dream) => dream.id !== id),
      currentDream: state.currentDream?.id === id ? null : state.currentDream
    }));
  },

  setCurrentDream: (dream) => {
    set({ currentDream: dream });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  setSelectedMood: (mood) => {
    set({ selectedMood: mood });
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },

  getFilteredDreams: () => {
    const { dreams, searchTerm, selectedMood } = get();
    
    return dreams.filter((dream) => {
      const matchesSearch = searchTerm === '' || 
        dream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dream.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dream.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesMood = selectedMood === 'all' || dream.mood === selectedMood;
      
      return matchesSearch && matchesMood;
    });
  },

  getDreamById: (id) => {
    return get().dreams.find((dream) => dream.id === id);
  },

  getDreamStats: () => {
    const { dreams } = get();
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const thisWeekDreams = dreams.filter(
      (dream) => new Date(dream.date) >= weekAgo
    );
    
    const lucidDreams = dreams.filter((dream) => dream.lucid);
    
    const moodValues = {
      positive: 5,
      nostalgic: 4,
      neutral: 3,
      anxious: 2,
      negative: 1
    };
    
    const averageMood = dreams.length > 0
      ? dreams.reduce((sum, dream) => sum + moodValues[dream.mood], 0) / dreams.length
      : 3;
    
    return {
      total: dreams.length,
      thisWeek: thisWeekDreams.length,
      lucidCount: lucidDreams.length,
      averageMood: Math.round(averageMood * 10) / 10
    };
  }
})); 