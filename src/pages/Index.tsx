
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import Blog from '../components/sections/Blog';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20">
        <Hero />
        <Features />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
