import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

const QUICK_CHIPS = [
  { id: 'spicy', label: 'Extra Spicy', icon: '🌶️' },
  { id: 'onion', label: 'No Onions', icon: '🚫' },
  { id: 'mayo', label: 'Less Mayo', icon: '🥛' },
  { id: 'call', label: 'Call on Arrival', icon: '📞' }
];

export default function DeliveryInstructions() {
  const { instructions, updateInstructions } = useCartStore();

  const handleChipClick = (label: string) => {
    const current = instructions.trim();
    if (current.includes(label)) return;
    
    const newInstructions = current ? `${current}, ${label}` : label;
    updateInstructions(newInstructions);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[16px] p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        <FileText size={20} className="text-[var(--color-brand-yellow)]" />
        <h2 className="font-bebas text-white text-[20px] tracking-wide mt-1">
          DELIVERY INSTRUCTIONS <span className="font-inter text-[#A3A3A3] text-[12px] lowercase tracking-normal ml-1">(Optional)</span>
        </h2>
      </div>

      <div className="relative mb-4">
        <textarea
          value={instructions}
          onChange={(e) => updateInstructions(e.target.value)}
          placeholder="Add any instructions for your order..."
          maxLength={120}
          className="w-full h-[100px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-4 text-white font-inter text-[14px] resize-none focus:outline-none focus:border-[var(--color-brand-yellow)] transition-colors placeholder:text-[#555]"
        />
        <span className="absolute bottom-3 right-4 font-inter text-[#555] text-[12px]">
          {instructions.length}/120
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {QUICK_CHIPS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => handleChipClick(chip.label)}
            className="flex items-center gap-1.5 bg-[#0A0A0A] border border-[rgba(255,255,255,0.05)] px-3 py-1.5 rounded-full hover:border-[var(--color-brand-yellow)] hover:text-[var(--color-brand-yellow)] transition-colors text-white font-inter text-[12px]"
          >
            <span>{chip.icon}</span>
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
