import { describe, expect, it } from "vitest";
import { orderMessage, orderTotal, wa, type Product } from "@/lib/order";
import { MIN_PRICE } from "@/lib/products";

const safa: Product = { brand: "صفا", size: "200مل", pack: "48 حبة", price: 18.5 };

describe("order", () => {
  it("multiplies the pack price by the quantity", () => {
    expect(orderTotal(safa, 3)).toBe(55.5);
  });

  it("writes brand, size, quantity and value into the WhatsApp message", () => {
    expect(orderMessage(safa, 2)).toBe(
      "مرحباً، أبغى أطلب:\nالماركة: صفا\nالحجم: 200مل — 48 حبة\nالكمية: 2\nالقيمة: 37 ر.س\nأرجو تأكيد التوفر والتوصيل.",
    );
  });

  it("sends WhatsApp orders to 966560757063", () => {
    expect(wa("x")).toBe("https://wa.me/966560757063?text=x");
  });

  it("starts prices from 5 riyals", () => {
    expect(MIN_PRICE).toBe(5);
  });
});
