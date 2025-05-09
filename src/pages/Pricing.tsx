
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingHero from '../components/pricing/PricingHero';
import PricingCard from '../components/pricing/PricingCard';
import ComparisonTable from '../components/pricing/ComparisonTable';
import FAQ from '../components/pricing/FAQ';
import CallToAction from '../components/pricing/CallToAction';
import { pricingPlans, faqs } from '../data/pricingPlans';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20">
        <PricingHero />

        {/* Pricing cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />
        <FAQ faqs={faqs} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
