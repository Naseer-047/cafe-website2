import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface Recommendation {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface RecommendationCardProps {
  item: Recommendation;
  onAdd: () => void;
}

export default function RecommendationCard({ item, onAdd }: RecommendationCardProps) {
  return (
    <motion.div 
      className="w-[200px] h-[120px] bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-[16px] flex relative group hover:border-[#FFC107]/50 transition-colors shrink-0"
      whileHover={{ y: -4 }}
    >
      <div className="flex-1 p-3 flex flex-col justify-between z-10">
        <h4 className="font-inter font-bold text-white text-[13px] leading-tight pr-4">
          {item.title}
        </h4>
        <span className="font-bebas text-[#FFC107] text-[18px] tracking-wide">
          {item.price}
        </span>
      </div>

      <div className="w-[100px] absolute right-0 bottom-0 top-0 overflow-hidden rounded-r-[16px] flex items-center justify-center p-2 z-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-[150%] h-[150%] object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] translate-x-4 translate-y-2 group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <button 
        onClick={onAdd}
        className="absolute top-2 right-2 bg-black/60 backdrop-blur-md border border-[#FFC107] text-[#FFC107] rounded-full px-2 py-0.5 flex items-center gap-1 font-inter text-[10px] font-bold z-20 hover:bg-[#FFC107] hover:text-black transition-colors"
      >
        ADD <Plus size={10} strokeWidth={3} />
      </button>
    </motion.div>
  );
}
