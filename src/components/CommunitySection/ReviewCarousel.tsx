import { motion, type Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ReviewCard from "./ReviewCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const reviews = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    text: "Best fried chicken in Bangalore!\nCrispy outside, juicy inside.\nThe Hawaiian Burger is a must try.",
    name: "Alex M.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "The flavors are insane.\nEverything is cooked to perfection.\nDefinitely coming back again!",
    name: "Sarah K.",
  }
];

export default function ReviewCarousel() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col w-full h-full pr-0 lg:pr-8"
    >
      <SectionHeading 
        label="OUR COMMUNITY" 
        titleWhite="LOVED BY" 
        titleYellow="THOUSANDS." 
      />

      {/* Ratings Summary */}
      <motion.div variants={itemVariants} className="flex items-center gap-6 mb-12">
        <div className="flex gap-[6px]">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="var(--color-brand-yellow)">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="font-inter font-bold text-white text-[32px] leading-none mt-1">4.9/5</span>
          <p className="font-inter text-[rgba(255,255,255,0.72)] text-[14px] leading-[1.2] mt-1">
            From 5000+<br/>happy customers
          </p>
        </div>
      </motion.div>

      {/* Review Cards */}
      <div className="flex flex-col gap-0 w-full max-w-[500px]">
        {reviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Carousel Navigation */}
      <motion.div variants={itemVariants} className="flex items-center gap-8 mt-4 pl-4">
        {/* Prev Button */}
        <button className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-yellow)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
        </div>

        {/* Next Button */}
        <button className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
