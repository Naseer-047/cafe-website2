export interface CartItemType {
  id: string; // Unique ID for the cart item (usually combination of product ID and customizations)
  productId: string;
  title: string;
  image: string;
  basePrice: number;
  quantity: number;
  spiceLevel: string;
  extras: { id: string; name: string; price: number }[];
  drink?: { id: string; name: string; price: number };
}

export const calculateItemTotal = (item: CartItemType): number => {
  let itemTotal = item.basePrice;
  
  item.extras.forEach(extra => {
    itemTotal += extra.price;
  });
  
  if (item.drink) {
    itemTotal += item.drink.price;
  }
  
  return itemTotal * item.quantity;
};

export const calculateCartTotals = (
  items: CartItemType[],
  deliveryType: 'Delivery' | 'Pickup',
  couponDiscount: number = 0
) => {
  // 1. Calculate Items Total (Subtotal)
  const subtotal = items.reduce((total, item) => total + calculateItemTotal(item), 0);
  
  // 2. Delivery Fee
  const deliveryFee = deliveryType === 'Delivery' ? 40 : 0;
  
  // 3. Taxes & Charges (approx 5% for food, let's say 5% of subtotal)
  // According to reference image: Items 577, Delivery 40, Taxes 22. (22 is approx 3.8% of 577, let's use Math.floor(subtotal * 0.05) or fixed rule)
  // To match exactly, we'll just do 5% rounded down.
  const tax = subtotal > 0 ? Math.floor(subtotal * 0.05) : 0;
  
  // 4. Discount
  const discount = subtotal > 0 ? couponDiscount : 0;
  
  // 5. Grand Total
  const grandTotal = Math.max(0, subtotal + deliveryFee + tax - discount);
  
  return {
    subtotal,
    deliveryFee,
    tax,
    discount,
    grandTotal
  };
};
