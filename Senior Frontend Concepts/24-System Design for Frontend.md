# System Design for Frontend — Cheat Sheet

## Architecture Foundations

### Designing Scalable Frontend Architecture
- **Quick Summary:** ساختار ماژولار با مرز مالکیت واضح برای تیم‌ها، perf، و DX همزمان.
- **Senior Insight:** مقیاس افراد > مقیاس فقط کد؛ boundary اشتباه هزینه هماهنگی را منفجر می‌کند.

### Modularity
- **Quick Summary:** دامنه/feature را جدا کن؛ وابستگی یک‌طرفه و APIهای داخلی پایدار.
- **Senior Insight:** shared موقت زود به dumping ground تبدیل می‌شود — مالک و قانون داشته باشد.

### Team Scalability
- **Quick Summary:** تیم‌ها بتوانند مستقل deliver کنند بدون conflict دائمی در یک codebase غول.
- **Senior Insight:** codeowners، package boundaries، و قرارداد UI/API را رسمی کن.

### Ownership Boundaries
- **Quick Summary:** هر سطح (app shell، feature، design system) مالک واضح برای review و oncall دارد.
- **Senior Insight:** بدون ownership، incident و کیفیت یتیم می‌ماند.

### Performance and DX Balance
- **Quick Summary:** ابزار و abstraction باید سرعت تیم را ببرد بدون کشتن runtime perf.
- **Senior Insight:** abstraction زودهنگام DX را هم خراب می‌کند؛ با evidence بهینه کن.

---

## Rendering & Caching

### SSR vs CSR — SEO Needs
- **Quick Summary:** محتوای index‌پذیر معمولاً به HTML اولیه غنی (SSR/SSG) نیاز دارد.
- **Senior Insight:** CSR خالص برای marketing/content SEO ضعیف است مگر prerender هدفمند.

### SSR vs CSR — Personalization
- **Quick Summary:** محتوای کاربرمحور ممکن است CSR یا SSR با cache کوتاه/private بخواهد.
- **Senior Insight:** personalized SSR را بی‌احتیاط روی CDN عمومی cache نکن.

### SSR vs CSR — Infra Cost
- **Quick Summary:** SSR هزینه compute سرور دارد؛ CSR فشار را به client و CDN静态 می‌دهد.
- **Senior Insight:** TTFB و scale هزینه را با traffic واقعی مدل کن، نه شعار.

### SSR vs CSR — UX / Performance Tradeoffs
- **Quick Summary:** SSR = first paint محتوا سریع‌تر؛ CSR = interactivity بعد از JS؛ hybrid رایج است.
- **Senior Insight:** تصمیم per-route بگیر؛ یک استراتژی برای کل محصول معمولاً غلط است.

### Caching Layers — Browser
- **Quick Summary:** HTTP cache و storage محلی برای assets/data تکراری.
- **Senior Insight:** hashed assets = cache طولانی؛ HTML و API را جدا سیاست بده.

### Caching Layers — CDN
- **Quick Summary:** لبه نزدیک کاربر برای static و گاهی HTML/API cacheپذیر.
- **Senior Insight:** cache key (cookie/query/header) اشتباه = leak یا miss دائمی.

### Caching Layers — App Data Cache
- **Quick Summary:** client cache مثل React Query/SWR برای server state با stale-while-revalidate.
- **Senior Insight:** cache بدون invalidation مشخص = UI دروغگو.

### Caching Layers — Server Cache
- **Quick Summary:** cache در BFF/SSR/edge برای پاسخ‌های گران یا مشترک.
- **Senior Insight:** شخصی‌سازی و auth را در لایه cache صریح مدل کن.

### Caching Layers — Invalidation Strategy
- **Quick Summary:** TTL، tag-based، event-driven، یا manual purge — بدون استراتژی cache بدهی است.
- **Senior Insight:** hard problem واقعی: invalidation دقیق > cache کردن کور.

---

## State, APIs & UX Resilience

### State Ownership — Local vs Global
- **Quick Summary:** state را نزدیک‌ترین مصرف‌کننده نگه دار؛ global فقط برای اشتراک واقعی.
- **Senior Insight:** global زیاد = coupling و rerender و تست سخت.

### State Ownership — Server vs Client
- **Quick Summary:** server state (remote) را از client/UI state جدا مدل کن.
- **Senior Insight:** duplicate کردن server data در Redux خام اغلب ضدpattern است.

### State Ownership — URL State
- **Quick Summary:** فیلتر، tab، pagination، و shareable UI را در URL نگه دار.
- **Senior Insight:** URL = source of truth قابل اشتراک و back/forward-friendly.

### State Ownership — Persistence Decisions
- **Quick Summary:** چه چیزی در memory، URL، localStorage، یا سرور persist شود.
- **Senior Insight:** persist حساس/موقت روی disk = ریسک privacy و bug کهنه.

### API Orchestration — Frontend Aggregation
- **Quick Summary:** ترکیب چند endpoint در UI؛ مراقب waterfall و پیچیدگی error باش.
- **Senior Insight:** aggregation سنگین را به BFF ببر تا client لاغر بماند.

### API Orchestration — BFF Usage
- **Quick Summary:** Backend-for-Frontend پاسخ را برای نیاز همان UI شکل می‌دهد.
- **Senior Insight:** BFF قرارداد پایدار UI می‌سازد و churn backend را ایزوله می‌کند.

### API Orchestration — Waterfall Avoidance
- **Quick Summary:** درخواست‌های مستقل را موازی کن؛ داده بحرانی را prefetch کن.
- **Senior Insight:** آبشار SSR/CSR هر دو TTI را می‌کشد؛ dependency graph را بکش.

### API Orchestration — Error / Loading Composition
- **Quick Summary:** loading/error را per-section ترکیب کن، نه یک اسپینر سراسری اجباری.
- **Senior Insight:** partial success UX اغلب بهتر از fail-all است.

### Error Boundaries Strategy — Page-Level Boundaries
- **Quick Summary:** کرش رندر یک صفحه را ایزوله و fallback نشان بده.
- **Senior Insight:** boundary دور کل app فقط = مرگ کامل UI؛ لایه‌بندی کن.

### Error Boundaries Strategy — Widget Isolation
- **Quick Summary:** ویجت‌های اختیاری را جدا boundary کن تا بقیه صفحه زنده بماند.
- **Senior Insight:** isolation برای third-party و experimental features حیاتی است.

### Error Boundaries Strategy — Fallback UX
- **Quick Summary:** پیام واضح + retry/navigation؛ صفحه سفید ممنوع.
- **Senior Insight:** fallback باید اقدام بعدی کاربر را مشخص کند.

### Error Boundaries Strategy — Logging / Reporting
- **Quick Summary:** خطا را با context به monitoring بفرست، نه فقط UI خاموش.
- **Senior Insight:** بدون گزارش، boundary فقط درد را پنهان می‌کند.

### Loading / Empty / Error UX — Skeletons
- **Quick Summary:** جایگاه محتوا را حفظ کن تا layout shift کم شود.
- **Senior Insight:** skeleton شبیه ساختار نهایی باشد، نه انیمیشن تزئینی بی‌معنا.

### Loading / Empty / Error UX — Spinners
- **Quick Summary:** برای انتظار کوتاه/عمل محلی؛ برای صفحه پر از داده معمولاً skeleton بهتر است.
- **Senior Insight:** اسپینر بی‌پایان بدون timeout/retry = بن‌بست UX.

### Loading / Empty / Error UX — Retry Actions
- **Quick Summary:** خطای موقتی را با retry صریح/خودکار محدود بازیابی کن.
- **Senior Insight:** retry بی‌سقف = thundering herd؛ backoff داشته باش.

### Loading / Empty / Error UX — No-Data Messaging
- **Quick Summary:** empty state راهنما + CTA، نه صفحه خالی مبهم.
- **Senior Insight:** empty ≠ error؛ کپی و اقدام متفاوت نیاز دارند.

---

## Domain UI Architectures

### Design System — Tokens
- **Quick Summary:** رنگ، فاصله، تایپ، elevation به‌صورت token مشترک.
- **Senior Insight:** UI خام با magic number = drift و theming غیرممکن.

### Design System — Primitives
- **Quick Summary:** بلوک‌های پایه (Button، Input، Stack) با دسترس‌پذیری و API پایدار.
- **Senior Insight:** primitive شکننده کل محصول را شکننده می‌کند — version با دقت.

### Design System — Composed Components
- **Quick Summary:** ترکیب primitives برای الگوهای محصول (ModalForm، DataCard).
- **Senior Insight:** composition را به دامنه entangle نکن مگر package دامنه‌ای جدا داری.

### Design System — Governance and Versioning
- **Quick Summary:** تغییرات breaking، changelog، و review برای مصرف‌کننده‌ها.
- **Senior Insight:** بدون governance، DS یا می‌میرد یا همه‌جا fork می‌شود.

### Large Form Architecture — Field Composition
- **Quick Summary:** فرم را به field/sectionهای مستقل با state مشخص بشکن.
- **Senior Insight:** یک state غول برای فرم بزرگ = rerender و پیچیدگی انفجاری.

### Large Form Architecture — Validation Orchestration
- **Quick Summary:** schema + UX خطا در سطح field/section/submit هماهنگ شود.
- **Senior Insight:** اعتبارسنجی فقط onSubmit برای فرم پیچیده ضعیف است؛ استراتژی لایه‌ای بگیر.

### Large Form Architecture — Performance
- **Quick Summary:** از rerender سراسری با isolation، uncontrolled جایی مناسب، و debounce جلوگیری کن.
- **Senior Insight:** typing lag در فرم = شکست اعتماد کاربر؛ Profiler را زود بزن.

### Large Form Architecture — Autosave / Draft Strategy
- **Quick Summary:** پیش‌نویس دوره‌ای با وضعیت sync واضح و بازیابی بعد از refresh.
- **Senior Insight:** conflict و ترتیب ذخیره را مشخص کن؛ last-write-wins خام خطرناک است.

### Data-Heavy Table — Virtualization
- **Quick Summary:** فقط ردیف‌های可见 را رندر کن تا DOM منفجر نشود.
- **Senior Insight:** بدون virtualization، هزاران row = jank قطعی.

### Data-Heavy Table — Sorting / Filtering / Pagination
- **Quick Summary:** عملیات داده را با URL state و بازخورد واضح مدل کن.
- **Senior Insight:** ترکیب filter+sort+page باید deterministic و قابل اشتراک باشد.

### Data-Heavy Table — Server-Side vs Client-Side Ops
- **Quick Summary:** داده بزرگ/حساس → server؛ مجموعه کوچک ثابت → client ممکن است کافی باشد.
- **Senior Insight:** جابه‌جایی دیر از client به server پرهزینه است — از اول با رشد داده طراحی کن.

### Data-Heavy Table — Accessibility
- **Quick Summary:** نقش‌های جدول، keyboard، sort announcements، و focus مدیریت شوند.
- **Senior Insight:** جدول سفارشی بدون a11y = بدهی قانونی/محصولی پنهان.

### Realtime UI — WebSocket / SSE
- **Quick Summary:** WebSocket دوطرفه؛ SSE یک‌طرفه سرور→کلاینت برای stream رویداد.
- **Senior Insight:** انتخاب بر اساس نیاز duplex، پروکسی، و مدل reconnect.

### Realtime UI — Optimistic Updates
- **Quick Summary:** UI فوراً به‌روز می‌شود؛ تأیید سرور بعداً می‌آید.
- **Senior Insight:** بدون rollback مشخص، optimistic = ناسازگاری حتمی.

### Realtime UI — Conflict Reconciliation
- **Quick Summary:** وقتی رویدادها/ویرایش‌ها تداخل دارند، قوانین merge لازم است.
- **Senior Insight:** آخرین timestamp همیشه درست نیست؛ domain rules بنویس.

### Realtime UI — Reconnect Behavior
- **Quick Summary:** بعد از قطع، resubscribe + catch-up (snapshot/gap fill) ضروری است.
- **Senior Insight:** reconnect خام بدون sync = UI کهنه یا تکراری.

### Offline-First Basics — Caching
- **Quick Summary:** داده حیاتی را برای استفاده آفلاین در cache محلی نگه دار.
- **Senior Insight:** چه چیزی cache شود و تا کی — تصمیم محصول است نه فقط فنی.

### Offline-First Basics — Queued Mutations
- **Quick Summary:** تغییرات کاربر آفلاین صف می‌شوند و بعداً sync می‌شوند.
- **Senior Insight:** صف باید بادوام و قابل مشاهده در UX باشد.

### Offline-First Basics — Sync Conflict Handling
- **Quick Summary:** تداخل آفلاین/آنلاین را با استراتژی مشخص حل یا به کاربر نشان بده.
- **Senior Insight:** سکوت در conflict = از دست رفتن داده بی‌خبر.

### Offline-First Basics — Service Worker Role
- **Quick Summary:** SW شبکه را intercept و asset/data strategies را اجرا می‌کند.
- **Senior Insight:** SW باگ‌دار مثل cache شیطانی است؛ نسخه و update UX داشته باش.

---

## Product-Scale Concerns

### Multi-Tenant — Theming
- **Quick Summary:** برند/تم هر tenant از tokenها و تنظیمات، نه fork کد.
- **Senior Insight:** CSS hardcoded رنگ برند = هزینه نگهداری چندمستأجری.

### Multi-Tenant — Permissions
- **Quick Summary:** UI بر اساس نقش/مجوز؛ هر عمل حساس در سرور هم enforce شود.
- **Senior Insight:** مخفی کردن دکمه ≠ امنیت؛ authorization فقط client نیست.

### Multi-Tenant — Tenant Config
- **Quick Summary:** featureها، محدودیت‌ها، و برندینگ از لوکاپ/config per tenant.
- **Senior Insight:** config را cache کن ولی invalidation و isolation را جدی بگیر.

### Multi-Tenant — Data Isolation Awareness
- **Quick Summary:** هرگز داده/شناسه tenant را در client قاطی یا cache مشترک نشت نده.
- **Senior Insight:** bug isolation = حادثه امنیتی؛ در طراحی cache/key لحاظ کن.

### Internationalization Architecture — Locale Routing
- **Quick Summary:** locale در path/domain و همگام با محتوای ترجمه‌شده.
- **Senior Insight:** تغییر زبان باید URL و SEO را درست نگه دارد، نه فقط dictionary.

### Internationalization Architecture — Translation Loading
- **Quick Summary:** استراتژی eager/lazy و split بر اساس route/namespace.
- **Senior Insight:** بلوکه کردن TTI برای کل catalog ترجمه‌ها معمولاً اشتباه است.

### Internationalization Architecture — Formatting Boundaries
- **Quick Summary:** تاریخ/عدد/ارز با `Intl` و locale واقعی، نه string دست‌ساز.
- **Senior Insight:** فرمت را در UI layer متمرکز کن تا inconsistency نیاید.

### Internationalization Architecture — RTL Support
- **Quick Summary:** `dir` + logical CSS + آیکن‌های جهتی؛ layout با زبان mirror شود.
- **Senior Insight:** RTL را بعداً bolt-on نکن؛ از اول logical بنویس.

### Feature Flags — Rollout Control
- **Quick Summary:** انتشار تدریجی ویژگی بدون deploy جدا برای هر مخاطب.
- **Senior Insight:** flag را در معماری داده/UI از روز اول طراحی کن، نه if پراکنده.

### Feature Flags — Kill Switches
- **Quick Summary:** خاموش کردن فوری ویژگی مشکل‌دار در production.
- **Senior Insight:** kill switch بی‌نیاز از rollback کامل = زمان نجات incident.

### Feature Flags — Cleanup of Stale Flags
- **Quick Summary:** flag تمام‌شده را حذف کن وگرنه کد مرده و شاخه پیچیده می‌ماند.
- **Senior Insight:** flag بدون expiry owner = بدهی فنی تضمینی.

### Feature Flags — Targeting Basics
- **Quick Summary:** هدف‌گیری بر اساس user، درصد، محیط، یا tenant.
- **Senior Insight:** targeting در client قابل دستکاری است؛ برای امنیت به سرور تکیه کن.

### A/B Testing — Experiment Assignment
- **Quick Summary:** کاربر به variant تخصیص می‌یابد و تجربه پایدار می‌ماند.
- **Senior Insight:** تخصیص ناپایدار = داده آزمایش بی‌اعتبار.

### A/B Testing — Metrics
- **Quick Summary:** موفقیت با متریک از پیش تعریف‌شده سنجیده می‌شود، نه حس.
- **Senior Insight:** primary metric + guardrails (perf/error) هر دو لازم‌اند.

### A/B Testing — Flicker Avoidance
- **Quick Summary:** جلوگیری از نشان دادن A سپس پرش به B قبل از assignment.
- **Senior Insight:** flicker هم UX را می‌کشد هم آزمایش را آلوده می‌کند.

### A/B Testing — Analytics Integrity
- **Quick Summary:** eventها باید variant و experiment id درست داشته باشند.
- **Senior Insight:** بدون integrity، تصمیم محصول بر نویز گرفته می‌شود.
