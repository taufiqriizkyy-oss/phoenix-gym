'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RifdaFeature = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const achievements = [
    { title: 'Olympian Athlete', desc: 'Rio 2016', icon: '🏅' },
    { title: 'International Experience', desc: 'World Stage', icon: '🌍' },
    { title: 'National Champion', desc: 'Multiple Titles', icon: '🏆' },
    { title: 'Elite Background', desc: 'Highest Standards', icon: '⭐' }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-phoenix-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div {...fadeInLeft}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-phoenix-pink-200/20 to-phoenix-pink-400/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative">
              <img 
                src="/images/rifda-olympic.JPG" 
                alt="Rifda - Olympic Athlete"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-phoenix-pink-400 to-phoenix-pink-500 text-white px-8 py-4 rounded-xl shadow-lg">
                <span className="font-display text-2xl">Olympian Athlete</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div {...fadeInRight}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-phoenix-pink-500 text-sm font-semibold uppercase tracking-wider">
              Olympic-Level Inspiration
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight text-gray-900">
            Built with Experience from the{' '}
            <span className="text-phoenix-pink-500 italic">Highest Level</span>
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our academy's methodology is shaped by world-class experience. Rifda brings Olympic-level understanding to every aspect of our training system, ensuring that Phoenix students benefit from insights gained at the pinnacle of gymnastics competition.
          </p>

          {/* Achievement Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {achievements.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border-2 border-phoenix-pink-100 p-5 rounded-xl hover:border-phoenix-pink-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="font-display text-xl text-gray-900 mb-1">{stat.title}</div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-phoenix-pink-400 pl-6 py-2"
          >
            <p className="text-gray-600 italic leading-relaxed">
              "The first Indonesian gymnast to qualify for the Olympics, helping shape a modern gymnastics culture for the next generation."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RifdaFeature;
