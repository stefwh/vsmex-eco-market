
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card 
      className={`overflow-hidden transition-all ${
        plan.isPopular
          ? 'ring-2 ring-primary/30 shadow-lg'
          : 'shadow-md hover:shadow-lg'
      }`}
    >
      <div className="p-8 bg-card">
        {plan.isPopular && (
          <div className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1 inline-block mb-4">
            Best Seller
          </div>
        )}
        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
        <p className="text-muted-foreground mb-6">{plan.description}</p>
        <div className="flex items-baseline gap-2 mb-6">
          <DollarSign className="h-6 w-6 text-primary" />
          <span className="text-4xl font-bold">€{plan.price}</span>
          <span className="text-muted-foreground">one-time</span>
        </div>
        
        <Link to="/checkout">
          <Button
            variant={plan.isPopular ? "default" : "outline"}
            className={`w-full rounded-lg ${plan.isPopular ? "" : "border-primary text-primary hover:bg-primary hover:text-white"}`}
            size="lg"
          >
            {plan.ctaText}
          </Button>
        </Link>
      </div>
      
      <CardContent className="p-0">
        <div className="bg-muted/30 p-8">
          <h3 className="font-medium mb-4 text-lg">What's included:</h3>
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
