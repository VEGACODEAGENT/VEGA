'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

export default function WhyVegaai() {
  const reasons = [
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description: 'We don\'t build websites. We build business systems.',
    },
    {
      icon: Zap,
      title: 'AI-First Approach',
      description: 'Every solution is designed with automation and scalability in mind.',
    },
    {
      icon: Shield,
      title: 'Enterprise Mindset',
      description: 'Built for organizations that require structure, security, and performance.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Scalability',
      description: 'Solutions designed to grow alongside your business.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Organizations Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              VEGAAI
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-dark border border-primary/10 rounded-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
