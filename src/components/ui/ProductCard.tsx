
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    imageUrl: string;
    features: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    name,
    description,
    price,
    discountPrice,
    imageUrl,
    features
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-subtle hover:shadow-subtle-hover transition-all duration-300 overflow-hidden border border-border/40">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {discountPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            {Math.round(((price - discountPrice) / price) * 100)}% OFF
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-end gap-2 mb-4">
          {discountPrice ? (
            <>
              <span className="text-2xl font-bold">${discountPrice}</span>
              <span className="text-muted-foreground line-through">${price}</span>
            </>
          ) : (
            <span className="text-2xl font-bold">${price}</span>
          )}
        </div>
        
        <ul className="mb-6 space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-3">
          <Link to={`/product`} className="flex-1">
            <Button variant="outline" className="w-full rounded-lg">
              View Details
            </Button>
          </Link>
          <Link to="/checkout" className="flex-1">
            <Button className="w-full rounded-lg">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
