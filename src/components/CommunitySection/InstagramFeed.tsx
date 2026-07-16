import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ReelCard from "./ReelCard";
import ViewInstagramButton from "./ViewInstagramButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const reels = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop",
    duration: "0:15",
    captionWhite: "Crispy.\nJuicy.",
    captionYellow: "Unmatched.",
    views: "24.7K"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    duration: "0:18",
    captionWhite: "The Hawaiian",
    captionYellow: "Burger 🌴",
    views: "31.2K"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000&auto=format&fit=crop",
    duration: "0:12",
    captionWhite: "Loaded Fries",
    captionYellow: "Done Right.",
    views: "18.6K"
  }
];

export default function InstagramFeed() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col w-full h-full pl-0 lg:pl-8"
    >
      <SectionHeading 
        label="FOLLOW OUR JOURNEY" 
        titleWhite="ON" 
        titleYellow="INSTAGRAM." 
      />

      {/* Instagram Profile Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-[12px] border-2 border-[#F25C05] flex items-center justify-center text-[#F25C05]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-inter font-semibold text-white text-[24px]">@maonobangalore</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#F25C05" className="mt-1">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
          </svg>
        </div>
      </motion.div>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {reels.map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>

      <ViewInstagramButton />
    </motion.div>
  );
}
