
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../ui/BlogCard';

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
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ESG Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay informed with our latest articles on ESG reporting, sustainability, and compliance.
            </p>
          </div>
          <Link to="/blog" className="mt-6 md:mt-0">
            <Button variant="ghost" className="group">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
