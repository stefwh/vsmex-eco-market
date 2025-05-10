
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
    name: "Basic",
    description: "Our base template for VSME reporting, perfect for beginners",
    price: 99,
    features: [
      "Complete VSME reporting template",
      "Basic dashboards",
      "Standard metric tracking",
      "Email support",
      "30-day money-back guarantee",
      "Lifetime access",
      "Video tutorial"
    ],
    isPopular: false,
    ctaText: "Buy Now",
  },
  {
    name: "Extended",
    description: "Comprehensive template with advanced features for professional VSME reporting",
    price: 179,
    features: [
      "Everything from the Standard package",
      "Advanced dashboards & visualization",
      "Custom metric setup",
      "Compliance document templates",
      "Priority email support",
      "30-day money-back guarantee",
      "Lifetime access",
      "Video tutorial"
    ],
    isPopular: true,
    ctaText: "Buy Premium",
  }
];

export const faqs = [
  {
    question: "How do I access the template after purchase?",
    answer: "After purchase, you'll receive a link to duplicate the template into your own Notion workspace. Once duplicated, it's yours to keep forever.",
  },
  {
  question: "Can I use the template on multiple devices or share it with others?",
  answer: "Yes — you're welcome to invite colleagues from your company to collaborate within your Notion workspace. The template is licensed for internal company use only. Sharing outside your organization is not permitted.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. We offer a 30-day money-back guarantee. If you're not satisfied with the template, just contact us and we’ll issue a full refund.",
  }
];
