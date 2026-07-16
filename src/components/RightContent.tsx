import { motion } from "framer-motion";

export default function RightContent() {
  return (
    <div className="w-full lg:w-[55%] relative flex justify-center items-center mt-12 lg:mt-0 z-10 h-full min-h-[500px]">
      


      {/* Burger Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 w-[95%] max-w-[680px] lg:w-[125%] lg:max-w-[1000px] max-h-[50vh] lg:max-h-[75vh] flex justify-center -ml-0 lg:-ml-[10%]"
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}burger.png`}
          alt="Handcrafted Fried Chicken Burger"
          loading="lazy"
          className="w-full h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.7)]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom center" }}
        />
      </motion.div>

      {/* Halal Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        className="absolute top-[9%] right-[5%] lg:right-[0%] z-30 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#F25C05] border-[3px] border-white flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-12"
      >
        <div className="w-[88%] h-[88%] border border-dashed border-[rgba(255,255,255,0.6)] rounded-full flex flex-col items-center justify-center p-1 text-center">
          <div className="flex gap-[2px] text-white mb-[2px]">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <span className="font-bebas text-white text-[16px] lg:text-[22px] leading-none mt-[2px]">100%</span>
          <span className="font-bebas text-white text-[18px] lg:text-[26px] leading-none mt-[1px]">HALAL</span>
          <span className="font-inter text-white text-[6px] lg:text-[8px] tracking-wider font-semibold mt-[2px] bg-black/20 px-[4px] py-[2px] rounded-full">CERTIFIED</span>
        </div>
      </motion.div>
    </div>
  );
}
