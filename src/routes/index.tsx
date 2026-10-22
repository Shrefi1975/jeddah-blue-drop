import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowLeft, Banknote, ChevronLeft, ChevronRight, Droplets, MapPin, MessageCircle, Minus, Package, Phone, Plus, Truck, Wallet, Zap,
} from "lucide-react";
import heroAsset from "@/assets/hero2.jpg.asset.json";
import { BRANDS, MIN_PRICE } from "@/lib/products";
import { GENERAL_MSG, orderMessage, orderTotal, sar, sizeLabel, wa } from "@/lib/order";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "جدة تاون | لا تشيل هم المياه — نوصلها لبابك في جدة" },
      { name: "description", content: "اطلب مياه الشرب من أشهر الماركات السعودية في جدة عبر الواتساب. توصيل لين الباب، الدفع عند الاستلام، وبدون حساب." },
      { property: "og:title", content: "جدة تاون | مياه الشرب لين بابك في جدة" },
      { property: "og:description", content: "اختر الماركة والحجم وأرسل طلبك على واتساب — والدفع عند الاستلام." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GENERAL = wa(GENERAL_MSG);
const ar = (n: number) => n.toLocaleString("ar-SA-u-nu-arab");

function Index() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Features />
      <Order />
      <Cta />
      <Footer />
      <a
        href={GENERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="كلمنا على واتساب"
        className="bg-wa animate-pulse-ring fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full text-primary-foreground transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-deep text-deep-foreground">
      <img
        src={heroAsset.url}
        alt="كراتين مياه عند باب منزل في جدة"
        width={1024}
        height={961}
        fetchPriority="high"
        className="animate-kenburns absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-fade absolute inset-0 -z-10" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <a href="#" className="flex items-center gap-3">
          <Droplets className="h-7 w-7 text-accent" />
          <span className="font-display text-2xl font-bold">جدة تاون</span>
          <span className="h-5 w-px bg-deep-foreground/30" />
          <span className="text-xs opacity-80">مياه • توصيل • جدة</span>
        </a>
        <a href="#order" className="glass-dark hidden rounded-full px-5 py-2 text-sm font-bold transition hover:bg-deep-foreground/15 sm:inline-flex">
          رتّب طلبك
        </a>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-8 pt-16 sm:justify-center sm:pb-12">
        <div className="max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-whatsapp" /> راحتك تبدأ من هنا
          </span>
          <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.2] sm:text-6xl">
            لا تشيل هم المياه.
            <br />
            <span className="text-accent">نوصلها لبابك.</span>
          </h1>
          <p className="mt-4 text-lg opacity-90">اختر طلبك وخلّ الباقي علينا.</p>
          <a href="#order" className="bg-wa mt-7 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-primary-foreground transition hover:scale-[1.03]">
            <MessageCircle className="h-5 w-5" /> اطلب الحين <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {([[Truck, "توصيل لين الباب"], [Banknote, "الدفع عند الاستلام"], [Zap, "بدون حساب"]] as const).map(([I, t]) => (
            <li key={t} className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <I className="h-4 w-4 text-accent" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
        {([[Truck, "نوصل لك", "لا مشاوير ولا شيل"], [Droplets, "ماركات متنوعة", "اللي يناسب بيتك ومكتبك"], [Wallet, "الدفع لما يوصل", "بدون أي دفع مقدم"]] as const).map(([I, t, s]) => (
          <div key={t} className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary"><I className="h-5 w-5" /></span>
            <div>
              <h2 className="font-display text-lg font-bold">{t}</h2>
              <p className="text-sm text-muted-foreground">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Order() {
  const [bi, setBi] = useState(0);
  const [si, setSi] = useState(0);
  const [qty, setQty] = useState(1);
  const thumbs = useRef<(HTMLButtonElement | null)[]>([]);

  const brand = BRANDS[bi] ?? BRANDS[0]!;
  const item = brand.items[Math.min(si, brand.items.length - 1)] ?? brand.items[0]!;
  const product = { ...item, brand: brand.name };
  const total = orderTotal(product, qty);

  const pick = (i: number) => {
    const next = (i + BRANDS.length) % BRANDS.length;
    setBi(next);
    setSi(0);
    thumbs.current[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section id="order" className="scroll-mt-4 bg-muted py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">على كيفك</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">رتّب طلبك بسرعة</h2>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
            <Package className="h-4 w-4" /> الأسعار تبدأ من {sar(MIN_PRICE)}
          </span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div className="shadow-ocean overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[4/3.3] bg-gradient-to-b from-secondary/60 to-card">
              <span className="absolute right-4 top-4 z-10 rounded-full border border-border bg-card px-4 py-1 font-display font-bold text-primary shadow-sm">{brand.name}</span>
              <span className="absolute left-4 top-4 z-10 rounded-full bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">{ar(bi + 1)} / {ar(BRANDS.length)}</span>
              {brand.img ? (
                <img key={brand.name} src={brand.img} alt={`مياه ${brand.name}`} className="absolute inset-0 h-full w-full object-contain p-10 mix-blend-multiply animate-in fade-in zoom-in-95 duration-300" />
              ) : (
                <div key={brand.name} className="absolute inset-0 grid place-items-center animate-in fade-in zoom-in-95">
                  <div className="text-center">
                    <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-secondary text-primary"><Droplets className="h-12 w-12" /></span>
                    <p className="mt-4 font-display text-3xl font-bold text-primary">مياه {brand.name}</p>
                  </div>
                </div>
              )}
              <button aria-label="الماركة السابقة" onClick={() => pick(bi - 1)} className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-primary shadow transition hover:bg-card">
                <ChevronRight className="h-5 w-5" />
              </button>
              <button aria-label="الماركة التالية" onClick={() => pick(bi + 1)} className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-primary shadow transition hover:bg-card">
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="h-1 bg-secondary">
              <div className="mr-0 h-full bg-primary transition-all duration-300" style={{ width: `${((bi + 1) / BRANDS.length) * 100}%` }} />
            </div>
            <div className="flex gap-2 overflow-x-auto p-3">
              {BRANDS.map((b, i) => (
                <button
                  key={b.name}
                  ref={(el) => { thumbs.current[i] = el; }}
                  onClick={() => pick(i)}
                  aria-label={b.name}
                  aria-pressed={i === bi}
                  className={`grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border-2 bg-card transition ${i === bi ? "border-primary" : "border-transparent bg-muted opacity-70 hover:opacity-100"}`}
                >
                  {b.img ? <img src={b.img} alt="" loading="lazy" className="h-full w-full object-contain p-1 mix-blend-multiply" /> : <Droplets className="h-6 w-6 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div>
            <h3 className="mb-3 text-sm font-bold">اختر الماركة</h3>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {BRANDS.map((b, i) => (
                <button key={b.name} onClick={() => pick(i)} aria-pressed={i === bi}
                  className={`rounded-xl border px-2 py-2.5 text-sm font-bold transition ${i === bi ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50"}`}>
                  {b.name}
                </button>
              ))}
            </div>

            <h3 className="mb-3 mt-6 text-sm font-bold">الحجم والعبوة</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {brand.items.map((it, i) => {
                const on = it === item;
                return (
                  <button key={it.size + it.pack} onClick={() => setSi(i)} aria-pressed={on}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-right transition ${on ? "border-primary bg-secondary text-secondary-foreground" : "border-border bg-card hover:border-primary/50"}`}>
                    <span className="text-sm font-semibold">{sizeLabel(it)}</span>
                    <span className="shrink-0 text-sm font-bold">{sar(it.price)}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">سعر العبوة</p>
                <p className="font-display text-2xl font-bold">{sar(item.price)}</p>
              </div>
              <div className="flex items-center rounded-xl border border-border bg-card">
                <button aria-label="زيادة" onClick={() => setQty(Math.min(99, qty + 1))} className="grid h-12 w-12 place-items-center text-primary"><Plus className="h-4 w-4" /></button>
                <span className="w-8 text-center text-lg font-bold" aria-live="polite">{ar(qty)}</span>
                <button aria-label="إنقاص" onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-12 w-12 place-items-center text-primary"><Minus className="h-4 w-4" /></button>
              </div>
            </div>

            <a href={wa(orderMessage(product, qty))} target="_blank" rel="noreferrer"
              className="bg-wa mt-5 flex items-center justify-center gap-2 rounded-2xl py-4 text-lg font-bold text-primary-foreground transition hover:opacity-95">
              <MessageCircle className="h-5 w-5" /> أرسل الطلب {sar(total)}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">السعر للمنتجات فقط، ونأكد معك التوصيل والوقت على واتساب.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <Droplets className="absolute -left-10 -top-10 h-56 w-56 opacity-10" />
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">مويتك لبيتك، بدون تعب.</h2>
        <p className="mt-3 text-lg opacity-90">محتار؟ كلمنا ونساعدك تختار.</p>
        <a href={GENERAL} target="_blank" rel="noreferrer" className="bg-wa mt-7 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold transition hover:scale-[1.03]">
          <MessageCircle className="h-5 w-5" /> كلمنا على واتساب
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-bold"><Droplets className="h-5 w-5 text-accent" /> جدة تاون</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-80">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> جدة، المملكة العربية السعودية</span>
          <a href="tel:0560757063" className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /><span dir="ltr">0560757063</span></a>
        </div>
        <p className="opacity-60">جدة تاون © 2026</p>
      </div>
    </footer>
  );
}
