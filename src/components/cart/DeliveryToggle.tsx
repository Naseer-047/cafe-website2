import { Truck, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface DeliveryToggleProps {
  type: 'Delivery' | 'Pickup';
  onChange: (type: 'Delivery' | 'Pickup') => void;
}

export default function DeliveryToggle({ type, onChange }: DeliveryToggleProps) {
  return (
    <div className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-1 flex items-center mb-6 relative">
      
      {/* Animated Background Pill */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#FFC107] rounded-[10px] z-0"
        animate={{ 
          x: type === 'Delivery' ? 0 : '100%',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Delivery Button */}
      <button 
        onClick={() => onChange('Delivery')}
        className={`flex-1 flex flex-col items-center justify-center py-2 relative z-10 transition-colors ${type === 'Delivery' ? 'text-black' : 'text-[#888] hover:text-white'}`}
      >
        <div className="flex items-center gap-2 mb-0.5">
          <Truck size={18} strokeWidth={type === 'Delivery' ? 2.5 : 1.5} />
          <span className={`font-inter text-[14px] ${type === 'Delivery' ? 'font-bold' : 'font-medium'}`}>Delivery</span>
        </div>
        <span className={`text-[11px] font-inter ${type === 'Delivery' ? 'text-black/70' : 'text-[#555]'}`}>18-22 mins</span>
      </button>

      {/* Pickup Button */}
      <button 
        onClick={() => onChange('Pickup')}
        className={`flex-1 flex flex-col items-center justify-center py-2 relative z-10 transition-colors ${type === 'Pickup' ? 'text-black' : 'text-[#888] hover:text-white'}`}
      >
        <div className="flex items-center gap-2 mb-0.5">
          <ShoppingBag size={18} strokeWidth={type === 'Pickup' ? 2.5 : 1.5} />
          <span className={`font-inter text-[14px] ${type === 'Pickup' ? 'font-bold' : 'font-medium'}`}>Pickup</span>
        </div>
        <span className={`text-[11px] font-inter ${type === 'Pickup' ? 'text-black/70' : 'text-[#555]'}`}>15-18 mins</span>
      </button>

    </div>
  );
}
