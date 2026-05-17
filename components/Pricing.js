'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingTiers = [
    {
      frequency: '1x/week',
      price: '600.000',
      features: ['Weekly Training', 'Structured Progression', 'Professional Coaching', 'Safety Equipment']
    },
    {
      frequency: '2x/week',
      price: '900.000',
      popular: true,
      features: ['Bi-weekly Training', 'Faster Skill Development', 'Professional Coaching', 'Safety Equipment']
    },
    {
      frequency: '3x/week',
      price: '1.100.000',
      features: ['Tri-weekly Training', 'Advanced Progression', 'Professional Coaching', 'Safety Equipment']
    },
    {
      frequency: '3x+ /week',
      price: '1.300.000',
      elite: true,
      features: ['Intensive Training', 'Elite Development', 'Professional Coaching', 'Competition Prep']
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-phoenix-dark-900 via-black to-phoenix-dark-900 opacity-50" />

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
              Investment in Excellence
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
            Training <span className="text-gradient-phoenix">Investment</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium gymnastics training with Olympic-inspired methodology
          </p>
        </motion.div>

        {/* Registration Fee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="card-glow p-8 rounded-2xl text-center border-2 border-phoenix-500/30">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-phoenix-500/20 border border-phoenix-500/30">
              <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
                One-Time Fee
              </span>
            </div>
            <h3 className="font-heading text-3xl font-bold text-white mb-2">
              Registration Package
            </h3>
            <div className="font-heading text-5xl font-bold text-phoenix-500 mb-4">
              Rp 1.000.000
            </div>
            <p className="text-gray-400 text-lg">
              Includes premium leotard and official Phoenix jersey set
            </p>
          </div>
        </motion.div>

        {/* Monthly Training Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                tier.popular || tier.elite
                  ? 'bg-gradient-to-b from-phoenix-500/20 to-phoenix-500/5 border-2 border-phoenix-500/50 shadow-glow'
                  : 'card-glow'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-phoenix-500 rounded-full">
                  <span className="text-white text-xs font-display font-bold uppercase">Popular</span>
                </div>
              )}
              {tier.elite && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-phoenix-600 to-phoenix-700 rounded-full">
                  <span className="text-white text-xs font-display font-bold uppercase">Elite</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="font-display text-2xl font-bold text-white mb-2">
                  {tier.frequency}
                </div>
                <div className="font-heading text-4xl font-bold text-phoenix-500 mb-1">
                  Rp {tier.price}
                </div>
                <div className="text-gray-400 text-sm">per month</div>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-phoenix-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Payment Period Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Payment period: 1st - 15th of each month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
