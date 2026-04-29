'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { Filter, ChevronDown } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParams || 'All');
  const [selectedMetal, setSelectedMetal] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('recommended');
  
  const allMetals = ['All', 'Yellow Gold', 'White Gold', 'Rose Gold', 'Platinum'];

  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (selectedMetal !== 'All') {
      result = result.filter(p => p.metal.includes(selectedMetal));
    }
    
    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    
    return result;
  }, [selectedCategory, selectedMetal, sortBy]);

  return (
    <div className="pt-24 min-h-screen">
      {/* Shop Header */}
      <div className="bg-[#0F0F0F] text-[#F8F5F0] py-20 text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl mb-6">High Jewelry Collection</h1>
        <p className="max-w-2xl mx-auto font-light text-[#F8F5F0]/70">Explore our masterful creations, featuring ethically sourced diamonds and extraordinary gemstones set in precious metals.</p>
      </div>

      <div className="section-padding">
        {/* Filters Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-[#0F0F0F]/10 mb-12 gap-6">
          <div className="flex items-center gap-6 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
            <span className="text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border-none text-sm uppercase tracking-wider outline-none text-[#0F0F0F]/70 hover:text-[#0F0F0F] cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>

            <select 
              value={selectedMetal}
              onChange={(e) => setSelectedMetal(e.target.value)}
              className="bg-transparent border-none text-sm uppercase tracking-wider outline-none text-[#0F0F0F]/70 hover:text-[#0F0F0F] cursor-pointer"
            >
              {allMetals.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#0F0F0F]/50">
              {filteredProducts.length} Results
            </span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none text-sm uppercase tracking-wider outline-none font-medium cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="newest">New Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="font-serif text-3xl mb-4">No pieces found</h2>
            <p className="text-[#0F0F0F]/60">Try adjusting your filters to discover more items.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSelectedMetal('All'); }}
              className="mt-8 text-sm uppercase tracking-widest underline underline-offset-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="pt-24 min-h-screen flex items-center justify-center">Loading collection...</div>}>
      <ShopContent />
    </Suspense>
  );
}
