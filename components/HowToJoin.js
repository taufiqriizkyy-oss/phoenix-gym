'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HowToJoin = () => {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via Instagram DM or WhatsApp to express your interest',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Schedule Trial Class',
      description: 'Book a free trial class at your preferred time',
      icon: '📅'
    },
    {
      number: '03',
      title: 'Parent Discussion',
      description: 'Follow-up consultation to discuss your child\'s goals and needs',
      icon: '👥'
    },
    {
      number: '04',
      title: 'Choose Schedule',
      description: 'Select your preferred training days from available options',
      icon: '🗓️'
    },
    {
      number: '05',
      title: 'Complete Registration',
      description: 'Finalize payment and registration to secure your spot',
      icon: '✅'
    },
    {
      number: '06',
      title: 'Start Training',
      description: 'Your gymnast begins their Phoenix journey!',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-phoenix-dark-900 to-black relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phoenix-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              Enrollment Process
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
            How to <span className="text-gradient-phoenix">Join Phoenix</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your journey to Olympic-inspired gymnastics training begins here
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glow p-8 rounded-2xl group hover:border-phoenix-500/40 transition-all duration-300"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="font-heading text-5xl font-bold text-phoenix-500/20 mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
