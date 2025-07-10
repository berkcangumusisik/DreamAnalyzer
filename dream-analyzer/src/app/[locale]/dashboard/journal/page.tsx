'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Save,
  Tag,
  Heart,
  Star,
  Moon,
  Sparkles,
  Eye,
  Edit3,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDreamStore, Dream } from '@/store/dreamStore';

// Mock data to initialize the store if empty
const initializeMockData = (addDream: (dream: Omit<Dream, 'id' | 'createdAt' | 'updatedAt'>) => void) => {
  const mockDreams = [
    {
      title: 'Flying Over Mountains',
      content: 'I was soaring through the clouds above snow-capped mountains. The feeling of freedom was incredible, and I could control my direction just by thinking about it.',
      date: '2025-01-10',
      mood: 'positive' as const,
      tags: ['freedom', 'adventure', 'nature'],
      symbols: ['flying', 'mountains', 'clouds'],
      clarity: 5,
      lucid: true,
      aiInsight: 'Flying dreams often represent liberation from constraints and a desire for freedom in your waking life.'
    },
    {
      title: 'Lost in a Library',
      content: 'I was in an enormous library with endless shelves. I was looking for a specific book but could never find it. The librarian kept changing into different people.',
      date: '2025-01-09',
      mood: 'anxious' as const,
      tags: ['searching', 'knowledge', 'confusion'],
      symbols: ['library', 'books', 'maze'],
      clarity: 3,
      lucid: false,
      aiInsight: 'This dream may reflect feelings of being overwhelmed by information or searching for answers in your life.'
    },
    {
      title: 'Childhood Home',
      content: 'I was back in my childhood bedroom, exactly as it was when I was 8 years old. My grandmother was there, making cookies in the kitchen.',
      date: '2025-01-08',
      mood: 'nostalgic' as const,
      tags: ['family', 'memories', 'comfort'],
      symbols: ['home', 'grandmother', 'food'],
      clarity: 4,
      lucid: false,
      aiInsight: 'Dreams of childhood homes often represent a longing for security and simpler times.'
    }
  ];

  mockDreams.forEach(dream => addDream(dream));
};

const moodColors = {
  positive: 'bg-green-500/20 text-green-400 border-green-500/30',
  neutral: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  negative: 'bg-red-500/20 text-red-400 border-red-500/30',
  nostalgic: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  anxious: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
};

export default function JournalPage() {
  const t = useTranslations('journal');
  
  const {
    dreams,
    searchTerm,
    selectedMood,
    addDream,
    setSearchTerm,
    setSelectedMood,
    getFilteredDreams
  } = useDreamStore();

  // Initialize mock data if store is empty
  React.useEffect(() => {
    if (dreams.length === 0) {
      initializeMockData(addDream);
    }
  }, [dreams.length, addDream]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newDream, setNewDream] = useState({
    title: '',
    content: '',
    mood: 'neutral' as Dream['mood'],
    tags: '',
    lucid: false
  });

  const filteredDreams = getFilteredDreams();

  const handleSaveDream = () => {
    if (!newDream.title.trim() || !newDream.content.trim()) return;

    const dreamData = {
      title: newDream.title,
      content: newDream.content,
      date: new Date().toISOString().split('T')[0],
      mood: newDream.mood,
      tags: newDream.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      symbols: [], // Would be extracted by AI
      clarity: 3, // Default
      lucid: newDream.lucid,
      aiInsight: 'AI analysis will be available shortly...'
    };

    addDream(dreamData);
    setNewDream({
      title: '',
      content: '',
      mood: 'neutral',
      tags: '',
      lucid: false
    });
    setShowAddForm(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">{t('title')}</h1>
          <p className="text-gray-400 mt-1">{t('subtitle')}</p>
        </div>
        <Button 
          variant="gradient" 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          {t('addDream')}
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-glass border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search dreams, tags, symbols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200"
              />
            </div>
            <select
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="all">All Moods</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
              <option value="nostalgic">Nostalgic</option>
              <option value="anxious">Anxious</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Add Dream Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-purple-400" />
                  Record New Dream
                </CardTitle>
                <CardDescription>
                  Capture your dream while the memory is fresh
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Dream Title
                  </label>
                  <input
                    type="text"
                    value={newDream.title}
                    onChange={(e) => setNewDream(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Give your dream a title..."
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Dream Description
                  </label>
                  <textarea
                    value={newDream.content}
                    onChange={(e) => setNewDream(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Describe your dream in detail..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mood
                    </label>
                    <select
                      value={newDream.mood}
                      onChange={(e) => setNewDream(prev => ({ ...prev, mood: e.target.value as Dream['mood'] }))}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                    >
                      <option value="positive">Positive</option>
                      <option value="neutral">Neutral</option>
                      <option value="negative">Negative</option>
                      <option value="nostalgic">Nostalgic</option>
                      <option value="anxious">Anxious</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={newDream.tags}
                      onChange={(e) => setNewDream(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="adventure, flying, water..."
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="lucid"
                    checked={newDream.lucid}
                    onChange={(e) => setNewDream(prev => ({ ...prev, lucid: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-white/5 border-white/10 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="lucid" className="text-sm text-gray-300">
                    This was a lucid dream (I was aware I was dreaming)
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="gradient" onClick={handleSaveDream}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Dream
                  </Button>
                  <Button variant="ghost" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dreams List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDreams.map((dream, index) => (
          <motion.div
            key={dream.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="bg-glass border-white/10 hover:border-white/20 transition-all duration-200 h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {dream.title}
                      {dream.lucid && (
                        <Badge variant="secondary" className="text-xs">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Lucid
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-400">{new Date(dream.date).toLocaleDateString()}</span>
                      <div className="flex items-center gap-1">
                        {renderStars(dream.clarity)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {dream.content}
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge className={`text-xs ${moodColors[dream.mood]}`}>
                    <Heart className="w-3 h-3 mr-1" />
                    {dream.mood}
                  </Badge>
                  {dream.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {dream.aiInsight && (
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-purple-300">{dream.aiInsight}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">
                      {dream.symbols.length} symbols detected
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredDreams.length === 0 && (
        <Card className="bg-glass border-white/10">
          <CardContent className="text-center py-12">
            <Moon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No dreams found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || selectedMood !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Start recording your dreams to build your dream journal'
              }
            </p>
            {!searchTerm && selectedMood === 'all' && (
              <Button variant="gradient" onClick={() => setShowAddForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Record Your First Dream
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
} 