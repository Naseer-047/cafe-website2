import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function MenuHero() {
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
    <section className="w-full relative px-6 sm:px-12 lg:px-16 max-w-[1920px] mx-auto min-h-[400px] lg:min-h-[450px] xl:min-h-[550px] flex flex-col lg:flex-row items-center justify-between pt-4 pb-12 z-10">
      
      {/* Background Chalk Doodles (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-screen" />

      {/* Left Content */}
      <motion.div 
        className="flex flex-col z-10 lg:w-[45%] xl:w-[40%] mt-8 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="flex flex-col font-bebas text-[100px] sm:text-[140px] lg:text-[160px] xl:text-[200px] leading-[0.75] tracking-tight uppercase">
          <span className="text-white">OUR</span>
          <span className="text-[#F4B400] drop-shadow-[0_0_20px_rgba(244,180,0,0.15)]">MENU</span>
        </h1>
        
        <div className="relative mt-8 mb-10 self-start">
          <p className="font-inter text-white text-[20px] sm:text-[24px] tracking-wide">
            Fresh. Crispy. Made Daily.
          </p>
          {/* Orange Brush Stroke Underline */}
          <svg className="absolute -bottom-4 left-0 w-[110%] h-[12px] opacity-90" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M2 10C50 4 100 2 198 8" stroke="#F15A24" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button 
            onClick={handleOrderNow}
            className="w-full sm:w-auto bg-[#F4B400] text-[#050505] font-inter font-bold text-[18px] py-4 px-10 rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#ffc21a] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)] transition-all duration-300"
          >
            ORDER NOW
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
          
          <button className="w-full sm:w-auto bg-[#050505] text-white border border-[#F4B400] font-inter font-bold text-[18px] py-4 px-10 rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#F4B400]/10 hover:-translate-y-1 transition-all duration-300">
            VIEW COMBOS
            <Users size={20} className="text-[#F4B400]" />
          </button>
        </div>
      </motion.div>

      {/* Right Content - Hero Image Composition */}
      <motion.div 
        className="flex-1 w-full relative z-0 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 h-[350px] lg:h-[450px] xl:h-[550px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {/* Massive Orange Splatter Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[140%] h-[140%] lg:h-[180%] opacity-90 pointer-events-none mix-blend-screen"
             style={{
               background: 'radial-gradient(circle, rgba(241,90,36,0.3) 0%, rgba(241,90,36,0) 70%)',
               filter: 'blur(40px)'
             }}
        />
        
        {/* Images Container */}
        <div className="relative w-full max-w-[700px] h-full flex items-center justify-center lg:justify-end">
          {/* Main Combo Image instead of individual pieces since missing fries/drink */}
          <motion.img 
            src="/combo for cart section.png" 
            alt="Ma'ono Combo" 
            className="relative z-20 w-full h-auto max-h-[100%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-100 lg:scale-110 origin-center lg:origin-right"
            initial={{ y: 20 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onError={(e) => {
              // Fallback to burger if combo image fails
              e.currentTarget.src = "/burger.png";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
