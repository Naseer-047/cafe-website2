import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function LeftContent() {
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
      className="w-full lg:w-[45%] flex flex-col justify-center items-start pt-12 lg:pt-12 z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Label with lines */}
      <motion.div variants={itemVariants} className="flex items-center gap-6 mb-6">
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F25C05] shrink-0">
          <path d="M4 8L12 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M0 20L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M4 32L12 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="text-[var(--color-brand-orange)] font-inter font-bold text-[15px] tracking-[4px] uppercase whitespace-nowrap flex items-center gap-3">
          AUTHENTIC <span className="text-[var(--color-brand-yellow)] text-xl leading-none pt-1">*</span> CRISPY <span className="text-[var(--color-brand-yellow)] text-xl leading-none pt-1">*</span> FRESH
        </span>
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F25C05] shrink-0">
          <path d="M28 8L20 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M32 20L22 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M28 32L20 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        variants={itemVariants} 
        className="font-bebas text-[clamp(64px,8vw,140px)] leading-[0.85] tracking-wide mb-8 uppercase text-left w-full"
      >
        <span className="block font-black text-premium-distressed-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">HANDCRAFTED</span>
        <span className="block font-black text-premium-distressed-yellow drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">FRIED CHICKEN</span>
      </motion.h1>

      <motion.div variants={itemVariants} className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] mb-6 max-w-[460px]"></motion.div>

      {/* Body Text */}
      <motion.p variants={itemVariants} className="font-inter  text-[rgba(255,255,255,0.7)] text-[clamp(16px,1.5vw,20px)] leading-relaxed max-w-[460px] mb-8 lg:mb-10 text-left">
        Made fresh every day using our signature spices<br/>
        and perfectly crispy coating.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6">
        <button 
          onClick={handleOrderNow}
          className="flex items-center justify-center gap-2 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wider text-[22px] sm:text-[26px] px-19 py-3 sm:py-2 rounded-[5px] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(246,196,67,0.25)] transition-all duration-300 shadow-[0_4px_14px_rgba(246,196,67,0.2)] pt-[16px] pb-[12px] sm:pt-[20px] sm:pb-[16px] h-17"
        >
          ORDER NOW
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mt-1">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <button 
          onClick={() => navigate('/menu')}
          className="flex items-center justify-center gap-2 bg-transparent border-2 border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] font-bebas tracking-wider text-[22px] sm:text-[26px] px-8 py-3 sm:py-4 rounded-[12px] hover:bg-[var(--color-brand-yellow)] hover:text-black transition-all duration-300 pt-[16px] pb-[12px] sm:pt-[20px] sm:pb-[16px] h-17"
        >
          VIEW MENU
        </button>
      </motion.div>
    </motion.div>
  );
}
