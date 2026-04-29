'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1920&auto=format&fit=crop" alt="Lumière Workshop" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0F0F0F]/40" />
        <div className="relative text-center text-[#F8F5F0] max-w-3xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="text-lg md:text-xl font-light">Crafting brilliant moments since 1985.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1000px] mx-auto px-4 py-24 text-center">
        <span className="text-[#C9A646] text-sm uppercase tracking-[0.3em] mb-6 block">The Heritage</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-12 leading-tight">Beyond exceptional craftsmanship, we deliver a promise of unconditional quality.</h2>
        
        <div className="text-left text-[#0F0F0F]/80 space-y-8 text-lg font-light leading-relaxed">
          <p>
            Founded in Paris, Lumière began as a humble atelier dedicated to the art of fine jewelry. For decades, our master jewelers have passed down techniques that seamlessly blend classical elegance with modern innovation. Each piece that leaves our workshop is a testament to this enduring legacy.
          </p>
          <p>
            We believe that true luxury lies in the details. From the initial sketch to the final polish, our process involves over 120 hours of meticulous handcrafting by certified artisans. We source only the top 1% of the world's diamonds, ensuring that every facet captures and returns maximum light.
          </p>
          <p>
            But Lumière is more than just jewelry. It's about marking life's most unforgettable milestones. Whether it's the ring that says "forever," the necklace that celebrates an anniversary, or the earrings that mark a personal victory—we create heirlooms meant to be cherished across generations.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#F8F5F0] py-24">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-[#0F0F0F]">Ethical Sourcing</h3>
            <p className="text-[#0F0F0F]/70 font-light text-sm leading-relaxed">We strictly adhere to the Kimberley Process, ensuring every gemstone and diamond is conflict-free and responsibly sourced.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-[#0F0F0F]">Master Craftsmanship</h3>
            <p className="text-[#0F0F0F]/70 font-light text-sm leading-relaxed">Our artisans spend years perfecting their craft. We never compromise on the time required to build perfection.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-[#0F0F0F]">Timeless Design</h3>
            <p className="text-[#0F0F0F]/70 font-light text-sm leading-relaxed">While styles evolve, true elegance remains. Our designs are intentionally crafted to transcend fleeting seasonal trends.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
