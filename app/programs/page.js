'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ApplicationForm from '@/components/ApplicationForm';

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
      color: 'from-phoenix-pink-200 to-phoenix-pink-300'
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
      color: 'from-phoenix-pink-300 to-phoenix-pink-400'
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
      color: 'from-phoenix-pink-400 to-phoenix-pink-500'
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
      color: 'from-phoenix-pink-100 to-phoenix-pink-200'
    }
  ];

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
              Our Programs
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-gray-900">
            Find Your Perfect <span className="italic text-phoenix-pink-500">Path</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From first cartwheels to competitive excellence, we offer programs tailored to every child's journey and goals.
          </p>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-phoenix-pink-100 hover:border-phoenix-pink-300"
              >
                <div className={`h-3 bg-gradient-to-r ${program.color}`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-3xl mb-2 text-gray-900 group-hover:text-phoenix-pink-500 transition-colors">
                        {program.title}
                      </h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <span className="text-phoenix-pink-500">👶</span> {program.age}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-phoenix-pink-500">📊</span> {program.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-phoenix-pink-500">✨</span> Program Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-phoenix-pink-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Schedule:</span> {program.schedule}
                      </div>
                      <Link
                        href="/contact"
                        className="px-6 py-2 bg-phoenix-pink-400 text-white rounded-full hover:bg-phoenix-pink-500 transition-colors font-medium text-sm"
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
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white border-2 border-phoenix-pink-200">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Skill Development
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              Structured <span className="italic text-phoenix-pink-500">Progression</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Clear pathways from beginner to advanced with measurable milestones
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                level: 'Foundation',
                icon: '🌱',
                skills: ['Basic positions', 'Body awareness', 'Coordination', 'Flexibility'],
                color: 'bg-phoenix-pink-100 border-phoenix-pink-200'
              },
              {
                level: 'Development',
                icon: '🌿',
                skills: ['Forward/backward rolls', 'Handstands', 'Cartwheels', 'Basic jumps'],
                color: 'bg-phoenix-pink-200 border-phoenix-pink-300'
              },
              {
                level: 'Intermediate',
                icon: '🌳',
                skills: ['Round-offs', 'Back walkovers', 'Beam work', 'Bar skills'],
                color: 'bg-phoenix-pink-300 border-phoenix-pink-400'
              },
              {
                level: 'Advanced',
                icon: '🏆',
                skills: ['Aerials', 'Back handsprings', 'Complex routines', 'Competition prep'],
                color: 'bg-phoenix-pink-400 border-phoenix-pink-500'
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
                <h3 className="font-display text-2xl mb-4 text-gray-900">{stage.level}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {stage.skills.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sample Schedule */}
      <section className="py-32 bg-gradient-to-b from-phoenix-pink-50 to-white">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-phoenix-pink-100">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Sample Schedule
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              Weekly <span className="italic text-phoenix-pink-500">Training</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Example weekly schedule for our recreational program
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-phoenix-pink-100">
            <div className="space-y-4">
              {[
                { day: 'Monday & Wednesday', time: '16:00 - 17:30', group: 'Beginner Group (Ages 5-7)' },
                { day: 'Monday & Wednesday', time: '17:45 - 19:15', group: 'Intermediate Group (Ages 8-10)' },
                { day: 'Tuesday & Thursday', time: '16:00 - 17:30', group: 'Beginner Group (Ages 5-7)' },
                { day: 'Tuesday & Thursday', time: '17:45 - 19:15', group: 'Advanced Group (Ages 11+)' },
                { day: 'Saturday', time: '09:00 - 10:30', group: 'Pre-School Movement (Ages 3-5)' },
                { day: 'Saturday', time: '11:00 - 12:30', group: 'Mixed Levels Open Training' }
              ].map((slot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-phoenix-pink-50 rounded-lg hover:bg-phoenix-pink-100 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div className="w-2 h-2 rounded-full bg-phoenix-pink-400" />
                    <span className="font-semibold text-gray-900">{slot.day}</span>
                    <span className="text-phoenix-pink-500 font-medium">{slot.time}</span>
                  </div>
                  <span className="text-gray-600 md:text-right">{slot.group}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6 italic">
              * Schedule may vary. Contact us for the most current class times and availability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Application Form */}
      <ApplicationForm />
    </div>
  );
}
