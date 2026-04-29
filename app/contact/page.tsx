import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-[#C9A646] mb-6">Get in Touch</h2>
              <p className="text-[#0F0F0F]/80 font-light text-lg leading-relaxed mb-8">
                Our dedicated client care team is available to assist you with styling advice, bespoke orders, or any inquiries regarding our collections.
              </p>
            </div>
            
            <div className="space-y-6 text-[#0F0F0F]/80 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#C9A646]" />
                <div>
                  <strong className="block font-medium mb-1 text-[#0F0F0F]">Lumière Flagship</strong>
                  15 Place Vendôme<br />
                  75001 Paris, France
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 shrink-0 text-[#C9A646]" />
                <div>+33 1 42 60 00 00</div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 shrink-0 text-[#C9A646]" />
                <div>concierge@lumiere.com</div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 shrink-0 text-[#C9A646]" />
                <div>
                  Monday - Saturday: 10:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F8F5F0] p-8 md:p-12">
            <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Full Name" className="w-full border-b border-[#0F0F0F]/20 bg-transparent py-3 outline-none focus:border-[#C9A646] transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full border-b border-[#0F0F0F]/20 bg-transparent py-3 outline-none focus:border-[#C9A646] transition-colors" />
              </div>
              <div>
                <select className="w-full border-b border-[#0F0F0F]/20 bg-transparent py-3 outline-none focus:border-[#C9A646] transition-colors text-[#0F0F0F]/70 appearance-none">
                  <option value="">Subject</option>
                  <option value="bespoke">Bespoke Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="styling">Styling Advice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message" className="w-full border-b border-[#0F0F0F]/20 bg-transparent py-3 outline-none focus:border-[#C9A646] transition-colors resize-none"></textarea>
              </div>
              <Button type="button" size="full" className="mt-4">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
