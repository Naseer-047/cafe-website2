import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateCartTotals, type CartItemType } from '../utils/priceCalculator';

interface CartState {
  // State
  cartItems: CartItemType[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  discount: number;
  grandTotal: number;
  coupon: string | null;
  address: string;
  instructions: string;
  deliveryType: 'Delivery' | 'Pickup';

  // Actions
  addToCart: (item: CartItemType) => void;
  removeFromCart: (itemId: string) => void;
  increaseQty: (itemId: string) => void;
  decreaseQty: (itemId: string) => void;
  updateCustomization: (itemId: string, updates: Partial<CartItemType>) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  changeAddress: (newAddress: string) => void;
  changeDelivery: (type: 'Delivery' | 'Pickup') => void;
  updateInstructions: (note: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // Initial State
      cartItems: [],
      subtotal: 0,
      deliveryFee: 40,
      tax: 0,
      discount: 0,
      grandTotal: 0,
      coupon: null,
      address: 'Koramangala 4th Block, Bangalore',
      instructions: '',
      deliveryType: 'Delivery',

      // Actions
      addToCart: (item) => {
        const { cartItems, deliveryType, discount } = get();
        // Check if identical item already exists (same ID and customizations)
        const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
        
        let newItems;
        if (existingItemIndex >= 0) {
          // Increase quantity
          newItems = [...cartItems];
          newItems[existingItemIndex].quantity += item.quantity;
        } else {
          // Add new item
          newItems = [...cartItems, item];
        }

        const totals = calculateCartTotals(newItems, deliveryType, discount);
        set({ cartItems: newItems, ...totals });
      },

      removeFromCart: (itemId) => {
        const { cartItems, deliveryType, discount } = get();
        const newItems = cartItems.filter(i => i.id !== itemId);
        const totals = calculateCartTotals(newItems, deliveryType, discount);
        
        // If cart is empty, also remove coupon
        if (newItems.length === 0) {
          set({ cartItems: newItems, ...calculateCartTotals(newItems, deliveryType, 0), coupon: null });
        } else {
          set({ cartItems: newItems, ...totals });
        }
      },

      increaseQty: (itemId) => {
        const { cartItems, deliveryType, discount } = get();
        const newItems = cartItems.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        const totals = calculateCartTotals(newItems, deliveryType, discount);
        set({ cartItems: newItems, ...totals });
      },

      decreaseQty: (itemId) => {
        const { cartItems, deliveryType, discount, removeFromCart } = get();
        const item = cartItems.find(i => i.id === itemId);
        
        if (item && item.quantity <= 1) {
          removeFromCart(itemId);
          return;
        }

        const newItems = cartItems.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        const totals = calculateCartTotals(newItems, deliveryType, discount);
        set({ cartItems: newItems, ...totals });
      },

      updateCustomization: (itemId, updates) => {
        const { cartItems, deliveryType, discount } = get();
        const newItems = cartItems.map(item => 
          item.id === itemId ? { ...item, ...updates } : item
        );
        const totals = calculateCartTotals(newItems, deliveryType, discount);
        set({ cartItems: newItems, ...totals });
      },

      applyCoupon: (code) => {
        const { cartItems, deliveryType } = get();
        const validCodes: Record<string, number> = {
          'SAVE40': 40,
          'WELCOME50': 50,
          'FIRSTORDER': 100
        };

        const discountValue = validCodes[code.toUpperCase()];
        if (discountValue) {
          const totals = calculateCartTotals(cartItems, deliveryType, discountValue);
          set({ coupon: code.toUpperCase(), ...totals });
          return true;
        }
        return false;
      },

      removeCoupon: () => {
        const { cartItems, deliveryType } = get();
        const totals = calculateCartTotals(cartItems, deliveryType, 0);
        set({ coupon: null, ...totals });
      },

      changeAddress: (newAddress) => set({ address: newAddress }),

      changeDelivery: (type) => {
        const { cartItems, discount } = get();
        const totals = calculateCartTotals(cartItems, type, discount);
        set({ deliveryType: type, ...totals });
      },

      updateInstructions: (note) => set({ instructions: note }),

      clearCart: () => {
        const totals = calculateCartTotals([], 'Delivery', 0);
        set({ cartItems: [], coupon: null, instructions: '', deliveryType: 'Delivery', ...totals });
      }
    }),
    {
      name: 'maono-cart-storage',
    }
  )
);
