import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="w-24 h-24 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full flex items-center justify-center mb-6">
        <ShoppingBag size={40} className="text-[#888]" />
      </div>
      
      <h2 className="font-bebas text-white text-[32px] tracking-wide mb-2 text-center">
        YOUR CART IS EMPTY
      </h2>
      
      <p className="font-inter text-[#888] text-[15px] mb-8 text-center max-w-[300px]">
        Looks like you haven't added anything to your cart yet. Discover our delicious menu!
      </p>

      <button
        onClick={() => navigate('/menu')}
        className="bg-[#FFC107] text-black font-bebas text-[20px] tracking-widest px-8 py-3 rounded-[12px] hover:bg-[#FFD452] transition-colors shadow-[0_10px_20px_rgba(255,193,7,0.2)]"
      >
        BROWSE MENU
      </button>
    </motion.div>
  );
}
