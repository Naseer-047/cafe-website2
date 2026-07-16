import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { MapPin, Phone, Mail, Clock, Share2 } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactGrid() {
  return (
    <motion.div 
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 mb-16"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <ContactCard 
        icon={MapPin}
        title="ADDRESS"
        line1="Indiranagar Location"
        line2="100 Feet Road, HAL 2nd Stage"
        line3="Bengaluru, KA 560038"
      />
      
      <ContactCard 
        icon={Phone}
        title="PHONE"
        line1="+91 80 4567 8900"
        line2="Call us anytime"
      />

      <ContactCard 
        icon={Mail}
        title="EMAIL"
        line1="hello@maono.in"
        line2="We reply within"
        line3="24 hours"
      />

      <ContactCard 
        icon={Clock}
        title="HOURS"
        line1="Open Daily"
        line2="11:00 AM - 9:00 PM"
        line3="Mon - Sun"
      />

      <ContactCard 
        icon={InstagramIcon}
        title="INSTAGRAM"
        line1="@maonobangalore"
        line2="Follow for updates,"
        line3="specials & more!"
      />

      <ContactCard 
        icon={Share2}
        title="SOCIAL"
      >
        <div className="flex items-center justify-center gap-3 mt-1">
          <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[#FF6A00] flex items-center justify-center transition-colors duration-300">
            <InstagramIcon size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[#FF6A00] flex items-center justify-center transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[#FF6A00] flex items-center justify-center transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[#FF6A00] flex items-center justify-center transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </ContactCard>
    </motion.div>
  );
}
