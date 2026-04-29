import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'Eternity Diamond Ring',
    category: 'Rings',
    metal: 'Yellow Gold',
    price: 4500,
    originalPrice: 5200,
    description: 'A breathtaking 18K yellow gold band encrusted with hand-selected VS1 clarity diamonds, forming a seamless circle of brilliance that symbolizes eternal love. Certified and hallmarked for authenticity.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop'
    ],
    isBestSeller: true,
    rating: 4.9,
    reviews: 124,
    inStock: true,
    reviewsList: [
      {
        id: 'r-1',
        author: 'Eleanor Vance',
        rating: 5,
        text: 'Absolutely stunning ring! The craftsmanship is exceptional and the diamonds catch the light beautifully. I get compliments on it every single day. The sizing was perfect. Customer service was also incredibly helpful when I had questions about the shipping timeline.',
        date: '2023-11-15',
        helpfulness: 12
      },
      {
        id: 'r-2',
        author: 'Jonathan Crane',
        rating: 4,
        text: 'Bought this for my wife for our 10th anniversary. She loves it. Dropping one star only because the delivery was delayed by a day, but the packaging and the product itself are flawless.',
        date: '2023-10-02',
        helpfulness: 5
      },
      {
        id: 'r-3',
        author: 'Sophia Martinez',
        rating: 5,
        text: 'Perfect stackable ring. I paired it with my wedding band and it looks exquisite. The yellow gold has a very rich, warm tone.',
        date: '2024-01-22',
        helpfulness: 8
      }
    ]
  },
  {
    id: 'p-2',
    name: 'Sapphire Tear Drop Necklace',
    category: 'Necklaces',
    metal: 'White Gold',
    price: 8200,
    description: 'An elegant 18K white gold pendant featuring a deep ocean blue pear-shaped sapphire (1.5 carat), surrounded by a halo of brilliant-cut diamonds. Suspended on a delicate 18-inch chain.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  {
    id: 'p-3',
    name: 'Classic Solitaire Studs',
    category: 'Earrings',
    metal: 'Platinum',
    price: 12500,
    description: 'Timeless 950 Platinum stud earrings featuring two matched 1.0-carat round brilliant diamonds. Secure friction backs ensure comfortable, everyday wear.',
    purity: '950 Platinum',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635767798638-3e2528204bca?q=80&w=800&auto=format&fit=crop'
    ],
    isNew: true,
    rating: 5.0,
    reviews: 42,
    inStock: true
  },
  {
    id: 'p-4',
    name: 'Woven Rose Gold Bangle',
    category: 'Bracelets',
    metal: 'Rose Gold',
    price: 3800,
    description: 'A sophisticated 14K rose gold bangle featuring an intricate woven texture. Handcrafted by master artisans to deliver a comfortable fit with a concealed clasp.',
    purity: '14K',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop'
    ],
    isBestSeller: true,
    rating: 4.7,
    reviews: 215,
    inStock: true
  },
  {
    id: 'p-5',
    name: 'The Empress Bridal Set',
    category: 'Bridal',
    metal: 'White Gold',
    price: 24000,
    description: 'The ultimate symbol of commitment. A 2.5-carat center diamond set in 18K white gold, accompanied by an intricately matched diamond-encrusted wedding band.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviews: 18,
    inStock: true
  },
  {
    id: 'p-6',
    name: 'Emerald Cut Emerald Ring',
    category: 'Rings',
    metal: 'Yellow Gold',
    price: 7600,
    originalPrice: 8500,
    description: 'A vibrant 2.2-carat vivid green emerald set in an 18K yellow gold bezel, offering a modern take on a vintage-inspired design.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800&auto=format&fit=crop'
    ],
    isNew: true,
    rating: 4.8,
    reviews: 33,
    inStock: true
  },
  {
    id: 'p-7',
    name: 'Diamond Tennis Bracelet',
    category: 'Bracelets',
    metal: 'White Gold',
    price: 15400,
    description: 'Featuring 4 carats of perfectly matched diamonds set in continuous 18K white gold links. A luxurious staple that transitions flawlessly from day to night.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop'
    ],
    isBestSeller: true,
    rating: 4.9,
    reviews: 94,
    inStock: true
  },
  {
    id: 'p-8',
    name: 'Pearl Drop Earrings',
    category: 'Earrings',
    metal: 'Yellow Gold',
    price: 1800,
    description: 'Lustrous South Sea authentic pearls suspended from 18K yellow gold floral motifs detailed with delicate micro-pavé diamonds.',
    purity: '18K',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 110,
    inStock: true
  }
];

export const categories = [
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600&auto=format&fit=crop' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' },
  { name: 'Bridal', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop' }
];
