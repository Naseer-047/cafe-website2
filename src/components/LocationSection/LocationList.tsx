import { motion } from "framer-motion";
import LocationCard from "./LocationCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const locations = [
  {
    id: "indiranagar",
    name: "INDIRANAGAR",
    address: "100 Feet Road, HAL 2nd Stage\nBengaluru, KA 560038",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 1420,
    isActive: true,
  },
  {
    id: "koramangala",
    name: "KORAMANGALA",
    address: "80 Feet Road, 4th Block\nBengaluru, KA 560034",
    thumbnail: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    ratingCount: 980,
    isActive: false,
  },
  {
    id: "whitefield",
    name: "WHITEFIELD",
    address: "ITPL Main Road\nBengaluru, KA 560066",
    thumbnail: "https://images.unsplash.com/photo-1466978913421-bac2e5e4272c?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 1120,
    isActive: false,
  }
];

export default function LocationList() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col w-full h-full"
    >
      <div className="flex flex-col gap-0 w-full mb-8">
        {locations.map((loc) => (
          <LocationCard key={loc.id} {...loc} />
        ))}
      </div>

      {/* View All Link */}
      <motion.a 
        href="#"
        className="group flex items-center gap-3 text-[#F25C05] font-bebas text-[22px] tracking-wide w-fit ml-4"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        VIEW ALL LOCATIONS
        <svg 
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}
