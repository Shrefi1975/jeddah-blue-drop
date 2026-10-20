import { describe, expect, it } from "vitest";
import { cartTotal, orderMessage, wa, type CartLine } from "@/lib/order";

const lines: CartLine[] = [
  { product: { brand: "صفا", size: "200مل", pack: "48 حبة", price: 18.5 }, qty: 2 },
  { product: { brand: "طويق", size: "330مل", pack: "40 حبة", price: 10 }, qty: 1 },
];

describe("order", () => {
  it("sums price × quantity across cart lines", () => {
    expect(cartTotal(lines)).toBe(47);
  });

  it("puts the grand total and ad source in the WhatsApp message", () => {
    const msg = orderMessage(lines, "tiktok");
    expect(msg).toContain("الإجمالي: 47 ﷼");
    expect(msg).toContain("المصدر: tiktok");
  });

  it("sends WhatsApp orders to 966560757063", () => {
    expect(wa("x")).toBe("https://wa.me/966560757063?text=x");
  });
});
