'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Heart,
  Plus,
  MessageSquare,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDreamStore } from '@/store/dreamStore';
import { useChatStore } from '@/store/chatStore';

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  const { dreams, getDreamStats } = useDreamStore();
  const { createSession } = useChatStore();

  // Initialize mock data if needed
  React.useEffect(() => {
    if (dreams.length === 0) {
      // Mock data would be initialized here in real app
    }
  }, [dreams.length]);

  const stats = getDreamStats();

  const statsCards = [
    {
      title: 'Dreams Analyzed',
      value: stats.total.toString(),
      change: `+${stats.thisWeek} this week`,
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Patterns Found',
      value: Math.floor(stats.total * 0.18).toString(),
      change: '+3 new patterns',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sleep Hours',
      value: '7.5h',
      change: 'avg this week',
      icon: Clock,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mood Score',
      value: stats.averageMood.toString(),
      change: '+0.5 this week',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  // Get recent dreams (last 3)
  const recentDreams = dreams.slice(0, 3).map(dream => ({
    id: dream.id,
    title: dream.title,
    date: dream.date,
    mood: dream.mood,
    tags: dream.tags,
    aiInsight: dream.aiInsight || 'AI analysis pending...'
  }));

  const handleStartChat = () => {
    const session = createSession();
    // Navigate to chat page would happen here
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              {t('welcome.title', { name: 'Berk' })}
            </h1>
            <p className="text-gray-400 mt-1">
              {t('welcome.subtitle')}
            </p>
          </div>
          <Button variant="gradient" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            {t('actions.recordDream')}
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-glass border-white/10 hover:border-white/20 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Dreams */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-glass border-white/10 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{t('recentDreams.title')}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {t('recentDreams.description')}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  {t('actions.viewAll')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentDreams.map((dream, index) => (
                <motion.div
                  key={dream.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{dream.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{dream.aiInsight}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">
                          {dream.mood}
                        </Badge>
                        {dream.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 ml-4">
                      {new Date(dream.date).toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Chat & Quick Actions */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* AI Chat Widget */}
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                {t('aiChat.title')}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {t('aiChat.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-gray-300">
                    "What does it mean when I dream about flying?"
                  </p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-gray-300">
                    Flying dreams often represent a desire for freedom...
                  </p>
                </div>
                <Button variant="gradient" className="w-full" onClick={handleStartChat}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t('aiChat.startChat')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="text-lg">{t('quickActions.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="glass" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                {t('quickActions.scheduleDream')}
              </Button>
              <Button variant="glass" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t('quickActions.viewInsights')}
              </Button>
              <Button variant="glass" className="w-full justify-start">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('quickActions.exploreSymbols')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 