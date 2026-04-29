'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useStore } from '@/components/store-provider';

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price);
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="relative aspect-[4/5] bg-white overflow-hidden mb-4 p-6 flex items-center justify-center border border-[#0F0F0F]/5">
        <div className="w-full h-full relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="text-[#C9A646] text-[9px] uppercase tracking-[0.2em] font-bold">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="text-[#0F0F0F] text-[9px] uppercase tracking-[0.2em] font-bold">
              Best Seller
            </span>
          )}
        </div>
        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-0 inset-x-0 bg-[#0F0F0F]/90 text-[#F8F5F0] text-[10px] uppercase tracking-tighter py-3 text-center opacity-0 group-hover:opacity-100 transition-all font-semibold z-20"
        >
          Quick Add to Bag
        </button>
      </Link>

      {/* Details */}
      <div className="flex flex-col items-center text-center">
        <Link href={`/product/${product.id}`} className="font-serif text-sm text-[#0F0F0F] hover:text-[#C9A646] transition-colors">
          {product.name}
        </Link>
        <span className="text-xs font-sans text-[#0F0F0F]/50 mt-1">
          {product.metal}
        </span>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#C9A646] text-sm font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-[#0F0F0F]/40 line-through text-xs">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
