import { motion } from "framer-motion";

export default function BottomBar() {
  return (
    <motion.div 
      className="w-full flex flex-col md:flex-row items-center justify-between py-6 mt-12 border-t border-[rgba(255,255,255,0.08)] gap-4 md:gap-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="font-inter text-[#8A8A8A] text-[13px] md:text-[14px]">
        © 2025 Ma'ono Fried Chicken. All rights reserved.
      </div>
      
      <div className="flex items-center gap-2 font-inter italic text-[#FF6A00] text-[14px] md:text-[16px]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF6A00">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        Made with aloha in Bangalore
      </div>

      <div className="flex items-center gap-4 md:gap-6 font-inter text-[#8A8A8A] text-[13px] md:text-[14px]">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span className="text-[rgba(255,255,255,0.1)]">|</span>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <span className="text-[rgba(255,255,255,0.1)]">|</span>
        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
      </div>
    </motion.div>
  );
}
