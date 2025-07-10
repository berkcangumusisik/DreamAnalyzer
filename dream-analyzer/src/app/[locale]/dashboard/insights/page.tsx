'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Calendar, 
  Brain,
  Moon,
  Sparkles,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Clock,
  Heart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { useDreamStore } from '@/store/dreamStore';

// Mock data for charts
const dreamFrequencyData = [
  { month: 'Jul', dreams: 12, lucid: 3 },
  { month: 'Aug', dreams: 18, lucid: 5 },
  { month: 'Sep', dreams: 15, lucid: 4 },
  { month: 'Oct', dreams: 22, lucid: 7 },
  { month: 'Nov', dreams: 19, lucid: 6 },
  { month: 'Dec', dreams: 25, lucid: 8 },
  { month: 'Jan', dreams: 28, lucid: 10 }
];

const symbolData = [
  { name: 'Flying', value: 35, color: '#8b5cf6' },
  { name: 'Water', value: 28, color: '#06b6d4' },
  { name: 'Animals', value: 22, color: '#10b981' },
  { name: 'People', value: 45, color: '#f59e0b' },
  { name: 'Buildings', value: 18, color: '#ef4444' },
  { name: 'Nature', value: 32, color: '#84cc16' }
];

const moodTrendData = [
  { date: '1/1', positive: 7, neutral: 3, negative: 2, anxious: 1 },
  { date: '1/8', positive: 8, neutral: 4, negative: 1, anxious: 2 },
  { date: '1/15', positive: 6, neutral: 5, negative: 3, anxious: 1 },
  { date: '1/22', positive: 9, neutral: 3, negative: 1, anxious: 0 },
  { date: '1/29', positive: 10, neutral: 2, negative: 1, anxious: 1 }
];

const sleepQualityData = [
  { day: 'Mon', quality: 7.5, dreams: 3 },
  { day: 'Tue', quality: 8.2, dreams: 2 },
  { day: 'Wed', quality: 6.8, dreams: 4 },
  { day: 'Thu', quality: 8.5, dreams: 1 },
  { day: 'Fri', quality: 7.0, dreams: 3 },
  { day: 'Sat', quality: 8.8, dreams: 2 },
  { day: 'Sun', quality: 8.0, dreams: 3 }
];

const insightCards = [
  {
    title: 'Most Active Dream Period',
    value: '3:00 - 5:00 AM',
    description: 'Your REM sleep peaks during this time',
    icon: Clock,
    trend: '+15%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Dream Recall Rate',
    value: '78%',
    description: 'Above average dream memory',
    icon: Brain,
    trend: '+12%',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Lucid Dream Frequency',
    value: '35%',
    description: 'Excellent lucid dreaming ability',
    icon: Sparkles,
    trend: '+8%',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Overall Mood Score',
    value: '8.2/10',
    description: 'Positive dream emotions',
    icon: Heart,
    trend: '+0.5',
    color: 'from-red-500 to-pink-500'
  }
];

const patterns = [
  {
    title: 'Flying Dreams Correlation',
    description: 'Flying dreams occur 65% more frequently after stressful days',
    confidence: 'High',
    category: 'Behavioral'
  },
  {
    title: 'Water Symbol Pattern',
    description: 'Water appears in dreams during emotional processing periods',
    confidence: 'Medium',
    category: 'Symbolic'
  },
  {
    title: 'Sleep Quality Impact',
    description: 'Better sleep quality correlates with more vivid dream recall',
    confidence: 'High',
    category: 'Physiological'
  },
  {
    title: 'Recurring Nightmare Theme',
    description: 'Chase scenarios appear during decision-making periods',
    confidence: 'Medium',
    category: 'Psychological'
  }
];

export default function InsightsPage() {
  const t = useTranslations('dashboard');
  const { dreams, getDreamStats, getSymbolDistribution, getMoodTrends } = useDreamStore();

  // Calculate insights from real data
  const stats = getDreamStats();
  const symbolDistribution = getSymbolDistribution();
  const moodTrends = getMoodTrends();

  // Enhanced insight cards with real data
  const insightCards = [
    {
      title: 'Most Active Dream Period',
      value: '3:00 - 5:00 AM',
      description: 'Your REM sleep peaks during this time',
      icon: Clock,
      trend: '+15%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Dream Recall Rate',
      value: `${Math.round((stats.total / 30) * 100)}%`,
      description: 'Dream memory accuracy',
      icon: Brain,
      trend: '+12%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Lucid Dream Frequency',
      value: `${Math.round(stats.lucidPercentage)}%`,
      description: 'Lucid dreaming ability',
      icon: Sparkles,
      trend: '+8%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Overall Mood Score',
      value: `${stats.averageMood}/10`,
      description: 'Positive dream emotions',
      icon: Heart,
      trend: '+0.5',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Insights & Patterns</h1>
          <p className="text-gray-400 mt-1">AI-powered analysis of your dream patterns</p>
        </div>
        <div className="flex gap-3">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Activity className="w-3 h-3" />
            Last 6 months
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insightCards.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-glass border-white/10 hover:border-white/20 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{insight.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{insight.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                    <span className="text-xs text-green-400 mt-1 block">{insight.trend}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center`}>
                    <insight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dream Frequency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-glass border-white/10 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                Dream Frequency Trends
              </CardTitle>
              <CardDescription>Monthly dream recording patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dreamFrequencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="dreams" fill="#8b5cf6" name="Total Dreams" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="lucid" fill="#06b6d4" name="Lucid Dreams" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Symbol Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-glass border-white/10 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-400" />
                Dream Symbol Distribution
              </CardTitle>
              <CardDescription>Most common symbols in your dreams</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={symbolData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {symbolData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mood Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-glass border-white/10 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Mood Trends
              </CardTitle>
              <CardDescription>Weekly emotional patterns in dreams</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={moodTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="positive" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="negative" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="anxious" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sleep Quality Correlation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="bg-glass border-white/10 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-yellow-400" />
                Sleep Quality vs Dreams
              </CardTitle>
              <CardDescription>Correlation between sleep quality and dream frequency</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sleepQualityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="quality" stroke="#f59e0b" strokeWidth={3} name="Sleep Quality" />
                  <Line type="monotone" dataKey="dreams" stroke="#8b5cf6" strokeWidth={3} name="Dream Count" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* AI Pattern Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="bg-glass border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              AI-Discovered Patterns
            </CardTitle>
            <CardDescription>
              Intelligent insights based on your dream data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {patterns.map((pattern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-white">{pattern.title}</h4>
                    <div className="flex gap-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          pattern.confidence === 'High' 
                            ? 'border-green-500/30 text-green-400' 
                            : 'border-yellow-500/30 text-yellow-400'
                        }`}
                      >
                        {pattern.confidence}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {pattern.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{pattern.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 