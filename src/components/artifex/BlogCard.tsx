'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
  link?: string;
}

export function BlogCard({
  title,
  excerpt,
  coverImage,
  author,
  date,
  readTime,
  tags = [],
  link = '#'
}: BlogCardProps) {
  return (
    <Link
      href={link}
      className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      {coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[hsl(var(--muted))]">
          <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-white/30 font-heading text-4xl">
            {title.charAt(0)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-heading font-semibold text-xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-3 mb-4">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
          <div className="font-medium text-[hsl(var(--foreground))]">
            {author}
          </div>
        </div>
      </div>
    </Link>
  );
}
