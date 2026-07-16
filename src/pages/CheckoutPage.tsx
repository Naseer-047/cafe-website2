import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function CheckoutPage() {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] font-inter overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 sm:px-8 py-12 mt-[80px]">
        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-[#FFC107] hover:text-[#FFD452] font-inter text-[14px] transition-colors mb-8 w-max"
        >
          <ArrowLeft size={16} /> Back to Cart
        </button>

        <div className="w-full bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-12 flex flex-col items-center justify-center text-center">
          <h1 className="font-bebas text-white text-[48px] tracking-wide mb-4">CHECKOUT</h1>
          <p className="text-[#888] font-inter text-[16px] max-w-[400px]">
            Checkout functionality is under construction. Please check back later.
          </p>
        </div>
      </main>
    </div>
  );
}
