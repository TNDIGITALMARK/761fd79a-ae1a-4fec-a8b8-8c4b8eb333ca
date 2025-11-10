'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description?: string;
  image: string;
  category?: string;
  link?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export function ContentCard({
  title,
  description,
  image,
  category,
  link = '#',
  aspectRatio = 'portrait'
}: ContentCardProps) {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]'
  };

  return (
    <Link
      href={link}
      className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className={`relative ${aspectClasses[aspectRatio]} w-full overflow-hidden bg-[hsl(var(--muted))]`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-white/30 font-heading text-4xl">
          {title.charAt(0)}
        </div>
        {category && (
          <div className="absolute top-3 left-3 bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-3 py-1 rounded-md text-xs font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors line-clamp-2 mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
