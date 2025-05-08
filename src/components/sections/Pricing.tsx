
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for small businesses just starting with VSME reporting",
      price: 89,
      features: [
        "Komplettes VSME-Reporting Template",
        "Grundlegende Dashboards",
        "Standard Metrik-Tracking",
        "E-Mail Support",
        "1 Benutzer-Lizenz",
      ],
      isPopular: false,
      ctaText: "Jetzt kaufen",
    },
    {

      name: "Extended",
      description: "Ideal for growing companies seeking comprehensive VSME solutions",
      price: 149,
      features: [
        "Alles aus dem Standard-Paket",
        "Erweiterte Dashboards & Visualisierung",
        "Benutzerdefinierte Metrik-Einrichtung",
        "Compliance-Dokumentvorlagen",
        "Prioritäts-E-Mail-Support",
        "3 Benutzer-Lizenzen",
      ],
      isPopular: true,
      ctaText: "Premium kaufen",
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
          <Link to="/pricing">
            <Button variant="outline" className="rounded-lg">
              Alle Details anzeigen
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    Meistverkauft
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold">
                  €{plan.price}
                  </span>
                  <span className="text-muted-foreground mb-1">single-pay</span>
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
                <h4 className="font-medium mb-4">Was ist enthalten:</h4>
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
            Sie haben noch Fragen?
          </p>
          <Button variant="outline" className="rounded-full px-8">
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
