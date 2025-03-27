
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Checkout = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Purchase Successful!",
        description: "You will receive your template via email shortly.",
        duration: 5000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 page-transition">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/product" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to product
          </Link>
          
          <div className="grid md:grid-cols-5 gap-12">
            {/* Checkout form */}
            <div className="md:col-span-3">
              <h1 className="text-2xl font-bold mb-6">Checkout</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Contact Information</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Your receipt and template will be sent to this email
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Payment Information</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleChange} 
                        placeholder="1234 5678 9012 3456" 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          name="expiry" 
                          value={formData.expiry} 
                          onChange={handleChange} 
                          placeholder="MM/YY" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input 
                          id="cvc" 
                          name="cvc" 
                          value={formData.cvc} 
                          onChange={handleChange} 
                          placeholder="123" 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Billing Address</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">Postal Code</Label>
                        <Input 
                          id="zip" 
                          name="zip" 
                          value={formData.zip} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-lg" 
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Complete Purchase'}
                  {!loading && <CreditCard className="ml-2 h-4 w-4" />}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  By completing your purchase, you agree to our{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-2">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-16 w-16 rounded-lg overflow-hidden bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="ESG Template" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">VSME ESG Reporting Template</h3>
                    <p className="text-sm text-muted-foreground">Notion Template</p>
                  </div>
                </div>
                
                <div className="py-4 border-b space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$79.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-green-600">-$50.00</span>
                  </div>
                </div>
                
                <div className="py-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$29.99</span>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Instant digital delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Email support included</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg p-4 border border-border/40">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Secure checkout</span>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-muted rounded">Visa</span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">Mastercard</span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">AMEX</span>
                    </div>
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

export default Checkout;
