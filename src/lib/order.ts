export type Product = { brand: string; size: string; pack: string; price: number; img?: string | undefined };
export type CartLine = { product: Product; qty: number };

export const PHONE = "966560757063";
export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1)) + " ﷼";
export const keyOf = (p: Product) => `${p.brand}|${p.size}|${p.pack}`;

export const cartTotal = (lines: CartLine[]) => lines.reduce((s, l) => s + l.product.price * l.qty, 0);
export const cartCount = (lines: CartLine[]) => lines.reduce((s, l) => s + l.qty, 0);

/** One WhatsApp message listing every cart line, the grand total and (when known) the ad source. */
export function orderMessage(lines: CartLine[], source?: string) {
  const rows = lines.map(
    (l, i) => `${i + 1}) ${l.product.brand} ${l.product.size} (${l.product.pack}) × ${l.qty} = ${fmt(l.product.price * l.qty)}`,
  );
  return [
    "مرحباً جدة تاون، أرغب في طلب:",
    ...rows,
    `الإجمالي: ${fmt(cartTotal(lines))}`,
    "الدفع: عند الاستلام",
    ...(source ? [`المصدر: ${source}`] : []),
  ].join("\n");
}
