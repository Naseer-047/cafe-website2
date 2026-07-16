import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Award, Shield, Check } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { calculateItemTotal } from '../../utils/priceCalculator';

export default function OrderSummarySticky() {
  const { cartItems, subtotal, deliveryFee, tax, discount, grandTotal, coupon, applyCoupon, removeCoupon } = useCartStore();
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput.toUpperCase());
    if (!success) {
      setCouponError('Invalid promo code');
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-6 lg:p-8 sticky top-24 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
    >
      <h2 className="font-bebas text-white text-[24px] tracking-wide mb-6">ORDER SUMMARY</h2>
      
      {/* Items List */}
      <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-[60px] h-[60px] bg-[#0A0A0A] rounded-[8px] border border-[rgba(255,255,255,0.05)] overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex justify-between">
              <div>
                <h3 className="font-inter font-medium text-white text-[14px] leading-tight mb-1">{item.title}</h3>
                <p className="font-inter text-[#A3A3A3] text-[12px] leading-tight">
                  {item.spiceLevel && `${item.spiceLevel}`}
                  {item.extras?.length > 0 ? ` • ${item.extras.map(e => e.name).join(', ')}` : ''}
                  {item.drink && ` • ${item.drink.name}`}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 ml-2">
                <span className="font-inter text-[#A3A3A3] text-[12px]">× {item.quantity}</span>
                <span className="font-bebas text-white text-[16px]">₹{calculateItemTotal(item)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[1px] w-full bg-[rgba(255,255,255,0.05)] mb-6"></div>

      {/* Breakdown */}
      <div className="flex flex-col gap-3 mb-6 font-inter text-[14px]">
        <div className="flex justify-between text-[#A3A3A3]">
          <span>Items Total</span>
          <span className="text-white">₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-[#A3A3A3]">
          <span>Delivery Fee</span>
          <span className="text-white">₹{deliveryFee}</span>
        </div>
        <div className="flex justify-between text-[#A3A3A3]">
          <span>Taxes & Charges</span>
          <span className="text-white">₹{tax}</span>
        </div>
        
        <AnimatePresence>
          {coupon && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-between text-[#22C55E]"
            >
              <span>Promo Code ({coupon})</span>
              <span>-₹{discount}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-[1px] w-full bg-[rgba(255,255,255,0.05)] mb-6"></div>

      {/* TOTAL */}
      <div className="flex justify-between items-end mb-6">
        <span className="font-bebas text-white text-[24px] tracking-wide uppercase">TOTAL</span>
        <span className="font-bebas text-[var(--color-brand-yellow)] text-[36px] tracking-wide leading-none">₹{grandTotal}</span>
      </div>

      {/* Savings message */}
      <AnimatePresence>
        {discount > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] rounded-[8px] py-2.5 px-4 flex items-center justify-center gap-2 mb-6"
          >
            <CheckCircle2 size={16} className="text-[#22C55E]" />
            <span className="font-inter text-[#22C55E] text-[13px] font-medium">You saved ₹{discount} on this order!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coupon Field */}
      {!coupon ? (
        <div className="mb-6">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={couponInput}
              onChange={(e) => { setCouponInput(e.target.value); setCouponError(''); }}
              placeholder="Enter Promo Code"
              className="flex-1 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white font-inter text-[14px] uppercase outline-none focus:border-[var(--color-brand-yellow)] transition-colors placeholder:normal-case"
            />
            <button 
              onClick={handleApplyCoupon}
              className="px-6 rounded-[8px] border border-[rgba(255,255,255,0.1)] text-[#A3A3A3] hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors font-inter text-[14px] font-medium"
            >
              Apply
            </button>
          </div>
          {couponError && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-inter text-[12px] mt-2 ml-1">
              {couponError}
            </motion.p>
          )}
        </div>
      ) : (
        <div className="flex justify-between items-center bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 mb-6">
          <span className="font-inter font-medium text-white">{coupon}</span>
          <button 
            onClick={removeCoupon}
            className="flex items-center gap-1 text-[#22C55E] font-inter text-[13px] font-medium hover:text-white transition-colors"
          >
            <Check size={14} /> Applied
          </button>
        </div>
      )}

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start gap-2">
          <ShieldCheck size={18} className="text-[var(--color-brand-yellow)] flex-shrink-0 mt-0.5" />
          <span className="font-inter text-[#A3A3A3] text-[11px] leading-tight">100% Secure<br/>Payments</span>
        </div>
        <div className="flex items-start gap-2">
          <Award size={18} className="text-[var(--color-brand-yellow)] flex-shrink-0 mt-0.5" />
          <span className="font-inter text-[#A3A3A3] text-[11px] leading-tight">Best Price<br/>Guaranteed</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={18} className="text-[var(--color-brand-yellow)] flex-shrink-0 mt-0.5" />
          <span className="font-inter text-[#A3A3A3] text-[11px] leading-tight">On-Time<br/>Delivery</span>
        </div>
        <div className="flex items-start gap-2">
          <Shield size={18} className="text-[var(--color-brand-yellow)] flex-shrink-0 mt-0.5" />
          <span className="font-inter text-[#A3A3A3] text-[11px] leading-tight">SSL Secured<br/>256-bit Encryption</span>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center items-center gap-3">
        <span className="font-inter text-[#A3A3A3] text-[10px] mr-2">We Accept</span>
        <span className="font-inter text-white font-bold text-[14px] italic tracking-tighter">VISA</span>
        <div className="w-5 h-5 rounded-full bg-[#EB001B] relative flex items-center justify-center opacity-80"><div className="w-5 h-5 rounded-full bg-[#F79E1B] mix-blend-screen absolute -right-2"></div></div>
        <span className="font-inter text-white font-bold text-[12px] italic ml-3">RuPay</span>
        <span className="font-inter text-white font-bold text-[14px] italic border border-white/20 px-1 rounded-sm">UPI</span>
      </div>
      
    </motion.div>
  );
}
