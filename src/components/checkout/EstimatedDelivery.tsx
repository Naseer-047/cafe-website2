import { motion } from 'framer-motion';
import { Bike, MapPin } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function EstimatedDelivery() {
  const { address } = useCartStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full flex flex-col sm:flex-row border-y border-[rgba(255,255,255,0.05)] py-6 gap-6 sm:gap-0 my-4"
    >
      {/* Estimated Delivery */}
      <div className="flex-1 flex items-start gap-4 sm:border-r border-[rgba(255,255,255,0.05)] pr-6">
        <motion.div 
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--color-brand-yellow)]"
        >
          <Bike size={32} />
        </motion.div>
        <div>
          <span className="block font-bebas text-[#A3A3A3] text-[16px] tracking-wide mb-1">ESTIMATED DELIVERY</span>
          <span className="block font-bebas text-[var(--color-brand-yellow)] text-[24px] tracking-wide leading-none mb-1">18 - 22 mins</span>
          <span className="block font-inter text-[#A3A3A3] text-[12px]">Fast & Hot Delivery</span>
        </div>
      </div>

      {/* Delivering To */}
      <div className="flex-1 flex items-start gap-4 sm:pl-6">
        <div className="text-white mt-1">
          <MapPin size={24} />
        </div>
        <div>
          <span className="block font-bebas text-[#A3A3A3] text-[16px] tracking-wide mb-1">DELIVERING TO</span>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-inter text-white font-medium text-[16px]">Home</span>
            <button className="text-[var(--color-brand-yellow)] font-inter font-medium text-[12px] hover:text-[#FF6A00] transition-colors">Change</button>
          </div>
          <span className="block font-inter text-[#A3A3A3] text-[13px] line-clamp-1">{address}</span>
        </div>
      </div>
    </motion.div>
  );
}
