import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../data/menu";
import type { MenuItem } from "../../data/menu";

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      onClick={() => navigate(`/product/${item.id}`)}
      className="bg-[#0B0B0B] sm:bg-[#111111] border border-[rgba(255,255,255,0.05)] sm:border-[rgba(255,255,255,0.08)] rounded-[16px] sm:rounded-[14px] p-4 sm:p-6 flex flex-row sm:items-center gap-4 sm:gap-6 w-full group hover:border-[rgba(244,180,0,0.3)] transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    >
      {/* Shared Image for Mobile and PC */}
      <div className="w-[120px] h-[120px] sm:w-[120px] sm:h-[120px] shrink-0 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[#F15A24] opacity-5 sm:opacity-0 sm:group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-300"></div>
        {/* Decorative Sparks for mobile image (optional, mimicking screenshot) */}
        <svg className="absolute -top-1 left-2 w-6 h-6 text-[#F4B400] sm:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M5 7l3 3M2 12h4" />
        </svg>
        <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" />
      </div>

      {/* MOBILE CONTENT (Hidden on PC) */}
      <div className="flex-1 flex flex-col sm:hidden pt-1">
        {item.badge && (
          <span className="font-bebas text-[#F15A24] text-[11px] tracking-widest uppercase mb-1.5 border border-[#F15A24]/40 rounded-[4px] px-1.5 py-[2px] w-max leading-none">
            {item.badge}
          </span>
        )}
        <h3 className="font-bebas text-white text-[24px] tracking-wide uppercase leading-none mb-1.5">
          {item.title}
        </h3>
        <p className="font-inter text-[#A8A8A8] text-[13px] leading-[1.3] max-w-[200px] line-clamp-3">
          {item.description}
        </p>
        <div className="flex justify-between items-end mt-auto pt-3">
          <span className="font-bebas text-[#F4B400] text-[26px] tracking-wide leading-none">
            ₹{item.price}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-9 h-9 bg-[#F4B400] rounded-[8px] flex items-center justify-center text-black shadow-[0_4px_10px_rgba(244,180,0,0.3)]"
          >
            <Plus size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* PC CONTENT (Hidden on Mobile) */}
      <div className="hidden sm:flex flex-1 flex-col justify-center">
        {item.badge && (
          <span className="font-bebas text-[#F15A24] text-[14px] tracking-widest uppercase mb-1 border border-[#F15A24] rounded-sm px-2 py-0.5 w-max">
            {item.badge}
          </span>
        )}
        <h3 className="font-bebas text-white text-[28px] tracking-wide uppercase leading-none mb-2">
          {item.title}
        </h3>
        <p className="font-inter text-[#A8A8A8] text-[15px] leading-relaxed max-w-[280px]">
          {item.description}
        </p>
      </div>

      {/* PC PRICE & ADD (Hidden on Mobile) */}
      <div className="hidden sm:flex flex-col items-end gap-3 shrink-0">
        <span className="font-bebas text-[#F4B400] text-[34px] tracking-wide leading-none">
          ₹{item.price}
        </span>
        <button 
          onClick={(e) => {
            e.stopPropagation(); 
          }}
          className="w-12 h-12 border border-[#F4B400] rounded-[8px] flex items-center justify-center text-[#F4B400] hover:bg-[#F4B400] hover:text-black transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]"
        >
          <Plus size={24} strokeWidth={2.5} />
        </button>
      </div>
    </motion.div>
  );
}

export default function MenuGrid({ activeCategory }: { activeCategory: string }) {
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full px-4 sm:px-12 lg:px-16 max-w-[1920px] mx-auto z-10 relative py-8 sm:py-16">
      {/* Mobile-only Section Header */}
      <div className="sm:hidden mb-6 pl-2">
        <div className="flex items-center gap-2">
          <h2 className="font-bebas text-white text-[38px] leading-none tracking-wide uppercase">
            POPULAR {activeCategory}
          </h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F15A24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mt-4">
            <path d="M4 22L10 16M2 15l5-2M10 22l-2-5" />
          </svg>
        </div>
        <p className="font-inter text-[#A8A8A8] text-[14px] mt-1 mb-2">
          Fresh. Crispy. Made Daily.
        </p>
        <div className="w-[40px] h-[3px] bg-[#F15A24] rounded-full"></div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="w-full text-center py-20 text-[#A8A8A8] font-bebas text-[24px] tracking-widest">
          No items found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <MenuItemCard key={`${activeCategory}-${item.id}`} item={item} index={idx} />
          ))}
        </div>
      )}
    </section>
  );
}
