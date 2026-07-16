import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../hooks/useCart";

const navLinks = [
  { name: "MENU", href: "/menu" },
  { name: "LOCATIONS", href: "/#locations" },
  { name: "ABOUT", href: "/#about" },
  { name: "CONTACT", href: "/#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      className={`fixed top-0 left-0 w-full h-[88px] z-50 flex items-center justify-center transition-all duration-300 border-b border-[rgba(246,196,67,0.15)] ${scrolled ? 'bg-[rgba(5,5,5,0.7)] backdrop-blur-[18px]' : 'bg-transparent backdrop-blur-[2px]'}`}
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-[32px] font-bebas text-[var(--color-brand-yellow)] leading-none tracking-wider flex items-center gap-1">
           
            <span className="mt-1 lowercase">maono</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-bebas tracking-wide text-[20px] sm:text-[24px] text-white hover:text-[var(--color-brand-yellow)] transition-colors duration-300 mt-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-6 lg:gap-8">
          <button 
            onClick={() => navigate('/cart')}
            className="text-white hover:text-[#FFC62A] transition-colors relative flex items-center justify-center" 
            aria-label="Cart"
          >
            <ShoppingCart size={24} strokeWidth={2} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#F25C05] text-white text-[11px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* CTA Button */}
          <button 
            onClick={() => {
              if (!isAuthenticated) {
                navigate('/login');
              } else {
                // Future: open cart or go to checkout
              }
            }}
            className="hidden sm:flex items-center justify-center gap-2 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wider text-[20px] sm:text-[24px] px-8 py-3 rounded-[12px] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(246,196,67,0.25)] transition-all duration-300 shadow-[0_4px_14px_rgba(246,196,67,0.2)] pt-[14px] pb-[10px]"
          >
            ORDER NOW
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mt-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#050505] z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 text-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bebas text-[36px] text-white hover:text-[var(--color-brand-yellow)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (!isAuthenticated) navigate('/login');
              }}
              className="mt-12 bg-[var(--color-brand-yellow)] text-black font-bebas text-[28px] px-10 py-4 rounded-xl"
            >
              ORDER NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
