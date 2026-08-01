# CSS — Cheat Sheet

## Cascade & Specificity

### Cascade
- **Quick Summary:** ترتیب پیروزی: origin → importance → specificity → source order.
- **Senior Insight:** جنگ `!important` را با specificity شفاف و لایه/توکن حل کن، نه با مهم‌تر کردن.

### Origin (`user-agent` / `user` / `author`)
- **Quick Summary:** UA defaults، سپس user styles، سپس author (کد شما).
- **Senior Insight:** Reset/normalize اختلاف UA را کم می‌کند؛ صفر کردن کامل هزینه دارد.

### Importance (`!important`)
- **Quick Summary:** اولویت را داخل همان origin بالا می‌برد؛ مقایسه بین importantها جداست.
- **Senior Insight:** فقط برای utility/override نادر؛ در design system بوی بدهی می‌دهد.

### Specificity
- **Quick Summary:** امتیاز تقریبی: inline > `#id` > `.class`/`[attr]`/`:pseudo` > `tag`/`::pseudo`.
- **Senior Insight:** ID در component CSS practically ممنوع؛ specificity wars شروع می‌شود.

### Specificity Conflicts & `!important`
- **Quick Summary:** اگر specificity برابر → source order؛ `!important` قواعد عادی را می‌برد.
- **Senior Insight:** Debug با Computed + rule strikethrough در DevTools، حدس نزن.

---

## Inheritance

### Inheritable vs Non-inheritable
- **Quick Summary:** متن‌محورها (`color`, `font-*`, `line-height`) inherit؛ boxها معمولاً نه.
- **Senior Insight:** روی parent تایپوگرافی بگذار؛ روی هر child تکرار نکن.

### `inherit` / `initial` / `unset` / `revert`
- **Quick Summary:** `inherit` از parent؛ `initial` مقدار اولیه؛ `unset` = inherit یا initial؛ `revert` به cascade origin قبلی.
- **Senior Insight:** در resetهای مدرن `revert-layer`/`revert` دقیق‌تر از `initial` است.

---

## Box Model

### Content / Padding / Border / Margin
- **Quick Summary:** لایه محتوا → padding → border → margin (خارج از اندازه visible box).
- **Senior Insight:** Margin در layout شرکت می‌کند ولی background نمی‌گیرد.

### `box-sizing: border-box`
- **Quick Summary:** width شامل padding+border؛ پیش‌فرض عملی تقریباً همه پروژه‌ها.
- **Senior Insight:** Global `*, *::before, *::after { box-sizing: border-box }` استاندارد است.

### Margin Collapsing
- **Quick Summary:** marginهای عمودی مجاور/والد-فرزند می‌توانند به max یکی ادغام شوند.
- **Senior Insight:** Flex/Grid children معمولاً collapse نمی‌کنند؛ با gap جایگزین کن.

---

## `display` Types

### `block` / `inline` / `inline-block` / `none`
- **Quick Summary:** block عرض پر؛ inline در جریان متن؛ inline-block جعبه inline؛ none حذف از layout.
- **Senior Insight:** `display:none` از a11y tree هم معمولاً خارج؛ برای hide موقت `visibility`/`hidden` بسنج.

### `contents`
- **Quick Summary:** جعبه عنصر حذف می‌شود؛ فرزندان به سطح parent بالا می‌آیند.
- **Senior Insight:** Semantica/a11y گاهی می‌شکند؛ با احتیاط و تست AT.

### `flex` / `grid`
- **Quick Summary:** Flex = توزيع ۱بعدی؛ Grid = ۲بعدی با trackها.
- **Senior Insight:** Component داخلی اغلب flex؛ page/layout اغلب grid.

---

## Positioning

### `static` / `relative` / `absolute` / `fixed` / `sticky`
- **Quick Summary:** static عادی؛ relative مرجع offset؛ absolute نسبت containing block؛ fixed viewport؛ sticky ترکیبی.
- **Senior Insight:** `sticky` نیاز به فضای scroll والد و `top`/`inset` دارد؛ overflow مخفی والد می‌شکند.

### Containing Block Basics
- **Quick Summary:** absolute نسبت نزدیک‌ترین ancestor positioned/transform/filter/... نه لزوماً parent.
- **Senior Insight:** `transform` روی ancestor = fixed شبیه absolute رفتار می‌کند — باگ کلاسیک modal.

---

## Stacking Context & `z-index`

### What Creates a Stacking Context
- **Quick Summary:** `position`+`z-index`, `opacity<1`, `transform`, `filter`, `isolation`, بعضی flex/grid items با z-index.
- **Senior Insight:** z-index فقط داخل همان stacking context معنی دارد.

### Why `z-index` "Does Not Work"
- **Quick Summary:** عنصر در context پایین‌تر گیر کرده؛ عدد بزرگ‌تر از sibling خارجی بی‌اثر است.
- **Senior Insight:** Portal برای modal/dropdown از root stacking خارج از والد clipped.

### Stacking Order / Nested Contexts
- **Quick Summary:** ترتیب: background/border → negative z → in-flow → floats → positioned/z-index.
- **Senior Insight:** Nested context مثل «زندان z-index» است؛ معماری overlay را از اول جدا کن.

### Modals / Dropdowns / Overlays
- **Quick Summary:** overlay معمولاً portal + high layer token + focus trap جدا از z جنگ محلی.
- **Senior Insight:** یک scale z-index توکنی (`dropdown` < `modal` < `toast`) تعریف کن.

---

## Flexbox

### Main Axis / Cross Axis / `flex-direction`
- **Quick Summary:** direction محور اصلی را می‌سازد؛ justify روی main، align روی cross.
- **Senior Insight:** در RTL با logical/`row` رفتار را تست کن؛ فرض LTR نکن.

### `justify-content` / `align-items` / `align-content` / `align-self`
- **Quick Summary:** توزیع اصلی؛ تراز تک‌خطی cross؛ توزیع چندخطی؛ override تک‌آیتم.
- **Senior Insight:** `align-content` فقط وقتی `flex-wrap` و ارتفاع آزاد داری اثر دارد.

### `flex-grow` / `flex-shrink` / `flex-basis` / `gap`
- **Quick Summary:** رشد فضای آزاد؛ جمع‌شدن کمبود؛ اندازه پایه؛ فاصله بدون margin hack.
- **Senior Insight:** `flex: 1` = `1 1 0%`؛ با `1 1 auto` فرق دارد — interview favorit.

---

## Grid

### `grid-template-columns` / `rows` / `fr` / `repeat()` / `minmax()`
- **Quick Summary:** تعریف track صریح؛ `fr` سهم فضای آزاد؛ `repeat`/`minmax` الگوی responsive.
- **Senior Insight:** `minmax(0, 1fr)` برای جلوگیری از min-content overflow رایج است.

### Implicit vs Explicit Grid / `grid-area`
- **Quick Summary:** explicit از template؛ باقی auto-placed در implicit tracks.
- **Senior Insight:** `grid-area` برای named areas خوانایی layout را بالا می‌برد.

### `auto-fit` / `auto-fill` / Gap
- **Quick Summary:** هر دو ستون‌های تکرارشونده؛ fit خالی‌ها را جمع می‌کند، fill جای خالی نگه می‌دارد.
- **Senior Insight:** کارت‌های responsive کلاسیک: `repeat(auto-fit, minmax(min(100%, 16rem), 1fr))`.

---

## Responsive Design

### Mobile-first / Fluid Layout / Flexible Units
- **Quick Summary:** پایه موبایل + `min-width`؛ عرض سیال با `%`/`fr`/`minmax`؛ کمتر px ثابت.
- **Senior Insight:** Breakpoint کمتر + fluid بیشتر = maintenance بهتر.

### Responsive Typography / Images / Breakpoints
- **Quick Summary:** `clamp` برای type؛ `srcset`/`sizes`/`picture` برای تصویر؛ breakpoint بر اساس محتوا نه دستگاه.
- **Senior Insight:** Breakpointهای framework را کورکپی نکن؛ از طراحی واقعی استخراج کن.

---

## Media Queries

### `min-width` / `max-width` / Range Syntax
- **Quick Summary:** Mobile-first با min؛ max برای استثنا؛ `(width >= 768px)` syntax مدرن.
- **Senior Insight:** مخلوط min/max بدون سیستم = cascade گیج‌کننده.

### `prefers-color-scheme` / `prefers-reduced-motion`
- **Quick Summary:** تم OS؛ کاهش حرکت برای vestibular/a11y.
- **Senior Insight:** انیمیشن تزئینی را با reduced-motion قطع یا کوتاه کن — الزام senior.

### `hover` / `pointer`
- **Quick Summary:** قابلیت hover واقعی و دقت pointer (fine/coarse) را جدا تشخیص بده.
- **Senior Insight:** Tooltip فقط-hover روی touch می‌میرد؛ برای coarse جایگزین لمسی بده.

---

## Container Queries

### `container-type` / Component-driven Responsiveness
- **Quick Summary:** استایل بر اساس عرض container نه viewport؛ `inline-size` رایج‌ترین.
- **Senior Insight:** Card در سایدبار باریک vs main پهن بدون breakpoint صفحه.

### When vs Media Queries / CQ Units
- **Quick Summary:** Media = صفحه/دستگاه؛ CQ = خودِ کامپوننت؛ واحدهایی مثل `cqi`.
- **Senior Insight:** Design system مدرن: layout با media، component با container.

---

## Logical Properties

### `margin-inline` / `padding-block` / `inset-inline` / `inline-size` / `block-size`
- **Quick Summary:** start/end و inline/block به‌جای left/right/top فیزیکی.
- **Senior Insight:** RTL/LTR بدون duplicate CSS؛ physical فقط وقتی واقعاً فیزیکی لازم است.

---

## CSS Variables & Math

### Custom Properties — Syntax / Scope / Fallback
- **Quick Summary:** `--token: value`؛ cascade/inherit؛ `var(--x, fallback)`.
- **Senior Insight:** Runtime theming بدون rebuild؛ روی `:root` یا theme scope بگذار.

### Theme Tokens / Runtime Theming
- **Quick Summary:** رنگ/فاصله/radius به‌صورت token؛ تعویض تم = عوض کردن مقادیر متغیر.
- **Senior Insight:** Semantic tokens (`--color-danger`) از raw (`--red-500`) جدا کن.

### `calc()` / `clamp()` / `min()` / `max()`
- **Quick Summary:** حساب layout؛ `clamp(min, preferred, max)` برای fluid type/size.
- **Senior Insight:** مثال: `font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)`.

---

## Pseudo-classes / Pseudo-elements

### `:hover` / `:focus` / `:focus-visible` / `:disabled`
- **Quick Summary:** تعامل؛ فوکوس؛ فوکوس کیبوردمحور؛ حالت غیرفعال.
- **Senior Insight:** Outline را حذف نکن مگر `:focus-visible` جایگزین واضح داشته باشی.

### `:nth-child()` / `::before` / `::after` / `::placeholder`
- **Quick Summary:** انتخاب ترتیبی؛ محتوای تزئینی؛ استایل placeholder.
- **Senior Insight:** محتوای مهم را در pseudo نگذار — SEO/a11y ضعیف؛ فقط decoration.

---

## Motion

### Transitions
- **Quick Summary:** تغییر نرم property؛ duration/easing/delay/property را صریح کن.
- **Senior Insight:** فقط `transform`/`opacity` را animate کن برای ۶۰fps پایدار.

### Animations (`@keyframes`)
- **Quick Summary:** توالی keyframe؛ infinite برای loader؛ finite برای feedback.
- **Senior Insight:** Infinite CPU/GPU می‌خورد؛ وقتی offscreen pause کن؛ reduced-motion احترام بگذار.

### Transforms (`translate` / `scale` / `rotate` / `skew`)
- **Quick Summary:** تغییر هندسی بدون reflow سنگین؛ `transform-origin` نقطه مرجع.
- **Senior Insight:** `transform` به‌جای `top`/`left` برای انیمیشن — Composite نه Layout.

---

## Overflow / Containment / Hints

### `overflow` (`visible` / `hidden` / `clip` / `scroll` / `auto`)
- **Quick Summary:** رفتار بیرون‌زدن؛ scroll container با overflow غیر visible ساخته می‌شود.
- **Senior Insight:** `hidden` می‌تواند sticky و focus ring را ببُرد؛ عمدی باشد.

### `contain` (`layout` / `paint` / `size` / `content`)
- **Quick Summary:** به browser می‌گوید تغییر داخلی کمتر به بیرون نشت کند → بهینه‌سازی.
- **Senior Insight:** برای لیست‌های بزرگ/widget سنگین؛ اشتباه در size = collapse عجیب.

### `will-change`
- **Quick Summary:** Hint برای promotion لایه قبل از انیمیشن.
- **Senior Insight:** Overuse = حافظه بیشتر؛ فقط هنگام نیاز set/remove کن.

### `aspect-ratio`
- **Quick Summary:** نسبت ثابت برای media/card/embed → کاهش CLS.
- **Senior Insight:** Placeholder تصویر با ratio + width/height attributes ترکیب کن.

---

## Theming Strategies

### Custom Properties Theming / Design Tokens
- **Quick Summary:** توکن‌های semantic رنگ/فاصله/radius؛ لایه‌های brand → semantic → component.
- **Senior Insight:** Raw palette را مستقیم در UI مصرف نکن.

### Dark Mode Strategies
- **Quick Summary:** class روی `html` یا `prefers-color-scheme` یا ترکیب با persistence.
- **Senior Insight:** FOUC/wrong theme: inline script قبل از paint تم را set کند؛ کنتراست WCAG چک شود.

---

## Styling Architectures

### BEM / CSS Modules / CSS-in-JS
- **Quick Summary:** BEM = نام‌گذاری دستی؛ Modules = scope در build؛ CSS-in-JS = runtime یا zero-runtime.
- **Senior Insight:** Runtime CSS-in-JS هزینه perf/SSR؛ تیم‌های مدرن اغلب Modules/Tailwind/zero-runtime.

### Tailwind — Fundamentals
- **Quick Summary:** Utility-first؛ responsive/state variants؛ arbitrary values برای استثنا.
- **Senior Insight:** Design token در theme؛ utility پراکنده بدون قرارداد = آشوب بصری.

### Tailwind Config
- **Quick Summary:** `theme.extend` رنگ/spacing/breakpoint؛ plugins؛ `content` paths برای scan.
- **Senior Insight:** Path اشتباه = کلاس‌ها purge می‌شوند و در prod می‌پرند.

### Tailwind Composition (`clsx` / `tailwind-merge` / `cva`)
- **Quick Summary:** ترکیب شرطی؛ merge تعارض utility؛ cva برای variant API کامپوننت.
- **Senior Insight:** بدون `tailwind-merge`، `p-2`+`p-4` هر دو می‌مانند — آخرین در CSS file می‌برد نه در string.

### Tailwind Performance / Content Scanning
- **Quick Summary:** فقط کلاس‌های دیده‌شده در content به CSS نهایی می‌روند.
- **Senior Insight:** کلاس دینامیک `bg-`+color ساخته‌شده از string را scanner نمی‌بیند — safelist یا map کامل.

---

## Component Libraries

### shadcn/ui Architecture
- **Quick Summary:** Copy-into-project نه black-box npm؛ مالکیت کد با توست.
- **Senior Insight:** Customize آزاد؛ upgrade دستی؛ با Tailwind + Radix جفت می‌شود.

### Radix UI Primitives
- **Quick Summary:** Headless a11y primitives: Dialog، Popover، DropdownMenu، Tabs؛ controlled/uncontrolled.
- **Senior Insight:** رفتار keyboard/focus رایگان؛ ظاهر را خودت با Tailwind می‌دهی.

---

## A11y Styling & Cross-browser

### Styling Accessibility States
- **Quick Summary:** `:focus-visible`، `:disabled`، `[aria-*]`، `[data-state]` برای stateهای واقعی UI.
- **Senior Insight:** Focus indicator باید همیشه قابل‌دیدن باشد؛ رنگ alone کافی نیست.

### Cross-browser CSS Issues
- **Quick Summary:** UA defaults فرق دارند؛ feature را با fallback/progressive enhancement بده.
- **Senior Insight:** تست حداقل Chromium + Safari + Firefox؛ `@supports` برای قابلیت‌های نو.
