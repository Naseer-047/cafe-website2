import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ViewMenuButton() {
  return (
    <motion.div 
      variants={itemVariants}
      className="w-full flex justify-center z-10 relative"
    >
      <Link to="/menu" className="group flex items-center justify-center gap-4 bg-transparent border-2 border-[var(--color-brand-yellow)] text-white font-inter font-semibold text-[16px] px-10 py-4 rounded-[18px] hover:bg-[var(--color-brand-yellow)] hover:text-black transition-all duration-300">
        VIEW FULL MENU
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </motion.div>
  );
}
