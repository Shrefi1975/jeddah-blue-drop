import type { Product } from "./order";
import asayel from "@/assets/brand1.jpg.asset.json";
import akoya from "@/assets/brand2.jpg.asset.json";
import albayan from "@/assets/brand3.png.asset.json";
import alain from "@/assets/brand4.jpg.asset.json";
import rafa from "@/assets/brand5.webp.asset.json";
import safa from "@/assets/brand6.webp.asset.json";
import mirad from "@/assets/brand7.webp.asset.json";
import nova from "@/assets/brand8.jpg.asset.json";

type Item = Omit<Product, "brand">;
export type Brand = { name: string; img?: string; items: Item[] };

export const BRANDS: Brand[] = [
  { name: "طويق", items: [{ size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "24 حبة", price: 5 }] },
  { name: "أصايل", img: asayel.url, items: [{ size: "200مل", pack: "48 حبة", price: 11 }, { size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "شرنك", price: 5 }] },
  { name: "ميراد", img: mirad.url, items: [{ size: "200مل", pack: "48 حبة", price: 11 }, { size: "330مل", pack: "40 حبة", price: 10 }, { size: "330مل شرنك", pack: "شرنك", price: 6 }, { size: "600مل", pack: "كرتون", price: 12 }, { size: "5 لتر", pack: "عبوة", price: 10 }] },
  { name: "صفا", img: safa.url, items: [{ size: "200مل", pack: "48 حبة", price: 18.5 }, { size: "330مل", pack: "40 حبة", price: 18 }, { size: "600مل", pack: "كرتون", price: 16 }, { size: "1.5 لتر", pack: "كرتون", price: 14 }, { size: "5 لتر", pack: "عبوة", price: 14 }] },
  { name: "نوفا", img: nova.url, items: [{ size: "200مل", pack: "24 حبة - غطاء قسطير", price: 11 }, { size: "330مل", pack: "40 حبة", price: 18.5 }, { size: "550مل", pack: "كرتون", price: 16 }, { size: "1.5 لتر", pack: "كرتون", price: 15 }, { size: "12 لتر", pack: "عبوة", price: 16 }] },
  { name: "أكويا", img: akoya.url, items: [{ size: "200مل", pack: "48 حبة", price: 14 }, { size: "330مل", pack: "40 حبة", price: 14 }] },
  { name: "رفا", img: rafa.url, items: [{ size: "250مل", pack: "40 حبة", price: 12 }, { size: "330مل", pack: "40 حبة", price: 12 }] },
  { name: "العين", img: alain.url, items: [{ size: "330مل", pack: "40 حبة", price: 12 }] },
  { name: "البيان", img: albayan.url, items: [{ size: "330مل", pack: "40 حبة", price: 11 }] },
];

export const MIN_PRICE = Math.min(...BRANDS.flatMap((b) => b.items.map((i) => i.price)));
