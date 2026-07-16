import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProductGrid from "./ProductGrid";
import ViewMenuButton from "./ViewMenuButton";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function SignatureSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] py-[120px] flex items-center justify-center overflow-hidden">
      
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
        className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionHeader />
        <ProductGrid />
        <ViewMenuButton />
      </motion.div>
    </section>
  );
}
