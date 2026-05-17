'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentInfo = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black via-phoenix-dark-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-phoenix-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-phoenix-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-lg bg-phoenix-500/10 border border-phoenix-500/20">
            <span className="text-phoenix-500 text-sm font-display font-bold uppercase tracking-wider">
              Payment Details
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
            Secure <span className="text-gradient-phoenix">Payment</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transfer to our official bank account
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-glow p-10 rounded-2xl border-2 border-phoenix-500/30">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="font-bold text-white text-2xl">BCA</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Bank Name */}
              <div className="text-center">
                <div className="text-gray-500 text-sm font-display uppercase tracking-wider mb-2">
                  Bank
                </div>
                <div className="font-heading text-2xl font-bold text-white">
                  BCA (Bank Central Asia)
                </div>
              </div>

              {/* Account Name */}
              <div className="text-center p-6 bg-phoenix-500/5 rounded-xl border border-phoenix-500/20">
                <div className="text-gray-500 text-sm font-display uppercase tracking-wider mb-2">
                  Account Name
                </div>
                <div className="font-display text-xl font-bold text-white">
                  Subhan Fadjrin Sanjaya
                </div>
              </div>

              {/* Account Number */}
              <div className="text-center p-6 bg-phoenix-500/10 rounded-xl border border-phoenix-500/30">
                <div className="text-gray-500 text-sm font-display uppercase tracking-wider mb-3">
                  Account Number
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="font-heading text-3xl font-bold text-phoenix-500 tracking-wider">
                    5465557408
                  </div>
                  <button
                    onClick={() => copyToClipboard('5465557408')}
                    className="p-2 rounded-lg bg-phoenix-500/20 hover:bg-phoenix-500/30 border border-phoenix-500/30 transition-all"
                    title="Copy account number"
                  >
                    {copied ? (
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-phoenix-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Payment Period */}
              <div className="text-center pt-6 border-t border-phoenix-500/20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-phoenix-500/10 rounded-lg border border-phoenix-500/20">
                  <svg className="w-5 h-5 text-phoenix-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400 text-sm">
                    Payment Period: <span className="text-white font-semibold">1st - 15th of each month</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="font-display font-bold text-yellow-500 mb-1">Important</div>
                <p className="text-gray-400 text-sm">
                  Please confirm your payment via WhatsApp after transfer. Include your child's name and payment proof.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentInfo;
