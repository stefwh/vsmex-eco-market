
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogCard from '../components/ui/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "ESG Reporting Requirements for VSMEs in 2023",
    excerpt: "An overview of the latest ESG reporting requirements that small and medium enterprises need to be aware of.",
    date: "June 15, 2023",
    category: "Compliance",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    readTime: "5 min read"
  },
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
  },
  {
    id: 5,
    title: "Navigating EU's Corporate Sustainability Reporting Directive",
    excerpt: "A guide to help VSMEs understand and prepare for the new EU CSRD reporting requirements.",
    date: "February 18, 2023",
    category: "Regulation",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Setting Up an ESG Data Collection System",
    excerpt: "Practical steps to create an efficient system for collecting and managing your ESG data.",
    date: "January 22, 2023",
    category: "Implementation",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    readTime: "5 min read"
  }
];

const Blog = () => {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 page-transition">
        {/* Header */}
        <div className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">ESG Insights Blog</h1>
              <p className="text-xl text-muted-foreground">
                Expert guidance and insights to help you navigate the world of ESG reporting and sustainability.
              </p>
            </div>
          </div>
        </div>
        
        {/* Blog content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl shadow-subtle p-6 sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <button className="w-full text-left py-1 px-3 bg-primary/10 text-primary rounded-md font-medium">
                      All Posts
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left py-1 px-3 text-muted-foreground hover:bg-secondary rounded-md transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h2 className="font-semibold text-lg mb-4">Subscribe</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get the latest ESG insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                    />
                    <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog posts grid */}
            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-border disabled:opacity-50">
                    &lt;
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-secondary">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-secondary">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-border">
                    &gt;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
