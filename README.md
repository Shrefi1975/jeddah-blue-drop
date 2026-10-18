# Jeddah Blue Drop

قم بتصميم موقع كامل بحسب المتطلبات المرفقة:

Act as an expert UI/UX Designer and Senior Frontend Developer. Build a high-converting, modern, RTL (Right-to-Left) Arabic landing page for a bottled water delivery service in Jeddah, Saudi Arabia named "جدة تاون" (Jeddah Town). 

### 1. Design System & Vibe
- **Theme:** Refreshing, clean, trustworthy, and premium. 
- **Colors:** Crisp white background, deep ocean blue for primary text/buttons, and subtle aqua/cyan accents for highlights.
- **Typography:** Modern Arabic font (e.g., 'Cairo', 'Tajawal', or 'IBM Plex Sans Arabic').
- **Layout:** Mobile-first, highly responsive, plenty of whitespace, glassmorphism touches for cards.

### 2. Technical Constraints (Crucial)
- **Hero Video:** Use a background video in the Hero section. To ensure it is lightweight and doesn't slow down the site:
  - Add `preload="metadata"`, `muted`, `loop`, `playsinline` attributes.
  - **Video Resolution:** The video MUST be exactly **720p (1280x720)** to ensure instant loading speed. Do not use 1080p or higher.
  - Use a CSS fallback gradient (blue to cyan) while the video loads.
  - Apply a dark blue overlay (opacity 0.4) over the video to ensure text readability.
  - *Note for AI:* Use a placeholder URL for a high-quality, short, looping water splash or fast delivery video at 720p resolution.
- **RTL Support:** Enforce `dir="rtl"` and ensure all margins, paddings, and flex directions are correctly mirrored for Arabic.

### 3. Marketing & Conversion Strategies to Implement
- **Sticky Header:** Logo on the right, navigation in the center, and a glowing "اطلب عبر الواتساب" (Order via WhatsApp) button on the left.
- **Floating Action Button (FAB):** A persistent WhatsApp icon at the bottom left for instant ordering.
- **Trust Badges:** Below the Hero CTA, add 3 small icons with text: "توصيل خلال ساعتين" (Delivery in 2 hrs), "دفع عند الاستلام" (Cash on Delivery), "معتمد من هيئة الغذاء والدواء" (SFDA Approved).
- **Urgency & B2B Hook:** Add a banner or section targeting B2B: "هل تملك مطعماً أو كافيه؟ احصل على أسعار الجملة وعقود التوريد الشهرية."

### 4. Page Structure & Content

#### A. Hero Section
- **Headline:** "نقاء يصلك حتى بابك في جدة"
- **Subheadline:** "توصيل سريع ومباشر لأشهر ماركات مياه الشرب المعبأة. للمنازل، المكاتب، المطاعم، والفعاليات."
- **CTAs:** Primary: "اطلب الآن عبر الواتساب" | Secondary: "تصفح المنتجات"
- **Background:** The lightweight optimized 720p video mentioned above.

#### B. How It Works (3 Simple Steps)
- Step 1: اختر منتجاتك وأحجامها المفضلة.
- Step 2: أرسل طلبك عبر الواتساب بضغطة زر.
- Step 3: نوصلك الطلب بارداً وفي أسرع وقت.

#### C. Our Products (Section: منتجاتنا)
- Create a **Filterable Grid/Tabs** to filter by Brand. 
- Include an interactive quantity selector (+ / -) for each product card.
- Each product card should have: Brand Name, Size, Pack details, Price (in SAR), dynamic total price based on selected quantity, and an "أضف للطلب" (Add to order) button that opens WhatsApp with a pre-filled message including product name, size, quantity, and total price.
- **Exact Data to use:**
  * **طويق (Tawq):** 330مل (40 حبة) - 10 ﷼ | 330مل شرنك (24 حبة) - 5 ﷼
  * **أصايل (Asayel):** 200مل (48 حبة) - 11 ﷼ | 330مل (40 حبة) - 10 ﷼ | 330مل شرنك - 5 ﷼
  * **ميراد (Mirad):** 200مل (48 حبة) - 11 ﷼ | 330مل (40 حبة) - 10 ﷼ | 330مل شرنك - 6 ﷼ | 600مل - 12 ﷼ | 5 لتر - 10 ﷼
  * **صفا (Safa):** 200مل (48 حبة) - 18.5 ﷼ | 330مل (40 حبة) - 18 ﷼ | 600مل - 16 ﷼ | 1.5 لتر - 14 ﷼ | 5 لتر - 14 ﷼
  * **نوفا (Nova):** 200مل (24 حبة - غطاء قسطير) - 11 ﷼ | 330مل (40 حبة) - 18.5 ﷼ | 550مل - 16 ﷼ | 1.5 لتر - 15 ﷼ | 12 لتر - 16 ﷼
  * **أكويا (Akoya):** 200مل (48 حبة) - 14 ﷼ | 330مل (40 حبة) - 14 ﷼
  * **رفا (Rafa):** 250مل (40 حبة) - 12 ﷼ | 330مل (40 حبة) - 12 ﷼
  * **العين (Al Ain):** 330مل (40 حبة) - 12 ﷼
  * **البيان (Al Bayan):** 330مل (40 حبة) - 11 ﷼

#### D. Our Clients (Section: عملاؤنا يثقون بنا)
- Title: "الشركاء الذين يثقون بـ جدة تاون"
- Subtitle: "نفتخر بتوريد المياه لأفضل الجهات في مدينة جدة"
- Create a sleek logo carousel/grid for client categories:
  1. **المطاعم والمقاهي:** (مطعم بحر جدة، كافيه سول، مطاعم البيك)
  2. **الشركات والمكاتب:** (شركة جدة للتطوير، مكاتب الروشن، بنك البلاد - فرع جدة)
  3. **النوادي الرياضية:** (نادي اللياقة البدنية، أكاديمية جدة الرياضية)
  4. **الفعاليات والخدمات:** (شركة جدة للفعاليات، خدمات التموين الكبرى)

#### E. FAQ Section (Accordion style)
- ما هو الحد الأدنى للطلب؟ (Answer: لا يوجد حد أدنى للطلب، نخدمك بكرتون واحد أو أكثر).
- هل تتوفر المياه باردة؟ (Answer: نعم، نوفر خيار التوصيل بارداً بطلب مسبق).
- كيف يتم الدفع؟ (Answer: نقبل الدفع عند الاستلام نقداً، أو عبر التحويل البنكي/مدى لشركات العقود).

#### F. Footer
- Quick links, Contact Info (Jeddah, Saudi Arabia, Phone: 0560757063, Email).
- Social Media Icons.
- Copyright "جدة تاون © 2026".

### 5. Integration Details
- Use Tailwind CSS and Lucide React.
- All WhatsApp links throughout the site (Header button, FAB, Product cards) must use the phone number **966560757063**.
- Ensure full mobile responsiveness and smooth animations.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://jeddah-blue-drop.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0085d7c9-4e7d-4db1-b3b6-47ae8f214442).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
