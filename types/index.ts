export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  helpfulness: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Bridal';
  metal: 'Yellow Gold' | 'White Gold' | 'Rose Gold' | 'Platinum';
  price: number;
  originalPrice?: number;
  description: string;
  purity: '14K' | '18K' | '22K' | '24K' | '950 Platinum';
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviews: number;
  inStock: boolean;
  reviewsList?: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
