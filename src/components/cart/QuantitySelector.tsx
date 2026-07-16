import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center justify-between w-[90px] sm:w-[110px] h-10 sm:h-12 rounded-[8px] sm:rounded-[12px] border border-[rgba(255,255,255,0.1)] px-1 sm:px-2 bg-[rgba(0,0,0,0.3)] shrink-0">
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={onDecrease}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:text-[#FFC107] hover:bg-[rgba(255,255,255,0.05)] rounded-[6px] transition-colors"
      >
        <Minus size={16} strokeWidth={2.5} />
      </motion.button>
      
      <div className="relative w-4 flex items-center justify-center overflow-hidden h-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span 
            key={quantity}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="font-inter font-bold text-white text-[14px] sm:text-[16px] absolute"
          >
            {quantity}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={onIncrease}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#FFC107] hover:bg-[rgba(255,255,255,0.05)] rounded-[6px] transition-colors"
      >
        <Plus size={16} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
