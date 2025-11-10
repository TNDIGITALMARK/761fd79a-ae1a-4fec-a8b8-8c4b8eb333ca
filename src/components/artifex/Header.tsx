'use client';

import Link from 'next/link';
import { Music, BookOpen, Palette, MessageSquare, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--primary))] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[hsl(var(--accent))] rounded-md flex items-center justify-center">
              <span className="text-[hsl(var(--primary))] font-bold text-lg">A</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-[hsl(var(--accent))] group-hover:text-[hsl(var(--accent)/0.8)] transition-colors">
              ARTIFEX
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[hsl(var(--accent))] transition-colors"
            >
              <Palette className="w-4 h-4" />
              <span>PORTFOLIO</span>
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[hsl(var(--accent))] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>COMMUNITY</span>
            </Link>
            <Link
              href="/merch"
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[hsl(var(--accent))] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>MERCH</span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              ART
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              MUSIC
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              BOOKS
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              BLOG
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all">
            JOIN COMMUNITY
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
