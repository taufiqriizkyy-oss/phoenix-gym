'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RifdaFeature from '@/components/RifdaFeature';

export default function CoachesPage() {
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
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
            <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-gray-900">
            Meet Our <span className="italic text-phoenix-pink-500">Coaches</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A dedicated team of professionals united by passion for child development and Olympic-level excellence.
          </p>
        </motion.div>
      </section>

      {/* Rifda Feature */}
      <RifdaFeature />

      {/* Coaching Philosophy */}
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
            <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
              Our Philosophy
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl mb-8 text-gray-900">
            Coaching with <span className="italic text-phoenix-pink-500">Heart</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Our coaching approach is built on the belief that every child is unique and capable of extraordinary growth. We combine technical excellence with emotional intelligence, creating an environment where children feel safe to take risks, make mistakes, and celebrate victories.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Individual Focus',
                desc: 'Every child receives personalized attention and coaching tailored to their needs'
              },
              {
                icon: '💪',
                title: 'Positive Reinforcement',
                desc: 'We celebrate effort and progress, building confidence through encouragement'
              },
              {
                icon: '🌟',
                title: 'Excellence Standards',
                desc: 'Olympic-level methodology adapted for each child\'s developmental stage'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-phoenix-pink-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Image */}
      <section className="py-32 bg-gradient-to-b from-phoenix-pink-50 to-white">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-phoenix-pink-100">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                The Phoenix Team
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              Professional <span className="italic text-phoenix-pink-500">Coaching Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our coaches bring diverse backgrounds, extensive training, and a shared commitment to nurturing young athletes
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <img 
              src="/images/team-coaches.png" 
              alt="Phoenix Coaching Team" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              '/images/coach-moment-1.png',
              '/images/coach-moment-2.png'
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
                  alt="Coaching Moment" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Qualifications */}
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Qualifications
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              Trained <span className="italic text-phoenix-pink-500">Professionals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Certified Coaches',
                desc: 'National and international gymnastics coaching certifications'
              },
              {
                icon: '🏥',
                title: 'First Aid Trained',
                desc: 'CPR and emergency response certified staff'
              },
              {
                icon: '👶',
                title: 'Child Development',
                desc: 'Specialized training in youth psychology and development'
              },
              {
                icon: '📚',
                title: 'Continuous Learning',
                desc: 'Regular workshops and skill development programs'
              },
              {
                icon: '🔒',
                title: 'Background Checked',
                desc: 'Comprehensive screening for child safety'
              },
              {
                icon: '🏅',
                title: 'Competition Experience',
                desc: 'Former athletes with competitive backgrounds'
              },
              {
                icon: '🎯',
                title: 'Specialized Skills',
                desc: 'Expertise across all gymnastics apparatus'
              },
              {
                icon: '❤️',
                title: 'Passion-Driven',
                desc: 'Genuine love for working with children'
              }
            ].map((qual, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-phoenix-pink-100 hover:border-phoenix-pink-300 text-center"
              >
                <div className="text-4xl mb-3">{qual.icon}</div>
                <h3 className="font-display text-lg mb-2 text-gray-900">{qual.title}</h3>
                <p className="text-gray-600 text-sm">{qual.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Makes Our Team Special */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/trust-moment.png" 
              alt="Coach and Student" 
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
                What Makes Us Different
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">
              More Than <span className="italic text-phoenix-pink-500">Just Coaches</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our coaching team doesn't just teach gymnastics—they mentor, inspire, and support each child's holistic development. They understand that confidence built in the gym translates to success in school and life.
              </p>
              <p>
                Every coach at Phoenix is carefully selected not just for their technical expertise, but for their ability to connect with children, communicate with parents, and create a positive, empowering environment.
              </p>
              <p className="text-gray-900 font-medium">
                When you join Phoenix, you're not just enrolling in a program—you're becoming part of a family led by coaches who genuinely care about your child's growth and success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
