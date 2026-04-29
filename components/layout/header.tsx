'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react';
import { useStore } from '@/components/store-provider';

export function Header() {
  const { cartCount, wishlist } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Rings', href: '/shop?category=Rings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Bridal', href: '/shop?category=Bridal' },
    { label: 'About', href: '/about' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#0F0F0F]/5 h-20 flex items-center ${isScrolled ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm' : 'bg-[#F8F5F0]'}`}>
      <div className="w-full px-8 md:px-12 flex justify-between items-center">
        
        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6 text-[#0F0F0F]" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold w-1/3">
          {navLinks.slice(0, 3).map(link => (
            <Link key={link.label} href={link.href} className="text-[#0F0F0F] hover:text-[#C9A646] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="w-1/3 flex justify-center">
          <Link href="/" className="font-serif text-3xl tracking-[0.3em] font-bold uppercase text-[#0F0F0F] flex flex-col items-center leading-none">
            Lumière
            <span className="text-[8px] tracking-[0.5em] mt-1 font-sans font-normal opacity-60">FINE JEWELRY</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-end gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold w-1/3">
          <Link href="/shop" className="text-[#0F0F0F] hover:text-[#C9A646] transition-colors hidden sm:block">
            Search
          </Link>
          <Link href="/wishlist" className="text-[#0F0F0F] hover:text-[#C9A646] transition-colors hidden sm:block">
            Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
          </Link>
          <Link href="#" className="text-[#0F0F0F] hover:text-[#C9A646] transition-colors hidden sm:block">
            Account
          </Link>
          <Link href="/cart" className="text-[#0F0F0F] hover:text-[#C9A646] transition-colors relative flex items-center gap-1">
            Bag
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#C9A646] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F8F5F0] z-50 flex flex-col p-6 animate-in slide-in-from-left">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-[0.3em] font-bold uppercase">Lumière</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-[#0F0F0F]" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-[#0F0F0F] hover:text-[#C9A646]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
