import { motion, type Variants } from "framer-motion";

export interface LocationCardProps {
  id: string;
  name: string;
  address: string;
  thumbnail: string;
  rating: number;
  ratingCount: number;
  isActive?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function LocationCard({ name, address, thumbnail, rating, ratingCount, isActive }: LocationCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className={`group relative bg-[#0B0B0B] border ${isActive ? 'border-[#F25C05] shadow-[0_15px_35px_rgba(242,92,5,0.15)]' : 'border-[rgba(255,255,255,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'} rounded-[22px] p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full mb-6 overflow-hidden cursor-pointer transition-colors duration-300 hover:border-[#F25C05]`}
    >
      {/* Thumbnail */}
      <div className="w-full sm:w-[160px] h-[160px] rounded-[14px] overflow-hidden shrink-0 bg-[#080808]">
        <motion.img 
          src={thumbnail} 
          alt={name} 
          className="w-full h-full object-cover"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-2 gap-2">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#F25C05" className="shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
            </svg>
            <h3 className="font-bebas text-white text-[22px] xl:text-[28px] leading-none tracking-wide mt-1 shrink-0">{name}</h3>
          </div>
          
          <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.2)] rounded-[6px] px-2 py-1 shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-brand-yellow)">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span className="font-inter font-bold text-white text-[13px]">{rating}</span>
          </div>
        </div>

        {/* Address */}
        <p className="font-inter text-[rgba(255,255,255,0.6)] text-[14px] leading-[1.4] mb-3 max-w-[200px]">
          {address.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>

        {/* Status & Hours */}
        <div className="flex items-center gap-2 mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#42D16B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="font-inter font-medium text-[#42D16B] text-[14px]">11:00 AM – 9:00 PM</span>
        </div>

        {/* Full Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(rating) ? "var(--color-brand-yellow)" : "rgba(255,255,255,0.2)"}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            ))}
          </div>
          <span className="font-inter text-[rgba(255,255,255,0.5)] text-[13px]">({ratingCount})</span>
        </div>

        {/* CTA Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] font-inter font-semibold text-[14px] py-3 rounded-[8px] transition-colors duration-300 group-hover:bg-[var(--color-brand-yellow)] group-hover:text-black">
          GET DIRECTIONS
          <svg 
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      
      {/* Absolute Hover Lift (Framer Motion handles lift on container, but we can also add a subtle shadow boost here) */}
    </motion.div>
  );
}
