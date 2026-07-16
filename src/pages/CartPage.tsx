import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, PenLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import RecommendationCard from '../components/cart/RecommendationCard';
import EmptyCart from '../components/cart/EmptyCart';
import Navbar from '../components/Navbar';
import { useUiStore } from '../store/uiStore';

const recommendations = [
  { id: 'rec-1', title: 'Cheesy Fries', price: '₹149', image: `${import.meta.env.BASE_URL}burger.png` }, // reusing burger for demo, can change to fries if exist
  { id: 'rec-2', title: 'Peri Peri Burger', price: '₹199', image: `${import.meta.env.BASE_URL}burger.png` },
  { id: 'rec-3', title: 'Chicken Nuggets (6pc)', price: '₹129', image: `${import.meta.env.BASE_URL}combo for cart section.png` },
  { id: 'rec-4', title: 'Chocolate Milkshake', price: '₹129', image: `${import.meta.env.BASE_URL}combo for cart section.png` }
];

export default function CartPage() {
  const navigate = useNavigate();
  const { 
    cartItems, 
    totalItems,
    addToCart,
    increaseQty, 
    decreaseQty, 
    removeFromCart,
    address,
    instructions,
    updateInstructions,
    deliveryType
  } = useCart();
  const { showToast } = useUiStore();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] font-inter overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12 mt-[80px]">
        
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 relative">
            
            {/* LEFT COLUMN: Items & Details */}
            <div className="flex-1 flex flex-col min-w-0">
              
              {/* Header */}
              <button 
                onClick={() => navigate('/menu')}
                className="flex items-center gap-2 text-[#FFC107] hover:text-[#FFD452] font-inter text-[14px] transition-colors mb-6 w-max"
              >
                <ArrowLeft size={16} /> Continue Shopping
              </button>

              <div className="flex items-baseline gap-4 mb-8">
                <h1 className="font-bebas text-white text-[42px] sm:text-[54px] tracking-wide leading-none uppercase">
                  YOUR CART
                </h1>
                <span className="font-inter text-[#888] text-[16px]">
                  ({totalItems} Items)
                </span>
              </div>

              {/* Cart Items List */}
              <div className="flex flex-col gap-4 mb-8">
                <AnimatePresence mode="popLayout">
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onIncrease={() => increaseQty(item.id)}
                      onDecrease={() => decreaseQty(item.id)}
                      onRemove={() => removeFromCart(item.id)}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Delivery Info & Notes Bar */}
              <div className="w-full bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-4 flex flex-col md:flex-row items-start md:items-center divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)] mb-12">
                
                <div className="flex items-center gap-4 px-4 py-3 md:py-0 w-full md:w-auto shrink-0">
                  <Clock className="text-[#FFC107]" size={24} />
                  <div className="flex flex-col">
                    <span className="text-[#888] text-[12px]">Estimated {deliveryType}</span>
                    <span className="text-[#FFC107] font-medium text-[14px]">
                      {deliveryType === 'Delivery' ? '18-22 mins' : '15-18 mins'}
                    </span>
                  </div>
                </div>

                {deliveryType === 'Delivery' && (
                  <div className="flex items-center gap-4 px-4 py-3 md:py-0 w-full md:flex-1">
                    <MapPin className="text-[#888]" size={24} />
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[#888] text-[12px]">Delivering to</span>
                      <span className="text-white font-medium text-[14px] truncate">{address}</span>
                    </div>
                    <button className="text-[#FFC107] text-[13px] hover:underline shrink-0">
                      Change
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-4 px-4 py-3 md:py-0 w-full md:flex-1 cursor-pointer group">
                  <PenLine className="text-[#888] group-hover:text-white transition-colors" size={24} />
                  <div className="flex flex-col flex-1">
                    <span className="text-[#888] text-[12px]">Instructions</span>
                    <input 
                      type="text" 
                      value={instructions}
                      onChange={(e) => updateInstructions(e.target.value)}
                      placeholder="Add a note for your order" 
                      className="bg-transparent border-none outline-none text-white text-[14px] placeholder:text-white/50 w-full"
                    />
                  </div>
                </div>

              </div>

              {/* Recommendations */}
              <div className="flex flex-col mb-12">
                <h3 className="font-bebas text-white text-[24px] tracking-wide mb-6">YOU MAY ALSO LIKE</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {recommendations.map(rec => (
                    <RecommendationCard 
                      key={rec.id} 
                      item={rec} 
                      onAdd={() => {
                        const priceNum = parseInt(rec.price.replace(/[^0-9]/g, ''), 10) || 0;
                        addToCart({
                          id: `${rec.id}-Standard`,
                          productId: rec.id,
                          title: rec.title,
                          image: rec.image,
                          basePrice: priceNum,
                          quantity: 1,
                          spiceLevel: 'Mild',
                          extras: []
                        });
                        showToast('Item added to cart');
                      }} 
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Summary */}
            <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
              <div className="sticky top-[100px]">
                <CartSummary />
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
