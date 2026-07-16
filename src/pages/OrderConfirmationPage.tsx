import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/ContactFooter/Footer';
import { useCartStore } from '../store/cartStore';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Clear cart upon successful order
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-32 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 sm:w-32 sm:h-32 bg-[rgba(34,197,94,0.1)] rounded-full flex items-center justify-center mb-8 relative"
        >
          <div className="absolute inset-0 bg-[#22C55E] blur-[40px] opacity-20 rounded-full"></div>
          <CheckCircle2 size={64} className="text-[#22C55E] sm:w-[80px] sm:h-[80px]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bebas text-[48px] sm:text-[64px] text-white tracking-wider leading-none mb-4"
        >
          ORDER CONFIRMED!
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-inter text-[#A3A3A3] text-[16px] sm:text-[18px] max-w-[500px] mb-10"
        >
          Your order has been successfully placed and is now being prepared by our chefs. It will be out for delivery shortly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[16px] p-6 mb-12 w-full max-w-[400px]"
        >
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[rgba(255,255,255,0.05)]">
            <ShoppingBag size={24} className="text-[var(--color-brand-yellow)]" />
            <div className="text-left">
              <span className="block font-inter text-[#A3A3A3] text-[12px] uppercase tracking-wide">Order ID</span>
              <span className="block font-bebas text-white text-[20px] tracking-wide">#MNO-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>
          <div className="text-center font-inter text-white font-medium text-[14px]">
            Estimated Delivery: <span className="text-[var(--color-brand-yellow)]">18 - 22 mins</span>
          </div>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={() => navigate('/menu')}
          className="bg-transparent border border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] hover:bg-[var(--color-brand-yellow)] hover:text-black font-bebas text-[20px] tracking-wider px-8 py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all duration-300 group"
        >
          RETURN TO MENU
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

      </main>

      <Footer />
    </div>
  );
}
