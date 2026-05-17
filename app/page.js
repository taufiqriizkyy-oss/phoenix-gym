'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import RifdaFeature from '@/components/RifdaFeature';
import HowToJoin from '@/components/HowToJoin';
import Pricing from '@/components/Pricing';
import PaymentInfo from '@/components/PaymentInfo';
import RegistrationCTA from '@/components/RegistrationCTA';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { title: 'Positive Environment', desc: 'Nurturing Growth', icon: '🌱' },
            { title: 'Structured Training', desc: 'Progressive System', icon: '📊' },
            { title: 'Olympic-Level Standards', desc: 'World-Class Quality', icon: '🏅' },
            { title: 'Child Development Focus', desc: 'Holistic Approach', icon: '💫' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="text-center group card-glow p-6 rounded-xl hover:border-phoenix-500/40 transition-all"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-1 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Phoenix Exists */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-phoenix-dark-900/50 to-black" />
        
        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              Our Purpose
            </span>
          </div>

          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
            Movement <span className="text-gradient-phoenix italic">Shapes</span> Character
          </h2>
          
          <div className="space-y-4 text-base md:text-lg text-gray-400 leading-relaxed">
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
      </section>

      {/* Rifda Feature */}
      <RifdaFeature />

      {/* Coaching Moments */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900/30 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-3 text-white">
              Coaching that <span className="text-gradient-phoenix italic">Inspires</span>
            </h2>
            <p className="text-gray-400 text-lg">Encouragement, precision, and emotional support in every session</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                img: '/images/coach-moment-1.png', 
                title: 'Individual Attention', 
                desc: 'Every child receives personalized guidance and encouragement' 
              },
              { 
                img: '/images/coach-moment-2.png', 
                title: 'Building Confidence', 
                desc: 'Celebrating progress and fostering self-belief' 
              }
            ].map((moment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src={moment.img} 
                  alt={moment.title} 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2 text-white">{moment.title}</h3>
                    <p className="text-gray-300">{moment.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Phoenix Standards */}
      <section className="py-24 bg-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Standards
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-3 text-white">
              The Phoenix <span className="text-gradient-phoenix italic">Standard</span>
            </h2>
            <p className="text-gray-400 text-lg">Excellence in every detail</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: '👥',
                title: 'Small Class Ratio', 
                desc: 'Limited class sizes ensure every child receives proper attention and coaching quality'
              },
              { 
                icon: '📊',
                title: 'Structured Progression', 
                desc: 'Clear skill development pathways with measurable milestones and achievements'
              },
              { 
                icon: '💫',
                title: 'Positive Coaching', 
                desc: 'Encouraging, supportive approach that builds confidence while developing skills'
              },
              { 
                icon: '🏅',
                title: 'Olympic-Level Methodology', 
                desc: 'Training systems informed by world-class competitive experience and standards'
              },
              { 
                icon: '🛡️',
                title: 'Safety First', 
                desc: 'Professional equipment, proper progressions, and certified coaching protocols'
              },
              { 
                icon: '🌱',
                title: 'Character Development', 
                desc: 'Building discipline, resilience, teamwork, and self-confidence through movement'
              }
            ].map((standard, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card-glow p-6 rounded-2xl hover:border-phoenix-500/40 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{standard.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{standard.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Inside Phoenix Gallery */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900/30 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Environment
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-3 text-white">Inside Phoenix</h2>
            <p className="text-gray-400 text-lg">A premium environment for growth and discovery</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { img: '/images/gym-atmosphere-1.png', span: 'md:col-span-2', height: 'h-[350px]' },
              { img: '/images/teamwork.png', span: '', height: 'h-[300px]' },
              { img: '/images/happy-kids.png', span: '', height: 'h-[300px]' },
              { img: '/images/stretching.png', span: 'md:col-span-2', height: 'h-[350px]' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${item.span} overflow-hidden rounded-2xl group shadow-lg`}
              >
                <img 
                  src={item.img} 
                  alt="Phoenix Gymnastics" 
                  className={`w-full ${item.height} object-cover group-hover:scale-105 transition-transform duration-700`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Children in Action */}
      <section className="py-24 bg-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                In Action
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-3 text-white">
              Movement in <span className="text-gradient-phoenix italic">Motion</span>
            </h2>
            <p className="text-gray-400 text-lg">Confidence, elegance, and progression</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              '/images/kids-action-1.png',
              '/images/kids-action-2.png',
              '/images/kids-action-3.png'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img 
                  src={img} 
                  alt="Phoenix Student" 
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              '/images/focus-training.png',
              '/images/chalk-moment.png'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img 
                  src={img} 
                  alt="Phoenix Training" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Parent Trust Section */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900/30 to-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/parent-watching.png" 
              alt="Parent watching child" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Parent Testimonials
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">
              Trusted by <span className="text-gradient-phoenix italic">Parents</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  quote: "Phoenix has transformed my daughter's confidence. She's more disciplined, more focused, and genuinely excited to train every week.",
                  parent: "Sarah L.",
                  child: "Age 7"
                },
                {
                  quote: "The coaching quality here is exceptional. It's not just about gymnastics—it's about building character and resilience.",
                  parent: "Michael T.",
                  child: "Age 9"
                },
                {
                  quote: "I love how the coaches genuinely care about each child's development. The environment feels safe, premium, and inspiring.",
                  parent: "Priya K.",
                  child: "Age 6"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-glow p-6 rounded-xl border-l-4 border-phoenix-500"
                >
                  <p className="text-gray-300 italic mb-3 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="text-phoenix-500 font-semibold">{testimonial.parent}</div>
                    <div className="text-gray-500">{testimonial.child}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/achievement.png" 
            alt="Achievement" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white">
            Every Milestone <span className="text-gradient-phoenix italic">Matters</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            From first cartwheels to competition podiums, we celebrate every step of the journey. Progress isn't just measured in skills—it's seen in growing confidence, strengthening discipline, and developing character.
          </p>
          <div className="inline-block border-4 border-phoenix-500 px-10 py-5 rounded-2xl shadow-glow">
            <span className="font-heading text-3xl text-phoenix-500 font-bold">Growth is the Achievement</span>
          </div>
        </motion.div>
      </section>

      {/* Team Coach Section */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900/30 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-3 text-white">
              Our Coaching <span className="text-gradient-phoenix italic">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collaborative team of dedicated professionals aligned with Olympic-standard methodology
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <img 
              src="/images/team-coaches.png" 
              alt="Phoenix Coaching Team" 
              className="w-full rounded-2xl shadow-2xl mb-8"
            />
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: 'Certified Professionals', desc: 'Qualified and experienced coaches', icon: '🎓' },
                { title: 'Child Development Focus', desc: 'Specialized in youth training', icon: '👶' },
                { title: 'Continuous Training', desc: 'Regular skill development', icon: '📚' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-glow p-6 rounded-xl hover:border-phoenix-500/40 transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW OPERATIONAL SECTIONS */}
      <HowToJoin />
      <Pricing />
      <PaymentInfo />
      <RegistrationCTA />
    </div>
  );
}