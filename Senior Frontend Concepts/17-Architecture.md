# Architecture — Cheat Sheet

## Structure & Boundaries

### Feature-based Folder Structure
- **Quick Summary:** سازماندهی بر اساس domain/feature با colocation؛ نه پوشه‌های `components/` غول‌آسا.
- **Senior Insight:** مقیاس‌پذیری بهتر؛ shared sprawl را محدود کن و مرز feature را سخت نگه دار.

### Domain-driven Frontend Concepts
- **Quick Summary:** دامنهٔ کسب‌وکار، ubiquitous language، مرز UI هم‌تراز با دامنه.
- **Senior Insight:** نام فایل/کامپوننت = زبان محصول؛ ترجمهٔ فنی مبهم بدهی ارتباطی می‌سازد.

### Separation of Concerns
- **Quick Summary:** UI ≠ منطق کسب‌وکار ≠ data access؛ مرز component/service واضح.
- **Senior Insight:** God component را بشکن؛ هر لایه یک دلیل تغییر داشته باشد.

### Smart vs Dumb Components
- **Quick Summary:** Smart/container = data/logic؛ Dumb/presentational = رندر خالص از props.
- **Senior Insight:** در React مدرن hooks جایگزین سخت‌گیری قدیمی شده؛ جداسازی همچنان برای تست مفید است.

### Container / Presentational Pattern
- **Quick Summary:** الگوی تاریخی جداسازی؛ امروز اغلب custom hooks + UI نازک.
- **Senior Insight:** وقتی تیم بزرگ/Storybook سنگین است هنوز مفید؛ اجبار کورکورانه نکن.

### Atomic Design
- **Quick Summary:** atoms → molecules → organisms → templates/pages به‌عنوان mental model.
- **Senior Insight:** سلسله‌مراتب سفت‌وسخت اجباری نیست؛ برای design system مفید، برای feature folder الزامی نه.

### Module Boundaries
- **Quick Summary:** هر module یک public API؛ از deep import داخلی ماژول دیگر پرهیز کن.
- **Senior Insight:** جهت وابستگی یک‌طرفه (feature → shared، نه برعکس)؛ lint مرزها را enforce کن.

```ts
// features/cart/index.ts — public API only
export { CartPage } from './CartPage';
export { useCart } from './useCart';
```

---

## Data, Errors & Observability

### API Layer Abstraction
- **Quick Summary:** wrapper کلاینت fetch، DTO mapping، نرمال‌سازی error، تست‌پذیری.
- **Senior Insight:** UI مستقیم به response خام وابسته نباشد؛ قرارداد داخلی پایدار بساز.

### Error Handling Strategy
- **Quick Summary:** تفکیک UI error، network error، logging سراسری، تصمیم retry/fallback.
- **Senior Insight:** Error Boundary فقط render errors؛ شکست API را صریح در UX مدیریت کن.

### Logging Strategy
- **Quick Summary:** لاگ کلاینت ساخت‌یافته؛ حریم خصوصی؛ آگاهی از correlation IDs.
- **Senior Insight:** PII در لاگ نگذار؛ سطح log را در production کنترل کن.

### Observability Basics
- **Quick Summary:** logs + metrics + traces؛ ابزارهای frontend monitoring (RUM، error tracking).
- **Senior Insight:** بدون signal، perf/regression در production نامرئی است — SLI فرانت تعریف کن.

---

## Scale & Deployment Shapes

### Monorepo Basics
- **Quick Summary:** پکیج‌های shared، tooling workspace (pnpm/nx/turbo)، tradeoff نسخه‌بندی.
- **Senior Insight:** Atomic change عالی؛ CI/ownership پیچیده‌تر — مرز package را جدی بگیر.

### Shared UI Packages
- **Quick Summary:** استخراج component library، versioning، اشتراک token/style، release management.
- **Senior Insight:** Semver و changelog اجباری؛ breaking change خاموش چند اپ را می‌شکند.

### Microfrontend Basics
- **Quick Summary:** deploy مستقل، استراتژی integration، overhead runtime، تصمیم سازمانی.
- **Senior Insight:** هزینهٔ platform بالاست؛ فقط وقتی تیم/release isolation ارزشش را دارد.

### SSR Architecture Tradeoffs
- **Quick Summary:** perf و SEO بهتر در برابر پیچیدگی، caching، و هزینه infra.
- **Senior Insight:** SSR را پیش‌فرض مطلق نکن؛ برای صفحهٔ واقعاً dynamic/SEO-critical انتخاب کن.

### BFF (Backend for Frontend)
- **Quick Summary:** لایهٔ بک اختصاصی فرانت برای aggregation و شکل‌دهی API مخصوص UI.
- **Senior Insight:** over-fetch/chatty API را کم می‌کند؛ BFF چاق = coupling و مالکیت مبهم.
