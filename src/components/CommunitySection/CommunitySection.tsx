import { motion } from "framer-motion";
import ReviewCarousel from "./ReviewCarousel";
import InstagramFeed from "./InstagramFeed";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export default function CommunitySection() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#050505] py-[120px] flex items-center justify-center overflow-hidden">
      
      {/* 2% SVG Noise Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      ></div>

      {/* Main Content Container */}
      <motion.div 
        className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column - 40% */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <ReviewCarousel />
        </div>

        {/* Faint Vertical Divider */}
        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[rgba(246,196,67,0.15)] to-transparent mx-8 lg:mx-0 shrink-0"></div>

        {/* Right Column - 60% */}
        <div className="w-full lg:w-auto lg:flex-1 flex flex-col">
          <InstagramFeed />
        </div>
      </motion.div>
    </section>
  );
}
