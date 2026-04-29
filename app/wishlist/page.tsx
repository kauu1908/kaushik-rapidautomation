'use client';

import React from 'react';
import { useStore } from '@/components/store-provider';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function Wishlist() {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="pt-32 pb-40 min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F8F5F0]">
        <Heart className="w-16 h-16 text-[#0F0F0F]/20 mb-6" />
        <h1 className="font-serif text-4xl mb-6">Your Wishlist is Empty</h1>
        <p className="text-[#0F0F0F]/60 mb-10 max-w-md">Save your favorite pieces to view them later or share with a loved one.</p>
        <Button href="/shop">Explore Collection</Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Your Wishlist</h1>
          <p className="text-[#0F0F0F]/60 tracking-widest uppercase text-sm">
            {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} Saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
