# High-Frequency Interview Terms — Cheat Sheet

### Reconciliation
- **Quick Summary:** الگوریتم React برای مقایسه VDOM قبلی/جدید و اعمال حداقل به‌روزرسانی DOM.
- **Senior Insight:** heuristic سطحی است؛ `key` غلط = remount/باگ state، نه magically perfect diff.

### Hydration
- **Quick Summary:** اتصال event handlers و state کلاینت روی HTML آماده‌شده توسط SSR.
- **Senior Insight:** هزینه JS همچنان هست؛ mismatch یعنی کار دوباره و هشدار/باگ UI.

### Hoisting
- **Quick Summary:** در creation phase، اعلامیه‌ها به بالای scope بالا می‌روند؛ مقداردهی نه لزوماً.
- **Senior Insight:** `function` کامل hoist می‌شود؛ `let`/`const` در TDZ تا initialize قابل دسترسی نیست.

### Closure
- **Quick Summary:** تابع مقادیر lexical scope بیرونی را حتی بعد از پایان آن scope نگه می‌دارد.
- **Senior Insight:** قدرت encapsulation و منبع stale closure در async/hooks همزمان است.

### Event Loop
- **Quick Summary:** call stack را خالی می‌کند؛ سپس macrotasks و بینشان microtasks را اجرا می‌کند.
- **Senior Insight:** `Promise`/`queueMicrotask` قبل از `setTimeout`؛ UI jank از long task روی stack است.

### Memoization
- **Quick Summary:** کش کردن نتیجه محاسبه/ارجاع برای ورودی یکسان تا کار تکراری کم شود.
- **Senior Insight:** هزینه مقایسه/حافظه دارد؛ بدون bottleneck واقعی premature است.

### Referential Equality
- **Quick Summary:** دو متغیر فقط اگر همان reference را داشته باشند `===` می‌شوند (برای object/function).
- **Senior Insight:** object جدید هر رندر = dependency/memo/`React.memo` بی‌اثر می‌شود.

### Stale Closure
- **Quick Summary:** handler/effect/timer مقدار قدیمی state/props را از closure قبلی می‌بیند.
- **Senior Insight:** با deps درست، functional update، یا `useEffectEvent` الگوی مدرن رفع کن.

### Race Condition
- **Quick Summary:** پاسخ async قدیمی بعد از جدید می‌آید و UI/state را غلط می‌نویسد.
- **Senior Insight:** abort/ignore-stale-request و id نسل درخواست را senior می‌دانند ضروری.

### Debounce
- **Quick Summary:** اجرا را تا آرام شدن ورودی به تأخیر می‌اندازد (مثلاً تایپ جستجو).
- **Senior Insight:** برای کاهش call حجم خوب است؛ برای کنترل نرخ پیوسته throttle مناسب‌تر است.

### Throttle
- **Quick Summary:** حداکثر یک اجرا در هر بازه زمانی (scroll/resize/mousemove).
- **Senior Insight:** leading/trailing را آگاهانه انتخاب کن وگرنه آخرین مقدار از دست می‌رود.

### Idempotency
- **Quick Summary:** تکرار همان عملیات نتیجه یکسان/ایمن می‌دهد بدون اثر جانبی مخرب اضافه.
- **Senior Insight:** retry شبکه و double-submit UI بدون idempotency داده را خراب می‌کند.

### Pure Function
- **Quick Summary:** با ورودی یکسان خروجی یکسان؛ بدون side effect خارجی.
- **Senior Insight:** پایه predictability، تست، و render safety در React است.

### Side Effect
- **Quick Summary:** تعامل با بیرون: شبکه، DOM، storage، log، timer، subscription.
- **Senior Insight:** در render نگذار؛ در effect/event و با cleanup مدیریت کن.

### Tree Shaking
- **Quick Summary:** حذف exportهای استفاده‌نشده از bundle نهایی با تحلیل ایستا.
- **Senior Insight:** نیاز به ESM و importهای side-effect-free؛ CJS/dynamic مانع می‌شود.

### Code Splitting
- **Quick Summary:** شکستن bundle به chunkهای کوچکتر برای دانلود بر اساس نیاز.
- **Senior Insight:** split زیاد = waterfall درخواست؛ مرز route/feature معمولاً بهینه است.

### Lazy Loading
- **Quick Summary:** بارگذاری کامپوننت/تصویر/مسیر را تا زمان نیاز عقب می‌اندازد.
- **Senior Insight:** بدون fallback/preload هوشمند، تأخیر محسوس UX می‌سازد.

### Suspense
- **Quick Summary:** مرز async که تا آماده شدن داده/کد، fallback نشان می‌دهد.
- **Senior Insight:** ترکیب با lazy و data libraries؛ مرزها UX progressive می‌سازند.

### Concurrent Rendering
- **Quick Summary:** کار رندر قابل interrupt/ اولویت‌بندی برای پاسخ‌گویی بهتر UI.
- **Senior Insight:** مدل ذهنی از «رندر همیشه یک‌نفس» به «قابل توقف» عوض می‌شود.

### Server Components
- **Quick Summary:** کامپوننت‌هایی که روی سرور اجرا می‌شوند و JS کلاینت برایشان ارسال نمی‌شود.
- **Senior Insight:** مرز `"use client"` حیاتی است؛ state/effect مرورگر آنجا نمی‌آید.

### Optimistic Update
- **Quick Summary:** UI فوراً موفقیت را فرض می‌کند؛ سرور بعداً تأیید/رد می‌کند.
- **Senior Insight:** بدون rollback و reconcile، ناسازگاری داده حتمی است.

### Normalization
- **Quick Summary:** state به‌صورت entities با id؛ بدون duplicate تودرتوی عمیق.
- **Senior Insight:** آپدیت یک entity ارزان و consistent می‌شود؛ ideal برای کش‌های بزرگ.

### Cache Invalidation
- **Quick Summary:** دانستن/اعمال زمان بی‌اعتبار شدن داده کش‌شده.
- **Senior Insight:** سخت‌ترین بخش caching؛ broad invalidate ساده ولی پرهزینه است.

### Re-render
- **Quick Summary:** اجرای دوباره function کامپوننت؛ لزوماً به‌معنای DOM change نیست.
- **Senior Insight:** render ≠ commit؛ بهینه کردن commit/DOM مهم‌تر از صفر کردن هر render است.

### Hydration Mismatch
- **Quick Summary:** خروجی اولین رندر کلاینت با HTML سرور فرق دارد.
- **Senior Insight:** مقصرهای رایج: `Date`، `random`، `window`، locale/TZ، markup شرطی.

### Critical Rendering Path
- **Quick Summary:** مسیر از دریافت HTML تا اولین paint: parse، CSS، JS مسدودکننده، layout، paint.
- **Senior Insight:** CSS/JS blocking و منابع above-the-fold اهرم‌های اصلی بهینه‌سازی‌اند.

### Progressive Enhancement
- **Quick Summary:** ابتدا تجربه پایه بدون JS غنی؛ قابلیت‌های پیشرفته روی آن اضافه می‌شوند.
- **Senior Insight:** تاب‌آوری شبکه/دستگاه ضعیف و SEO را تقویت می‌کند؛ ضد all-or-nothing JS.
