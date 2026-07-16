import { Trash2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { calculateItemTotal, type CartItemType } from '../../utils/priceCalculator';
import QuantitySelector from './QuantitySelector';

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const itemTotal = calculateItemTotal(item);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative group"
    >
      {/* Product Image */}
      <div className="w-[100px] h-[100px] shrink-0 relative flex items-center justify-center bg-black/20 rounded-[12px] p-2">
        <img src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-center min-w-0 w-full">
        <h3 className="font-bebas text-white text-[22px] sm:text-[24px] tracking-wide uppercase leading-none mb-2 truncate">
          {item.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#888] text-[12px] sm:text-[13px] font-inter mb-3">
          {/* Spice Level */}
          <span className="flex items-center gap-1">
            🌶️ {item.spiceLevel}
          </span>
          
          {/* Extras */}
          {item.extras.map(extra => (
            <span key={extra.id} className="flex items-center gap-1 before:content-['|'] before:text-[#444] before:mr-2">
              {extra.name}
            </span>
          ))}

          {/* Drink */}
          {item.drink && item.drink.id !== 'None' && (
            <span className="flex items-center gap-1 before:content-['|'] before:text-[#444] before:mr-2">
              🥤 {item.drink.name}
            </span>
          )}
        </div>

        {/* Customization Button */}
        <button className="flex items-center gap-2 text-[#FFC107] text-[12px] font-inter border border-[#FFC107]/30 rounded-full px-3 py-1 w-max hover:bg-[#FFC107]/10 transition-colors">
          Customizations <ChevronDown size={14} />
        </button>
      </div>

      {/* Controls & Price */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 sm:gap-8 mt-4 sm:mt-0">
        
        <QuantitySelector 
          quantity={item.quantity} 
          onIncrease={onIncrease} 
          onDecrease={onDecrease} 
        />

        <div className="font-bebas text-white text-[24px] sm:text-[28px] tracking-wide w-[80px] text-right">
          ₹{itemTotal}
        </div>

        <button 
          onClick={onRemove}
          className="w-10 h-10 flex items-center justify-center text-[#FF5A00] hover:bg-[#FF5A00]/10 rounded-[8px] transition-colors shrink-0"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </motion.div>
  );
}
