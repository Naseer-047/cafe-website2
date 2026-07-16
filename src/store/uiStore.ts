import { create } from 'zustand';

interface UiState {
  toast: {
    message: string;
    visible: boolean;
  };
  showToast: (message: string) => void;
  hideToast: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  toast: {
    message: '',
    visible: false,
  },
  showToast: (message) => {
    set({ toast: { message, visible: true } });
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      set((state) => ({ 
        toast: { ...state.toast, visible: false } 
      }));
    }, 3000);
  },
  hideToast: () => set((state) => ({ toast: { ...state.toast, visible: false } })),
}));
