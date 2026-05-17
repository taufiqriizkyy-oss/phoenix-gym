import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Phoenix Gymnastics Academy | Olympic-Inspired Movement Training',
  description: 'Premium gymnastics academy in Jakarta featuring Olympic athlete Rifda Irfanaluthfi. Olympic-level methodology for children with structured progression and character development.',
  keywords: 'gymnastics Jakarta, Olympic gymnastics, kids gymnastics, Rifda Irfanaluthfi, premium gymnastics academy, child development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <div className="grain-overlay" />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
