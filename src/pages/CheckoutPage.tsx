import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useCheckoutStore } from '../store/checkoutStore';

import Navbar from '../components/Navbar';
import Footer from '../components/ContactFooter/Footer';
import StepIndicator from '../components/checkout/StepIndicator';
import DeliveryDetails from '../components/checkout/DeliveryDetails';
import ContactNumber from '../components/checkout/ContactNumber';
import DeliveryInstructions from '../components/checkout/DeliveryInstructions';
import EstimatedDelivery from '../components/checkout/EstimatedDelivery';
import PaymentMethods from '../components/checkout/PaymentMethods';
import OrderSummarySticky from '../components/checkout/OrderSummarySticky';
import { Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, grandTotal } = useCartStore();
  const { paymentMethod, isProcessing, setProcessing } = useCheckoutStore();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    // Start processing
    setProcessing(true);
    
    // Simulate API Call
    setTimeout(() => {
      setProcessing(false);
      navigate('/order-confirmation');
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-bebas mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/menu')} className="bg-[var(--color-brand-yellow)] text-black px-6 py-2 rounded font-bebas text-xl">GO TO MENU</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-32">
        <StepIndicator />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* Left Column (Forms & Details) */}
          <div className="flex-1 flex flex-col gap-6 w-full lg:max-w-[65%]">
            <DeliveryDetails />
            <ContactNumber />
            <DeliveryInstructions />
            <EstimatedDelivery />
            <PaymentMethods />
            
            {/* Error Message */}
            <AnimatePresence>
              {showError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 font-inter text-[14px] font-medium text-center bg-red-500/10 py-3 rounded-[8px] border border-red-500/20"
                >
                  Please select a payment method to continue.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop / Tablet PLACE ORDER Button */}
            <motion.button 
              onClick={handlePlaceOrder}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex w-full bg-[var(--color-brand-yellow)] text-black font-bebas text-[28px] tracking-wider py-4 rounded-[12px] items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(255,193,7,0.4)] transition-all relative overflow-hidden"
            >
              <span>PLACE ORDER</span>
              <span className="text-[24px]">₹{grandTotal}</span>
              
              {/* Button Shine Effect */}
              <motion.div 
                animate={{ left: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
                className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
              />
            </motion.button>
          </div>

          {/* Right Column (Sticky Summary) */}
          <div className="w-full lg:w-[35%]">
            <OrderSummarySticky />
          </div>

        </div>
      </main>

      <Footer />

      {/* Mobile Sticky Bottom CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full p-4 bg-[#0A0A0A]/90 backdrop-blur-md border-t border-[rgba(255,255,255,0.05)] z-40">
        <button 
          onClick={handlePlaceOrder}
          className="w-full bg-[var(--color-brand-yellow)] text-black font-bebas text-[24px] tracking-wider py-3 rounded-[12px] flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
        >
          <span>PLACE ORDER</span>
          <span>₹{grandTotal}</span>
        </button>
      </div>

      {/* Fullscreen Loading Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="text-[var(--color-brand-yellow)] mb-6"
            >
              <Loader2 size={48} />
            </motion.div>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bebas text-[32px] tracking-wider text-white"
            >
              PREPARING YOUR ORDER...
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-inter text-[#A3A3A3] text-[16px] mt-2"
            >
              Please do not close this window
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
