import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  titleWhite: string;
  titleYellow: string;
  subtitle: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function SectionHeading({ label, titleWhite, titleYellow, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full z-10 relative mb-16 lg:mb-20">
      
      {/* Label with Spikes */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F25C05]">
            <path d="M4 8L12 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M0 20L10 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M4 32L12 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <div className="w-8 h-[2px] bg-[#F25C05]"></div>
        </div>
        
        <span className="text-[#F25C05] font-inter font-bold text-[14px] sm:text-[16px] tracking-[8px] uppercase whitespace-nowrap pl-[4px]">
          {label}
        </span>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-[2px] bg-[#F25C05]"></div>
          <svg width="24" height="24" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F25C05]">
            <path d="M28 8L20 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M32 20L22 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M28 32L20 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h2 
        variants={itemVariants}
        className="font-bebas text-[clamp(60px,10vw,110px)] leading-[0.9] tracking-[-3px] uppercase flex flex-wrap justify-center gap-x-4 gap-y-0 mb-6"
      >
        <span className="text-premium-distressed-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">{titleWhite}</span>
        <span className="text-premium-distressed-yellow drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">{titleYellow}</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        variants={itemVariants}
        className="font-inter text-[rgba(255,255,255,0.72)] text-[24px] sm:text-[28px] leading-relaxed max-w-[800px]"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
