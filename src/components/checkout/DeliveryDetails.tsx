import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, ChevronRight, Map } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import AddressModal from './AddressModal';

export default function DeliveryDetails() {
  const { address } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[16px] overflow-hidden"
      >
        <div className="p-5 border-b border-[rgba(255,255,255,0.05)] flex items-center gap-3">
          <MapPin size={20} className="text-[var(--color-brand-yellow)]" />
          <h2 className="font-bebas text-white text-[20px] tracking-wide mt-1">DELIVERY DETAILS</h2>
        </div>

        <div className="flex flex-col sm:flex-row min-h-[160px]">
          {/* Address Text */}
          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.05)]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Home size={16} className="text-[#A3A3A3]" />
                <span className="font-inter font-medium text-white text-[14px]">Home</span>
                <span className="bg-[#252525] text-[10px] font-bold text-[#A3A3A3] px-2 py-0.5 rounded-[4px] ml-1 uppercase">Default</span>
              </div>
              <p className="font-inter text-[#A3A3A3] text-[14px] leading-[1.5] max-w-[280px]">
                {address}
              </p>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-6 self-start text-[var(--color-brand-yellow)] border border-[var(--color-brand-yellow)] bg-transparent hover:bg-[var(--color-brand-yellow)] hover:text-black font-inter font-medium text-[13px] px-4 py-2 rounded-[6px] transition-all duration-300 flex items-center gap-1 group"
            >
              Change Address <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Map Preview */}
          <div className="flex-1 relative bg-[#0A0A0A] overflow-hidden min-h-[120px]">
            {/* Grid Pattern for Fake Map */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative">
                  <MapPin size={32} className="fill-[var(--color-brand-yellow)] text-black" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 blur-[2px] rounded-full"></div>
               </div>
            </div>

            <button className="absolute bottom-4 right-4 flex items-center gap-1.5 font-inter text-[var(--color-brand-yellow)] text-[12px] font-medium px-3 py-1.5 rounded border border-[rgba(255,193,7,0.3)] bg-black/60 backdrop-blur-md hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors">
              View on Map <Map size={12} />
            </button>
          </div>
        </div>
      </motion.div>

      <AddressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
