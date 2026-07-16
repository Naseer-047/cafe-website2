import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ComboBanner() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 max-w-[1920px] mx-auto z-10 relative pb-24">
      <motion.div 
        className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 lg:p-8 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Left - Title */}
        <div className="flex items-center gap-6 w-full xl:w-auto">
          <div className="w-16 h-16 rounded-full border border-[#F4B400] flex items-center justify-center shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bebas text-[#F4B400] text-[32px] sm:text-[38px] tracking-wide uppercase leading-none mb-1">
              FEED THE CREW
            </h3>
            <p className="font-inter text-[#A8A8A8] text-[15px]">
              Perfect combos for family & friends.
            </p>
          </div>
        </div>

        {/* Center - Breakdown */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full xl:w-auto xl:border-l xl:border-[rgba(255,255,255,0.1)] xl:pl-8">
          
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A8A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.5 12.5a5 5 0 0 1-7.07-7.07l1.41-1.42a5 5 0 0 1 7.07 7.07Z" />
              <path d="M12.5 12.5 16 16l4-4-3.5-3.5" />
              <path d="M18.5 13.5a2.12 2.12 0 0 1 0 3l-1.5 1.5a2.12 2.12 0 0 1-3 0" />
            </svg>
            <div className="flex flex-col">
              <span className="font-bebas text-white text-[20px] sm:text-[22px] tracking-wide uppercase leading-none mb-1">4 PCS CHICKEN</span>
              <span className="font-inter text-[#A8A8A8] text-[13px] leading-none">(Any Flavor)</span>
            </div>
          </div>

          <span className="text-white font-bebas text-[24px]">+</span>

          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A8A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9h16v3c0 3.31-2.69 6-6 6H10c-3.31 0-6-2.69-6-6V9z" />
              <path d="M6 3v6" />
              <path d="M10 2v7" />
              <path d="M14 3v6" />
              <path d="M18 2v7" />
            </svg>
            <div className="flex flex-col">
              <span className="font-bebas text-white text-[20px] sm:text-[22px] tracking-wide uppercase leading-none mb-1">2 FRIES</span>
              <span className="font-inter text-[#A8A8A8] text-[13px] leading-none">(Large)</span>
            </div>
          </div>

          <span className="text-white font-bebas text-[24px]">+</span>

          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A8A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16" />
              <path d="m5 2 2 20" />
              <path d="m19 2-2 20" />
              <path d="m10 2 1.5 5" />
              <path d="M5 6h14" />
            </svg>
            <div className="flex flex-col">
              <span className="font-bebas text-white text-[20px] sm:text-[22px] tracking-wide uppercase leading-none mb-1">4 DRINKS</span>
              <span className="font-inter text-[#A8A8A8] text-[13px] leading-none">(Regular)</span>
            </div>
          </div>

        </div>

        {/* Right - Price & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full xl:w-auto xl:border-l xl:border-[rgba(255,255,255,0.1)] xl:pl-8">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-inter font-semibold text-[#A8A8A8] text-[12px] tracking-widest uppercase mb-1">FOR ONLY</span>
            <span className="font-bebas text-white text-[48px] leading-none tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">₹999</span>
          </div>

          <button className="w-full sm:w-auto bg-[#F4B400] text-[#050505] font-inter font-bold text-[18px] py-4 px-8 rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#ffc21a] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)] transition-all duration-300 whitespace-nowrap">
            ORDER COMBO
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </motion.div>
    </section>
  );
}
