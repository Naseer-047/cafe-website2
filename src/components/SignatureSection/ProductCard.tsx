import { motion, type Variants } from "framer-motion";
import { useCart } from "../../hooks/useCart";
import { useUiStore } from "../../store/uiStore";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  description: string;
  price: string;
  isBestseller?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ProductCard({ id, image, title, description, price, isBestseller }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useUiStore();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const priceNum = parseInt(price.replace(/[^0-9]/g, ''), 10);
    addToCart({
      id: id || title.toLowerCase().replace(/\s+/g, '-'),
      productId: id || title.toLowerCase().replace(/\s+/g, '-'),
      title: title,
      image: image,
      basePrice: priceNum,
      quantity: 1,
      spiceLevel: "Medium",
      extras: []
    });
    showToast(`Added ${title} to cart`);
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };
  return (
    <motion.div
      onClick={handleCardClick}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-[24px] overflow-hidden flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(246,196,67,0.1)] cursor-pointer"
    >
      {/* Badge */}
      {isBestseller && (
        <div className="absolute top-4 left-4 z-20 bg-[#F25C05] text-white font-inter font-bold text-[12px] uppercase tracking-wider px-3 py-1 rounded-[6px] flex items-center gap-1 shadow-lg">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          BESTSELLER
        </div>
      )}

      {/* Image Area */}
      <div className="relative w-full pt-[80%] sm:pt-[75%] lg:pt-[85%] bg-[#080808] overflow-hidden">
        {/* Subtle radial gradient for studio lighting effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-6 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] z-10"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10 bg-[#0B0B0B]">
        <h3 className="font-bebas text-white text-[28px] sm:text-[32px] leading-[1] tracking-wide mb-3">{title}</h3>
        
        <p className="font-inter text-[rgba(255,255,255,0.6)] text-[15px] sm:text-[16px] leading-relaxed line-clamp-2 mb-8 flex-1">
          {description}
        </p>
        
        <div className="flex items-end justify-between mt-auto">
          <div className="font-bebas text-[var(--color-brand-yellow)] text-[32px] sm:text-[36px] leading-none">
            {price}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-[48px] h-[48px] rounded-full border-2 border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-brand-yellow)] group-hover:text-black cursor-pointer z-20 relative"
          >
            <motion.svg 
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:rotate-90"
            >
              <path d="M12 5v14M5 12h14"/>
            </motion.svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
