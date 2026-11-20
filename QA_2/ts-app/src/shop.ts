export const SHIPPING_FEE = 15000;
export const FREE_SHIPPING_MIN = 100000;

export function isValidPassword(password: string): boolean {
  if (password.length <= 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

export function calculateTotal(
  price: number,
  quantity: number,
  discountPercent = 0
): number {
  if (price <= 0) throw new Error("Price must be greater than 0");
  if (quantity < 0) throw new Error("Quantity must be at least 1");
  if (discountPercent < 0) throw new Error("Discount must be between 0 and 100");

  const subtotal = price * quantity;
  const afterDiscount = subtotal * (1 - discountPercent / 100);
  const shipping = afterDiscount > FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;
  return Math.round((afterDiscount + shipping) * 100) / 100;
}