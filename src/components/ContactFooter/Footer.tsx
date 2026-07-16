import { motion } from "framer-motion";
import BottomBar from "./BottomBar";

const footerLinks = [
  {
    title: "MENU",
    links: ["Signature Picks", "Combos", "Sides", "Drinks"]
  },
  {
    title: "LOCATIONS",
    links: ["Indiranagar", "Koramangala", "Whitefield", "View All Locations"]
  },
  {
    title: "ABOUT",
    links: ["Our Story", "Careers", "News", "Franchise"]
  },
  {
    title: "CONTACT",
    links: ["Get In Touch", "Catering", "Private Events", "FAQs"]
  },
  {
    title: "GIFT CARDS",
    links: ["Purchase", "Check Balance", "Reload Card"]
  }
];

export default function Footer() {
  return (
    <motion.footer 
      className="w-full pt-16 lg:pt-24 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between w-full relative">
        {/* Logo and Tagline Column */}
        <div className="flex flex-col max-w-[300px]">
          <div className="flex flex-col font-bebas leading-[0.85] tracking-wide text-[54px] uppercase mb-1">
            <span className="text-[#FFC62A] drop-shadow-[0_0_10px_rgba(255,198,42,0.15)]">MA'ONO</span>
            <span className="text-white text-[28px] tracking-[2px]">FRIED CHICKEN</span>
          </div>
          
          <div className="w-12 h-[2px] bg-[#FF6A00] mb-6 mt-3"></div>

          <p className="font-inter text-[#BEBEBE] text-[15px] leading-[1.8]">
            Fresh Hawaiian Fried Chicken.<br/>
            Made with Aloha. Served with Love.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-4 lg:ml-12">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <h5 className="font-bebas text-white text-[20px] tracking-wide uppercase">
                {section.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="font-inter text-[#8A8A8A] text-[15px] hover:text-[#FFC62A] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Background dark restaurant image overlay similar to reference (Optional for texture) */}
        <div className="hidden lg:block absolute -right-16 -top-24 w-[400px] h-[350px] opacity-20 pointer-events-none mix-blend-luminosity">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop" alt="Restaurant Background" className="w-full h-full object-cover" />
        </div>
      </div>

      <BottomBar />
    </motion.footer>
  );
}
