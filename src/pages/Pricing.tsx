
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
      description: "Unser Basis-Template für VSME-Reporting, perfekt für Einsteiger",
      price: 49,
      features: [
        "Komplettes VSME-Reporting Template",
        "Grundlegende Dashboards",
        "Standard Metrik-Tracking",
        "E-Mail Support",
        "1 Benutzer-Lizenz",
        "30 Tage Geld-zurück-Garantie",
        "Lebenslanger Zugang",
        "Kostenlose Updates für 1 Jahr"
      ],
      isPopular: false,
      ctaText: "Jetzt kaufen",
    },
    {
      name: "Premium",
      description: "Umfassendes Template mit erweiterten Funktionen für professionelles VSME-Reporting",
      price: 89,
      features: [
        "Alles aus dem Standard-Paket",
        "Erweiterte Dashboards & Visualisierung",
        "Benutzerdefinierte Metrik-Einrichtung",
        "Compliance-Dokumentvorlagen",
        "Prioritäts-E-Mail-Support",
        "3 Benutzer-Lizenzen",
        "30 Tage Geld-zurück-Garantie",
        "Lebenslanger Zugang",
        "Kostenlose Updates für 3 Jahre",
        "1 Stunde Einrichtungsunterstützung"
      ],
      isPopular: true,
      ctaText: "Premium kaufen",
    }
  ];

  const faqs = [
    {
      question: "Wie lange habe ich Zugriff auf das Template?",
      answer: "Nach dem Kauf haben Sie lebenslangen Zugriff auf das Template. Sie können es so oft Sie möchten herunterladen und auf Ihren Geräten installieren."
    },
    {
      question: "Kann ich das Template auf mehreren Geräten nutzen?",
      answer: "Ja, abhängig vom gekauften Paket. Das Standard-Paket erlaubt 1 Benutzer, das Premium-Paket erlaubt 3 Benutzer."
    },
    {
      question: "Bieten Sie Unterstützung bei der Einrichtung an?",
      answer: "Das Premium-Paket beinhaltet 1 Stunde Einrichtungsunterstützung. Für das Standard-Paket bieten wir E-Mail-Support für grundlegende Fragen."
    },
    {
      question: "Gibt es eine Geld-zurück-Garantie?",
      answer: "Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie für beide Pakete. Wenn Sie mit dem Template nicht zufrieden sind, erstatten wir Ihnen den vollen Kaufpreis."
    },
    {
      question: "Wie erhalte ich Updates für das Template?",
      answer: "Updates werden automatisch in Ihrer Notion-Umgebung verfügbar gemacht. Standard-Benutzer erhalten 1 Jahr kostenlose Updates, Premium-Benutzer 3 Jahre."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20">
        {/* Hero section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wählen Sie Ihr VSME-Reporting Paket</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unsere Notion-Templates bieten eine umfassende Lösung für Ihr VSME-Reporting zu einem einmaligen Preis
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
                        Meistverkauft
                      </div>
                    )}
                    <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-muted-foreground">einmalig</span>
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
                      <h3 className="font-medium mb-4 text-lg">Was ist enthalten:</h3>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Paketvergleich</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left">Funktion</th>
                    <th className="py-4 px-6 text-center">Standard</th>
                    <th className="py-4 px-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">Preis</td>
                    <td className="py-4 px-6 text-center font-semibold">€49 einmalig</td>
                    <td className="py-4 px-6 text-center font-semibold">€89 einmalig</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Benutzerlizenzen</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">VSME-Reporting Templates</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center">Erweitert</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Dashboards</td>
                    <td className="py-4 px-6 text-center">Grundlegend</td>
                    <td className="py-4 px-6 text-center">Erweitert</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Einrichtungsunterstützung</td>
                    <td className="py-4 px-6 text-center">-</td>
                    <td className="py-4 px-6 text-center">1 Stunde</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Kostenlose Updates</td>
                    <td className="py-4 px-6 text-center">1 Jahr</td>
                    <td className="py-4 px-6 text-center">3 Jahre</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen</h2>
            
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
            <h2 className="text-3xl font-bold mb-6">Bereit, Ihr VSME-Reporting zu verbessern?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Wählen Sie jetzt das für Sie passende Paket und starten Sie mit effizientem ESG-Reporting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Template kaufen
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="secondary" className="text-primary">
                  Mehr erfahren
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

