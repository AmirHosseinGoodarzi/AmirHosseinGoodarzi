# Performance — Cheat Sheet

## Core Web Vitals

### Core Web Vitals Overview
- **Quick Summary:** متریک‌های UX گوگل: `LCP` بارگذاری، `INP` تعامل، `CLS` پایداری بصری.
- **Senior Insight:** Field (CrUX/RUM) حقیقت کاربر است؛ Lab (Lighthouse) برای دیباگ — نه جایگزین.

| Metric | چه چیزی | آستانه خوب (تقریبی) |
|--------|---------|---------------------|
| LCP | بزرگ‌ترین محتوای دیده‌شده | ≤ 2.5s |
| INP | تأخیر پاسخ به ورودی | ≤ 200ms |
| CLS | جابه‌جایی layout | ≤ 0.1 |

### LCP
- **Quick Summary:** معمولاً hero image، بلوک متن بزرگ، یا video poster؛ تحت‌تأثیر سرور/CSS/فونت.
- **Senior Insight:** تصویر LCP را `preload` + ابعاد مشخص + فرمت مدرن؛ CSS مسدودکننده را کم کن.

### INP
- **Quick Summary:** بدترین تأخیر تعامل (click/key/tap) پس از حذف پرت؛ Long Task دشمن اصلی است.
- **Senior Insight:** Handler را سبک کن؛ کار سنگین را chunk/`startTransition`/Worker بده.

### CLS
- **Quick Summary:** جابه‌جایی ناخواسته از تصویر بدون size، فونت، ads، درج دیرهنگام DOM.
- **Senior Insight:** همیشه `width`/`height` یا aspect-ratio؛ برای embed جای ثابت رزرو کن.

### TTFB
- **Quick Summary:** زمان تا اولین بایت پاسخ سرور؛ پایهٔ همهٔ متریک‌های بارگذاری.
- **Senior Insight:** SSR کند = TTFB بالا؛ کش لبه/CDN و بهینهٔ backend را اول بزن.

## JS Delivery

### Bundle Size Optimization
- **Quick Summary:** Audit وابستگی، tree-shake، حذف lib سنگین، فشرده‌سازی و modern output.
- **Senior Insight:** یک lib اشتباه (moment، lodash کامل) بیشتر از componentهای خودت هزینه می‌دهد.

### Code Splitting
- **Quick Summary:** شکستن bundle به chunkهای route/component تا فقط کد لازم لود شود.
- **Senior Insight:** chunk زیاد = waterfall و overhead؛ مرز را روی route و feature سنگین بگذار.

### Lazy Loading
- **Quick Summary:** Component و تصویر below-the-fold را وقتی نزدیک دید شدن بارگذاری کن.
- **Senior Insight:** LCP candidate را lazy نکن؛ برای تصویر از `loading="lazy"` + IO استفاده کن.

### Dynamic `import()`
- **Quick Summary:** بارگذاری on-demand ماژول؛ bundler chunk جدا می‌سازد.
- **Senior Insight:** Prefetch روی hover/intent برای حس آنی بدون هزینهٔ initial.
- **Code:**
```ts
const Chart = lazy(() => import('./HeavyChart'));
// or: const mod = await import('./heavy');
```

## Media & Fonts

### Image Optimization
- **Quick Summary:** `srcset`/`sizes`، WebP/AVIF، فشرده‌سازی، placeholder، ابعاد ثابت ضد CLS.
- **Senior Insight:** تصویر درست‌اندازه > CDN جادویی؛ hero را اولویت بالا بده نه همه را.

### Font Optimization
- **Quick Summary:** Preload فونت بحرانی، subset، `font-display: swap|optional`، fallback هم‌متریک.
- **Senior Insight:** فونت زیاد = تأخیر متن و CLS؛ `optional` برای perf سخت‌گیرانه خوب است.
- **Code:**
```html
<link rel="preload" href="/fonts/app.woff2" as="font" type="font/woff2" crossorigin />
```

## React Runtime Performance

### Memoization Tradeoffs
- **Quick Summary:** `useMemo`/`useCallback` نتیجه/تابع را کش می‌کنند وقتی dependency پایدار است.
- **Senior Insight:** Memo رایگان نیست؛ فقط وقتی اندازه یا referential equality ثابت‌شده سود دارد.

### Avoiding Unnecessary Re-renders
- **Quick Summary:** Props پایدار، state نزدیک مصرف‌کننده، selector باریک، شکستن component بزرگ.
- **Senior Insight:** اول ترکیب state را درست کن؛ بعد Profiler — نه memo همه‌جا.

### Virtualization
- **Quick Summary:** فقط ردیف‌های可见 را mount کن (windowing) با overscan محدود.
- **Senior Insight:** ارتفاع پویا پیچیده است؛ برای لیست ۱۰ک+ تقریباً اجباری است.

## Caching & Hints

### Caching Strategies
- **Quick Summary:** لایه‌ها: browser HTTP cache، CDN، Service Worker، app/data cache (Query).
- **Senior Insight:** هر لایه invalidation خودش را دارد؛ یک منبع حقیقت برای دادهٔ کاربر تعریف کن.

### Prefetch / Preload
- **Quick Summary:** `preload` = لازم الان؛ `prefetch` = احتمالاً بعداً؛ اولویت متفاوت است.
- **Senior Insight:** preload بیش‌ازحد با LCP رقابت می‌کند؛ فقط منابع critical را preload کن.
- **Code:**
```html
<link rel="preload" as="image" href="/hero.avif" fetchpriority="high" />
<link rel="prefetch" href="/next-page.js" />
```

## Rendering Strategies

### Suspense Impact on UX
- **Quick Summary:** مرز loading برای async؛ استراتژی reveal و جلوگیری از چشمک fallback.
- **Senior Insight:** Skeleton پایدار بهتر از spinner چشمک‌زن؛ مرز را خیلی ریز/درشت نکن.

### Hydration Cost
- **Quick Summary:** اجرای JS برای زنده کردن HTML سرور؛ تا تمام شدن، تعامل کامل نیست.
- **Senior Insight:** کمتر hydrate کن (islands/partial)؛ JS مسیر اول را بتراش.

### SSR vs CSR Performance
- **Quick Summary:** SSR/SSG: HTML زودتر و SEO بهتر؛ CSR: TTFB پایین‌تر ولی First Content دیرتر.
- **Senior Insight:** انتخاب با محتوا و کش؛ hybrid (SSR shell + client islands) اغلب بهینه است.

| | SSR/SSG | CSR |
|--|---------|-----|
| First content | سریع‌تر | دیرتر |
| Interactivity | بعد از hydration | بعد از JS+data |
| SEO | قوی‌تر | ضعیف‌تر بدون prerender |
| Caching | HTML در لبه ممکن | عمدتاً asset/API |

## Measurement

### Profiling with DevTools
- **Quick Summary:** Flame chart، Layout/Paint، Long Tasks را در Performance panel ببین.
- **Senior Insight:** اول اندازه‌گیری روی دستگاه/throttle واقعی؛ بهینه‌سازی کور ممنوع.

### React Profiler
- **Quick Summary:** زمان commit، علت re-render، پیدا کردن component گران.
- **Senior Insight:** «چرا render شد» را بخوان؛ memo بدون دلیل ریشه را پنهان می‌کند.

### Lighthouse
- **Quick Summary:** امتیاز و audit آزمایشگاهی برای perf/a11y/SEO/best practices.
- **Senior Insight:** Lab ≠ Field؛ برای تصمیم محصول به RUM/CrUX تکیه کن.

### WebPageTest
- **Quick Summary:** تست واقعی با waterfall، filmstrip، مکان/شبکهٔ مختلف.
- **Senior Insight:** مقایسهٔ قبل/بعد با همان مکان و connection؛ filmstrip حس LCP را نشان می‌دهد.
