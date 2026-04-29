'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { useStore } from '@/components/store-provider';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/components/ui/product-card';
import { ShieldCheck, Truck, RotateCcw, Heart, Star } from 'lucide-react';
import { ProductReviews } from '@/components/product-reviews';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Images Section */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 md:w-full shrink-0 overflow-hidden border transition-colors ${activeImage === idx ? 'border-[#0F0F0F]' : 'border-transparent'}`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative aspect-[3/4] w-full bg-[#F8F5F0]">
              <Image 
                src={product.images[activeImage]} 
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col pt-4">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm uppercase tracking-widest text-[#0F0F0F]/60">{product.category}</span>
              <button onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}>
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-[#0F0F0F] text-[#0F0F0F]' : 'text-[#0F0F0F]'}`} />
              </button>
            </div>
            
            <h1 className="font-serif text-4xl lg:text-5xl mb-6">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-[#C9A646] text-[#C9A646]' : 'fill-[#E6E6E6] text-[#E6E6E6]'}`} />
                ))}
              </div>
              <span className="text-sm text-[#0F0F0F]/60 underline">{product.reviews} reviews</span>
            </div>

            <div className="flex items-end gap-4 mb-8 pb-8 border-b border-[#0F0F0F]/10">
              <span className="text-2xl font-medium tracking-wide">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-[#0F0F0F]/40 line-through tracking-wide mb-0.5">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <p className="text-[#0F0F0F]/80 leading-relaxed mb-10 font-light">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-y-4 mb-10 text-sm">
              <div className="flex flex-col">
                <span className="text-[#0F0F0F]/50 uppercase tracking-widest text-xs mb-1">Metal</span>
                <span className="font-medium">{product.metal}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#0F0F0F]/50 uppercase tracking-widest text-xs mb-1">Purity</span>
                <span className="font-medium">{product.purity}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              {product.inStock ? (
                <>
                  <Button size="full" onClick={() => addToCart(product, 1)}>
                    Add to Cart
                  </Button>
                </>
              ) : (
                <Button size="full" variant="outline" disabled>
                  Out of Stock
                </Button>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#0F0F0F]/10">
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#C9A646]" />
                <span className="text-xs uppercase tracking-widest">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Truck className="w-6 h-6 text-[#C9A646]" />
                <span className="text-xs uppercase tracking-widest">Free Secured Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <RotateCcw className="w-6 h-6 text-[#C9A646]" />
                <span className="text-xs uppercase tracking-widest">30-Day Returns</span>
              </div>
            </div>
            
            {/* Reviews Section */}
            <ProductReviews initialReviews={product.reviewsList || []} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
