import { useCartStore } from '../store/cartStore';

// Helper hook to easily select values from the store
export const useCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const subtotal = useCartStore((state) => state.subtotal);
  const deliveryFee = useCartStore((state) => state.deliveryFee);
  const tax = useCartStore((state) => state.tax);
  const discount = useCartStore((state) => state.discount);
  const grandTotal = useCartStore((state) => state.grandTotal);
  const coupon = useCartStore((state) => state.coupon);
  const address = useCartStore((state) => state.address);
  const instructions = useCartStore((state) => state.instructions);
  const deliveryType = useCartStore((state) => state.deliveryType);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const updateCustomization = useCartStore((state) => state.updateCustomization);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);
  const changeAddress = useCartStore((state) => state.changeAddress);
  const changeDelivery = useCartStore((state) => state.changeDelivery);
  const updateInstructions = useCartStore((state) => state.updateInstructions);
  const clearCart = useCartStore((state) => state.clearCart);

  // Derived state
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return {
    // State
    cartItems,
    subtotal,
    deliveryFee,
    tax,
    discount,
    grandTotal,
    coupon,
    address,
    instructions,
    deliveryType,
    totalItems,
    
    // Actions
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    updateCustomization,
    applyCoupon,
    removeCoupon,
    changeAddress,
    changeDelivery,
    updateInstructions,
    clearCart
  };
};
