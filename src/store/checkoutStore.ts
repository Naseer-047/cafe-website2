import { create } from 'zustand';

export type PaymentMethod = 'UPI' | 'CARD' | 'NET_BANKING' | 'COD' | null;

interface CheckoutState {
  paymentMethod: PaymentMethod;
  isProcessing: boolean;
  
  selectPayment: (method: PaymentMethod) => void;
  setProcessing: (status: boolean) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  paymentMethod: null,
  isProcessing: false,

  selectPayment: (method) => set({ paymentMethod: method }),
  setProcessing: (status) => set({ isProcessing: status }),
}));
