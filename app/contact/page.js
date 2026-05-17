'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ApplicationForm from '@/components/ApplicationForm';

export default function ContactPage() {
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
              Get Started
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-gray-900">
            Let's Begin Your <span className="italic text-phoenix-pink-500">Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to give your child the gift of confidence, discipline, and strength? Connect with us today.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                ),
                title: 'WhatsApp',
                detail: '+62 857-1119-4565',
                link: 'https://wa.me/6285711194565',
                color: 'from-green-400 to-green-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Email',
                detail: 'info@phoenixgymnastics.com',
                link: 'mailto:info@phoenixgymnastics.com',
                color: 'from-phoenix-pink-400 to-phoenix-pink-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Location',
                detail: 'Depok, Indonesia',
                link: '#',
                color: 'from-blue-400 to-blue-500'
              }
            ].map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-phoenix-pink-100 hover:border-phoenix-pink-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="font-display text-2xl mb-2 text-gray-900">{method.title}</h3>
                <p className="text-gray-600">{method.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-phoenix-pink-100">
              <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
                Common Questions
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
              Frequently Asked <span className="italic text-phoenix-pink-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What age groups do you accept?',
                answer: 'We offer programs for children from 3 years old through teenagers. Our Pre-School Movement program is designed for ages 3-5, while our main programs cater to ages 5-16.'
              },
              {
                question: 'Do you offer trial classes?',
                answer: 'Yes! We encourage all new families to book a trial class. This allows your child to experience our coaching style and facility before committing to a full program.'
              },
              {
                question: 'What should my child wear to class?',
                answer: 'Comfortable athletic wear is perfect for trial classes. For regular training, we recommend a gymnastics leotard and comfortable athletic pants or shorts. Hair should be tied back securely.'
              },
              {
                question: 'How many students are in each class?',
                answer: 'We maintain small class sizes with a maximum of 8 students per coach. This ensures every child receives individual attention and proper supervision.'
              },
              {
                question: 'Do you prepare students for competitions?',
                answer: 'Yes, we offer competitive training programs for students who show interest and readiness. However, competition is optional—many of our students train purely for fitness, confidence, and fun.'
              },
              {
                question: 'What makes Phoenix different from other gymnastics programs?',
                answer: 'Phoenix combines Olympic-level methodology with a child-centered approach. We focus on building confidence and character alongside physical skills, in a safe and nurturing environment led by professionally trained coaches.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-gradient-to-r from-phoenix-pink-50 to-white p-8 rounded-2xl border-2 border-phoenix-pink-100 hover:border-phoenix-pink-300 transition-all duration-300"
              >
                <h3 className="font-display text-2xl mb-3 text-gray-900 flex items-start gap-3">
                  <span className="text-phoenix-pink-400 flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">
            Ready to <span className="italic text-phoenix-pink-500">Get Started?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to meet you and your child. Reach out via WhatsApp or fill out the application form above.
          </p>
          <motion.a
            href="https://wa.me/6285711194565"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
