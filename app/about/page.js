'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RifdaFeature from '@/components/RifdaFeature';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-phoenix-pink-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
            <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
              About Phoenix
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-gray-900">
            Building a <span className="italic text-phoenix-pink-500">Movement</span> Legacy
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Phoenix Gymnastics Academy is more than a training facility—it's a transformative environment where children discover their strength, build confidence, and develop character through the art of movement.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/gym-atmosphere-1.png" 
              alt="Phoenix Academy"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-phoenix-pink-100">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">
              Where Excellence Meets <span className="italic text-phoenix-pink-500">Passion</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Phoenix Gymnastics Academy was born from a vision to create Indonesia's premier child-centered gymnastics program—one that combines Olympic-level methodology with a nurturing, confidence-building environment.
              </p>
              <p>
                We believe that every child has untapped potential waiting to be discovered. Through structured progression, positive coaching, and a commitment to safety, we help children unlock their physical and mental capabilities.
              </p>
              <p className="text-gray-900 font-medium">
                Our mission is simple: to build stronger, more confident children who carry the lessons of discipline, resilience, and teamwork throughout their lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              What We <span className="italic text-phoenix-pink-500">Stand For</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Phoenix
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌟',
                title: 'Excellence',
                desc: 'We maintain Olympic-level standards in every aspect of our training, from equipment to coaching methodology.'
              },
              {
                icon: '❤️',
                title: 'Compassion',
                desc: 'Every child is unique. We celebrate individual progress and create a supportive environment for all.'
              },
              {
                icon: '🎯',
                title: 'Discipline',
                desc: 'We teach the value of consistent effort, proper technique, and focused practice in achieving goals.'
              },
              {
                icon: '🛡️',
                title: 'Safety',
                desc: 'Child safety is our top priority. We use professional equipment and certified coaching protocols.'
              },
              {
                icon: '🌱',
                title: 'Growth',
                desc: 'We focus on long-term development—building skills, confidence, and character that last a lifetime.'
              },
              {
                icon: '🤝',
                title: 'Community',
                desc: 'Phoenix is a family. We build strong relationships between coaches, students, and parents.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-phoenix-pink-100 hover:border-phoenix-pink-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-2xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rifda Feature */}
      <RifdaFeature />

      {/* Our Facility */}
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Our Facility
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              A Premium <span className="italic text-phoenix-pink-500">Environment</span>
            </h2>
            <p className="text-gray-600 text-lg">
              State-of-the-art equipment in a safe, inspiring space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🏋️',
                title: 'Professional Equipment',
                desc: 'Competition-grade apparatus and safety systems'
              },
              {
                icon: '🏛️',
                title: 'Spacious Training Area',
                desc: 'Purpose-built facility designed for optimal learning'
              },
              {
                icon: '👀',
                title: 'Parent Viewing Area',
                desc: 'Comfortable spaces for parents to watch their children train'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg border-2 border-phoenix-pink-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              '/images/teamwork.png',
              '/images/stretching.png'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-xl"
              >
                <img 
                  src={img} 
                  alt="Phoenix Facility" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
