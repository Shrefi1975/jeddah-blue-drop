import type { Product } from "./order";

type Item = Omit<Product, "brand">;

export const BRANDS: { name: string; items: Item[] }[] = [
  { name: "طويق", items: [{ size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "24 حبة", price: 5 }] },
  { name: "أصايل", items: [{ size: "200مل", pack: "48 حبة", price: 11 }, { size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "شرنك", price: 5 }] },
  { name: "ميراد", items: [{ size: "200مل", pack: "48 حبة", price: 11 }, { size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "شرنك", price: 6 }, { size: "600مل", pack: "كرتون", price: 12 }, { size: "5 لتر", pack: "عبوة", price: 10 }] },
  { name: "صفا", items: [{ size: "200مل", pack: "48 حبة", price: 18.5 }, { size: "330مل", pack: "40 حبة", price: 18 }, { size: "600مل", pack: "كرتون", price: 16 }, { size: "1.5 لتر", pack: "كرتون", price: 14 }, { size: "5 لتر", pack: "عبوة", price: 14 }] },
  { name: "نوفا", items: [{ size: "200مل", pack: "24 حبة - غطاء قسطير", price: 11 }, { size: "330مل", pack: "40 حبة", price: 18.5 }, { size: "550مل", pack: "كرتون", price: 16 }, { size: "1.5 لتر", pack: "كرتون", price: 15 }, { size: "12 لتر", pack: "عبوة", price: 16 }] },
  { name: "أكويا", items: [{ size: "200مل", pack: "48 حبة", price: 14 }, { size: "330مل", pack: "40 حبة", price: 14 }] },
  { name: "رفا", items: [{ size: "250مل", pack: "40 حبة", price: 12 }, { size: "330مل", pack: "40 حبة", price: 12 }] },
  { name: "العين", items: [{ size: "330مل", pack: "40 حبة", price: 12 }] },
  { name: "البيان", items: [{ size: "330مل", pack: "40 حبة", price: 11 }] },
];

/** Real product photos keyed by "brand|size". Filled from verified retailer/brand images. */
export const PRODUCT_IMAGES: Record<string, string> = {};

export const ALL_PRODUCTS: Product[] = BRANDS.flatMap((b) =>
  b.items.map((i) => ({ ...i, brand: b.name, img: PRODUCT_IMAGES[`${b.name}|${i.size}`] ?? PRODUCT_IMAGES[b.name] })),
);

export const MIN_PRICE = Math.min(...ALL_PRODUCTS.map((p) => p.price));
