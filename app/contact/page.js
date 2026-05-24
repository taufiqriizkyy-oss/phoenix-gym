'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProgramsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const programs = [
    {
      title: 'Recreational Gymnastics',
      age: '5-12 years',
      level: 'Beginner to Intermediate',
      description: 'Our flagship program focuses on fun, fitness, and fundamental gymnastics skills in a positive environment.',
      features: [
        'Small class sizes (max 8 students)',
        'Structured skill progression',
        'Confidence building focus',
        'Regular skill assessments',
        'Parent viewing sessions'
      ],
      schedule: '2-3 sessions per week',
      color: 'from-phoenix-500/20 to-phoenix-600/20'
    },
    {
      title: 'Competitive Training',
      age: '7-16 years',
      level: 'Intermediate to Advanced',
      description: 'For dedicated athletes ready to take their skills to competition level with intensive training and personalized coaching.',
      features: [
        'Advanced technique training',
        'Competition preparation',
        'Strength and conditioning',
        'Mental performance coaching',
        'Team building activities'
      ],
      schedule: '4-6 sessions per week',
      color: 'from-phoenix-600/20 to-phoenix-700/20'
    },
    {
      title: 'Private Coaching',
      age: 'All ages',
      level: 'All levels',
      description: 'One-on-one personalized training sessions designed to accelerate skill development and address specific goals.',
      features: [
        'Individualized attention',
        'Customized training plans',
        'Flexible scheduling',
        'Rapid skill progression',
        'Goal-oriented approach'
      ],
      schedule: 'Flexible by appointment',
      color: 'from-phoenix-700/20 to-phoenix-800/20'
    },
    {
      title: 'Pre-School Movement',
      age: '3-5 years',
      level: 'Beginner',
      description: 'Introduction to movement, coordination, and basic gymnastics through play-based learning for our youngest athletes.',
      features: [
        'Play-based learning',
        'Motor skill development',
        'Social interaction',
        'Confidence building',
        'Parent participation options'
      ],
      schedule: '1-2 sessions per week',
      color: 'from-phoenix-400/20 to-phoenix-500/20'
    }
  ];

  return (
    <div className="bg-black pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              Our Programs
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-white">
            Find Your Perfect <span className="text-gradient-phoenix italic">Path</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            From first cartwheels to competitive excellence, we offer programs tailored to every child's journey and goals.
          </p>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-phoenix-dark-900 to-black rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 overflow-hidden border border-phoenix-500/20 hover:border-phoenix-500/40"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-heading text-3xl font-bold mb-3 text-white group-hover:text-phoenix-500 transition-colors">
                      {program.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="text-phoenix-500">👶</span> {program.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-phoenix-500">📊</span> {program.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-display font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-phoenix-500">✨</span> Program Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-phoenix-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-phoenix-500/20">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold text-white">Schedule:</span> {program.schedule}
                      </div>
                      <Link
                        href="/contact"
                        className="px-6 py-2 bg-phoenix-500/20 border border-phoenix-500/30 text-phoenix-500 rounded-lg hover:bg-phoenix-500 hover:text-white transition-all font-display font-bold text-sm uppercase"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression System */}
      <section className="py-24 bg-gradient-to-b from-black via-phoenix-dark-900 to-black">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                Skill Development
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-white">
              Structured <span className="text-gradient-phoenix italic">Progression</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Clear pathways from beginner to advanced with measurable milestones
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                level: 'Foundation',
                icon: '🌱',
                skills: ['Basic positions', 'Body awareness', 'Coordination', 'Flexibility'],
                color: 'bg-phoenix-500/10 border-phoenix-500/30'
              },
              {
                level: 'Development',
                icon: '🌿',
                skills: ['Forward/backward rolls', 'Handstands', 'Cartwheels', 'Basic jumps'],
                color: 'bg-phoenix-600/10 border-phoenix-600/30'
              },
              {
                level: 'Intermediate',
                icon: '🌳',
                skills: ['Round-offs', 'Back walkovers', 'Beam work', 'Bar skills'],
                color: 'bg-phoenix-700/10 border-phoenix-700/30'
              },
              {
                level: 'Advanced',
                icon: '🏆',
                skills: ['Aerials', 'Back handsprings', 'Complex routines', 'Competition prep'],
                color: 'bg-phoenix-500/20 border-phoenix-500/40'
              }
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${stage.color} border-2 p-6 rounded-2xl text-center`}
              >
                <div className="text-5xl mb-4">{stage.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">{stage.level}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {stage.skills.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}