import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  line1?: string;
  line2?: string;
  line3?: string;
  children?: React.ReactNode;
}

export default function ContactCard({ icon: Icon, title, line1, line2, line3, children }: ContactCardProps) {
  return (
    <motion.div 
      className="bg-[#0E0E0E] rounded-[18px] border border-[rgba(255,255,255,0.08)] p-8 flex flex-col items-center text-center justify-center gap-4 hover:border-[rgba(255,106,0,0.3)] hover:shadow-[0_10px_30px_rgba(255,106,0,0.05)] transition-all duration-300 w-full h-full min-h-[260px]"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <div className="w-[56px] h-[56px] rounded-full bg-[rgba(255,106,0,0.1)] flex items-center justify-center mb-1">
        <Icon className="text-[#FF6A00]" size={28} strokeWidth={1.5} />
      </div>

      <h4 className="font-bebas text-white text-[22px] tracking-wide uppercase">
        {title}
      </h4>

      <div className="w-6 h-[2px] bg-[#FF6A00] rounded-full mx-auto my-1"></div>

      {children ? (
        children
      ) : (
        <div className="font-inter text-[#BEBEBE] text-[15px] leading-relaxed flex flex-col">
          {line1 && <span>{line1}</span>}
          {line2 && <span>{line2}</span>}
          {line3 && <span>{line3}</span>}
        </div>
      )}
    </motion.div>
  );
}
