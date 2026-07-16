import { Info, ArrowRight, ShieldCheck, Tag, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import PromoCode from './PromoCode';
import DeliveryToggle from './DeliveryToggle';
import { useNavigate } from 'react-router-dom';

export default function CartSummary() {
  const navigate = useNavigate();
  const { 
    subtotal, 
    deliveryFee, 
    tax, 
    discount, 
    grandTotal, 
    deliveryType, 
    changeDelivery,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  return (
    <div className="w-full bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-6 sm:p-8 flex flex-col">
      <h2 className="font-bebas text-white text-[24px] tracking-wide mb-6">ORDER SUMMARY</h2>

      <DeliveryToggle type={deliveryType} onChange={changeDelivery} />

      <PromoCode currentCoupon={coupon} onApply={applyCoupon} onRemove={removeCoupon} />

      <div className="flex flex-col gap-4 mb-6 font-inter text-[14px]">
        <div className="flex justify-between items-center text-[#BDBDBD]">
          <span>Items Total</span>
          <span className="text-white font-medium">₹{subtotal}</span>
        </div>
        
        <div className="flex justify-between items-center text-[#BDBDBD]">
          <span className="flex items-center gap-1.5">
            Delivery Fee <Info size={14} className="text-[#555]" />
          </span>
          <span className="text-white font-medium">₹{deliveryFee}</span>
        </div>
        
        <div className="flex justify-between items-center text-[#BDBDBD]">
          <span>Taxes & Charges</span>
          <span className="text-white font-medium">₹{tax}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center text-[#22C55E]">
            <span>Discount</span>
            <span className="font-medium">-₹{discount}</span>
          </div>
        )}
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 pb-6 flex justify-between items-end">
        <span className="font-bebas text-white text-[24px] tracking-wide">TOTAL</span>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span 
            key={grandTotal}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="font-bebas text-[#FFC107] text-[42px] leading-none tracking-wide"
          >
            ₹{grandTotal}
          </motion.span>
        </AnimatePresence>
      </div>

      {discount > 0 && (
        <div className="w-full bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-[8px] py-2 flex items-center justify-center gap-2 text-[#22C55E] font-inter text-[13px] mb-6">
          <Tag size={14} /> You saved ₹{discount} on this order!
        </div>
      )}

      <motion.button
        onClick={() => navigate('/checkout')}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-14 bg-[#FFC107] rounded-[12px] flex items-center justify-center gap-3 hover:bg-[#FFD452] transition-colors mb-8 shadow-[0_15px_30px_rgba(255,193,7,0.25)] group"
      >
        <span className="font-bebas text-black text-[22px] tracking-wider pt-1">PROCEED TO CHECKOUT</span>
        <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Footer Trust Badges */}
      <div className="flex justify-between items-center pt-6 border-t border-[rgba(255,255,255,0.05)]">
        <div className="flex flex-col items-center gap-1">
          <ShieldCheck size={20} className="text-[#FFC107]" />
          <span className="text-[#888] text-[10px] font-inter text-center">100% Secure<br/>Payments</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Tag size={20} className="text-[#FFC107]" />
          <span className="text-[#888] text-[10px] font-inter text-center">Best Price<br/>Guaranteed</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Clock size={20} className="text-[#FFC107]" />
          <span className="text-[#888] text-[10px] font-inter text-center">On-Time<br/>Delivery</span>
        </div>
      </div>

    </div>
  );
}
