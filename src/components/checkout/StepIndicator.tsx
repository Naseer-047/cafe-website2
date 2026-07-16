import { motion } from 'framer-motion';
import { ShoppingCart, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';

export default function StepIndicator() {
  return (
    <div className="w-full max-w-[1000px] mx-auto mb-10 mt-8 px-4">
      <div className="flex items-center justify-between relative">
        
        {/* Connection Lines Background */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[rgba(255,255,255,0.1)] -z-10 translate-y-[-50%]" />
        
        {/* Animated Connection Line to Checkout */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="absolute top-1/2 left-0 h-[2px] bg-[var(--color-brand-yellow)] -z-10 translate-y-[-50%]" 
        />

        {/* Step 1: Cart */}
        <div className="flex items-center gap-3 bg-[#050505] pr-4">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-yellow)] bg-[#111111] flex items-center justify-center text-[var(--color-brand-yellow)]">
            <ShoppingCart size={18} />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bebas text-white text-[16px] tracking-wide flex items-center gap-1">
              1. CART <CheckCircle2 size={14} className="text-[var(--color-brand-yellow)]" />
            </span>
            <span className="font-inter text-[#A3A3A3] text-[12px]">Completed</span>
          </div>
        </div>

        {/* Step 2: Checkout */}
        <div className="flex items-center gap-3 bg-[#050505] px-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-yellow)] bg-[#111111] flex flex-col items-center justify-center text-[var(--color-brand-yellow)] shadow-[0_0_15px_rgba(255,193,7,0.3)] relative"
          >
            <MapPin size={20} className="fill-[var(--color-brand-yellow)] text-black" />
            <span className="absolute w-[6px] h-[6px] bg-black rounded-full top-[14px]"></span>
          </motion.div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bebas text-[var(--color-brand-yellow)] text-[18px] tracking-wide">2. CHECKOUT</span>
            <span className="font-inter text-[var(--color-brand-yellow)] text-[12px]">In Progress</span>
          </div>
        </div>

        {/* Step 3: Confirmation */}
        <div className="flex items-center gap-3 bg-[#050505] pl-4">
          <div className="w-10 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] bg-[#111111] flex items-center justify-center text-[#A3A3A3]">
            <CreditCard size={18} />
          </div>
          <div className="hidden sm:flex flex-col opacity-50">
            <span className="font-bebas text-white text-[16px] tracking-wide">3. CONFIRMATION</span>
            <span className="font-inter text-[#A3A3A3] text-[12px]">Upcoming</span>
          </div>
        </div>

      </div>
    </div>
  );
}
