
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { id, title, excerpt, date, category, imageUrl, readTime } = post;

  return (
    <article className="bg-white rounded-xl shadow-subtle hover:shadow-subtle-hover transition-all duration-300 overflow-hidden border border-border/40 h-full flex flex-col">
      <Link to={`/blog/${id}`} className="block overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium bg-blue-100 text-primary px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {date} • {readTime}
          </span>
        </div>
        
        <Link to={`/blog/${id}`} className="block group">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          Read article
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
