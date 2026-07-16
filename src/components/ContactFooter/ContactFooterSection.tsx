import TopCTAPanel from "./TopCTAPanel";
import ContactGrid from "./ContactGrid";
import Footer from "./Footer";

export default function ContactFooterSection() {
  return (
    <section id="contact" className="relative w-full bg-[#050505] text-white overflow-hidden py-16 lg:py-24">
      {/* Subtle Noise Texture Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col">
        
        {/* Top CTA Panel */}
        <TopCTAPanel />
        
        {/* Contact Grid */}
        <ContactGrid />
        
        {/* Footer */}
        <Footer />
        
      </div>
    </section>
  );
}
