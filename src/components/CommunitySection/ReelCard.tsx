import { motion, type Variants } from "framer-motion";

interface ReelCardProps {
  thumbnail: string;
  duration: string;
  views: string;
  captionWhite: string;
  captionYellow: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ReelCard({ thumbnail, duration, views, captionWhite, captionYellow }: ReelCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className="relative w-full aspect-[9/16] bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-[22px] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      {/* Thumbnail Wrapper */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[#080808]"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } }
        }}
      >
        <img src={thumbnail} alt="Reel thumbnail" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
      </motion.div>

      {/* Top Overlay Icons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        {/* Reels Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.11 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM10 15V9L15 12L10 15ZM5 8H7V6H5V8ZM9 8H11V6H9V8ZM13 8H15V6H13V8ZM17 8H19V6H17V8Z"/>
        </svg>
        
        {/* Duration Badge */}
        <span className="font-inter font-medium text-white text-[13px] bg-black/40 backdrop-blur-md px-2 py-1 rounded-[6px]">
          {duration}
        </span>
      </div>

      {/* Play Button (Center) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.15, backgroundColor: "rgba(255,255,255,0.2)" }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2">
        {/* Caption */}
        <p className="font-inter font-semibold text-[16px] leading-[1.3] text-white">
          {captionWhite.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
          <span className="block text-[var(--color-brand-yellow)]">{captionYellow}</span>
        </p>

        {/* View Count */}
        <div className="flex items-center gap-[6px] text-white/80 mt-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="font-inter text-[13px] font-medium tracking-wide">{views}</span>
        </div>
      </div>
      
      {/* Entire Card Scale Hover (Needs to be on a wrapper, but we'll apply it directly to the card in framer-motion) */}
      <motion.div 
        className="absolute inset-0 border-[rgba(255,255,255,0.08)] pointer-events-none rounded-[22px] z-30"
        variants={{
          initial: { border: "1px solid rgba(255,255,255,0.08)" },
          hover: { border: "1px solid rgba(255,255,255,0.2)" }
        }}
      ></motion.div>
    </motion.div>
  );
}
