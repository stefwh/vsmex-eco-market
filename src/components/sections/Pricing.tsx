
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Standard",
      description: "Perfect for small businesses just starting with VSME reporting",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Complete VSME reporting template",
        "Basic dashboards",
        "Standard metrics tracking",
        "Email support",
        "1 user license",
      ],
      isPopular: false,
      ctaText: "Get Started",
    },
    {
      name: "Premium",
      description: "Ideal for growing companies seeking comprehensive VSME solutions",
      monthlyPrice: 89,
      annualPrice: 69,
      features: [
        "Everything in Standard",
        "Advanced dashboards & visualization",
        "Custom metrics setup",
        "Compliance documentation templates",
        "Priority email support",
        "3 user licenses",
      ],
      isPopular: true,
      ctaText: "Get Premium",
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-secondary -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your organization's VSME reporting needs
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual <span className="text-green-500 font-semibold">(20% off)</span>
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted-foreground'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all ${
                plan.isPopular
                  ? 'shadow-glass-hover border-2 border-primary/20 transform lg:-translate-y-4'
                  : 'shadow-subtle hover:shadow-subtle-hover border border-border/40'
              }`}
            >
              <div className="bg-white p-8">
                {plan.isPopular && (
                  <div className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1 inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground mb-1">/month</span>
                </div>
                
                <Link to="/checkout">
                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    className={`w-full rounded-lg ${plan.isPopular ? "" : "border-primary text-primary hover:bg-primary hover:text-white"}`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8">
                <h4 className="font-medium mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            You still have questions?
          </p>
          <Button variant="outline" className="rounded-full px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
