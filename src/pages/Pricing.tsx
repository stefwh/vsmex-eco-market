
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Standard",
      description: "Our base template for VSME reporting, perfect for beginners",
      price: 49,
      features: [
        "Complete VSME reporting template",
        "Basic dashboards",
        "Standard metric tracking",
        "Email support",
        "1 user license",
        "30-day money-back guarantee",
        "Lifetime access",
        "Free updates for 1 year"
      ],
      isPopular: false,
      ctaText: "Buy Now",
    },
    {
      name: "Premium",
      description: "Comprehensive template with advanced features for professional VSME reporting",
      price: 89,
      features: [
        "Everything from the Standard package",
        "Advanced dashboards & visualization",
        "Custom metric setup",
        "Compliance document templates",
        "Priority email support",
        "3 user licenses",
        "30-day money-back guarantee",
        "Lifetime access",
        "Free updates for 3 years",
        "1 hour setup support"
      ],
      isPopular: true,
      ctaText: "Buy Premium",
    }
  ];

  const faqs = [
    {
      question: "How long do I have access to the template?",
      answer: "After purchase, you have lifetime access to the template. You can download it and install it on your devices as many times as you want."
    },
    {
      question: "Can I use the template on multiple devices?",
      answer: "Yes, depending on the package purchased. The Standard package allows 1 user, the Premium package allows 3 users."
    },
    {
      question: "Do you offer setup support?",
      answer: "The Premium package includes 1 hour of setup support. For the Standard package, we offer email support for basic questions."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee for both packages. If you're not satisfied with the template, we'll refund the full purchase price."
    },
    {
      question: "How do I receive updates for the template?",
      answer: "Updates are automatically made available in your Notion environment. Standard users receive 1 year of free updates, Premium users receive 3 years."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20">
        {/* Hero section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your VSME Reporting Package</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our Notion templates provide a comprehensive solution for your VSME reporting at a one-time price
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
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
              ))}
            </div>
          </div>
        </section>

        {/* Comparison section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Package Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Standard</th>
                    <th className="py-4 px-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">Price</td>
                    <td className="py-4 px-6 text-center font-semibold">€49 one-time</td>
                    <td className="py-4 px-6 text-center font-semibold">€89 one-time</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">User licenses</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">VSME Reporting Templates</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Dashboards</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Setup Support</td>
                    <td className="py-4 px-6 text-center">-</td>
                    <td className="py-4 px-6 text-center">1 hour</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Free Updates</td>
                    <td className="py-4 px-6 text-center">1 year</td>
                    <td className="py-4 px-6 text-center">3 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
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
      </main>
      <Footer />
    </div>
  );
};
export default PricingPage;
