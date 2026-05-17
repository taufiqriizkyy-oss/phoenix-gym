'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    age: '',
    currentLevel: '',
    whatsapp: '',
    goals: '',
    preferredProgram: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `🏆 PHOENIX GYMNASTICS - Trial Application

👶 Child: ${formData.childName}
👤 Parent: ${formData.parentName}
🎂 Age: ${formData.age}
📊 Current Level: ${formData.currentLevel}
📱 WhatsApp: ${formData.whatsapp}
🎯 Goals: ${formData.goals}
📋 Preferred Program: ${formData.preferredProgram}

I'm interested in starting a trial class at Phoenix Gymnastics Academy.`;

    const whatsappUrl = `https://wa.me/6285711194565?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="application" className="py-32 relative overflow-hidden bg-gradient-to-br from-phoenix-pink-50 via-white to-phoenix-pink-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-phoenix-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-phoenix-pink-100 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        {...fadeInUp}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-phoenix-pink-100"
          >
            <span className="text-phoenix-pink-600 text-sm font-semibold uppercase tracking-wider">
              Join Phoenix
            </span>
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl mb-4 text-gray-900">
            Begin the <span className="text-phoenix-pink-500 italic">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Apply for a trial class at Phoenix Gymnastics Academy
          </p>
          <p className="text-phoenix-pink-500 text-sm italic font-medium">
            ✨ Limited slots available to maintain coaching quality
          </p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-phoenix-pink-100"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Child's Name <span className="text-phoenix-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Parent's Name <span className="text-phoenix-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Child's Age <span className="text-phoenix-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
                  placeholder="e.g., 7 years old"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Current Level <span className="text-phoenix-pink-500">*</span>
                </label>
                <select
                  required
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({...formData, currentLevel: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
                >
                  <option value="">Select level</option>
                  <option value="Complete Beginner">Complete Beginner</option>
                  <option value="Some Experience">Some Experience</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                WhatsApp Number <span className="text-phoenix-pink-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Goals & Expectations <span className="text-phoenix-pink-500">*</span>
              </label>
              <textarea
                required
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all resize-none"
                placeholder="What would you like your child to achieve through gymnastics?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Preferred Program <span className="text-phoenix-pink-500">*</span>
              </label>
              <select
                required
                value={formData.preferredProgram}
                onChange={(e) => setFormData({...formData, preferredProgram: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-phoenix-pink-400 focus:outline-none focus:bg-white transition-all"
              >
                <option value="">Select program</option>
                <option value="Recreational Gymnastics">Recreational Gymnastics</option>
                <option value="Competitive Training">Competitive Training</option>
                <option value="Private Coaching">Private Coaching</option>
                <option value="Group Classes">Group Classes</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-phoenix-pink-400 to-phoenix-pink-500 text-white font-semibold text-lg rounded-full hover:shadow-xl transition-all duration-300"
            >
              START TRIAL APPLICATION
            </motion.button>

            <p className="text-center text-gray-500 text-sm">
              By submitting, you'll be redirected to WhatsApp to complete your application
            </p>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ApplicationForm;
