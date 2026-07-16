import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Minus, Plus } from 'lucide-react';
import type { MenuItem } from '../../data/menu';
import { useCart } from '../../hooks/useCart';
import { useUiStore } from '../../store/uiStore';

export default function ProductDetailsCard({ product }: { product: MenuItem }) {
  const [isWishlist, setIsWishlist] = useState(false);
  const [spiceLevel, setSpiceLevel] = useState('Hot');
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedDrink, setSelectedDrink] = useState('Coke');

  const { addToCart } = useCart();
  const { showToast } = useUiStore();

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setSelectedExtras([]);
    setSelectedDrink('Coke');
  }, [product.id]);

  // Parse price from string like "₹249" to number 249
  const basePrice = parseInt(product.price.replace(/[^0-9]/g, ''), 10) || 0;

  const spiceLevels = [
    { name: 'Mild', icon: '🌶️', color: 'text-green-500' },
    { name: 'Medium', icon: '🌶️', color: 'text-orange-400' },
    { name: 'Hot', icon: '🌶️', color: 'text-red-500' },
    { name: 'Extra Hot', icon: '🌶️🌶️', color: 'text-red-600' }
  ];

  const extras = [
    { id: 'cheese', name: 'Extra Cheese', price: 30 },
    { id: 'patty', name: 'Extra Patty', price: 60 },
    { id: 'bacon', name: 'Bacon', price: 50 }
  ];

  const drinks = [
    { id: 'Coke', name: 'Coke', price: 40, icon: '🥤' },
    { id: 'Pepsi', name: 'Pepsi', price: 40, icon: '🥤' },
    { id: 'Sprite', name: 'Sprite', price: 40, icon: '🥤' },
    { id: 'None', name: 'No Drink', price: 0, icon: '🚫' }
  ];

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = basePrice;
    selectedExtras.forEach(ext => {
      const extra = extras.find(e => e.id === ext);
      if (extra) total += extra.price;
    });
    const drink = drinks.find(d => d.id === selectedDrink);
    if (drink) total += drink.price;
    return total * quantity;
  };

  const handleAddToCart = () => {
    // Generate a unique cart item ID based on product and customizations
    const extrasString = selectedExtras.sort().join('-');
    const cartItemId = `${product.id}-${spiceLevel}-${extrasString}-${selectedDrink}`;
    
    addToCart({
      id: cartItemId,
      productId: product.id,
      title: product.title,
      image: product.image,
      basePrice: basePrice,
      quantity: quantity,
      spiceLevel: spiceLevel,
      extras: selectedExtras.map(extId => extras.find(e => e.id === extId)!).filter(Boolean),
      drink: drinks.find(d => d.id === selectedDrink)
    });
    
    showToast('Item added to cart');
  };

  // Split title if it has multiple words for styling
  const titleWords = product.title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <div className="w-full min-h-full flex items-center justify-center py-10 px-4 sm:px-8 lg:px-0 lg:py-16">
      
      <motion.div 
        key={product.id} // Re-animate on product change
        className="w-full max-w-[600px] lg:max-w-none lg:w-[90%] xl:w-[85%] bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-6 sm:p-8 xl:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        
        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-[12px] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.05)] transition-colors group z-10"
        >
          <Heart 
            size={22} 
            className={`transition-colors ${isWishlist ? 'fill-[#FFC107] text-[#FFC107]' : 'text-white group-hover:text-[#FFC107]'}`} 
          />
        </button>

        {/* HEADER */}
        <div className="mb-6">
          {product.badge && (
            <div className="inline-flex items-center gap-1.5 border border-[#FF6A00] rounded-full px-3 py-1 mb-4">
              <span className="text-[12px]">🔥</span>
              <span className="font-bebas text-[#FF6A00] tracking-widest text-[13px] pt-0.5">{product.badge}</span>
            </div>
          )}

          <h1 className="font-bebas text-[42px] sm:text-[54px] xl:text-[64px] leading-[0.85] tracking-wide uppercase mb-4">
            <span className="block text-white">{firstWord}</span>
            <span className="block text-[#FFC107]">{restOfTitle}</span>
          </h1>

          <p className="font-inter text-[#BDBDBD] text-[14px] sm:text-[15px] max-w-[85%] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* RATING & BASE PRICE */}
        <div className="flex items-end justify-between border-b border-[rgba(255,255,255,0.08)] pb-6 mb-6">
          <div className="flex items-center gap-2">
            <Star size={18} className="fill-[#FFC107] text-[#FFC107]" />
            <span className="font-inter font-bold text-white text-[16px]">4.7</span>
            <span className="font-inter text-[#BDBDBD] text-[14px]">(1280+ reviews)</span>
          </div>
          <div className="font-bebas text-[#FFC107] text-[42px] sm:text-[48px] leading-none tracking-wide">
            ₹{basePrice}
          </div>
        </div>

        {/* CUSTOMIZATION AREA */}
        <div className="flex-1 flex flex-col gap-8 mb-6">
          
          {/* SPICE LEVEL */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bebas text-white tracking-widest text-[16px]">CUSTOMIZE IT</h3>
            </div>
            <p className="font-bebas text-[#BDBDBD] tracking-widest text-[14px] mb-3">SPICE LEVEL</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {spiceLevels.map((spice) => (
                <button
                  key={spice.name}
                  onClick={() => setSpiceLevel(spice.name)}
                  className={`flex items-center justify-center gap-2 h-12 rounded-[8px] border transition-all duration-300 ${
                    spiceLevel === spice.name 
                      ? 'border-[#FFC107] bg-[rgba(255,193,7,0.05)]' 
                      : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  <span className={`text-[14px] ${spiceLevel === spice.name ? '' : 'grayscale opacity-60'}`}>{spice.icon}</span>
                  <span className={`font-inter text-[13px] ${spiceLevel === spice.name ? 'text-white font-medium' : 'text-[#BDBDBD]'}`}>{spice.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* EXTRAS */}
          <div>
            <p className="font-bebas text-[#BDBDBD] tracking-widest text-[14px] mb-3">ADD EXTRAS</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`flex items-center justify-between px-4 h-12 rounded-[8px] border transition-all duration-300 ${
                    selectedExtras.includes(extra.id)
                      ? 'border-[#FFC107] bg-[rgba(255,193,7,0.05)]'
                      : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                      selectedExtras.includes(extra.id) ? 'bg-[#FFC107] border-[#FFC107]' : 'border-[rgba(255,255,255,0.3)]'
                    }`}>
                      {selectedExtras.includes(extra.id) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                    </div>
                    <span className="font-inter text-[13px] text-white">{extra.name}</span>
                  </div>
                  <span className="font-inter text-[12px] text-[#BDBDBD]">₹{extra.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* DRINKS */}
          <div>
            <p className="font-bebas text-[#BDBDBD] tracking-widest text-[14px] mb-3">CHOOSE YOUR DRINK <span className="text-[#888] normal-case font-inter text-[12px] ml-1">(Optional)</span></p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {drinks.map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => setSelectedDrink(drink.id)}
                  className={`flex items-center gap-3 px-3 h-14 rounded-[8px] border transition-all duration-300 ${
                    selectedDrink === drink.id
                      ? 'border-[#FFC107] bg-[rgba(255,193,7,0.05)]'
                      : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  <span className="text-[20px]">{drink.icon}</span>
                  <div className="flex flex-col items-start">
                    <span className={`font-inter text-[13px] ${selectedDrink === drink.id ? 'text-white' : 'text-[#BDBDBD]'}`}>{drink.name}</span>
                    <span className="font-inter text-[11px] text-[#888]">₹{drink.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM CTA AREA */}
        <div className="flex items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)] mt-auto">
          
          {/* Quantity Selector */}
          <div className="flex items-center justify-between w-[120px] h-14 rounded-[12px] border border-[rgba(255,255,255,0.1)] px-2 bg-[rgba(0,0,0,0.3)] shrink-0">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-[#FFC107] hover:bg-[rgba(255,255,255,0.05)] rounded-[8px] transition-colors"
            >
              <Minus size={20} strokeWidth={2.5} />
            </button>
            <span className="font-inter font-bold text-white text-[16px]">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-[#FFC107] hover:bg-[rgba(255,255,255,0.05)] rounded-[8px] transition-colors"
            >
              <Plus size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className="flex-1 h-14 bg-[#FFC107] rounded-[12px] flex items-center justify-center gap-4 hover:bg-[#FFD452] hover:shadow-[0_15px_30px_rgba(255,193,7,0.25)] transition-all duration-300 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-bebas tracking-wider text-black text-[22px] pt-1">ADD TO CART</span>
            <span className="font-bebas tracking-wider text-black text-[22px] pt-1 opacity-70">|</span>
            <span className="font-inter font-bold text-black text-[18px]">₹{calculateTotal()}</span>
          </motion.button>

        </div>

      </motion.div>
    </div>
  );
}
