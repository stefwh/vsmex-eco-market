
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to improve your VSME reporting?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Choose the package that's right for you now and start with efficient ESG reporting
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/checkout">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Buy Template
            </Button>
          </Link>
          <Link to="/product">
            <Button size="lg" variant="secondary" className="text-primary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
