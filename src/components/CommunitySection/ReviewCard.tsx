import { motion, type Variants } from "framer-motion";

interface ReviewCardProps {
  avatar: string;
  rating: number;
  text: string;
  name: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ReviewCard({ avatar, rating, text, name }: ReviewCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 flex gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full mb-6 overflow-hidden"
    >
      {/* Background Quote Icon */}
      <svg className="absolute top-6 right-6 w-20 h-20 text-white opacity-[0.03] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Avatar */}
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0 border border-[rgba(255,255,255,0.1)]">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < rating ? "var(--color-brand-yellow)" : "rgba(255,255,255,0.2)"}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          ))}
        </div>

        {/* Review Text */}
        <p className="font-inter text-[rgba(255,255,255,0.72)] text-[16px] leading-relaxed mb-6">
          {text.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>

        {/* Customer Name */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-[2px] bg-[#F25C05]"></div>
          <span className="font-inter font-semibold text-[#F25C05] text-[16px]">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}
