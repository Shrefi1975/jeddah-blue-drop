export type Product = { brand: string; size: string; pack: string; price: number };

export const PHONE = "966560757063";
export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

/** Message for the general "talk to us" WhatsApp buttons. */
export const GENERAL_MSG = "مرحباً، أبغى أطلب مياه.";

const arDigits = new Intl.NumberFormat("ar-SA-u-nu-arab", { maximumFractionDigits: 1 });
/** Price shown on the page, in Arabic digits: "١٠ ر.س". */
export const sar = (n: number) => `${arDigits.format(n)} ر.س`;
/** Price written inside the WhatsApp message, in Western digits: "10 ر.س". */
const sarPlain = (n: number) => `${Number.isInteger(n) ? n : n.toFixed(1)} ر.س`;

/** "330مل — 40 حبة"; skips the pack when the size already says it (e.g. "330مل شرنك"). */
export const sizeLabel = (p: Pick<Product, "size" | "pack">) =>
  p.size.includes(p.pack) ? p.size : `${p.size} — ${p.pack}`;

export const orderTotal = (p: Product, qty: number) => Math.round(p.price * qty * 10) / 10;

/** Pre-filled WhatsApp order for one product and quantity. */
export function orderMessage(p: Product, qty: number) {
  return [
    "مرحباً، أبغى أطلب:",
    `الماركة: ${p.brand}`,
    `الحجم: ${sizeLabel(p)}`,
    `الكمية: ${qty}`,
    `القيمة: ${sarPlain(orderTotal(p, qty))}`,
    "أرجو تأكيد التوفر والتوصيل.",
  ].join("\n");
}
