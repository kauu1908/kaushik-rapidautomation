import type {Metadata} from 'next';
import { Inter, Cinzel } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/components/store-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'Lumière | Luxury Jewelry',
  description: 'Exquisite luxury jewelry, crafted for distinction.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <StoreProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
