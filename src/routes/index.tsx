import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  MessageCircle, Truck, Banknote, ShieldCheck, Droplets, Send, Snowflake, Minus, Plus,
  UtensilsCrossed, Building2, Dumbbell, PartyPopper, Phone, Mail, MapPin, Instagram, Twitter, Facebook, Menu, X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "جدة تاون | توصيل مياه الشرب المعبأة في جدة" },
      { name: "description", content: "توصيل سريع لأشهر ماركات مياه الشرب في جدة خلال ساعتين، دفع عند الاستلام، وأسعار جملة للمطاعم والشركات." },
      { property: "og:title", content: "جدة تاون | توصيل مياه الشرب في جدة" },
      { property: "og:description", content: "نقاء يصلك حتى بابك في جدة — اطلب عبر الواتساب." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "966560757063";
const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const GENERAL = wa("مرحباً جدة تاون، أرغب في طلب مياه.");
const VIDEO = "https://videos.pexels.com/video-files/856973/856973-hd_1280_720_25fps.mp4";

type P = { size: string; pack: string; price: number };
const BRANDS: { name: string; items: P[] }[] = [
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

const fmt = (n: number) => (Number.isInteger(n) ? n : n.toFixed(1)) + " ﷼";
const NAV = [["#how", "كيف نعمل"], ["#products", "منتجاتنا"], ["#b2b", "للشركات"], ["#clients", "عملاؤنا"], ["#faq", "الأسئلة"]];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div dir="rtl" className="min-h-screen bg-background pb-20 font-sans sm:pb-0 text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
          <a href="#" className="flex shrink-0 items-center gap-2 text-xl font-extrabold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground"><Droplets className="h-5 w-5" /></span>
            جدة تاون
          </a>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            {NAV.map(([h, l]) => <a key={h} href={h} className="text-muted-foreground transition hover:text-primary">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={GENERAL} target="_blank" rel="noreferrer" className="glow hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-primary-foreground sm:inline-flex">
              <MessageCircle className="h-4 w-4" /> اطلب عبر الواتساب
            </a>
            <a href={GENERAL} target="_blank" rel="noreferrer" aria-label="اطلب عبر الواتساب" className="grid h-10 w-10 place-items-center rounded-full bg-whatsapp text-primary-foreground sm:hidden"><MessageCircle className="h-5 w-5" /></a>
            <button aria-label="القائمة" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary md:hidden">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="flex h-[calc(100dvh-4rem)] flex-col gap-2 overflow-y-auto border-t border-border bg-background px-4 py-5 animate-in fade-in slide-in-from-top-2 md:hidden">
            {NAV.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-2xl bg-secondary px-5 py-4 text-lg font-bold text-primary active:scale-[0.98]">{l}</a>)}
            <a href={GENERAL} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-4 text-lg font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> اطلب عبر الواتساب</a>
            <a href="tel:0560757063" className="flex items-center justify-center gap-2 rounded-2xl border border-border py-4 font-bold text-primary"><Phone className="h-5 w-5" /> اتصل بنا</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[80svh] items-center sm:min-h-[88vh] overflow-hidden bg-gradient-to-br from-primary to-accent">
        <video className="absolute inset-0 -z-20 h-full w-full object-cover" src={VIDEO} width={1280} height={720} preload="metadata" muted loop playsInline autoPlay />
        <div className="absolute inset-0 -z-10 bg-primary/40" />
        <div className="mx-auto w-full max-w-7xl px-4 py-14 text-primary-foreground sm:py-20">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="glass-dark mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"><Droplets className="h-4 w-4" /> توصيل مياه الشرب في جدة</span>
            <h1 className="text-[2.1rem] font-extrabold leading-tight sm:text-6xl">نقاء يصلك حتى بابك في جدة</h1>
            <p className="mt-4 text-base opacity-90 sm:mt-5 sm:text-xl">توصيل سريع ومباشر لأشهر ماركات مياه الشرب المعبأة. للمنازل، المكاتب، المطاعم، والفعاليات.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={GENERAL} target="_blank" rel="noreferrer" className="glow inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-bold transition hover:scale-105"><MessageCircle className="h-5 w-5" /> اطلب الآن عبر الواتساب</a>
              <a href="#products" className="glass-dark rounded-full px-7 py-4 text-center font-bold transition hover:bg-background/20">تصفح المنتجات</a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3">
              {[[Truck, "توصيل خلال ساعتين"], [Banknote, "دفع عند الاستلام"], [ShieldCheck, "معتمد من هيئة الغذاء والدواء"]].map(([I, t]: any) => (
                <div key={t} className="glass-dark flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"><I className="h-5 w-5 shrink-0 text-accent" />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <Title t="كيف نعمل؟" s="ثلاث خطوات بسيطة تفصلك عن مياه نقية" />
        <div className="grid gap-6 md:grid-cols-3">
          {[[Droplets, "اختر منتجاتك وأحجامها المفضلة."], [Send, "أرسل طلبك عبر الواتساب بضغطة زر."], [Snowflake, "نوصلك الطلب بارداً وفي أسرع وقت."]].map(([I, t]: any, i) => (
            <div key={i} className="glass relative rounded-3xl p-8 transition hover:-translate-y-1">
              <span className="absolute left-6 top-6 text-5xl font-black text-accent/20">0{i + 1}</span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground"><I className="h-7 w-7" /></span>
              <p className="mt-6 text-lg font-bold">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <Products />

      {/* B2B */}
      <section id="b2b" className="mx-auto max-w-7xl px-4 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-primary to-accent p-8 text-primary-foreground sm:p-12">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-background/10 blur-2xl" />
          <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-bold">عرض محدود للشركات</span>
          <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl">هل تملك مطعماً أو كافيه؟</h2>
          <p className="mt-3 max-w-xl text-lg opacity-90">احصل على أسعار الجملة وعقود التوريد الشهرية.</p>
          <a href={wa("مرحباً، أرغب في الاستفسار عن أسعار الجملة وعقود التوريد الشهرية.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-bold text-primary transition hover:scale-105"><MessageCircle className="h-5 w-5" /> اطلب عرض سعر</a>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <Title t="الشركاء الذين يثقون بـ جدة تاون" s="نفتخر بتوريد المياه لأفضل الجهات في مدينة جدة" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [UtensilsCrossed, "المطاعم والمقاهي", ["مطعم بحر جدة", "كافيه سول", "مطاعم البيك"]],
            [Building2, "الشركات والمكاتب", ["شركة جدة للتطوير", "مكاتب الروشن", "بنك البلاد - فرع جدة"]],
            [Dumbbell, "النوادي الرياضية", ["نادي اللياقة البدنية", "أكاديمية جدة الرياضية"]],
            [PartyPopper, "الفعاليات والخدمات", ["شركة جدة للفعاليات", "خدمات التموين الكبرى"]],
          ].map(([I, t, list]: any) => (
            <div key={t} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3"><I className="h-6 w-6 text-accent" /><h3 className="font-bold text-primary">{t}</h3></div>
              <ul className="mt-4 space-y-2">
                {list.map((c: string) => <li key={c} className="rounded-xl bg-secondary px-3 py-2 text-sm font-semibold">{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
        <Title t="الأسئلة الشائعة" s="كل ما تحتاج معرفته قبل الطلب" />
        <Accordion type="single" collapsible className="glass rounded-3xl px-6">
          {[
            ["ما هو الحد الأدنى للطلب؟", "لا يوجد حد أدنى للطلب، نخدمك بكرتون واحد أو أكثر."],
            ["هل تتوفر المياه باردة؟", "نعم، نوفر خيار التوصيل بارداً بطلب مسبق."],
            ["كيف يتم الدفع؟", "نقبل الدفع عند الاستلام نقداً، أو عبر التحويل البنكي/مدى لشركات العقود."],
          ].map(([q, a], i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="text-right text-base font-bold">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="mt-10 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold"><Droplets /> جدة تاون</div>
            <p className="mt-3 opacity-80">نقاء يصلك حتى بابك — توصيل مياه الشرب المعبأة في جدة.</p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Twitter, Facebook].map((I, i) => <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-accent"><I className="h-5 w-5" /></a>)}
            </div>
          </div>
          <div>
            <h4 className="font-bold">روابط سريعة</h4>
            <ul className="mt-4 space-y-2 opacity-80">{NAV.map(([h, l]) => <li key={h}><a href={h} className="hover:text-accent">{l}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold">تواصل معنا</h4>
            <ul className="mt-4 space-y-3 opacity-80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> جدة، المملكة العربية السعودية</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:0560757063" dir="ltr">0560757063</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:info@jeddahtown.sa">info@jeddahtown.sa</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 py-5 text-center text-sm opacity-70">جدة تاون © 2026</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-xl sm:hidden">
        <a href={GENERAL} target="_blank" rel="noreferrer" className="glow flex flex-1 items-center justify-center gap-2 rounded-2xl bg-whatsapp py-3.5 font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> اطلب عبر الواتساب</a>
        <a href="tel:0560757063" aria-label="اتصل بنا" className="grid w-14 place-items-center rounded-2xl bg-secondary text-primary"><Phone className="h-5 w-5" /></a>
      </div>
      <a href={GENERAL} target="_blank" rel="noreferrer" aria-label="اطلب عبر الواتساب" className="glow fixed bottom-5 left-5 z-50 hidden sm:grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function Title({ t, s }: { t: string; s: string }) {
  return (
    <div className="mb-8 text-center sm:mb-12">
      <h2 className="text-2xl font-extrabold text-primary sm:text-4xl">{t}</h2>
      <p className="mt-3 text-muted-foreground">{s}</p>
    </div>
  );
}

function Products() {
  const [brand, setBrand] = useState("الكل");
  const list = useMemo(
    () => BRANDS.filter((b) => brand === "الكل" || b.name === brand).flatMap((b) => b.items.map((p) => ({ ...p, brand: b.name }))),
    [brand],
  );
  return (
    <section id="products" className="bg-secondary/50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Title t="منتجاتنا" s="اختر علامتك المفضلة وحدد الكمية" />
        <div className="sticky top-16 z-30 -mx-4 mb-8 flex gap-2 overflow-x-auto bg-secondary/90 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:bg-transparent sm:backdrop-blur-none sm:flex-wrap sm:justify-center">
          {["الكل", ...BRANDS.map((b) => b.name)].map((n) => (
            <button key={n} onClick={() => setBrand(n)} className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition ${brand === n ? "bg-primary text-primary-foreground shadow-lg" : "bg-background text-primary hover:bg-accent/20"}`}>{n}</button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <Card key={p.brand + p.size + p.price} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function Card({ p }: { p: P & { brand: string } }) {
  const [q, setQ] = useState(1);
  const total = p.price * q;
  const msg = `مرحباً جدة تاون، أرغب في طلب:\nالمنتج: ${p.brand}\nالحجم: ${p.size} (${p.pack})\nالكمية: ${q}\nالإجمالي: ${fmt(total)}`;
  return (
    <div className="glass flex flex-col rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-xl animate-in fade-in zoom-in-95">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold text-accent">{p.brand}</span>
          <h3 className="mt-1 text-xl font-extrabold text-primary">{p.size}</h3>
          <p className="text-sm text-muted-foreground">{p.pack}</p>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent"><Droplets /></span>
      </div>
      <p className="mt-4 text-2xl font-black text-primary">{fmt(p.price)}</p>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-secondary p-1.5">
        <button aria-label="زيادة" onClick={() => setQ(q + 1)} className="grid h-11 w-11 place-items-center rounded-xl bg-background text-primary"><Plus className="h-4 w-4" /></button>
        <span className="font-bold">{q}</span>
        <button aria-label="إنقاص" onClick={() => setQ(Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center rounded-xl bg-background text-primary"><Minus className="h-4 w-4" /></button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">الإجمالي: <b className="text-primary">{fmt(total)}</b></p>
      <a href={wa(msg)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-bold text-primary-foreground transition hover:opacity-90"><MessageCircle className="h-4 w-4" /> أضف للطلب</a>
    </div>
  );
}
