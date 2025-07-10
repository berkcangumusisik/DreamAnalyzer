'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Heart, 
  PenTool, 
  Users,
  Star,
  Check,
  ChevronDown,
  Moon,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';

export default function HomePage() {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: t('features.aiAnalysis.title'),
      description: t('features.aiAnalysis.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: t('features.dreamDictionary.title'),
      description: t('features.dreamDictionary.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: t('features.patternRecognition.title'),
      description: t('features.patternRecognition.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: t('features.moodCorrelation.title'),
      description: t('features.moodCorrelation.description'),
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: PenTool,
      title: t('features.journaling.title'),
      description: t('features.journaling.description'),
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: t('features.expertConsultation.title'),
      description: t('features.expertConsultation.description'),
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const steps = [
    {
      icon: PenTool,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      step: '01'
    },
    {
      icon: Brain,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      step: '02'
    },
    {
      icon: Sparkles,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      step: '03'
    },
    {
      icon: TrendingUp,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      step: '04'
    }
  ];

  const pricingPlans = [
    {
      title: t('pricing.free.title'),
      price: t('pricing.free.price'),
      period: t('pricing.free.period'),
      features: t.raw('pricing.free.features'),
      cta: t('pricing.free.cta'),
      popular: false
    },
    {
      title: t('pricing.premium.title'),
      price: t('pricing.premium.price'),
      period: t('pricing.premium.period'),
      features: t.raw('pricing.premium.features'),
      cta: t('pricing.premium.cta'),
      popular: true
    },
    {
      title: t('pricing.therapy.title'),
      price: t('pricing.therapy.price'),
      period: t('pricing.therapy.period'),
      features: t.raw('pricing.therapy.features'),
      cta: t('pricing.therapy.cta'),
      popular: false
    }
  ];

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      rating: 5
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      rating: 5
    },
    {
      text: t('testimonials.testimonial3.text'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      rating: 5
    }
  ];

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-500/25 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 rounded-full blur-3xl animate-float-delayed-2"></div>
          
          {/* Additional smaller orbs for depth */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-500/15 to-purple-500/10 rounded-full blur-2xl animate-float opacity-70"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-rose-500/15 to-orange-500/10 rounded-full blur-2xl animate-float-delayed opacity-60"></div>
          
          {/* Subtle particle effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        </div>

        {/* Hero content with enhanced animations */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Enhanced badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="gradient" className="mb-8 text-sm font-semibold px-6 py-3 shadow-2xl shadow-purple-500/25">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                AI-Powered Dream Analysis Platform
              </Badge>
            </motion.div>
            
                         {/* Enhanced title with letter animation */}
             <motion.h1 
               className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 text-gradient leading-tight px-4"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
             >
               {t('hero.title')}
             </motion.h1>
             
             {/* Enhanced subtitle */}
             <motion.p 
               className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
             >
               {t('hero.subtitle')}
             </motion.p>
            
                         {/* Enhanced CTA buttons */}
             <motion.div 
               className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 md:mb-16 px-4"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
             >
               <Button 
                 size="lg" 
                 variant="gradient" 
                 className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 animate-glow shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group"
               >
                 <Moon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                 {t('hero.cta')}
               </Button>
               <Button 
                 size="lg" 
                 variant="glass" 
                 className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 backdrop-blur-xl border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
               >
                 <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                 {t('hero.ctaSecondary')}
               </Button>
             </motion.div>

                         {/* Social proof / stats */}
             <motion.div
               className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-gray-300 px-4"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
             >
               <div className="flex items-center gap-3">
                 <div className="flex -space-x-1 sm:-space-x-2">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900"></div>
                   ))}
                 </div>
                 <span className="text-sm sm:text-base">1000+ kullanıcı</span>
               </div>
               <div className="flex items-center gap-2 sm:gap-3">
                 <div className="flex">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                   ))}
                 </div>
                 <span className="text-sm sm:text-base">4.9/5 değerlendirme</span>
               </div>
             </motion.div>
          </motion.div>
        </div>

        {/* Language switcher */}
        <LanguageSwitcher />
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-glass border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge variant="gradient" className="text-sm font-semibold px-4 py-2 shadow-lg">
                      <Sparkles className="w-4 h-4 mr-1" />
                      {t('pricing.premium.popular')}
                    </Badge>
                  </div>
                )}
                <Card className={`
                  bg-gradient-to-br from-white/5 to-white/[0.02] 
                  border backdrop-blur-xl h-full transition-all duration-300
                  group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20
                  flex flex-col
                  ${plan.popular 
                    ? 'border-gradient-to-r from-purple-500/50 to-pink-500/50 shadow-lg shadow-purple-500/25' 
                    : 'border-white/10 hover:border-white/20'
                  }
                `}>
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-gradient' : ''}`}>
                      {plan.title}
                    </CardTitle>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-gradient' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                    {plan.popular && (
                      <div className="text-sm text-purple-300 font-medium">
                        En çok tercih edilen plan
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="px-6 pb-8 flex flex-col flex-grow">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`mt-0.5 rounded-full p-1 ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-green-500'}`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button 
                        variant={plan.popular ? "gradient" : "glass"} 
                        className={`w-full transition-all duration-300 ${
                          plan.popular 
                            ? 'shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40' 
                            : 'hover:bg-white/10'
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-glass border-white/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-glass border-white/20">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">DreamAnalyzer</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('footer.links.features')}</li>
                <li>{t('footer.links.pricing')}</li>
                <li>{t('footer.links.about')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('footer.privacy')}</li>
                <li>{t('footer.terms')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 