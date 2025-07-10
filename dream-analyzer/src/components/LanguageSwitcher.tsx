'use client';

import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'tr' : 'en';

  return (
    <Link href={`/${otherLocale}`}>
      <Button 
        variant="glass" 
        size="sm" 
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 backdrop-blur-xl border-white/20 hover:border-white/30 transition-all duration-300"
      >
        <Globe className="w-4 h-4 mr-2" />
        {locale === 'en' ? 'TR' : 'EN'}
      </Button>
    </Link>
  );
} 