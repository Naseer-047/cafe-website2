import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function ContactNumber() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[16px] p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-[var(--color-brand-yellow)]" />
          <h2 className="font-bebas text-white text-[20px] tracking-wide mt-1">CONTACT NUMBER</h2>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-[#0A0A0A] border border-[rgba(255,255,255,0.05)] p-4 rounded-[12px]">
        <span className="font-inter text-white text-[16px] tracking-wide">+91 98765 43210</span>
        <button className="text-[var(--color-brand-yellow)] font-inter font-medium text-[13px] hover:text-[#FF6A00] transition-colors">
          Change
        </button>
      </div>
    </motion.div>
  );
}
