
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, FileText, ShoppingCart } from 'lucide-react';

const Product = () => {
  const features = [
    "Comprehensive ESG reporting framework for VSMEs",
    "Pre-built dashboards for environmental metrics",
    "Social responsibility tracking templates",
    "Governance documentation systems",
    "Automated data visualization",
    "Compliance checklist for EU regulations",
    "Stakeholder communication templates",
    "Regular updates as regulations change",
    "Easy data export for external reporting"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 page-transition">
        <div className="bg-secondary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                VSME ESG Solution
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Notion Template for VSME ESG Reporting
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The all-in-one solution for small and medium enterprises to meet ESG reporting requirements
                without the complexity or high costs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/checkout">
                  <Button size="lg" className="rounded-full px-8">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Purchase Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  <FileText className="mr-2 h-5 w-5" />
                  View Sample
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Product Image */}
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden shadow-glass">
                    <img
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                      alt="ESG Template Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-8 bg-secondary rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold">$79.99</span>
                      <span className="text-sm line-through text-muted-foreground">$129.99</span>
                    </div>
                    <Link to="/checkout">
                      <Button className="w-full mb-3 rounded-lg">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full rounded-lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
                <p className="text-lg mb-8">
                  Our comprehensive Notion template is designed specifically for Very Small and Medium-sized Enterprises (VSMEs) 
                  looking to implement effective ESG (Environmental, Social, and Governance) reporting. 
                  This ready-to-use solution simplifies the complex world of sustainability reporting, 
                  making it accessible and manageable for businesses of all sizes.
                </p>

                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4">What You'll Get</h3>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Complete Notion Template</h4>
                      <p className="text-muted-foreground">Fully customizable Notion workspace with pre-built pages, templates, and systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Documentation Guide</h4>
                      <p className="text-muted-foreground">Detailed setup and usage instructions to help you get started quickly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9L11 12L8 15M13 9H16M13 15H16M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-muted-foreground">Have questions? Our team is available to help you implement the template.</p>
                    </div>
                  </li>
                </ul>

                <div className="bg-secondary rounded-xl p-6 mb-8">
                  <h3 className="font-semibold mb-2">100% Satisfaction Guarantee</h3>
                  <p className="text-muted-foreground">
                    If you're not completely satisfied with our template, we offer a 30-day money-back guarantee.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Do I need Notion to use this template?</h4>
                    <p className="text-muted-foreground">Yes, you'll need a Notion account. The free plan works for individual users, but we recommend the Team plan for collaborative use.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">How do I receive the template after purchase?</h4>
                    <p className="text-muted-foreground">You'll receive an email with a Notion template link that allows you to duplicate the template to your own workspace.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Can I customize the template for my specific industry?</h4>
                    <p className="text-muted-foreground">Absolutely! The template is fully customizable to meet your specific industry requirements and reporting needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
