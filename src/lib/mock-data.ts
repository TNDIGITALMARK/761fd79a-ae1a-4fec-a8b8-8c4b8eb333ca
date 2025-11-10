// Mock data for Artifex Creative Portfolio
// This provides realistic sample content for all portfolio sections

export const mockPortfolioItems = [
  // Music
  {
    id: '1',
    type: 'music',
    title: 'Echoes of Tomorrow',
    description: 'A contemplative album exploring themes of time and memory',
    image: '/images/music/echoes-tomorrow.jpg',
    category: 'Album',
    link: '#'
  },
  {
    id: '2',
    type: 'music',
    title: 'Urban Legends',
    description: 'Electronic soundscapes inspired by city life',
    image: '/images/music/urban-legends.jpg',
    category: 'Album',
    link: '#'
  },

  // Books
  {
    id: '3',
    type: 'book',
    title: 'Digital Dreams and Analog Hearts',
    description: 'A collection of stories about technology and humanity',
    image: '/images/books/digital-dreams.jpg',
    category: 'Novel',
    link: '#'
  },
  {
    id: '4',
    type: 'book',
    title: 'Whispers of the Forgotten',
    description: 'Poetry exploring loss, memory, and rediscovery',
    image: '/images/books/whispers.jpg',
    category: 'Poetry',
    link: '#'
  },

  // Art
  {
    id: '5',
    type: 'art',
    title: 'Urban Symphony Series',
    description: 'Mixed media explorations of metropolitan chaos and beauty',
    image: '/images/art/urban-symphony.jpg',
    category: 'Series',
    link: '#'
  },
  {
    id: '6',
    type: 'art',
    title: 'Celestial Gardens',
    description: 'Digital paintings merging botanical and cosmic themes',
    image: '/images/art/celestial-gardens.jpg',
    category: 'Digital Art',
    link: '#'
  }
];

export const mockBlogPosts = [
  {
    id: '1',
    title: 'Journey Through Sound',
    excerpt: 'Reflecting on the creative process behind my latest album and the stories that shaped it.',
    coverImage: '/images/blog/journey-sound.jpg',
    author: 'Artifex',
    date: '2025-03-15',
    readTime: '5 min read',
    tags: ['Music', 'Process']
  },
  {
    id: '2',
    title: 'Life as Pages',
    excerpt: 'Why I decided to compile years of scattered thoughts into a cohesive narrative.',
    coverImage: '/images/blog/life-pages.jpg',
    author: 'Artifex',
    date: '2025-03-10',
    readTime: '8 min read',
    tags: ['Writing', 'Reflection']
  },
  {
    id: '3',
    title: 'Beautiful Chaos',
    excerpt: 'Finding inspiration in the unexpected intersections of urban life and natural patterns.',
    coverImage: '/images/blog/beautiful-chaos.jpg',
    author: 'Artifex',
    date: '2025-03-05',
    readTime: '6 min read',
    tags: ['Art', 'Inspiration']
  },
  {
    id: '4',
    title: 'Creative Ritual',
    excerpt: 'The daily practices that help me maintain creative flow across multiple mediums.',
    coverImage: '/images/blog/creative-ritual.jpg',
    author: 'Artifex',
    date: '2025-02-28',
    readTime: '7 min read',
    tags: ['Process', 'Lifestyle']
  },
  {
    id: '5',
    title: 'Creating a World',
    excerpt: 'How building fictional universes in writing influences my visual art practice.',
    coverImage: '/images/blog/creating-world.jpg',
    author: 'Artifex',
    date: '2025-02-20',
    readTime: '9 min read',
    tags: ['Writing', 'Art']
  },
  {
    id: '6',
    title: 'Beyond Comfort',
    excerpt: 'Pushing creative boundaries by deliberately working in unfamiliar styles and mediums.',
    coverImage: '/images/blog/beyond-comfort.jpg',
    author: 'Artifex',
    date: '2025-02-15',
    readTime: '5 min read',
    tags: ['Growth', 'Experimentation']
  }
];

export const mockMerchProducts = [
  {
    id: '1',
    name: 'Limited Edition Art Print',
    description: 'Museum-quality print from the Urban Symphony series',
    price: 45.00,
    image: '/images/merch/art-print.jpg',
    category: 'Art Prints',
    featured: true
  },
  {
    id: '2',
    name: 'Signed Book Bundle',
    description: 'Complete collection of published works with author signature',
    price: 75.00,
    image: '/images/merch/book-bundle.jpg',
    category: 'Books',
    featured: true
  },
  {
    id: '3',
    name: 'Music Vinyl Collection',
    description: 'All three albums on limited edition colored vinyl',
    price: 120.00,
    image: '/images/merch/vinyl-collection.jpg',
    category: 'Music',
    featured: true
  },
  {
    id: '4',
    name: 'Artifex Logo T-Shirt',
    description: 'Premium cotton tee with gold foil logo',
    price: 28.00,
    image: '/images/merch/tshirt.jpg',
    category: 'Apparel',
    featured: false
  },
  {
    id: '5',
    name: 'Art Sticker Pack',
    description: 'Set of 12 die-cut stickers featuring artwork highlights',
    price: 12.00,
    image: '/images/merch/stickers.jpg',
    category: 'Accessories',
    featured: false
  },
  {
    id: '6',
    name: 'Creative Process Zine',
    description: 'Behind-the-scenes look at the creative workflow',
    price: 15.00,
    image: '/images/merch/zine.jpg',
    category: 'Publications',
    featured: false
  }
];

export const mockDiscussions = [
  {
    id: '1',
    title: 'Favorite Creative Inspirations',
    author: 'Sarah Chen',
    authorAvatar: '/images/avatars/sarah.jpg',
    replyCount: 24,
    viewCount: 156,
    category: 'General',
    excerpt: 'What artists, musicians, or writers inspire your own creative work? Let\'s share!',
    createdAt: '2025-03-14',
    pinned: true
  },
  {
    id: '2',
    title: 'Urban Symphony: Hidden Details',
    author: 'Marcus Rivera',
    authorAvatar: '/images/avatars/marcus.jpg',
    replyCount: 18,
    viewCount: 89,
    category: 'Art Discussion',
    excerpt: 'I noticed some fascinating details in the corner of piece #7. What else have people discovered?',
    createdAt: '2025-03-13',
    pinned: false
  },
  {
    id: '3',
    title: 'Book Club: Digital Dreams Chapter 3',
    author: 'Emma Thompson',
    authorAvatar: '/images/avatars/emma.jpg',
    replyCount: 31,
    viewCount: 142,
    category: 'Book Club',
    excerpt: 'The themes in this chapter really resonated with me. Anyone else feel the same?',
    createdAt: '2025-03-12',
    pinned: false
  },
  {
    id: '4',
    title: 'Echoes of Tomorrow: Favorite Tracks',
    author: 'Alex Wu',
    authorAvatar: '/images/avatars/alex.jpg',
    replyCount: 42,
    viewCount: 203,
    category: 'Music',
    excerpt: 'Track 5 has been on repeat for days. What are your standouts from the album?',
    createdAt: '2025-03-11',
    pinned: false
  }
];

export const mockChatMessages = [
  {
    id: '1',
    username: 'Maya',
    avatar: '/images/avatars/maya.jpg',
    message: 'Just finished reading Digital Dreams - absolutely stunning!',
    timestamp: '2025-03-15T14:32:00Z'
  },
  {
    id: '2',
    username: 'Jordan',
    avatar: '/images/avatars/jordan.jpg',
    message: 'The new art series dropped! 🎨',
    timestamp: '2025-03-15T14:35:00Z'
  },
  {
    id: '3',
    username: 'Riley',
    avatar: '/images/avatars/riley.jpg',
    message: 'Anyone going to the gallery opening next week?',
    timestamp: '2025-03-15T14:38:00Z'
  }
];
