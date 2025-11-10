'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-white/70">
            © 2025 ARTIFEX  •  Serving Truth Since 2015  •  Created With <span className="text-[hsl(var(--accent))]">Claude Code</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent)/0.8)] transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
