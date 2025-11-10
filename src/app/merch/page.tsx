export const dynamic = 'force-dynamic';

import { Header } from '@/components/artifex/Header';
import { Footer } from '@/components/artifex/Footer';
import { ProductCard } from '@/components/artifex/ProductCard';
import { mockMerchProducts } from '@/lib/mock-data';
import { ShoppingBag, Star, Package, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function MerchShowcase() {
  const featuredProducts = mockMerchProducts.filter(p => p.featured);
  const regularProducts = mockMerchProducts.filter(p => !p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(var(--background))]">
        {/* Hero Banner */}
        <section className="bg-[hsl(var(--primary))] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] px-4 py-2 rounded-full text-sm font-medium mb-4">
                <ShoppingBag className="w-4 h-4" />
                <span>Official Merchandise</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                MERCH SHOP
              </h1>
              <p className="text-lg text-white/80">
                Support the creative work and take home a piece of the Artifex universe.
                Limited editions and exclusive items available.
              </p>
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="bg-white border-b border-[hsl(var(--border))] py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))]">Free Shipping</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))]">Limited Editions</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Exclusive collectibles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))]">Secure Checkout</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Safe & encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Featured Products */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                FEATURED ITEMS
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md font-medium text-sm">
                All Products
              </button>
              <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                Art Prints
              </button>
              <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                Music
              </button>
              <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                Books
              </button>
              <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                Apparel
              </button>
              <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                Accessories
              </button>
            </div>

            {/* All Products */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                ALL PRODUCTS
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockMerchProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[hsl(var(--primary))] rounded-[var(--radius-card)] p-8 md:p-12 text-white text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                EXCLUSIVE DROPS & UPDATES
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Be the first to know about new releases, limited editions, and special offers.
                Join our mailing list and never miss a drop.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                />
                <button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-6 py-3 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-white border-t border-[hsl(var(--border))] py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] mb-1">100% Secure Payments</p>
                <p>Protected transactions</p>
              </div>
              <div className="w-px h-12 bg-[hsl(var(--border))] hidden md:block" />
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] mb-1">30-Day Returns</p>
                <p>Easy refund policy</p>
              </div>
              <div className="w-px h-12 bg-[hsl(var(--border))] hidden md:block" />
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] mb-1">Premium Quality</p>
                <p>Curated products</p>
              </div>
              <div className="w-px h-12 bg-[hsl(var(--border))] hidden md:block" />
              <div>
                <p className="font-semibold text-[hsl(var(--foreground))] mb-1">Fast Shipping</p>
                <p>Worldwide delivery</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
