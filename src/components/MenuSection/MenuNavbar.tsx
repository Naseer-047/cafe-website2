import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = ["MENU", "LOCATIONS", "OUR STORY", "CONTACT"];

export default function MenuNavbar() {
  return (
    <motion.header 
      className="w-full flex items-center justify-between py-6 lg:py-8 px-6 sm:px-12 lg:px-16 max-w-[1920px] mx-auto relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link to="/" className="flex flex-col font-bebas leading-[0.85] tracking-wide text-[32px] sm:text-[38px] uppercase">
        <span className="text-[#F4B400] drop-shadow-[0_0_10px_rgba(244,180,0,0.15)]">MA'ONO</span>
        <span className="text-white text-[18px] sm:text-[20px] tracking-[2px]">FRIED CHICKEN</span>
      </Link>

      {/* Center Navigation */}
      <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => {
          const isActive = link === "MENU";
          return (
            <div key={link} className="relative group cursor-pointer">
              <span className={`font-inter text-[15px] tracking-wide transition-colors duration-300 ${isActive ? 'text-[#F4B400] font-semibold' : 'text-white hover:text-[#F4B400]'}`}>
                {link}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#F4B400]"
                />
              )}
            </div>
          );
        })}
      </nav>

      {/* Right Cart Button */}
      <button className="flex items-center gap-2 border border-[#F4B400] rounded-[8px] px-5 py-2 hover:bg-[#F4B400]/10 transition-colors duration-300 group">
        <ShoppingCart size={18} className="text-[#F4B400] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
        <span className="font-inter font-semibold text-white text-[15px] uppercase tracking-wide">CART (2)</span>
      </button>
    </motion.header>
  );
}
