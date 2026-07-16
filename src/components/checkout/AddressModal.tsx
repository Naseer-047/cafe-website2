import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddressModal({ isOpen, onClose }: AddressModalProps) {
  const { address, changeAddress } = useCartStore();
  const [newAddress, setNewAddress] = useState(address);

  const handleSave = () => {
    changeAddress(newAddress);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-[500px] bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.05)]">
              <h2 className="font-bebas text-white text-[24px] tracking-wide">Change Address</h2>
              <button onClick={onClose} className="text-[#A3A3A3] hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-6">
              
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
                <input 
                  type="text"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Search for your location..."
                  className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] text-white font-inter text-[14px] rounded-[8px] pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--color-brand-yellow)] transition-colors"
                />
              </div>

              {/* Placeholder Map */}
              <div className="w-full h-[200px] bg-[#0A0A0A] rounded-[12px] relative overflow-hidden border border-[rgba(255,255,255,0.05)] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                <div className="relative flex flex-col items-center">
                  <MapPin size={32} className="fill-[var(--color-brand-yellow)] text-black mb-2" />
                  <span className="font-inter font-medium text-white text-[14px]">Drag to adjust pin</span>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[rgba(255,255,255,0.05)] bg-[#0A0A0A]">
              <button 
                onClick={handleSave}
                className="w-full bg-[var(--color-brand-yellow)] text-black font-bebas text-[20px] tracking-wider py-4 rounded-[12px] hover:shadow-[0_0_20px_rgba(255,193,7,0.3)] transition-all"
              >
                SAVE & CONTINUE
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
