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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div {...fadeInLeft}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-phoenix-500/20 to-phoenix-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-xl" />
            <div className="relative">
              <img 
                src="/images/rifda-olympic.JPG" 
                alt="Rifda - Olympic Athlete"
                className="w-full rounded-2xl shadow-2xl border-2 border-phoenix-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-phoenix-500 to-phoenix-600 text-white px-8 py-4 rounded-xl shadow-glow">
                <span className="font-heading text-2xl font-bold">Olympian Athlete</span>
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
            className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20"
          >
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              Olympic-Level Inspiration
            </span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Built with Experience from the{' '}
            <span className="text-gradient-phoenix italic">Highest Level</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
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
                className="group card-glow p-5 rounded-xl hover:border-phoenix-500/40 transition-all duration-300"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="font-display text-xl text-white mb-1 font-bold">{stat.title}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-phoenix-500 pl-6 py-2 bg-phoenix-500/5 rounded-r-lg"
          >
            <p className="text-gray-400 italic leading-relaxed">
              "The first Indonesian gymnast to qualify for the Olympics, helping shape a modern gymnastics culture for the next generation."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RifdaFeature;