import { motion } from "framer-motion";

const pins = [
  { id: "indiranagar", name: "INDIRANAGAR", top: "65%", left: "30%", active: true },
  { id: "koramangala", name: "KORAMANGALA", top: "45%", left: "45%", active: false },
  { id: "whitefield", name: "WHITEFIELD", top: "25%", left: "70%", active: false },
];

export default function InteractiveMap() {
  return (
    <motion.div 
      className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#111] rounded-[24px] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Map Background (Placeholder) - Using a dark map-like image or texture */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop')` }}
      ></div>
      
      {/* Dark Overlay to ensure pins pop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

      {/* Pins */}
      {pins.map((pin) => (
        <motion.div
          key={pin.id}
          className="absolute z-10 flex flex-col items-center gap-2 cursor-pointer group"
          style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}
          whileHover="hover"
          initial="initial"
        >
          {/* Label */}
          <motion.div 
            className={`font-bebas text-[18px] tracking-wide px-3 py-1 rounded-[6px] shadow-lg backdrop-blur-md border ${pin.active ? 'bg-[#0B0B0B] text-white border-[#F25C05]' : 'bg-[#0B0B0B]/80 text-white border-[rgba(255,255,255,0.1)] group-hover:bg-[#0B0B0B] group-hover:border-[#F25C05]'}`}
            variants={{
              initial: { opacity: 0.8, y: 0 },
              hover: { opacity: 1, y: -4, transition: { duration: 0.3 } }
            }}
          >
            {pin.name}
          </motion.div>

          {/* Pin Icon */}
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: -8, filter: "drop-shadow(0 10px 15px rgba(242,92,5,0.6))", transition: { type: "spring", stiffness: 300, damping: 15 } }
            }}
            animate={{
              y: [0, -6, 0],
              transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: Math.random() }
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#F25C05" className="drop-shadow-lg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
