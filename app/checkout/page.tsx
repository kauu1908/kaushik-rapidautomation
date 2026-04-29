'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/components/store-provider';
import { formatPrice } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Lock, CreditCard, Apple, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // Simulate order processing
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-40 min-h-screen flex flex-col items-center justify-center border-t text-center px-4">
        <CheckCircle2 className="w-20 h-20 text-[#C9A646] mb-8" />
        <h1 className="font-serif text-4xl mb-4">Order Confirmed</h1>
        <p className="text-[#0F0F0F]/60 max-w-lg mb-10">Thank you for choosing Lumière. Your order #LMR-{Math.floor(100000 + Math.random() * 900000)} has been successfully placed. We have sent a confirmation email to your registered address.</p>
        <Button href="/shop">Return to Boutique</Button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-40 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl mb-4">Your Bag is Empty</h1>
        <Button href="/shop">Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-[#F8F5F0]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center gap-2 mb-12 text-[#0F0F0F] justify-center">
          <Lock className="w-5 h-5" />
          <h1 className="font-serif text-3xl">Secure Checkout</h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
          {/* Left: Form */}
          <div className="flex-1 bg-white p-8 md:p-12 shadow-sm rounded-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              
              {/* Contact Info */}
              <section>
                <div className="flex justify-between items-end mb-6 border-b pb-2">
                  <h2 className="font-serif text-2xl">Contact Information</h2>
                  <span className="text-sm">Already have an account? <Link href="#" className="underline">Log in</Link></span>
                </div>
                <div className="flex flex-col gap-4">
                  <input type="email" placeholder="Email Address" required className="w-full border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <label className="flex items-center gap-3 text-sm cursor-pointer mt-2">
                    <input type="checkbox" className="w-4 h-4 accent-[#C9A646]" defaultChecked />
                    Email me with news and exclusive offers
                  </label>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="font-serif text-2xl mb-6 border-b pb-2">Delivery Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="col-span-1 md:col-span-2 border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors appearance-none bg-white">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                  </select>
                  <input type="text" placeholder="First Name" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <input type="text" placeholder="Last Name" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <input type="text" placeholder="Address" required className="col-span-1 md:col-span-2 border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-1 md:col-span-2 border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <input type="text" placeholder="City" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-1">
                    <input type="text" placeholder="State/Province" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                    <input type="text" placeholder="ZIP/Postal Code" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                  </div>
                  <input type="tel" placeholder="Phone" required className="col-span-1 md:col-span-2 border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors" />
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="font-serif text-2xl mb-6 border-b pb-2">Payment</h2>
                <div className="flex flex-col gap-4">
                  <div className="border border-[#C9A646] bg-[#C9A646]/5 p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-3 font-medium cursor-pointer">
                        <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-[#0F0F0F]" />
                        Credit Card
                      </label>
                      <CreditCard className="w-5 h-5 text-[#0F0F0F]/60" />
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <input type="text" placeholder="Card Number" required className="w-full border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors bg-white" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Expiration date (MM / YY)" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors bg-white" />
                        <input type="text" placeholder="Security code" required className="border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors bg-white" />
                      </div>
                      <input type="text" placeholder="Name on card" required className="w-full border border-[#0F0F0F]/20 p-4 outline-none focus:border-[#C9A646] transition-colors bg-white" />
                    </div>
                  </div>
                  
                  <div className="border border-[#0F0F0F]/20 p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer text-[#0F0F0F]/60">
                    <label className="flex items-center gap-3 font-medium cursor-pointer">
                      <input type="radio" name="payment" className="w-4 h-4 accent-[#0F0F0F]" />
                      Apple Pay
                    </label>
                  </div>
                </div>
              </section>

              <Button type="submit" size="full" className="mt-4 text-base tracking-[0.2em]">
                Complete Order
              </Button>

            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="bg-white p-8 md:p-10 sticky top-32 shadow-sm rounded-sm">
              <h2 className="font-serif text-2xl mb-8 border-b pb-4">In your bag</h2>
              
              <div className="flex flex-col gap-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-center">
                    <div className="relative w-16 aspect-square bg-[#F8F5F0] shrink-0">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-[#0F0F0F] text-white text-[10px] rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif truncate">{item.product.name}</h3>
                      <p className="text-xs uppercase tracking-widest text-[#0F0F0F]/50 mt-1">{item.product.metal}</p>
                    </div>
                    <div className="text-sm font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mb-8">
                <input type="text" placeholder="Gift card or discount code" className="flex-1 border border-[#0F0F0F]/20 p-3 text-sm outline-none focus:border-[#C9A646]" />
                <Button size="sm" variant="outline">Apply</Button>
              </div>

              <div className="flex flex-col gap-4 text-sm mb-6 border-t border-[#0F0F0F]/10 pt-6">
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Shipping</span>
                  <span className="font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F0F0F]/70">Estimated Tax</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-[#0F0F0F]/10 pt-6">
                <span className="text-lg font-serif">Total</span>
                <span className="text-2xl font-serif">{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
