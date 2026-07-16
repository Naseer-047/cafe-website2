import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function TopCTAPanel() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleOrderNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/menu');
    }
  };

  return (
    <motion.div 
      className="w-full bg-[#0E0E0E] rounded-[24px] border border-[rgba(255,255,255,0.08)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Column 1: LET'S TALK */}
      <div className="relative flex-1 w-full flex items-center justify-center lg:justify-start">
        {/* Orange Decorative Spikes */}
        <svg className="absolute -left-4 md:-left-8 top-4 md:top-8 w-[32px] md:w-[42px] opacity-80" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8 19.3L15.9 14.2M5.7 32L14.2 26.9M22.7 7.4L27.8 12.5" stroke="#F25C05" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="flex flex-col font-bebas leading-[0.85] tracking-wide text-[100px] sm:text-[120px] lg:text-[140px] uppercase">
          <span className="text-white text-center lg:text-left drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] opacity-95">LET'S</span>
          <span className="text-[#FFC62A] text-center lg:text-left drop-shadow-[0_0_15px_rgba(255,198,42,0.1)]">TALK.</span>
        </div>

        {/* Orange Decorative Spikes Right */}
        <svg className="absolute right-0 md:right-12 bottom-4 md:bottom-8 w-[24px] md:w-[32px] opacity-80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8 19.3L15.9 14.2M5.7 32L14.2 26.9" stroke="#F25C05" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Column 2: Details */}
      <div className="flex-1 w-full flex flex-col gap-8 lg:pl-12 lg:border-l lg:border-[rgba(255,255,255,0.08)]">
        <div>
          <h3 className="font-bebas text-white text-[28px] tracking-wide mb-2 uppercase">NEED CATERING?</h3>
          <p className="font-inter text-[#BEBEBE] text-[16px] leading-relaxed max-w-[280px]">
            Private events, parties or corporate orders.
          </p>
        </div>
        <div>
          <h3 className="font-bebas text-white text-[28px] tracking-wide mb-2 uppercase">QUESTIONS?</h3>
          <p className="font-inter text-[#BEBEBE] text-[16px] leading-relaxed max-w-[280px]">
            We're here to help whenever you need us.
          </p>
        </div>
      </div>

      {/* Column 3: CTA */}
      <div className="flex-1 w-full flex flex-col items-center lg:items-end gap-6">
        <span className="font-inter italic font-medium text-[#FF6A00] text-[20px] md:text-[24px]">
          Crave it? Get it.
        </span>
        
        <motion.button 
          onClick={handleOrderNow}
          className="bg-[#FFC62A] text-[#050505] font-inter font-bold text-[18px] md:text-[20px] py-4 md:py-5 px-10 md:px-16 rounded-[16px] flex items-center justify-center gap-4 hover:bg-[#FFD452] hover:shadow-[0_10px_30px_rgba(255,198,42,0.25)] transition-all duration-300 w-full md:w-auto"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          ORDER NOW
          <ArrowRight size={24} className="stroke-[2.5px]" />
        </motion.button>
        
        <p className="font-inter text-[#8A8A8A] text-[14px]">
          Skip the line, order online.
        </p>
      </div>
    </motion.div>
  );
}
