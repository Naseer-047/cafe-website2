import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Wallet, Building2, Banknote, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCheckoutStore, type PaymentMethod } from '../../store/checkoutStore';

const cardSchema = z.object({
  cardNumber: z.string().min(19, "Invalid card number"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry (MM/YY)"),
  cvv: z.string().min(3, "Invalid CVV").max(4, "Invalid CVV"),
  cardHolder: z.string().min(3, "Name must be at least 3 characters")
});

type CardFormValues = z.infer<typeof cardSchema>;

const PAYMENT_OPTIONS: { id: PaymentMethod; title: string; desc: string; icon: any }[] = [
  { id: 'UPI', title: 'UPI', desc: 'Pay using any UPI app', icon: Wallet },
  { id: 'CARD', title: 'CREDIT / DEBIT CARD', desc: 'Visa, Mastercard, RuPay', icon: CreditCard },
  { id: 'NET_BANKING', title: 'NET BANKING', desc: 'All Indian Banks', icon: Building2 },
  { id: 'COD', title: 'CASH ON DELIVERY', desc: 'Pay when order arrives', icon: Banknote },
];

export default function PaymentMethods() {
  const { paymentMethod, selectPayment } = useCheckoutStore();
  
  const { register, formState: { errors } } = useForm<CardFormValues>({
    resolver: zodResolver(cardSchema),
    mode: 'onChange'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full"
    >
      <div className="flex items-center gap-3 mb-4 mt-2">
        <CreditCard size={20} className="text-[var(--color-brand-yellow)]" />
        <h2 className="font-bebas text-white text-[20px] tracking-wide mt-1">PAYMENT METHOD</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = paymentMethod === option.id;
          const Icon = option.icon;

          return (
            <motion.div
              key={option.id}
              onClick={() => selectPayment(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-5 rounded-[12px] cursor-pointer transition-all duration-300 border ${
                isSelected 
                  ? 'border-[var(--color-brand-yellow)] bg-[#1A1500] shadow-[0_0_20px_rgba(255,193,7,0.15)]' 
                  : 'border-[rgba(255,255,255,0.05)] bg-[#0A0A0A] hover:border-[rgba(255,255,255,0.2)]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 text-[var(--color-brand-yellow)]">
                  <CheckCircle2 size={18} className="fill-[var(--color-brand-yellow)] text-black" />
                </div>
              )}
              
              <div className="mb-3">
                {option.id === 'UPI' ? (
                  <div className="flex items-center gap-1 font-inter italic font-bold text-[20px]">
                    <span className="text-white">UPI</span>
                    <span className="text-[#00B900]">▶</span>
                  </div>
                ) : (
                  <Icon size={28} className={isSelected ? 'text-[var(--color-brand-yellow)]' : 'text-[#A3A3A3]'} />
                )}
              </div>
              
              <h3 className="font-bebas text-white text-[18px] tracking-wide mb-1">{option.title}</h3>
              <p className="font-inter text-[#A3A3A3] text-[12px] leading-tight">{option.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Conditional Sub-forms */}
      <AnimatePresence mode="wait">
        {paymentMethod === 'CARD' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-[#A3A3A3] text-[12px] mb-2 uppercase tracking-wide">Card Number</label>
                  <input 
                    {...register('cardNumber')}
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
                    }}
                    className={`w-full bg-[#0A0A0A] border ${errors.cardNumber ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--color-brand-yellow)]'} rounded-[8px] px-4 py-3 text-white font-inter text-[14px] outline-none transition-colors`}
                  />
                  {errors.cardNumber && <span className="text-red-500 text-[11px] mt-1 block">{errors.cardNumber.message}</span>}
                </div>
                <div>
                  <label className="block font-inter text-[#A3A3A3] text-[12px] mb-2 uppercase tracking-wide">Name on Card</label>
                  <input 
                    {...register('cardHolder')}
                    placeholder="John Doe"
                    className={`w-full bg-[#0A0A0A] border ${errors.cardHolder ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--color-brand-yellow)]'} rounded-[8px] px-4 py-3 text-white font-inter text-[14px] outline-none transition-colors`}
                  />
                  {errors.cardHolder && <span className="text-red-500 text-[11px] mt-1 block">{errors.cardHolder.message}</span>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-[#A3A3A3] text-[12px] mb-2 uppercase tracking-wide">Expiry</label>
                    <input 
                      {...register('expiry')}
                      placeholder="MM/YY"
                      maxLength={5}
                      onChange={(e) => {
                        let v = e.target.value.replace(/\D/g, '');
                        if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
                        e.target.value = v;
                      }}
                      className={`w-full bg-[#0A0A0A] border ${errors.expiry ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--color-brand-yellow)]'} rounded-[8px] px-4 py-3 text-white font-inter text-[14px] outline-none transition-colors`}
                    />
                    {errors.expiry && <span className="text-red-500 text-[11px] mt-1 block">{errors.expiry.message}</span>}
                  </div>
                  <div>
                    <label className="block font-inter text-[#A3A3A3] text-[12px] mb-2 uppercase tracking-wide">CVV</label>
                    <input 
                      {...register('cvv')}
                      type="password"
                      placeholder="•••"
                      maxLength={4}
                      className={`w-full bg-[#0A0A0A] border ${errors.cvv ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--color-brand-yellow)]'} rounded-[8px] px-4 py-3 text-white font-inter text-[14px] outline-none transition-colors`}
                    />
                    {errors.cvv && <span className="text-red-500 text-[11px] mt-1 block">{errors.cvv.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {paymentMethod === 'UPI' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
             <div className="bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-6">
                <p className="font-inter text-[#A3A3A3] text-[14px] mb-4 text-center">Select your preferred UPI app to complete the payment.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                    <button key={app} className="px-6 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#0A0A0A] text-white font-inter text-[14px] hover:border-[var(--color-brand-yellow)] transition-colors">
                      {app}
                    </button>
                  ))}
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
