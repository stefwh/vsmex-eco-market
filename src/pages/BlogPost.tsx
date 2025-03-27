
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '../components/ui/BlogCard';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // For the demo, we'll use hardcoded blog post data
  const blogPost = {
    id: 1,
    title: "ESG Reporting Requirements for VSMEs in 2023",
    excerpt: "An overview of the latest ESG reporting requirements that small and medium enterprises need to be aware of.",
    content: `
      <p class="lead">Environmental, Social, and Governance (ESG) reporting is becoming increasingly important for businesses of all sizes, including Very Small and Medium-sized Enterprises (VSMEs).</p>
      
      <p>The landscape of ESG reporting is evolving rapidly, with new regulations and standards emerging globally. For VSMEs, navigating these requirements can be challenging due to limited resources and expertise. This article provides an overview of the key ESG reporting requirements that VSMEs need to be aware of in 2023.</p>
      
      <h2>The EU Corporate Sustainability Reporting Directive (CSRD)</h2>
      
      <p>The CSRD represents a significant expansion of sustainability reporting requirements in the European Union. While initially targeted at larger companies, the directive will gradually apply to smaller companies as well:</p>
      
      <ul>
        <li>From 2024 (for 2023 reports): Large companies already subject to the Non-Financial Reporting Directive (NFRD)</li>
        <li>From 2025 (for 2024 reports): Other large companies not previously subject to the NFRD</li>
        <li>From 2026 (for 2025 reports): Listed SMEs (with a possibility to opt-out until 2028)</li>
        <li>From 2027 (for 2026 reports): Non-EU companies with significant EU operations</li>
      </ul>
      
      <p>VSMEs that are part of the value chain of larger companies may also find themselves needing to provide ESG data to their business partners, even if they're not directly subject to the regulations.</p>
      
      <h2>The European Sustainability Reporting Standards (ESRS)</h2>
      
      <p>The ESRS provides detailed guidance on what companies must report under the CSRD. Key areas include:</p>
      
      <ol>
        <li>Environmental impact (climate change, pollution, biodiversity, resource use)</li>
        <li>Social impact (workforce, communities, consumers)</li>
        <li>Governance (business conduct, risk management, board diversity)</li>
      </ol>
      
      <p>For VSMEs, a proportionate set of standards is being developed, recognizing the limited resources of smaller businesses.</p>
      
      <h2>Other Global Standards and Frameworks</h2>
      
      <p>While the EU is leading the way, other regions and organizations are also developing ESG reporting frameworks:</p>
      
      <ul>
        <li>The International Sustainability Standards Board (ISSB) has published global baseline standards</li>
        <li>The Task Force on Climate-related Financial Disclosures (TCFD) provides recommendations for climate reporting</li>
        <li>The Global Reporting Initiative (GRI) Standards are widely used for sustainability reporting</li>
        <li>The Sustainability Accounting Standards Board (SASB) Standards provide industry-specific guidance</li>
      </ul>
      
      <h2>Practical Steps for VSMEs</h2>
      
      <p>To prepare for these evolving requirements, VSMEs should consider the following steps:</p>
      
      <ol>
        <li>Assess your regulatory exposure: Determine if and when your company will be subject to mandatory reporting requirements</li>
        <li>Understand stakeholder expectations: Engage with key stakeholders to understand their ESG information needs</li>
        <li>Start with materiality: Focus on the ESG issues most relevant to your business and stakeholders</li>
        <li>Develop data collection systems: Implement processes to collect reliable ESG data</li>
        <li>Build internal capacity: Train staff on ESG reporting requirements and best practices</li>
        <li>Consider using a template or framework: Utilize existing templates or frameworks to streamline your reporting</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>While ESG reporting may seem daunting for VSMEs, taking a proactive approach can yield significant benefits. Beyond compliance, effective ESG reporting can enhance reputation, attract investment, improve operational efficiency, and strengthen stakeholder relationships.</p>
      
      <p>By starting small and focusing on material issues, VSMEs can build their ESG reporting capabilities over time, positioning themselves for success in an increasingly sustainability-focused business environment.</p>
    `,
    date: "June 15, 2023",
    author: {
      name: "Maria Rodriguez",
      role: "ESG Consultant",
      avatar: "https://i.pravatar.cc/150?img=28"
    },
    category: "Compliance",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    readTime: "5 min read"
  };
  
  const relatedPosts = [
    {
      id: 2,
      title: "5 Ways to Improve Your Company's Environmental Impact",
      excerpt: "Practical strategies for small businesses looking to reduce their environmental footprint while improving efficiency.",
      date: "May 28, 2023",
      category: "Environmental",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "How to Communicate Your ESG Efforts to Stakeholders",
      excerpt: "Effective communication strategies to showcase your sustainability initiatives to investors, customers, and employees.",
      date: "April 12, 2023",
      category: "Communication",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Business Case for ESG in Small Enterprises",
      excerpt: "Why investing in environmental, social, and governance practices makes business sense for small enterprises.",
      date: "March 5, 2023",
      category: "Strategy",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 page-transition">
        {/* Article header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium bg-blue-100 text-primary px-2.5 py-0.5 rounded-full">
              {blogPost.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {blogPost.date} • {blogPost.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <img 
              src={blogPost.author.avatar} 
              alt={blogPost.author.name} 
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-medium">{blogPost.author.name}</p>
              <p className="text-sm text-muted-foreground">{blogPost.author.role}</p>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8">
            <img 
              src={blogPost.imageUrl} 
              alt={blogPost.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Tags:</span>
              <Button variant="outline" size="sm" className="rounded-full text-xs">ESG Reporting</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">Compliance</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">CSRD</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">Sustainability</Button>
            </div>
          </div>
        </article>
        
        {/* Related posts */}
        <div className="bg-secondary py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated on ESG Trends</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest insights on ESG reporting and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-lg border border-border"
                />
                <Button className="rounded-lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
