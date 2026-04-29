import React from 'react';

export default function Policies() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">Store Policies</h1>
        
        <div className="space-y-16">
          
          <section id="shipping">
            <h2 className="font-serif text-2xl mb-6 text-[#C9A646]">Shipping & Delivery</h2>
            <div className="prose prose-sm text-[#0F0F0F]/80 font-light leading-relaxed space-y-4">
              <p>Lumière offers complimentary insured priority shipping on all orders worldwide. Every piece is carefully packaged in our signature unbranded outer box for discretion.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Domestic Orders (US):</strong> 2-3 business days via priority overnight.</li>
                <li><strong>International Orders:</strong> 3-7 business days depending on customs clearance.</li>
                <li><strong>Bespoke Items:</strong> Require 4-6 weeks for crafting prior to shipment.</li>
              </ul>
              <p>All deliveries require an adult signature upon receipt. We cannot ship to P.O. boxes.</p>
            </div>
          </section>

          <section id="returns">
            <h2 className="font-serif text-2xl mb-6 text-[#C9A646]">Returns & Exchanges</h2>
            <div className="prose prose-sm text-[#0F0F0F]/80 font-light leading-relaxed space-y-4">
              <p>Your satisfaction is our absolute priority. We accept returns or exchanges for unworn jewelry in perfect condition within 30 days of delivery.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Items must be returned in their original packaging, complete with all certificates and documentation.</li>
                <li>Customized, engraved, or altered pieces (including ring sizing beyond standard sizes) are final sale.</li>
                <li>Please contact our Client Care team to initiate a return and receive a prepaid, fully insured shipping label.</li>
              </ul>
              <p>Refunds are processed to the original payment method within 5-7 business days after the returned item passes our quality inspection.</p>
            </div>
          </section>

          <section id="privacy">
            <h2 className="font-serif text-2xl mb-6 text-[#C9A646]">Privacy Policy</h2>
            <div className="prose prose-sm text-[#0F0F0F]/80 font-light leading-relaxed space-y-4">
              <p>Lumière respects your privacy and ensures the highest level of security for your personal data. We collect information necessary to process your orders, provide styling advice, and enhance your shopping experience.</p>
              <p>We do not sell or share your personal information with third parties for their independent marketing use. All payment transactions are encrypted using advanced secure socket layer technology (SSL).</p>
            </div>
          </section>

          <section id="warranty">
            <h2 className="font-serif text-2xl mb-6 text-[#C9A646]">Lifetime Warranty</h2>
            <div className="prose prose-sm text-[#0F0F0F]/80 font-light leading-relaxed space-y-4">
              <p>We stand behind the exceptional quality of our craftsmanship. Lumière provides a lifetime warranty against any manufacturing defects.</p>
              <p>This warranty covers defects in the material and workmanship, but does not cover wear and tear, trauma, negligence, or damage caused by repairs performed by a jeweler other than Lumière.</p>
              <p>We offer complimentary center stone tightening, cleaning, and prong checks to all our clients. We recommend having your jewelry professionally inspected annually.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
