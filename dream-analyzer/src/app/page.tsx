import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export default async function RootPage() {
  console.log('Root page accessed');
  try {
    const locale = await getLocale();
    console.log('Detected locale:', locale);
    redirect(`/${locale}`);
  } catch (error) {
    console.error('Error in root page:', error);
    // Fallback redirect
    redirect('/en');
  }
}
