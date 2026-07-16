import { motion } from "framer-motion";

export default function ContactGrid() {
  return (
    <motion.div 
      className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16 border-t border-[rgba(255,255,255,0.05)] pt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* LOCATION */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h4 className="font-bebas text-[28px] tracking-widest text-[var(--color-brand-yellow)]">LOCATION</h4>
        <p className="font-inter text-[#A3A3A3] text-[18px] leading-relaxed">
          100 Feet Road, HAL 2nd Stage<br/>
          Indiranagar, Bengaluru<br/>
          Karnataka 560038
        </p>
      </div>

      {/* HOURS */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h4 className="font-bebas text-[28px] tracking-widest text-[var(--color-brand-yellow)]">HOURS</h4>
        <p className="font-inter text-[#A3A3A3] text-[18px] leading-relaxed">
          Open Daily<br/>
          11:00 AM - 9:00 PM<br/>
          Monday - Sunday
        </p>
      </div>

      {/* CONNECT */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h4 className="font-bebas text-[28px] tracking-widest text-[var(--color-brand-yellow)]">CONNECT</h4>
        <div className="font-inter text-[#A3A3A3] text-[18px] leading-relaxed flex flex-col gap-2 items-center lg:items-start">
          <a href="tel:+918045678900" className="hover:text-white transition-colors duration-300 inline-block">+91 80 4567 8900</a>
          <a href="mailto:hello@maono.in" className="hover:text-white transition-colors duration-300 inline-block">hello@maono.in</a>
          <a href="#" className="hover:text-white transition-colors duration-300 inline-block mt-2 font-medium">@maonobangalore</a>
        </div>
      </div>
    </motion.div>
  );
}
