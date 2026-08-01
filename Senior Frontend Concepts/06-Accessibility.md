# Accessibility — Cheat Sheet

## Semantic Structure

### Headings / Landmarks / Lists / Tables
- **Quick Summary:** ساختار معنایی (h1–h6، landmark، `ul`/`ol`، جدول واقعی) اسکلت صفحه برای AT است.
- **Senior Insight:** یک `h1` منطقی، landmark تکراری بدون نام، و جدول layout = نویز برای screen reader.

## Keyboard & Focus

### Keyboard Navigation
- **Quick Summary:** Tab بین کنترل‌ها؛ Enter/Space فعال‌سازی؛ Escape بستن؛ Arrow برای widgetهای복합.
- **Senior Insight:** اگر با موس کار می‌کند ولی با کیبورد نه، برای بسیاری کاربران غیرقابل‌استفاده است.

### Focus Management
- **Quick Summary:** بعد از باز شدن modal/route، focus را آگاهانه بگذار و هنگام بستن برگردان.
- **Senior Insight:** گم شدن focus = بن‌بست کیبورد؛ در SPA روی تغییر مسیر به main برو.

### Tab Order
- **Quick Summary:** ترتیب طبیعی = ترتیب DOM؛ از `tabindex` مثبت اجتناب کن.
- **Senior Insight:** `tabindex="0"` برای سفارشی‌های focusable؛ `-1` فقط برای focus برنامه‌ای.
- **Code:**
```ts
// Prefer DOM order; programmatic focus:
mainRef.current?.focus(); // main tabindex={-1}
```

### Focus Trap
- **Quick Summary:** در modal/side panel، Tab داخل محفظه می‌چرخد تا dismiss شود.
- **Senior Insight:** همیشه Escape + بازگردانی focus به trigger؛ بدون escape hatch تله بساز نکن.

### Skip Links
- **Quick Summary:** لینک «Skip to main content» اول صفحه برای رد کردن nav تکراری.
- **Senior Insight:** باید با کیبورد نمایان شود (`:focus`); فقط `sr-only` دائمی کافی نیست.

## Screen Readers & ARIA

### Screen Readers Basics
- **Quick Summary:** نام دسترس‌پذیر + role + state را می‌خوانند؛ محتوای `aria-hidden`/CSS-hidden رفتار متفاوت دارد.
- **Senior Insight:** با VoiceOver/NVDA تست واقعی کن؛ فقط axe کافی نیست.

### ARIA Usage
- **Quick Summary:** اول HTML بومی؛ بعد role/state/property؛ قانون اول: ARIA بد بدتر از نبود ARIA است.
- **Senior Insight:** `role="button"` بدون کیبورد/focus = ضد الگو؛ widget کامل بساز یا native استفاده کن.

### `aria-label` / `aria-labelledby` / `aria-describedby`
- **Quick Summary:** نام برای icon-button؛ `labelledby` ارجاع به متن موجود؛ `describedby` توضیح/خطا.
- **Senior Insight:** اگر متن قابل‌دیدن هست، دوباره `aria-label` ننویس — دوبل‌خوانی.
- **Code:**
```html
<button aria-label="Close">✕</button>
<input aria-describedby="email-err" />
<p id="email-err">Invalid email</p>
```

### Live Regions
- **Quick Summary:** `aria-live="polite|assertive"` برای اعلام پویا (toast، وضعیت، خطای فرم).
- **Senior Insight:** `assertive` فقط فوری؛ زیاده‌روی = بمباران اعلام؛ `role="status"` اغلب کافی است.

## Accessible Patterns

### Accessible Forms
- **Quick Summary:** `<label>` صریح، `fieldset`/`legend` برای گروه، خطای مرتبط، `required` اعلام‌شده.
- **Senior Insight:** Placeholder جایگزین label نیست؛ خطا را به input با `aria-describedby` وصل کن.

### Accessible Modals
- **Quick Summary:** `role="dialog"` + `aria-modal`، focus اولیه، focus trap، پس‌زمینه inert، Escape.
- **Senior Insight:** بدون inert، screen reader پس‌زمینه را می‌خواند؛ از Dialog بومی/`inert` استفاده کن.

### Accessible Dropdowns / Combobox
- **Quick Summary:** کیبورد Arrow/Enter/Escape؛ حالت selected؛ گاهی `aria-activedescendant`.
- **Senior Insight:** اگر `<select>` کافی است همان را بگذار؛ combobox سفارشی هزینهٔ a11y بالاست.

### Accessible Tables
- **Quick Summary:** `<th scope>`، caption، ارتباط header-cell؛ برای داده نه برای layout.
- **Senior Insight:** div-grid با roleهای جدول معمولاً شکننده‌تر از `<table>` واقعی است.

## Visual & Motion

### Color Contrast
- **Quick Summary:** WCAG: متن عادی ~4.5:1 (AA)؛ UI component حدود 3:1؛ متن بزرگ آستانه پایین‌تر.
- **Senior Insight:** Dark mode را جداگانه چک کن؛ رنگ تنها کانال معنا نباشد (error فقط قرمز).

### Reduced Motion
- **Quick Summary:** با `prefers-reduced-motion` انیمیشن غیرضروری را کم/حذف کن؛ قابلیت حفظ شود.
- **Senior Insight:** Parallax/autoplay سنگین را قطع کن؛ انتقال حالت ضروری را نرم نگه دار.
- **Code:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Standards

### WCAG Basics (POUR)
- **Quick Summary:** Perceivable، Operable، Understandable، Robust — سطوح A / AA / AAA.
- **Senior Insight:** هدف محصول معمولاً AA است؛ AAA برای همه معیارها عملی نیست — اولویت‌بندی کن.
