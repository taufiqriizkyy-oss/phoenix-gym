'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'training', label: 'Training' },
    { id: 'moments', label: 'Special Moments' },
    { id: 'facility', label: 'Our Facility' }
  ];

  const galleryItems = [
    { src: '/images/kids-action-1.png', category: 'training', title: 'Skill Development' },
    { src: '/images/kids-action-2.png', category: 'training', title: 'Balance Training' },
    { src: '/images/kids-action-3.png', category: 'training', title: 'Floor Routine' },
    { src: '/images/focus-training.png', category: 'training', title: 'Focused Practice' },
    { src: '/images/chalk-moment.png', category: 'moments', title: 'Getting Ready' },
    { src: '/images/happy-kids.png', category: 'moments', title: 'Joy of Movement' },
    { src: '/images/achievement.png', category: 'moments', title: 'Celebration' },
    { src: '/images/teamwork.png', category: 'moments', title: 'Team Spirit' },
    { src: '/images/gym-atmosphere-1.png', category: 'facility', title: 'Training Space' },
    { src: '/images/stretching.png', category: 'training', title: 'Flexibility Work' },
    { src: '/images/coach-moment-1.png', category: 'moments', title: 'Coaching Connection' },
    { src: '/images/coach-moment-2.png', category: 'moments', title: 'Encouragement' },
    { src: '/images/parent-watching.png', category: 'moments', title: 'Parent Viewing' },
    { src: '/images/trust-moment.png', category: 'moments', title: 'Building Trust' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              Gallery
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-gray-900">
            Moments of <span className="italic text-phoenix-pink-500">Growth</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Capturing the journey of strength, confidence, and achievement at Phoenix Gymnastics Academy.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-24 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-phoenix-pink-400 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-phoenix-pink-100'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="font-display text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">No photos in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-phoenix-pink-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-6 text-gray-900">
            Create Your Own <span className="italic text-phoenix-pink-500">Success Story</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join Phoenix Gymnastics Academy and become part of our growing community of confident young athletes.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-phoenix-pink-400 to-phoenix-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Trial Class
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
