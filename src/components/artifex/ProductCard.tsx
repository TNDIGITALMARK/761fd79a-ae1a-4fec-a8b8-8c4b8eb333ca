'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  featured?: boolean;
  link?: string;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  category,
  featured = false,
  link = '#'
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[hsl(var(--muted))]">
        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-white/30 font-heading text-5xl">
          {name.charAt(0)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {featured && (
          <div className="absolute top-3 right-3 bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {category && (
          <div className="text-xs font-medium text-[hsl(var(--accent))] mb-2 uppercase tracking-wide">
            {category}
          </div>
        )}

        <h3 className="font-heading font-semibold text-lg text-[hsl(var(--foreground))] mb-2 line-clamp-2">
          {name}
        </h3>

        <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 mb-4">
          {description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
            ${price.toFixed(2)}
          </div>
          <button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
