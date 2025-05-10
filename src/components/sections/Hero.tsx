
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-primary">
              VSME Reporting Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Streamline Your VSME Reporting with Our Notion Template
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              <strong>Iiris' super duper crazy notion template: </strong>The ultimate Notion template for VSMEs to meet compliance standards, showcase sustainability efforts, and simplify VSME reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/product">
                <Button size="lg" className="rounded-full px-8 font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instantly usable after purchase
              </span>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-xl transform scale-95 opacity-60 -z-10"></div>
              <div className="glass-panel p-2 border border-white/30 shadow-glass-hover">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="VSME Template Dashboard"
                  className="w-full h-auto rounded-xl shadow-subtle"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center">
                <span className="text-sm font-medium">Fully Customizable</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center">
                <span className="text-sm font-medium">Compliance-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
