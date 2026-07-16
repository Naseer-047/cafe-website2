import { motion } from "framer-motion";

import { Sandwich, Drumstick, Utensils, CupSoda, CakeSlice } from "lucide-react";

const categories = [
  {
    name: "BURGERS",
    active: true,
    icon: <Sandwich size={24} strokeWidth={1.5} />
  },
  {
    name: "CHICKEN",
    active: false,
    icon: <Drumstick size={24} strokeWidth={1.5} />
  },
  {
    name: "FRIES & SIDES",
    active: false,
    icon: <Utensils size={24} strokeWidth={1.5} />
  },
  {
    name: "DRINKS",
    active: false,
    icon: <CupSoda size={24} strokeWidth={1.5} />
  },
  {
    name: "DESSERTS",
    active: false,
    icon: <CakeSlice size={24} strokeWidth={1.5} />
  }
];

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, setActiveCategory }: CategoryTabsProps) {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 max-w-[1920px] mx-auto z-40 sticky top-[58px] pt-8 lg:pt-12 pb-4 bg-[#050505]">
      <motion.div 
        className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-2 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-x-auto hide-scrollbar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center min-w-max w-full justify-between px-4 lg:px-10 py-2 gap-8 lg:gap-0">
          {categories.map((category, idx) => {
            const isActive = category.name === activeCategory;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveCategory(category.name)}
                className="flex items-center gap-3 cursor-pointer group relative py-6"
              >
                <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#A8A8A8] group-hover:text-white'}`}>
                  {category.icon}
                </div>
                <span className={`font-bebas text-[20px] sm:text-[24px] tracking-widest transition-colors duration-300 ${isActive ? 'text-[#F4B400]' : 'text-[#A8A8A8] group-hover:text-white'}`}>
                  {category.name}
                </span>

                {isActive && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F4B400] rounded-t-md"
                  />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
