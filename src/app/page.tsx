export const dynamic = 'force-dynamic';

import { Header } from '@/components/artifex/Header';
import { Footer } from '@/components/artifex/Footer';
import { ContentCard } from '@/components/artifex/ContentCard';
import { BlogCard } from '@/components/artifex/BlogCard';
import { LiveChat } from '@/components/artifex/LiveChat';
import { mockPortfolioItems, mockBlogPosts } from '@/lib/mock-data';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--primary))] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Celebrating Years of Creative Work</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  THE CREATIVE UNIVERSE
                  <br />
                  <span className="text-[hsl(var(--accent))]">OF ARTIFEX</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  Explore a diverse collection of music, books, visual art, and thoughtful writing.
                  Join a vibrant community of fellow creatives and enthusiasts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-6 py-3 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all flex items-center gap-2">
                    <span>Explore Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/community">
                    <button className="border-2 border-white/20 text-white px-6 py-3 rounded-md font-medium hover:border-white/40 hover:bg-white/5 transition-all">
                      Join Community
                    </button>
                  </Link>
                </div>
              </div>

              {/* Hero Visual Grid */}
              <div className="grid grid-cols-3 gap-3">
                {mockPortfolioItems.slice(0, 6).map((item, idx) => (
                  <div
                    key={item.id}
                    className={`rounded-lg overflow-hidden bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--accent)/0.2)] aspect-square flex items-center justify-center text-white/40 font-heading text-3xl ${
                      idx === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                  >
                    {item.title.charAt(0)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-[hsl(var(--background))]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-8">
              {/* Main Content */}
              <div>
                {/* Featured Blog Posts */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
                      FEATURED BLOG POSTS
                    </h2>
                    <Link
                      href="#"
                      className="text-[hsl(var(--accent))] font-medium hover:underline flex items-center gap-1"
                    >
                      View All
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBlogPosts.slice(0, 6).map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </div>

                {/* Art Gallery Preview */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-3xl font-bold text-[hsl(var(--foreground))]">
                      ART GALLERY
                    </h2>
                    <Link
                      href="#"
                      className="text-[hsl(var(--accent))] font-medium hover:underline flex items-center gap-1"
                    >
                      View Collection
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {mockPortfolioItems
                      .filter((item) => item.type === 'art')
                      .map((item) => (
                        <ContentCard
                          key={item.id}
                          title={item.title}
                          image={item.image}
                          category={item.category}
                          aspectRatio="square"
                        />
                      ))}
                  </div>
                </div>

                {/* Music & Books Section */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Music */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
                        MUSIC
                      </h3>
                      <Link
                        href="#"
                        className="text-[hsl(var(--accent))] font-medium hover:underline text-sm flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {mockPortfolioItems
                        .filter((item) => item.type === 'music')
                        .map((item) => (
                          <ContentCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            category={item.category}
                            aspectRatio="landscape"
                          />
                        ))}
                    </div>
                  </div>

                  {/* Books */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-2xl font-bold text-[hsl(var(--foreground))]">
                        BOOKS
                      </h3>
                      <Link
                        href="#"
                        className="text-[hsl(var(--accent))] font-medium hover:underline text-sm flex items-center gap-1"
                      >
                        View All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {mockPortfolioItems
                        .filter((item) => item.type === 'book')
                        .map((item) => (
                          <ContentCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            category={item.category}
                            aspectRatio="landscape"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Live Chat */}
                <LiveChat />

                {/* Discussion Forums Teaser */}
                <div className="bg-[hsl(var(--primary))] rounded-[var(--radius-card)] p-6 text-white">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    DISCUSSION FORUMS
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-[hsl(var(--primary))] font-semibold text-sm flex-shrink-0">
                        S
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2 mb-1">
                          Favorite Creative Inspirations
                        </p>
                        <p className="text-xs text-white/60">24 replies • 2h ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-[hsl(var(--primary))] font-semibold text-sm flex-shrink-0">
                        M
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2 mb-1">
                          Urban Symphony: Hidden Details
                        </p>
                        <p className="text-xs text-white/60">18 replies • 5h ago</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/community">
                    <button className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all">
                      Join Discussions
                    </button>
                  </Link>
                </div>

                {/* Merch Shop Teaser */}
                <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                    MERCH SHOP
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-white/40 font-heading text-2xl">
                        P
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1">Art Print</p>
                        <p className="font-heading font-bold text-[hsl(var(--foreground))]">$45.00</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-white/40 font-heading text-2xl">
                        V
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1">Vinyl Collection</p>
                        <p className="font-heading font-bold text-[hsl(var(--foreground))]">$120.00</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/merch">
                    <button className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
