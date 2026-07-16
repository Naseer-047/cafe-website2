import { motion } from "framer-motion";

export default function ViewInstagramButton() {
  return (
    <motion.div 
      className="w-full flex justify-center z-10 relative mt-10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
    >
      <button className="group flex items-center justify-center gap-4 bg-transparent border-2 border-[var(--color-brand-yellow)] text-white font-inter font-semibold text-[16px] px-10 py-4 rounded-[18px] hover:bg-[var(--color-brand-yellow)] hover:text-black transition-all duration-300">
        VIEW MORE ON INSTAGRAM
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </motion.div>
  );
}
