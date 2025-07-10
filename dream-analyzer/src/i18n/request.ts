import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'tr'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  // Provide fallback if requestLocale is undefined
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
}); 