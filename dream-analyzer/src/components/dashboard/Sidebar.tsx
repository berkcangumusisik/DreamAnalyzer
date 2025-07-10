'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  History, 
  TrendingUp, 
  Settings, 
  CreditCard,
  Menu,
  X,
  Brain,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navigationItems = [
  { 
    key: 'dashboard', 
    icon: LayoutDashboard, 
    href: '/dashboard' 
  },
  { 
    key: 'journal', 
    icon: BookOpen, 
    href: '/dashboard/journal' 
  },
  { 
    key: 'chat', 
    icon: MessageSquare, 
    href: '/dashboard/chat' 
  },
  { 
    key: 'history', 
    icon: History, 
    href: '/dashboard/history' 
  },
  { 
    key: 'insights', 
    icon: TrendingUp, 
    href: '/dashboard/insights' 
  },
  { 
    key: 'settings', 
    icon: Settings, 
    href: '/dashboard/settings' 
  },
  { 
    key: 'subscription', 
    icon: CreditCard, 
    href: '/dashboard/subscription' 
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-glass border-white/20"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-glass backdrop-blur-xl border-r border-white/10 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link href={`/${locale}/dashboard`} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">DreamAnalyzer</h1>
                <p className="text-xs text-gray-400">AI Dream Insights</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === `/${locale}${item.href}` || 
                             (item.href === '/dashboard' && pathname === `/${locale}/dashboard`);
              
              return (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} />
                    <span className="font-medium">
                      {t(`navigation.${item.key}`)}
                    </span>
                    {isActive && (
                      <Sparkles className="w-4 h-4 text-purple-400 ml-auto" />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">BK</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Berk Kara</p>
                <p className="text-xs text-gray-400 truncate">Premium User</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} 