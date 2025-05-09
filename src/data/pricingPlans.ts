
export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
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

export const faqs = [
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
