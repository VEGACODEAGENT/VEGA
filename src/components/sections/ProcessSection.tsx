'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding business objectives, workflows, and operational challenges.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Designing a roadmap aligned with business goals.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building intelligent digital solutions using modern technologies.',
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'Launching systems with testing, optimization, and quality assurance.',
    },
    {
      number: '05',
      title: 'Growth',
      description: 'Continuous improvement, analytics, and automation expansion.',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Process
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent mt-2" />
                )}
              </div>

              <div className="pt-2 pb-8 flex-1">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
