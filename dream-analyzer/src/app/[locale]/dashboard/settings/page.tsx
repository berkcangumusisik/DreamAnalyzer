'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon,
  Palette,
  Brain,
  Save,
  Camera,
  Eye,
  EyeOff,
  Trash2,
  Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SettingsPage() {
  const t = useTranslations('dashboard');
  const [settings, setSettings] = useState({
    profile: {
      name: 'Berk Kara',
      email: 'berk@dreamanalyzer.com',
      timezone: 'Europe/Istanbul',
      language: 'tr'
    },
    notifications: {
      dreamReminders: true,
      aiInsights: true,
      weeklyReports: true,
      emailUpdates: false
    },
    privacy: {
      shareData: false,
      analytics: true,
      aiTraining: true
    },
    aiPersonality: {
      style: 'friendly',
      detailLevel: 'comprehensive',
      focusArea: 'psychological'
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const settingSections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      description: 'Manage your personal information',
      icon: User,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Configure your notification preferences',
      icon: Bell,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'privacy',
      title: 'Privacy & Data',
      description: 'Control your privacy and data usage',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai',
      title: 'AI Personality',
      description: 'Customize your AI dream interpreter',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Settings</h1>
          <p className="text-gray-400 mt-1">Customize your DreamAnalyzer experience</p>
        </div>
        <Button variant="gradient" className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save All Changes
        </Button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Profile Picture */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BK</span>
                </div>
                <div>
                  <Button variant="ghost" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG max 5MB</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={settings.profile.name}
                    onChange={(e) => handleSettingChange('profile', 'name', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={settings.profile.email}
                    onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value="••••••••"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 pr-10"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2">
                    Change Password
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
                    <select
                      value={settings.profile.language}
                      onChange={(e) => handleSettingChange('profile', 'language', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                    >
                      <option value="en">English</option>
                      <option value="tr">Türkçe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Timezone</label>
                    <select
                      value={settings.profile.timezone}
                      onChange={(e) => handleSettingChange('profile', 'timezone', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                    >
                      <option value="Europe/Istanbul">Istanbul (GMT+3)</option>
                      <option value="America/New_York">New York (GMT-5)</option>
                      <option value="Europe/London">London (GMT+0)</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Bell className="w-4 h-4 text-white" />
                </div>
                Notifications
              </CardTitle>
              <CardDescription>Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {key === 'dreamReminders' && 'Daily reminders to record your dreams'}
                      {key === 'aiInsights' && 'New AI insights about your dreams'}
                      {key === 'weeklyReports' && 'Weekly dream pattern summaries'}
                      {key === 'emailUpdates' && 'Product updates and tips via email'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value as boolean}
                      onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                Privacy & Data
              </CardTitle>
              <CardDescription>Control your privacy and data usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.privacy).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {key === 'shareData' && 'Share anonymized data for research'}
                      {key === 'analytics' && 'Help improve the app with usage analytics'}
                      {key === 'aiTraining' && 'Use your data to improve AI models'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value as boolean}
                      onChange={(e) => handleSettingChange('privacy', key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-medium text-white mb-3">Data Management</h4>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" size="sm" className="justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Export My Data
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start text-red-400 hover:text-red-300">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete My Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Personality Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                AI Personality
              </CardTitle>
              <CardDescription>Customize your AI dream interpreter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Communication Style</label>
                <select
                  value={settings.aiPersonality.style}
                  onChange={(e) => handleSettingChange('aiPersonality', 'style', e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                >
                  <option value="friendly">Friendly & Warm</option>
                  <option value="professional">Professional & Clinical</option>
                  <option value="mystical">Mystical & Spiritual</option>
                  <option value="scientific">Scientific & Analytical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Detail Level</label>
                <select
                  value={settings.aiPersonality.detailLevel}
                  onChange={(e) => handleSettingChange('aiPersonality', 'detailLevel', e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                >
                  <option value="brief">Brief & Concise</option>
                  <option value="moderate">Moderate Detail</option>
                  <option value="comprehensive">Comprehensive Analysis</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Focus Area</label>
                <select
                  value={settings.aiPersonality.focusArea}
                  onChange={(e) => handleSettingChange('aiPersonality', 'focusArea', e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                >
                  <option value="psychological">Psychological Insights</option>
                  <option value="symbolic">Symbolic Meanings</option>
                  <option value="emotional">Emotional Processing</option>
                  <option value="spiritual">Spiritual Guidance</option>
                </select>
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="text-sm font-medium text-purple-300 mb-1">AI Preview</h4>
                <p className="text-xs text-purple-200">
                  "Hello! I'm your {settings.aiPersonality.style} AI dream interpreter. I'll provide {settings.aiPersonality.detailLevel} analysis focusing on {settings.aiPersonality.focusArea}."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Theme Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="bg-glass border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              Appearance
            </CardTitle>
            <CardDescription>Customize the look and feel of your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Cosmic Dark', colors: ['#0a0a0a', '#1a0a3a', '#2a1a4a'] },
                { name: 'Deep Ocean', colors: ['#0c1445', '#1e3a8a', '#3b82f6'] },
                { name: 'Forest Night', colors: ['#0f172a', '#064e3b', '#059669'] },
                { name: 'Sunset', colors: ['#451a03', '#ea580c', '#f59e0b'] }
              ].map((theme, index) => (
                <button
                  key={theme.name}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200 group"
                >
                  <div className="flex space-x-1 mb-2">
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-white">{theme.name}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 