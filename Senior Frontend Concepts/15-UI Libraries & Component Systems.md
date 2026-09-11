# UI Libraries & Component Systems — Cheat Sheet

## shadcn/ui & Radix

### shadcn/ui Setup
- **Quick Summary:** CLI init + Tailwind؛ کامپوننت‌ها به پروژه copy می‌شوند (نه npm package black-box).
- **Senior Insight:** Ownership کامل کد = کنترل و مسئولیت نگهداری با تیم توست.

### shadcn/ui Customization
- **Quick Summary:** فایل generated را ویرایش کن؛ theme tokens و variants را با design system هم‌تراز کن.
- **Senior Insight:** بعد از customize، re-add کورکورانه CLI تغییراتت را overwrite می‌کند — diff آگاهانه.

### Radix Accessibility Model
- **Quick Summary:** Headless primitives با keyboard، focus trap، ARIA/state مدیریت‌شده.
- **Senior Insight:** Behavior از Radix؛ styling مال تو — a11y را دوباره اختراع نکن.

### Headless UI Concepts
- **Quick Summary:** رفتار و a11y بدون استایل؛ composable primitives برای design system سفارشی.
- **Senior Insight:** Accessibility-first؛ ظاهر جدا = brand آزادی بدون قربانی کردن interaction.

---

## Tokens & Theming

### Design Tokens
- **Quick Summary:** مقادیر پایه: color، spacing، typography، radius — منبع حقیقت بصری.
- **Senior Insight:** Semantic tokens (`--color-danger`) روی raw (`--red-500`)؛ refactor برند ارزان‌تر می‌شود.

### Theming Architecture
- **Quick Summary:** لایه‌های token → CSS variables → theme/dark mode / brand override.
- **Senior Insight:** Dark mode با تعویض semantic vars؛ hardcode رنگ در component نگذار.

```css
:root { --bg: #fff; --fg: #111; }
[data-theme="dark"] { --bg: #111; --fg: #fff; }
```

---

## Component API Design

### Component API Design
- **Quick Summary:** نام prop شفاف، default معقول، extensibility، consistency در کل سیستم.
- **Senior Insight:** API ناسازگار = هزینه شناختی تیم؛ قبل از merge، الگوی موجود را mirror کن.

### Controlled / Uncontrolled APIs
- **Quick Summary:** Controlled: `value` + `onChange`؛ Uncontrolled: `defaultValue`؛ ownership واضح.
- **Senior Insight:** Dual-mode پشتیبانی کن وقتی form libs و استفاده ساده هر دو لازم‌اند.

```tsx
type InputProps = { value?: string; defaultValue?: string; onChange?: (v: string) => void };
```

### Polymorphic Components
- **Quick Summary:** `as` prop برای تغییر element معنایی (`button` → `a` / `div`).
- **Senior Insight:** Typing پیچیده (`as` + props element) — فقط وقتی semantic انعطاف واقعی لازم است.

### `asChild`
- **Quick Summary:** رفتار/props را به child می‌سپارد؛ بدون wrapper DOM اضافه (الگوی Radix/shadcn).
- **Senior Insight:** برای لینک‌استایل‌دکمه و composition تمیز؛ از nest شدن button-in-button جلوگیری می‌کند.

### Slot Pattern
- **Quick Summary:** تزریق composable child در نقاط layout مشخص؛ کنترل semantics با مصرف‌کننده.
- **Senior Insight:** انعطاف layout بدون prop explosion؛ مالکیت a11y را مستند کن.

### Compound Component APIs
- **Quick Summary:** `Tabs.List` / `Tabs.Trigger` / `Tabs.Content` با context مشترک.
- **Senior Insight:** API بیانی و منعطف؛ برای `Accordion`، `Select`، `Dialog` استاندارد سیستم.

```tsx
<Tabs defaultValue="a">
  <Tabs.List><Tabs.Trigger value="a">A</Tabs.Trigger></Tabs.List>
  <Tabs.Content value="a">...</Tabs.Content>
</Tabs>
```

---

## Styling Utilities & Icons

### Variant Systems (`cva` / `clsx` / `tailwind-merge`)
- **Quick Summary:** `cva` = base + variants؛ `clsx` شرطی؛ `twMerge` حذف utilityهای متعارض.
- **Senior Insight:** بدون merge، class آخر Tailwind لزوماً برندارد — conflict خاموش UI می‌شکند.

```ts
const button = cva('px-3 py-2', { variants: { intent: { primary: 'bg-black text-white' } } });
```

### Icon Strategy
- **Quick Summary:** کتابخانه tree-shakeable؛ سایز یکنواخت؛ labeling برای a11y.
- **Senior Insight:** Decorative → `aria-hidden`؛ meaningful → `aria-label`/`title`. Bundle را audit کن.

### Responsive Component Patterns
- **Quick Summary:** Layout تطبیقی؛ mobile-first API؛ در صورت نیاز container queries به‌جای فقط viewport.
- **Senior Insight:** Component در sidebar ≠ full page — `@container` برای reuse واقعی.
