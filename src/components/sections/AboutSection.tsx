'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Building The Future Of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Intelligent Business
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-8">
            VEGAAI was founded to bridge the gap between traditional business operations and next-generation artificial intelligence.
          </p>

          <div className="space-y-6 text-left">
            <div className="p-6 bg-dark border border-primary/10 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-secondary">Our Mission</h3>
              <p className="text-gray-400">
                Help organizations operate smarter, faster, and more efficiently through intelligent technology.
              </p>
            </div>

            <div className="p-6 bg-dark border border-primary/10 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-secondary">What We Do</h3>
              <p className="text-gray-400">
                We combine strategic thinking, automation, design, and data intelligence to create solutions that deliver measurable business value.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
