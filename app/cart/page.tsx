'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/components/store-provider';
import { formatPrice } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-40 min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F8F5F0]">
        <h1 className="font-serif text-4xl mb-6">Your Shopping Bag is Empty</h1>
        <p className="text-[#0F0F0F]/60 mb-10 max-w-md">Looks like you haven't added any elegant pieces to your collection yet.</p>
        <Button href="/shop" variant="primary">Continue Shopping</Button>
      </div>
    );
  }

  const tax = cartTotal * 0.08; // Example 8% tax
  const finalTotal = cartTotal + tax;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl mb-12 text-center md:text-left">Shopping Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col gap-8">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-[#0F0F0F]/10 text-xs uppercase tracking-widest text-[#0F0F0F]/60">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>
            
            {cart.map((item) => (
              <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-[#0F0F0F]/5">
                {/* Mobile: Product Info */}
                <div className="col-span-1 flex md:hidden items-start justify-between w-full">
                  <div className="flex gap-4">
                    <div className="relative w-20 aspect-square bg-[#F8F5F0]">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div>
                      <Link href={`/product/${item.product.id}`} className="font-serif text-lg leading-tight mb-1 block">
                        {item.product.name}
                      </Link>
                      <span className="text-xs uppercase tracking-widest text-[#0F0F0F]/60">{item.product.metal}</span>
                      <div className="mt-2 text-sm">{formatPrice(item.product.price)}</div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-[#0F0F0F]/40 hover:text-[#0F0F0F]">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Desktop: Product Info */}
                <div className="hidden md:flex col-span-6 gap-6 items-center">
                  <Link href={`/product/${item.product.id}`} className="relative w-24 aspect-[3/4] bg-[#F8F5F0] shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </Link>
                  <div>
                    <Link href={`/product/${item.product.id}`} className="font-serif text-xl hover:text-[#C9A646] transition-colors mb-2 block">
                      {item.product.name}
                    </Link>
                    <span className="text-xs uppercase tracking-widest text-[#0F0F0F]/60 block mb-2">{item.product.metal}</span>
                    <span className="text-sm font-medium">{formatPrice(item.product.price)}</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-center items-center w-full md:w-auto">
                  <span className="md:hidden text-xs uppercase tracking-widest text-[#0F0F0F]/60">Quantity</span>
                  <div className="flex items-center border border-[#0F0F0F]/20 rounded-full bg-[#F8F5F0]">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-3 text-[#0F0F0F]/60 hover:text-[#0F0F0F]">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-3 text-[#0F0F0F]/60 hover:text-[#0F0F0F]">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Desktop: Total */}
                <div className="hidden md:block col-span-2 text-right font-medium">
                  {formatPrice(item.product.price * item.quantity)}
                </div>

                {/* Desktop: Remove */}
                <div className="hidden md:flex col-span-1 justify-end">
                  <button onClick={() => removeFromCart(item.product.id)} className="p-2 text-[#0F0F0F]/40 hover:text-[#0F0F0F] transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-[#F8F5F0] p-8 md:p-10 sticky top-32">
              <h2 className="font-serif text-2xl mb-8">Order Summary</h2>
              
              <div className="flex flex-col gap-4 text-sm mb-8 pb-8 border-b border-[#0F0F0F]/10">
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Estimated Shipping</span>
                  <span className="font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Estimated Tax</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-base font-semibold uppercase tracking-widest">Total</span>
                <span className="text-2xl font-serif">{formatPrice(finalTotal)}</span>
              </div>

              <Button href="/checkout" size="full" className="mb-4">
                Proceed to Checkout
              </Button>
              <div className="text-center text-xs text-[#0F0F0F]/50 tracking-wider">
                Secure checkout provided by Lumière.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
