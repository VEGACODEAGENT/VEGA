'use client';

import { motion } from 'framer-motion';

export default function TrustBar() {
  const items = [
    'AI-Powered Automation',
    'Enterprise Web Development',
    'Business Intelligence Dashboards',
    'Digital Transformation',
    'Training Systems',
    'Compliance-Oriented Solutions',
  ];

  return (
    <section className="py-12 bg-dark/50 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-400 text-sm font-semibold mb-8 uppercase tracking-widest">
          Trusted Frameworks & Professional Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-gray-300"
            >
              <span className="text-secondary text-lg">✔</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
