import { motion } from "framer-motion";

export default function CateringBanner() {
  return (
    <motion.div 
      className="w-full bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mt-8"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Left Side: Icon + Text */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
        <div className="w-16 h-16 rounded-full bg-[rgba(242,92,5,0.1)] flex items-center justify-center shrink-0">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F25C05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2"></path>
            <path d="M7.5 4.5 9 6"></path>
            <path d="M16.5 4.5 15 6"></path>
            <path d="M22 13a10 10 0 0 0-20 0"></path>
            <path d="M2 13h20"></path>
            <path d="M2 17h20"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bebas text-white text-[32px] sm:text-[40px] leading-none tracking-wide mb-2">
            NEED CATERING FOR YOUR NEXT EVENT?
          </h3>
          <p className="font-inter text-[rgba(255,255,255,0.7)] text-[16px] sm:text-[18px]">
            We've got you covered with our signature flavors.
          </p>
        </div>
      </div>

      {/* Right Side: CTA Button */}
      <button className="group shrink-0 flex items-center justify-center gap-4 bg-[var(--color-brand-yellow)] text-black font-inter font-semibold text-[16px] px-10 py-5 rounded-[12px] hover:-translate-y-[2px] hover:shadow-[0_15px_35px_rgba(246,196,67,0.25)] transition-all duration-300 shadow-[0_4px_14px_rgba(246,196,67,0.2)]">
        ORDER FOR YOUR EVENT
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-2"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </motion.div>
  );
}
