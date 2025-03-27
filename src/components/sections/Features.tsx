
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Comprehensive ESG Framework",
      description: "Built-in structure covering all essential Environmental, Social, and Governance metrics for VSMEs.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Ready-Made Dashboards",
      description: "Beautiful dashboards that visualize your ESG metrics with clear, understandable graphics.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 13V17M16 11V17M12 7V17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Automated Calculations",
      description: "Built-in formulas that automatically calculate key metrics and indicators from your input data.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 7H15M9 11H15M9 15H13M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Compliance Documentation",
      description: "Templates for creating compliance reports that meet industry standards and regulatory requirements.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Progress Tracking",
      description: "Tools to set targets, track progress, and visualize improvements in your sustainability metrics over time.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V5L19 2M16 8L19 2M16 8H13.2727C11.9579 8 10.6606 8.53619 9.71923 9.47314L4 15.1925M8 20.1925L4 15.1925M4 15.1925L9 11.1925" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Stakeholder Reporting",
      description: "Generate professional, shareable reports for investors, customers, and other stakeholders.",
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H7C5.89543 20 5 19.1046 5 18V11M17 20V6C17 4.89543 16.1046 4 15 4H7C5.89543 4 5 4.89543 5 6V11M17 20H19M5 11H3M9 8H13M9 12H13M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive ESG Reporting Solution</h2>
          <p className="text-lg text-muted-foreground">
            Our Notion template provides everything VSMEs need to track, document, and report on their ESG initiatives.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-subtle-hover transition-shadow border border-border/40 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits section */}
        <div className="mt-20 lg:mt-32 max-w-4xl mx-auto bg-secondary rounded-2xl p-8 md:p-12 shadow-subtle">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Why Choose Our ESG Template?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Save 20+ hours on ESG reporting setup",
              "Ensure compliance with EU CSRD guidelines",
              "Track progress against sustainability goals",
              "Impress investors with professional reports",
              "Simplify data collection and management",
              "Adapt to your organization's specific needs",
              "Visualize improvements over time",
              "No technical expertise required"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
