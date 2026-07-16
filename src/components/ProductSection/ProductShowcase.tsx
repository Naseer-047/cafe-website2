import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import type { MenuItem } from '../../data/menu';

export default function ProductShowcase({ product }: { product: MenuItem }) {
  const navigate = useNavigate();
  const [activeThumb, setActiveThumb] = useState(0);

  // Since we only have one cutout image per product usually, we'll repeat its image for the thumbnails demo
  const thumbnails = Array(5).fill(product.image);

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      
      {/* 1. BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background.png")' }}
      ></div>

      {/* 2. TOP BACK BUTTON */}
      <div className="relative z-20 pt-8 px-6 sm:pt-12 sm:px-12 flex justify-between items-start">
        <button 
          onClick={() => navigate('/menu')}
          className="flex items-center gap-3 text-white font-inter text-[15px] group hover:text-[#FFC107] transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center group-hover:border-[#FFC107] transition-colors bg-black/20 backdrop-blur-sm">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </div>
          Back to Menu
        </button>
      </div>

      {/* 3. MAIN PRODUCT COMPOSITION */}
      <div className="relative z-10 flex-1 flex items-center justify-center -mt-10 sm:-mt-20 pointer-events-none">
        <motion.img 
          key={product.id} // Re-animate if product changes
          src={product.image} 
          alt={product.title} 
          className="w-[90%] sm:w-[80%] max-w-[700px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 1 },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }}
        />
      </div>

      {/* 4. BOTTOM AREA (Thumbnails + Features) */}
      <div className="relative z-20 flex flex-col w-full px-6 sm:px-12 pb-8 sm:pb-12 mt-auto">
        
        {/* Thumbnail Gallery */}
        <div className="flex items-center gap-2 sm:gap-4 mb-10 max-w-full overflow-x-auto no-scrollbar lg:mx-0">
          <button className="text-[rgba(255,255,255,0.4)] hover:text-white transition-colors shrink-0 hidden sm:block">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-3 sm:gap-4 shrink-0 px-2 sm:px-0">
            {thumbnails.map((thumb, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveThumb(idx)}
                className={`relative w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] rounded-[12px] overflow-hidden border-2 transition-all duration-300 bg-black/40 backdrop-blur-md ${
                  activeThumb === idx ? 'border-[#FFC107] shadow-[0_0_15px_rgba(255,193,7,0.3)]' : 'border-[rgba(255,255,255,0.1)] opacity-70 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {/* Displaying thumbnail cutout over black/blur */}
                <img src={thumb} alt={`Thumbnail ${idx}`} className="absolute inset-0 w-full h-full object-contain p-1" />
                {idx === 4 && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          
          <button className="text-[rgba(255,255,255,0.4)] hover:text-white transition-colors shrink-0 hidden sm:block">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[rgba(255,255,255,0.08)] pt-8">
          
          <div className="flex items-center gap-3">
            <div className="text-[#FFC107]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[16px] leading-none mb-0.5">100% REAL CHICKEN</span>
              <span className="text-[#BDBDBD] text-[12px] font-inter">Premium Quality</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-[#FFC107]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[16px] leading-none mb-0.5">MADE FRESH</span>
              <span className="text-[#BDBDBD] text-[12px] font-inter">Every Single Day</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-[#FFC107]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[16px] leading-none mb-0.5">FAST DELIVERY</span>
              <span className="text-[#BDBDBD] text-[12px] font-inter">At Your Doorstep</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-[#FFC107]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[16px] leading-none mb-0.5">SAFE & HYGIENIC</span>
              <span className="text-[#BDBDBD] text-[12px] font-inter">Always Clean</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
