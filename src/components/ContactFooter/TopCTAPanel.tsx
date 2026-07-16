import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function TopCTAPanel() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleOrderNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/menu');
    }
  };

  return (
    <motion.div 
      className="w-full relative bg-[#080808] rounded-[24px] border border-[rgba(255,255,255,0.03)] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-brand-yellow)] opacity-[0.03] blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]"></div>

      {/* Left Content: Minimal Typography */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h2 className="font-bebas text-white text-[56px] sm:text-[72px] lg:text-[88px] leading-[0.9] tracking-wider uppercase">
          LET'S <span className="text-[var(--color-brand-yellow)]">TALK.</span>
        </h2>
        <p className="font-inter text-[#8A8A8A] text-[16px] sm:text-[18px] max-w-[400px] leading-relaxed">
          Got a burning question, craving something special, or need catering for an event? We're just a message away.
        </p>
      </div>

      {/* Right Content: Clean Action Buttons */}
      <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        
        <a 
          href="mailto:hello@maono.com"
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white font-inter font-medium text-[16px] px-8 py-4 rounded-[12px] hover:border-[var(--color-brand-yellow)] hover:text-[var(--color-brand-yellow)] transition-colors duration-300"
        >
          <Mail size={20} />
          <span>CONTACT US</span>
        </a>

        <motion.button 
          onClick={handleOrderNow}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wide text-[22px] px-10 py-4 rounded-[12px] hover:bg-[#FFD452] shadow-[0_10px_30px_rgba(255,198,42,0.15)] hover:shadow-[0_15px_40px_rgba(255,198,42,0.3)] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>ORDER NOW</span>
          <ArrowRight size={22} className="stroke-[2.5px] -mt-[2px]" />
        </motion.button>

      </div>
    </motion.div>
  );
}
