import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';
import { products, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full pt-20 bg-[#EAE7E2] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/10 to-transparent z-10 pointer-events-none"></div>
        
        <div className="z-20 p-8 md:p-16 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center relative">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left z-30">
            <span className="text-[#C9A646] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              Spring Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 font-serif max-w-lg text-[#0F0F0F]">
              Elegance Defined in Gold.
            </h1>
            <div className="flex gap-6 items-center flex-wrap">
              <Button href="/shop" variant="primary">
                Shop The Collection
              </Button>
              <Button href="/about" variant="outline">
                Explore Our Story
              </Button>
            </div>
          </div>
          
          <div className="absolute md:relative md:-mr-[10%] right-[-10%] md:right-auto top-1/2 md:top-auto -translate-y-1/2 md:transform-none w-[70%] md:w-[60%] h-[80%] md:h-[600px] md:rotate-6 rotate-12 bg-[#D4CFCA] border border-white/20 shadow-2xl overflow-hidden z-10 opacity-30 md:opacity-100">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-[#F8F5F0] border-t border-[#0F0F0F]/5">
        <div className="mb-12 flex justify-between items-end border-b border-[#0F0F0F]/5 pb-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F0F0F]">Curated Collections</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 4).map((category, index) => (
            <Link 
              key={category.name} 
              href={`/shop?category=${category.name}`}
              className="group relative aspect-[3/4] overflow-hidden block bg-white border border-[#0F0F0F]/5 p-4"
            >
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
              </div>
              <div className="absolute inset-x-0 bottom-4 text-center z-20">
                <span className="bg-white/90 backdrop-blur text-[#0F0F0F] text-[10px] uppercase font-semibold tracking-[0.2em] px-6 py-2 border border-[#0F0F0F]/10">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-[#F8F5F0]">
        <div className="mb-12 flex justify-between items-end border-b border-[#0F0F0F]/5 pb-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F0F0F]">Featured Selection</h2>
          <Link href="/shop" className="text-[10px] uppercase tracking-widest text-[#C9A646] font-bold border-b border-[#C9A646]/30 pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Banner - Editorial Style */}
      <section className="h-32 bg-[#0F0F0F] flex items-center justify-around px-8 border-t border-white/10 shrink-0">
        <div className="text-center">
          <p className="text-[#C9A646] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Certified</p>
          <p className="text-[#F8F5F0]/60 text-[9px] uppercase">GIA Assurance</p>
        </div>
        <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
        <div className="text-center">
          <p className="text-[#C9A646] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Secure</p>
          <p className="text-[#F8F5F0]/60 text-[9px] uppercase">Encrypted Checkout</p>
        </div>
        <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
        <div className="text-center">
          <p className="text-[#C9A646] text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Global</p>
          <p className="text-[#F8F5F0]/60 text-[9px] uppercase">Insured Shipping</p>
        </div>
      </section>
    </>
  );
}
