import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Phoenix Gymnastics Academy | Olympic-Inspired Movement Training',
  description: 'Premium gymnastics academy...',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
