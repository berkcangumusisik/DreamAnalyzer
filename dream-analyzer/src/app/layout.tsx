import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DreamAnalyzer - AI-Powered Dream Analysis Platform",
  description: "Discover the hidden messages in your dreams with AI-powered analysis. Understand your subconscious mind and unlock personal insights.",
  keywords: "dream analysis, AI dreams, subconscious mind, dream interpretation, psychology, mental wellness",
  authors: [{ name: "DreamAnalyzer Team" }],
  openGraph: {
    title: "DreamAnalyzer - AI-Powered Dream Analysis",
    description: "Discover the hidden messages in your dreams with AI-powered analysis",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamAnalyzer - AI-Powered Dream Analysis",
    description: "Discover the hidden messages in your dreams with AI-powered analysis",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-cosmic min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
