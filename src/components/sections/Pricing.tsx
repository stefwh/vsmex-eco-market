import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { pricingPlans } from '@/data/pricingPlans';
import PricingCard from '@/components/pricing/PricingCard';

const Pricing = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-secondary -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your organization's VSME reporting needs
          </p>
          <Link to="/pricing">
            <Button variant="outline" className="rounded-lg">
              View All Details
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-muted-foreground mb-6">Have questions?</p>
          <Button variant="outline" className="rounded-full px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
