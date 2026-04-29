import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#F8F5F0] text-[#0F0F0F] py-16 md:py-20 border-t border-[#0F0F0F]/5 shrink-0">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="font-serif text-2xl tracking-[0.3em] font-bold uppercase mb-6 flex flex-col items-start leading-none">
            Lumière
            <span className="text-[8px] tracking-[0.5em] mt-1 font-sans font-normal opacity-60">FINE JEWELRY</span>
          </div>
          <p className="text-[#0F0F0F]/60 text-xs leading-relaxed mb-6 max-w-xs font-light">
            Exquisite luxury jewelry, crafted for distinction. We create timeless pieces that celebrate life's most precious moments.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Collections</h3>
          <ul className="flex flex-col gap-4 text-[#0F0F0F]/60 text-xs font-light">
            <li><Link href="/shop?category=Rings" className="hover:text-[#C9A646] transition-colors">Engagement Rings</Link></li>
            <li><Link href="/shop?category=Necklaces" className="hover:text-[#C9A646] transition-colors">Fine Necklaces</Link></li>
            <li><Link href="/shop?category=Bracelets" className="hover:text-[#C9A646] transition-colors">Bracelets</Link></li>
            <li><Link href="/shop?category=Earrings" className="hover:text-[#C9A646] transition-colors">Earrings</Link></li>
            <li><Link href="/shop?category=Bridal" className="hover:text-[#C9A646] transition-colors">Bridal Collection</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Client Care</h3>
          <ul className="flex flex-col gap-4 text-[#0F0F0F]/60 text-xs font-light">
            <li><Link href="/contact" className="hover:text-[#C9A646] transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-[#C9A646] transition-colors">FAQ</Link></li>
            <li><Link href="/policies#shipping" className="hover:text-[#C9A646] transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/policies#privacy" className="hover:text-[#C9A646] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Journal</h3>
          <p className="text-[#0F0F0F]/60 text-xs leading-relaxed mb-4 font-light">
            Subscribe to receive updates on new arrivals and exclusive collections.
          </p>
          <form className="flex border-b border-[#0F0F0F]/20 pb-2 mt-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none outline-none text-xs w-full text-[#0F0F0F] placeholder-[#0F0F0F]/40"
            />
            <button type="button" className="text-[10px] uppercase tracking-widest hover:text-[#C9A646] font-semibold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        
      </div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 mt-16 pt-8 border-t border-[#0F0F0F]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-widest font-semibold opacity-60">
        <p>© {new Date().getFullYear()} Lumière Haute Joaillerie</p>
        <div className="flex gap-8">
          <Link href="/policies#shipping" className="hover:text-[#C9A646]">Shipping & Returns</Link>
          <Link href="/policies#privacy" className="hover:text-[#C9A646]">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#C9A646]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
