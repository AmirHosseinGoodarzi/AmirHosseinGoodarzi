# HTML — Cheat Sheet

## Semantic HTML

### `div` vs Semantic Tags
- **Quick Summary:** `div` فقط container خنثی؛ semantic tags معنا و landmark به browser/AT می‌دهند.
- **Senior Insight:** Semantic کمتر نیاز به ARIA دارد → Accessibility و SEO بهتر بدون JS.

### `header`
- **Quick Summary:** معرفی بخش/صفحه؛ می‌تواند داخل `article`/`section` هم باشد.
- **Senior Insight:** چند `header` در صفحه OK؛ فقط یکی معمولاً site-level است.

### `nav`
- **Quick Summary:** بلوک ناوبری اصلی (منو، breadcrumbs، pagination مهم).
- **Senior Insight:** هر لینک‌گروهی `nav` نیست؛ فقط navigation معنادار.

### `main`
- **Quick Summary:** محتوای اصلی یکتا صفحه؛ دقیقاً یک `main` در document.
- **Senior Insight:** Skip-to-content و screen reader landmarks روی `main` تکیه دارند.

### `section`
- **Quick Summary:** بخش موضوعی با heading؛ گروه‌بندی thematic داخل صفحه.
- **Senior Insight:** بدون heading معمولاً اشتباه است؛ در این حالت `div` کافی است.

### `article`
- **Quick Summary:** محتوای مستقل قابل توزیع (پست، کارت خبر، کامنت standalone).
- **Senior Insight:** اگر محتوا خارج از context هم معنی دارد → `article`.

### `aside`
- **Quick Summary:** محتوای مکمل (سایدبار، related، تبلیغ مرتبط).
- **Senior Insight:** unrelated sidebar را با landmark اشتباه نگیر؛ معنا مهم است.

### `footer`
- **Quick Summary:** اطلاعات پایانی بخش/صفحه (کپی‌رایت، لینک‌ها، meta).
- **Senior Insight:** مثل `header` می‌تواند per-section باشد، نه فقط صفحه.

### `section` vs `article`
- **Quick Summary:** `article` = مستقل/syndicatable؛ `section` = بخش موضوعی داخل یک کل.
- **Senior Insight:** Nested OK: `article` داخل `section` و برعکس، بر اساس معنا.

### Overusing `div`
- **Quick Summary:** `div` وقتی هیچ معنای ساختاری وجود ندارد؛ پیش‌فرض نباش.
- **Senior Insight:** `div` زیاد = DOM noisy، a11y ضعیف‌تر، CSS/selector پیچیده‌تر.

---

## Document Structure

### `<!DOCTYPE html>`
- **Quick Summary:** HTML5 doctype؛ browser را به standards mode می‌برد.
- **Senior Insight:** بدون آن → quirks mode و layout غیرقابل‌پیش‌بینی.

### `html` / `head` / `body`
- **Quick Summary:** ریشه document؛ metadata در `head`؛ محتوای قابل‌رؤیت در `body`.
- **Senior Insight:** اسکریپت‌های critical در `head` با احتیاط؛ بقیه `defer`/`module`.

### Standards Mode vs Quirks Mode
- **Quick Summary:** با doctype صحیح = standards؛ بدون/قدیمی = quirks (CSS box قدیمی).
- **Senior Insight:** همیشه HTML5 doctype؛ هرگز quirks را عمداً هدف نگیر.

### `lang` Declaration
- **Quick Summary:** `<html lang="fa">` زبان پیش‌فرض document را اعلام می‌کند.
- **Senior Insight:** برای a11y، SEO، hyphenation، و screen reader pronunciation حیاتی است.

---

## SEO Basics

### Titles & Heading Structure
- **Quick Summary:** یک `<title>` یکتا؛ یک `h1` معنادار؛ سلسله‌مراتب `h2`–`h6` منطقی.
- **Senior Insight:** پرش سطح heading برای استایل ممنوع؛ از CSS برای ظاهر استفاده کن.

### Meta Tags (SEO)
- **Quick Summary:** `description` خلاصه SERP؛ charset/viewport پایه؛ robots کنترل index.
- **Senior Insight:** Meta alone رتبه نمی‌سازد؛ محتوا + CWV + structure مهم‌ترند.

### Image `alt`
- **Quick Summary:** متن جایگزین معنایی برای تصاویر اطلاعاتی؛ تزئینی → `alt=""`.
- **Senior Insight:** Alt keyword-stuffing نکن؛ برای a11y بنویس، SEO نتیجه فرعی است.

### Canonical URL
- **Quick Summary:** `<link rel="canonical">` نسخه ترجیحی URL را مشخص می‌کند.
- **Senior Insight:** جلوگیری از duplicate content در query params / trailing slash / mirrors.

### Robots Meta / `robots.txt`
- **Quick Summary:** Meta = per-page index/follow؛ `robots.txt` = crawl budget در سطح سایت.
- **Senior Insight:** `robots.txt` صفحه را از index قطعی حذف نمی‌کند؛ از `noindex` استفاده کن.

### Sitemap
- **Quick Summary:** نقشه URLها برای crawler (`sitemap.xml`)؛ کشف صفحات مهم.
- **Senior Insight:** فقط URLهای canonical و indexable را بگذار؛ به‌روز نگه دار.

### Core Web Vitals — `LCP`
- **Quick Summary:** Largest Contentful Paint — زمان رندر بزرگ‌ترین عنصر محتوایی.
- **Senior Insight:** Optimize hero image, fonts, server TTFB؛ preload LCP resource.

### Core Web Vitals — `INP`
- **Quick Summary:** Interaction to Next Paint — پاسخ‌دهی تعامل در کل lifecycle صفحه.
- **Senior Insight:** Long tasks را بشکن؛ handler سنگین را defer کن؛ جایگزین FID شده.

### Core Web Vitals — `CLS`
- **Quick Summary:** Cumulative Layout Shift — پایداری بصری؛ جابه‌جایی ناگهانی layout.
- **Senior Insight:** ابعاد image/ads/font را رزرو کن؛ از insert بالای fold بدون فضا پرهیز.

### Structured Data / JSON-LD
- **Quick Summary:** Schema.org به‌صورت JSON-LD در `<script type="application/ld+json">`.
- **Senior Insight:** Rich results را فعال می‌کند؛ با محتوای واقعی صفحه هم‌خوان باشد.

### Open Graph / Twitter Card (SEO overview)
- **Quick Summary:** کنترل preview در شبکه‌های اجتماعی هنگام share لینک.
- **Senior Insight:** بدون OG، crawler حدس می‌زند → preview ضعیف/اشتباه.

---

## Meta Tags

### `charset`
- **Quick Summary:** `<meta charset="utf-8">` باید در ۱۰۰ بایت اول `head` باشد.
- **Senior Insight:** دیر اعلام شدن → mojibake و reparse پرهزینه.

### `viewport`
- **Quick Summary:** `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- **Senior Insight:** بدون آن mobile layout خراب؛ `user-scalable=no` برای a11y بد است.

### `description`
- **Quick Summary:** خلاصه ۱۵۰–۱۶۰ کاراکتری برای snippet موتور جستجو.
- **Senior Insight:** یکتا per page؛ Google ممکن است خودش rewrite کند.

### `robots`
- **Quick Summary:** مثلاً `noindex, nofollow` برای کنترل indexing/link following.
- **Senior Insight:** صفحات staging/admin را حتماً `noindex` کن.

### `theme-color`
- **Quick Summary:** رنگ UI مرورگر موبایل (address bar / PWA chrome).
- **Senior Insight:** با brand هماهنگ کن؛ dark/light media query پشتیبانی محدود.

### Social Sharing Tags
- **Quick Summary:** مجموعه OG + Twitter meta برای کنترل کارت اشتراک‌گذاری.
- **Senior Insight:** تصویر حداقل ۱۲۰۰×۶۳۰؛ absolute URL؛ cache social را بعد از تغییر purge کن.

---

## Open Graph / Twitter Card

### `og:title` / `og:description` / `og:image` / `og:url`
- **Quick Summary:** عنوان، توضیح، تصویر، و URL canonical برای preview شبکه‌ها.
- **Senior Insight:** `og:url` باید canonical واقعی باشد؛ image HTTPS و قابل‌دسترس عمومی.

### `twitter:card`
- **Quick Summary:** نوع کارت (`summary` / `summary_large_image`)؛ می‌تواند از OG fallback بگیرد.
- **Senior Insight:** Large image معمولاً CTR بهتر در Twitter/X دارد.

### Preview Debugging
- **Quick Summary:** Facebook Sharing Debugger / Twitter Card Validator / LinkedIn inspector.
- **Senior Insight:** Social CDN cache سرسخت است؛ بعد از fix حتماً scrape مجدد.

---

## Accessibility Attributes

### `aria-label`
- **Quick Summary:** نام accessible وقتی متن visible کافی نیست (آیکون‌باتن).
- **Senior Insight:** اگر متن visible هست، تکرار با aria-label نکن.

### `aria-labelledby`
- **Quick Summary:** نام را از `id` یک/چند عنصر موجود می‌گیرد (ترجیح بر label تکراری).
- **Senior Insight:** برای dialog/region که heading دارند ایده‌آل است.

### `aria-describedby`
- **Quick Summary:** توضیح کمکی/خطا را به کنترل وصل می‌کند.
- **Senior Insight:** پیام خطای فرم را با این به input bind کن.

### `aria-hidden`
- **Quick Summary:** عنصر را از accessibility tree حذف می‌کند (`true`).
- **Senior Insight:** هرگز روی focusable بدون حذف از tab order نگذار → trap خطرناک.

### `role`
- **Quick Summary:** نقش ARIA را override/تعریف می‌کند وقتی HTML معادل ندارد.
- **Senior Insight:** First rule: اگر native element هست، role ننویس.

### Native HTML > ARIA
- **Quick Summary:** `<button>`، `<a>`، `<input>` رفتار keyboard/AT رایگان دارند.
- **Senior Insight:** `div`+`role="button"` = باید Enter/Space، focus، و state را خودت بسازی.

---

## Forms

### `form`
- **Quick Summary:** ظرف فیلدها با `action`/`method`؛ submission native یا JS `submit` event.
- **Senior Insight:** همیشه progressive enhancement؛ Enter در input باید submit منطقی کند.

### `input` / `textarea` / `select` / `option`
- **Quick Summary:** کنترل‌های استاندارد ورود داده؛ `name` برای payload ضروری است.
- **Senior Insight:** Controlled در React؛ `name` را برای FormData/`native submit` حفظ کن.

### `button`
- **Quick Summary:** اکشن فرم یا UI؛ همیشه `type` صریح بگذار.
- **Senior Insight:** داخل `form` بدون type → پیش‌فرض `submit` → باگ رایج.

### `fieldset` / `legend`
- **Quick Summary:** گروه‌بندی فیلدهای مرتبط؛ `legend` عنوان گروه برای AT.
- **Senior Insight:** برای radio/checkbox groups تقریباً اجباری از نظر a11y.

### `label`
- **Quick Summary:** برچسب visible و accessible برای کنترل؛ با `for`/`id` یا wrap.
- **Senior Insight:** Placeholder جایگزین label نیست.

### Form Submission Basics
- **Quick Summary:** GET → query string؛ POST → body؛ `enctype` برای file = multipart.
- **Senior Insight:** CSRF token در appهای stateful؛ method spoofing فقط در backend conventions.

---

## Native Form Validation

### `required` / `minlength` / `maxlength` / `min` / `max` / `pattern`
- **Quick Summary:** Constraint Validation API سمت مرورگر قبل از submit.
- **Senior Insight:** Client UX است نه Security؛ همیشه server-side validate کن.

### `type="email"` / `type="url"`
- **Quick Summary:** اعتبارسنجی فرمت + کیبورد مناسب موبایل.
- **Senior Insight:** Regex مرورگر سست است؛ برای business rules سفارشی لازم است.

### `checkValidity()` / `reportValidity()`
- **Quick Summary:** چک بی‌صدا vs نمایش UI خطای native مرورگر.
- **Senior Insight:** برای custom UX از `setCustomValidity` + `:invalid` استفاده کن.

### Validation UX Tradeoffs
- **Quick Summary:** Native ساده ولی استایل‌پذیری محدود و پیام‌ها inconsistently localized.
- **Senior Insight:** Senior: native برای MVP؛ custom برای design system یکپارچه.

---

## Input Types

### Text-like: `text` / `email` / `password` / `search` / `url` / `tel`
- **Quick Summary:** معنای داده + کیبورد موبایل + گاهی validation پایه.
- **Senior Insight:** `tel` فرمت validate نمی‌کند؛ `inputmode` را جدا در نظر بگیر.

### `number` / `date`
- **Quick Summary:** مقدار عددی/تاریخی با UI picker در برخی مرورگرها.
- **Senior Insight:** `number` spinner و localization دردسر دارد؛ گاهی `text`+`inputmode` بهتر.

### `checkbox` / `radio`
- **Quick Summary:** چندانتخابی vs تک‌انتخابی در یک `name` group.
- **Senior Insight:** Radio بدون انتخاب اولیه گاهی UX بد؛ یکی را default کن اگر منطقی است.

### `file`
- **Quick Summary:** انتخاب فایل؛ نیاز به `enctype="multipart/form-data"`.
- **Senior Insight:** `accept` و size را client چک کن؛ malware/type را server harden کن.

### Mobile Keyboard Implications
- **Quick Summary:** `type`/`inputmode` کیبورد نرم را تغییر می‌دهد (email، numeric، tel).
- **Senior Insight:** mismatch type و keyboard = اصطکاک تبدیل بالا در mobile funnels.

---

## Label / Fieldset / Legend

### Explicit vs Implicit Labels
- **Quick Summary:** Explicit = `for`+`id`؛ Implicit = کنترل داخل `<label>`.
- **Senior Insight:** Explicit معمولاً منعطف‌تر برای layout پیچیده و testing.

### Grouping Related Fields
- **Quick Summary:** `fieldset`+`legend` برای آدرس، پرداخت، گزینه‌های مرتبط.
- **Senior Insight:** Nested fieldset مجاز ولی visual/AT شلوغ می‌شود؛ ساده نگه دار.

### Radio / Checkbox Group Accessibility
- **Quick Summary:** یک `fieldset`/`legend` + هر گزینه `label` خودش.
- **Senior Insight:** فقط `aria-label` روی group کافی نیست اگر legend متن بهتری دارد.

---

## Button Types

### `type="button"` / `type="submit"` / `type="reset"`
- **Quick Summary:** button = اکشن JS؛ submit = ارسال فرم؛ reset = پاک‌کردن فیلدها.
- **Senior Insight:** `reset` تقریباً هرگز در UX مدرن؛ accidental data loss.

### Default Button Type Pitfall
- **Quick Summary:** `<button>` داخل form بدون type → `submit`.
- **Senior Insight:** در component library همیشه default را `type="button"` بگذار.

---

## ARIA Roles

### Landmark Roles
- **Quick Summary:** `banner`، `navigation`، `main`، `complementary`، `contentinfo` معادل semantic tags.
- **Senior Insight:** ترجیح HTML landmarks؛ role تکراری روی همان element لازم نیست.

### Widget Roles
- **Quick Summary:** `button`، `dialog`، `tab`، `tablist`، `menu` برای ویجت‌های سفارشی.
- **Senior Insight:** هر widget role = قرارداد keyboard کامل (APG).

### `role="button"` Pitfalls
- **Quick Summary:** `div`/`span` با role باید tabindex، Enter/Space، disabled را emulate کند.
- **Senior Insight:** تقریباً همیشه `<button>` بهتر است.

### `role="dialog"` / `role="tab"`
- **Quick Summary:** Dialog نیاز به focus trap و `aria-modal`؛ tabs نیاز به arrow-key pattern.
- **Senior Insight:** از کتابخانه a11y-tested استفاده کن مگر pattern را کامل بلدی.

### First Rule of ARIA
- **Quick Summary:** اگر HTML native کار را می‌کند، ARIA اضافه نکن.
- **Senior Insight:** ARIA اشتباه بدتر از نبود ARIA است.

---

## Landmark Elements

### Page Structure for Screen Readers
- **Quick Summary:** `header`/`nav`/`main`/`aside`/`footer` نقشه سریع صفحه برای AT.
- **Senior Insight:** یک `main`؛ landmarkهای تکراری را با نام (`aria-label`) تمایز بده.

---

## `data-*` Attributes

### Custom Metadata / `dataset`
- **Quick Summary:** `data-*` metadata در DOM؛ در JS با `element.dataset` خوانده می‌شود.
- **Senior Insight:** مقادیر همیشه string؛ برای state پیچیده از memory/store استفاده کن.

### Test Selectors
- **Quick Summary:** `data-testid` برای E2E پایدارتر از CSS classهای استایلی.
- **Senior Insight:** test id را به کاربران/SEO درز نده اگر حساس است؛ فقط tooling.

### When Not to Store App State in DOM
- **Quick Summary:** source of truth نباید `data-*` باشد؛ فقط برای hook به imperative API.
- **Senior Insight:** DOM-as-state → sync bug، SSR mismatch، hard-to-test.

---

## Script Loading

### Blocking Scripts
- **Quick Summary:** `<script src>` بدون attribute = parser-blocking؛ HTML parse متوقف می‌شود.
- **Senior Insight:** اسکریپت sync در وسط body = LCP/FCP را می‌کشد.

### `defer`
- **Quick Summary:** دانلود موازی؛ اجرا بعد از parse به ترتیب document.
- **Senior Insight:** برای اسکریپت‌های وابسته به DOM ایده‌آل؛ ترتیب حفظ می‌شود.

### `async`
- **Quick Summary:** دانلود موازی؛ اجرا به‌محض آماده — ترتیب تضمین نیست.
- **Senior Insight:** برای analytics/independent widgets؛ نه برای app bundle وابسته.

### `type="module"`
- **Quick Summary:** ES modules؛ پیش‌فرض defer-like؛ strict؛ CORS برای cross-origin.
- **Senior Insight:** `async` روی module رفتار را تغییر می‌دهد؛ dependency graph را بفهم.

### Execution Order Differences
- **Quick Summary:** sync (ترتیب، blocking) → defer (پس از parse، مرتب) → async (هر وقت آماده).
- **Senior Insight:** ترکیب اشتباه defer/async = race و `undefined` API در init.

---

## Resource Hints

### `preload`
- **Quick Summary:** بارگذاری فوری منبع critical همین navigation (`as` الزامی؛ LCP/font/CSS).
- **Senior Insight:** preload زیاد = رقابت bandwidth؛ فقط واقعاً critical.

### `prefetch`
- **Quick Summary:** واکشی احتمالی برای navigation بعدی با اولویت پایین.
- **Senior Insight:** روی mobile data محتاط باش؛ فقط مسیرهای با احتمال بالا.

### `preconnect` / `dns-prefetch`
- **Quick Summary:** `preconnect` = DNS+TCP+TLS زودتر؛ `dns-prefetch` فقط DNS.
- **Senior Insight:** چند origin حیاتی (CDN، API، font)؛ preconnect بیش‌ازحد ضرر دارد.

### Misuse Risks
- **Quick Summary:** hint اشتباه اولویت را خراب و منابع را هدر می‌دهد.
- **Senior Insight:** با Performance panel اندازه بگیر؛ حدس نزن.

---

## iframe / Sandbox / CSP

### `iframe`
- **Quick Summary:** سند تو در تو؛ مرز document جدا، ولی UX و امنیت پیچیده.
- **Senior Insight:** third-party iframe = سطح حمله + performance tax.

### `sandbox`
- **Quick Summary:** محدودیت‌های پیش‌فرض سخت؛ قابلیت‌ها را با tokenها opt-in کن.
- **Senior Insight:** `allow-scripts` + `allow-same-origin` با هم ≈ sandbox بی‌اثر — خطرناک.

### `allow` (Permissions Policy)
- **Quick Summary:** کنترل APIهای حساس داخل iframe (camera، geolocation، payment...).
- **Senior Insight:** اصل least privilege؛ فقط آنچه واقعاً لازم است.

### Embedding Third-party / Isolation
- **Quick Summary:** محتوا را isolate کن؛ CSP frame-ancestors / sandbox / allow ترکیب شوند.
- **Senior Insight:** هرگز secret را به origin غیرقابل‌اعتماد در iframe پاس نده.

---

## Critical Rendering Path

### HTML Parsing
- **Quick Summary:** Bytes → tokens → DOM tree؛ script sync parse را متوقف می‌کند.
- **Senior Insight:** HTML بزرگ + blocking script = TTFB خوب هم کافی نیست.

### CSSOM Creation
- **Quick Summary:** CSS دانلود/parse می‌شود تا CSSOM ساخته شود؛ render را block می‌کند.
- **Senior Insight:** CSS غیرcritical را defer/media split کن.

### Render Tree
- **Quick Summary:** ترکیب DOM + CSSOM (فقط عناصر visible) برای layout/paint.
- **Senior Insight:** `display:none` از render tree خارج؛ `visibility:hidden` می‌ماند.

### Blocking Resources
- **Quick Summary:** CSS و sync JS مسیر رندر را سد می‌کنند.
- **Senior Insight:** Critical CSS inline/کم‌حجم؛ JS را defer/module کن.

### Render-critical CSS / JS
- **Quick Summary:** حداقل CSS برای above-the-fold؛ JS فقط اگر بدون آن UI می‌شکند.
- **Senior Insight:** اندازه‌گیری با LCP/FCP؛ «critical» را حدسی تعریف نکن.
