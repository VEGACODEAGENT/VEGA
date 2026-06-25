'use client';

import { motion } from 'framer-motion';
import { Plane, Building2, Home, GraduationCap } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      title: 'Aviation',
      icon: Plane,
      description: 'Digital transformation solutions for airlines, training organizations, and operational departments.',
      services: ['Training Systems', 'Operations Dashboards', 'Documentation Management', 'Compliance Support'],
    },
    {
      title: 'Corporate Organizations',
      icon: Building2,
      description: 'Streamline internal operations and improve productivity.',
      services: ['Reporting Automation', 'Employee Portals', 'Workflow Optimization', 'Executive Dashboards'],
    },
    {
      title: 'Real Estate',
      icon: Home,
      description: 'Modern digital platforms for agencies and property developers.',
      services: ['Property Management Systems', 'Lead Generation Platforms', 'CRM Integration', 'Interactive Property Listings'],
    },
    {
      title: 'Education & Training',
      icon: GraduationCap,
      description: 'Scale learning experiences with AI-driven technology.',
      services: ['Learning Management Systems', 'Course Automation', 'Certification Tracking', 'Student Portals'],
    },
  ];

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Serve
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-dark/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.services.map((service) => (
                    <div key={service} className="flex items-center space-x-2 text-gray-300">
                      <span className="text-primary">◆</span>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
