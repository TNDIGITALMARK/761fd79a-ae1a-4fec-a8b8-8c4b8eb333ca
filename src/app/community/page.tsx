export const dynamic = 'force-dynamic';

import { Header } from '@/components/artifex/Header';
import { Footer } from '@/components/artifex/Footer';
import { LiveChat } from '@/components/artifex/LiveChat';
import { mockDiscussions } from '@/lib/mock-data';
import { MessageSquare, Eye, Pin, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function CommunityCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[hsl(var(--background))]">
        {/* Hero Banner */}
        <section className="bg-[hsl(var(--primary))] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                COMMUNITY CENTER
              </h1>
              <p className="text-lg text-white/80">
                Join conversations, share insights, and connect with fellow enthusiasts.
                Everyone's voice matters here.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-8">
              {/* Discussion Boards */}
              <div>
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-2 rounded-md font-medium text-sm">
                    All Discussions
                  </button>
                  <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                    General
                  </button>
                  <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                    Art Discussion
                  </button>
                  <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                    Music
                  </button>
                  <button className="bg-white text-[hsl(var(--foreground))] px-4 py-2 rounded-md font-medium text-sm hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                    Book Club
                  </button>
                </div>

                {/* Discussion List */}
                <div className="space-y-4">
                  {mockDiscussions.map((discussion) => (
                    <Link
                      key={discussion.id}
                      href="#"
                      className="block bg-white rounded-[var(--radius-card)] p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-[hsl(var(--primary))] font-bold">
                            {discussion.author.charAt(0)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Title and Badges */}
                          <div className="flex items-start gap-3 mb-2">
                            {discussion.pinned && (
                              <Pin className="w-4 h-4 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                            )}
                            <h3 className="font-heading font-bold text-xl text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors flex-1">
                              {discussion.title}
                            </h3>
                          </div>

                          {/* Excerpt */}
                          <p className="text-[hsl(var(--muted-foreground))] mb-3 line-clamp-2">
                            {discussion.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                            <div className="flex items-center gap-1.5">
                              <span className="font-medium text-[hsl(var(--foreground))]">
                                {discussion.author}
                              </span>
                              <span>•</span>
                              <span>{discussion.createdAt}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{discussion.replyCount} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{discussion.viewCount} views</span>
                            </div>
                            <div className="px-2 py-1 bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] rounded-md text-xs font-medium">
                              {discussion.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-8 text-center">
                  <button className="bg-white text-[hsl(var(--foreground))] px-6 py-3 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.1)] transition-colors border border-[hsl(var(--border))]">
                    Load More Discussions
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Live Chat */}
                <LiveChat />

                {/* Community Stats */}
                <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-[hsl(var(--foreground))] mb-4">
                    COMMUNITY STATS
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                        <Users className="w-5 h-5" />
                        <span>Members</span>
                      </div>
                      <span className="font-bold text-[hsl(var(--foreground))] text-xl">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                        <MessageSquare className="w-5 h-5" />
                        <span>Discussions</span>
                      </div>
                      <span className="font-bold text-[hsl(var(--foreground))] text-xl">1,234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                        <TrendingUp className="w-5 h-5" />
                        <span>Active Today</span>
                      </div>
                      <span className="font-bold text-[hsl(var(--foreground))] text-xl">156</span>
                    </div>
                  </div>
                </div>

                {/* Popular Topics */}
                <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-[hsl(var(--foreground))] mb-4">
                    TRENDING TOPICS
                  </h3>
                  <div className="space-y-2">
                    {['Creative Process', 'Art Techniques', 'Music Production', 'Writing Tips', 'Book Recommendations'].map((topic) => (
                      <Link
                        key={topic}
                        href="#"
                        className="block px-3 py-2 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--accent)/0.1)] rounded-md text-sm font-medium text-[hsl(var(--foreground))] transition-colors"
                      >
                        #{topic.toLowerCase().replace(/ /g, '-')}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* New Discussion CTA */}
                <div className="bg-[hsl(var(--primary))] rounded-[var(--radius-card)] p-6 text-white">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    START A DISCUSSION
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Have something to share? Start a new discussion and connect with the community.
                  </p>
                  <button className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-4 py-3 rounded-md font-medium hover:bg-[hsl(var(--accent)/0.9)] transition-all">
                    Create New Topic
                  </button>
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
