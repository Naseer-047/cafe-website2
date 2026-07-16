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
      className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-4 sm:p-6 flex items-center gap-4 sm:gap-6 w-full group hover:border-[rgba(244,180,0,0.3)] transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] shrink-0 relative flex items-center justify-center">
        {/* Subtle glow behind image */}
        <div className="absolute inset-0 bg-[#F15A24] opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-300"></div>
        <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        {item.badge && (
          <span className="font-bebas text-[#F15A24] text-[12px] sm:text-[14px] tracking-widest uppercase mb-1 border border-[#F15A24] rounded-sm px-2 py-0.5 w-max">
            {item.badge}
          </span>
        )}
        <h3 className="font-bebas text-white text-[24px] sm:text-[28px] tracking-wide uppercase leading-none mb-2">
          {item.title}
        </h3>
        <p className="font-inter text-[#A8A8A8] text-[13px] sm:text-[15px] leading-relaxed max-w-[280px]">
          {item.description}
        </p>
      </div>

      {/* Price & Add */}
      <div className="flex flex-col items-end gap-3 shrink-0">
        <span className="font-bebas text-[#F4B400] text-[28px] sm:text-[34px] tracking-wide leading-none">
          {item.price}
        </span>
        <button 
          onClick={(e) => {
            e.stopPropagation(); // prevent navigation if they just click plus
            // cart logic would go here
          }}
          className="w-10 h-10 sm:w-12 sm:h-12 border border-[#F4B400] rounded-[8px] flex items-center justify-center text-[#F4B400] hover:bg-[#F4B400] hover:text-black transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(244,180,0,0.3)]"
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
    <section className="w-full px-6 sm:px-12 lg:px-16 max-w-[1920px] mx-auto z-10 relative py-16">
      {filteredItems.length === 0 ? (
        <div className="w-full text-center py-20 text-[#A8A8A8] font-bebas text-[24px] tracking-widest">
          No items found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <MenuItemCard key={`${activeCategory}-${item.id}`} item={item} index={idx} />
          ))}
        </div>
      )}
    </section>
  );
}
