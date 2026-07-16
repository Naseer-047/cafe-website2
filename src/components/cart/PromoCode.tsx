import { useState } from 'react';
import { Tag } from 'lucide-react';

interface PromoCodeProps {
  currentCoupon: string | null;
  onApply: (code: string) => boolean;
  onRemove: () => void;
}

export default function PromoCode({ currentCoupon, onApply, onRemove }: PromoCodeProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleApply = () => {
    if (!input.trim()) return;
    const success = onApply(input.trim());
    if (success) {
      setError('');
      setInput('');
    } else {
      setError('Invalid Promo Code');
    }
  };

  if (currentCoupon) {
    return (
      <div className="w-full flex flex-col gap-2 mb-6">
        <div className="w-full h-12 bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-[12px] flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Tag size={18} className="text-[#FFC107]" />
            <span className="font-inter text-[#FFC107] font-medium text-[14px]">
              {currentCoupon} Applied
            </span>
          </div>
          <button 
            onClick={onRemove}
            className="text-[12px] font-inter text-[#FF5A00] hover:underline"
          >
            REMOVE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2 mb-6">
      <div className="w-full h-12 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-[12px] flex items-center px-4 overflow-hidden focus-within:border-[rgba(255,255,255,0.3)] transition-colors">
        <Tag size={18} className="text-[#888] shrink-0" />
        <input 
          type="text" 
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
            setError('');
          }}
          placeholder="Apply Promo Code" 
          className="flex-1 bg-transparent border-none outline-none text-white font-inter text-[14px] px-3 placeholder:text-[#555]"
          onKeyDown={(e) => e.key === 'Enter' && handleApply()}
        />
        <button 
          onClick={handleApply}
          className="font-inter text-[#888] hover:text-white text-[13px] font-medium transition-colors tracking-wide shrink-0"
        >
          APPLY
        </button>
      </div>
      {error && (
        <span className="text-[#FF5A00] text-[12px] font-inter ml-1">{error}</span>
      )}
    </div>
  );
}
