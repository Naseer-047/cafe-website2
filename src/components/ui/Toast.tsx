import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';

export default function Toast() {
  const { toast, hideToast } = useUiStore();

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="bg-[#111111] border border-[rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-full px-5 py-3 flex items-center gap-3 pointer-events-auto"
            onClick={hideToast}
          >
            <CheckCircle2 size={20} className="text-[#FFC107]" />
            <span className="font-inter font-medium text-white text-[14px]">
              {toast.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
