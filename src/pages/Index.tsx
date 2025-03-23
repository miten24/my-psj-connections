
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PortalEntry } from '@/components/PortalEntry';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <PortalEntry />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
