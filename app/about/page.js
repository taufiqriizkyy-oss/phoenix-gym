'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-black pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              About Phoenix
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-white">
            Building a <span className="text-gradient-phoenix italic">Movement</span> Legacy
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Phoenix Gymnastics Academy is more than a training facility—it's a transformative environment where children discover their strength, build confidence, and develop character through the art of movement.
          </p>
        </motion.div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
                <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
                Why Phoenix <span className="text-gradient-phoenix italic">Exists</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                In a world where children spend more time sitting than moving, Phoenix Gymnastics Academy exists to restore the fundamental joy and necessity of physical development.
              </p>
              <p>
                We believe movement is more than exercise—it's the foundation for confidence, discipline, and resilience. Through structured gymnastics training, children discover their capabilities, push their boundaries, and build character that lasts a lifetime.
              </p>
              <p className="text-white font-semibold text-xl pt-4">
                Every child deserves an environment where they can grow stronger, both physically and mentally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
              What We <span className="text-gradient-phoenix italic">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excellence',
                icon: '🏆',
                desc: 'We maintain Olympic-level standards in coaching methodology, safety protocols, and training progression.'
              },
              {
                title: 'Character',
                icon: '💫',
                desc: 'Beyond physical skills, we develop discipline, resilience, confidence, and teamwork in every student.'
              },
              {
                title: 'Positivity',
                icon: '✨',
                desc: 'We create an encouraging environment where mistakes are learning opportunities and progress is celebrated.'
              },
              {
                title: 'Safety',
                icon: '🛡️',
                desc: 'Professional equipment, proper progressions, and certified coaching ensure every child trains safely.'
              },
              {
                title: 'Inclusivity',
                icon: '🤝',
                desc: 'Children of all abilities and backgrounds are welcomed, supported, and given opportunities to succeed.'
              },
              {
                title: 'Growth',
                icon: '🌱',
                desc: 'We focus on individual progress and development rather than comparison or competition with others.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-glow p-8 rounded-2xl hover:border-phoenix-500/40 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Facility */}
      <section className="py-24 bg-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Facility
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
              Premium <span className="text-gradient-phoenix italic">Environment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="card-glow p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <span className="text-phoenix-500">🏋️</span> Professional Equipment
                </h3>
                <p className="text-gray-400">
                  Competition-grade apparatus including vault table, uneven bars, balance beam, floor exercise area, and training aids.
                </p>
              </div>

              <div className="card-glow p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <span className="text-phoenix-500">🛡️</span> Safety Systems
                </h3>
                <p className="text-gray-400">
                  Professional-grade crash mats, foam pits, spotting equipment, and padded surfaces ensure safe skill development.
                </p>
              </div>

              <div className="card-glow p-6 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <span className="text-phoenix-500">🌡️</span> Climate Control
                </h3>
                <p className="text-gray-400">
                  Air-conditioned training environment maintains optimal temperature for comfort and performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/gym-atmosphere-1.png" 
                alt="Phoenix Facility" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                The Phoenix Difference
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
              What Makes Us <span className="text-gradient-phoenix italic">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Olympic-Level Methodology',
                desc: 'Training systems informed by world-class competitive experience from Indonesia\'s first Olympic gymnast.',
                icon: '🥇'
              },
              {
                title: 'Small Class Ratios',
                desc: 'Limited class sizes ensure every child receives proper attention and personalized coaching.',
                icon: '👥'
              },
              {
                title: 'Structured Progression',
                desc: 'Clear skill development pathways with measurable milestones and regular assessments.',
                icon: '📊'
              },
              {
                title: 'Character Focus',
                desc: 'Building confidence, discipline, resilience, and teamwork alongside physical skills.',
                icon: '💪'
              },
              {
                title: 'Positive Coaching',
                desc: 'Encouraging, supportive approach that celebrates progress and fosters self-belief.',
                icon: '✨'
              },
              {
                title: 'Premium Environment',
                desc: 'Professional equipment, climate-controlled facility, and safety-first protocols.',
                icon: '🏆'
              }
            ].map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-glow p-6 rounded-xl hover:border-phoenix-500/40 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {diff.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{diff.title}</h3>
                <p className="text-gray-400">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}