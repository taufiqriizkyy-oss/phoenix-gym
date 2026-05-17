'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0"
      >
        <img 
          src="/images/hero-phoenix.png" 
          alt="Phoenix Gymnastics Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-phoenix-500/10 via-transparent to-black/80" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-32"
      >
        {/* Rifda Olympic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-phoenix-500/10 backdrop-blur-sm border border-phoenix-500/30 shadow-glow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-phoenix-500 animate-pulse" />
          <span className="text-phoenix-500 font-display font-semibold text-sm uppercase tracking-wider">
            Featuring Olympic Athlete Rifda Irfanaluthfi
          </span>
          <svg className="w-5 h-5 text-phoenix-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-[0.9]">
            <span className="text-white">Building</span>
            <br/>
            <span className="text-white">Stronger</span>
            <br/>
            <span className="text-gradient-phoenix glow-text">Children</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Olympic-inspired gymnastics training with premium coaching, structured progression, and character development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link 
            href="/contact"
            className="group px-10 py-5 bg-gradient-to-r from-phoenix-500 to-phoenix-600 text-white font-display font-bold text-lg uppercase tracking-wider rounded-xl hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Start Trial Class
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link 
            href="/programs"
            className="px-10 py-5 bg-transparent border-2 border-phoenix-500/50 text-white font-display font-bold text-lg uppercase tracking-wider rounded-xl hover:bg-phoenix-500/10 hover:border-phoenix-500 transition-all duration-300"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '100+', label: 'Students' },
            { number: '5+', label: 'Years' },
            { number: 'Olympic', label: 'Standard' },
            { number: 'Premium', label: 'Facility' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-phoenix-500 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-phoenix-500"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
