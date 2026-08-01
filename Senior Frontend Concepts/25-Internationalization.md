# Internationalization — Cheat Sheet

## i18n Fundamentals

### Translation Keys
- **Quick Summary:** متن UI با key پایدار از dictionary خوانده می‌شود، نه رشته هاردکد.
- **Senior Insight:** key معنایی (`nav.home`) بهتر از متن انگلیسی خام به‌عنوان key است.

### Locale Switching
- **Quick Summary:** تغییر locale باید dictionary، format، و جهت layout را هم‌زمان عوض کند.
- **Senior Insight:** فقط عوض کردن ترجمه بدون `dir`/routing = i18n ناقص.

### Content Externalization
- **Quick Summary:** copy قابل ترجمه از کد جدا و قابل تحویل به translator می‌شود.
- **Senior Insight:** جمله را تکه‌تکه نکن؛ context کامل برای ترجمه حیاتی است.

### Fallback Locales
- **Quick Summary:** اگر کلید در locale فعلی نبود، به locale پیش‌فرض برگرد.
- **Senior Insight:** fallback خاموش را log کن تا gap ترجمه پنهان نماند.

---

## Direction & Routing

### RTL / LTR — `dir`
- **Quick Summary:** `dir="rtl"|"ltr"` روی document/root منبع حقیقت جهت است.
- **Senior Insight:** `direction` را روی `body` سخت‌کد نکن؛ از `html[dir]` پیروی کن.

### RTL / LTR — Logical CSS Properties
- **Quick Summary:** `margin-inline-start`، `ps-*`، `text-start` به‌جای left/right فیزیکی.
- **Senior Insight:** physical left/right = باگ تضمینی وقتی زبان عوض می‌شود.

### RTL / LTR — Icon / Layout Mirroring
- **Quick Summary:** آیکن‌های جهتی (back/chevron) با locale عوض می‌شوند؛ متقارن‌ها نه.
- **Senior Insight:** mirror کور همه آیکن‌ها اشتباه است؛ فقط directionalها.

### RTL / LTR — Mixed-Direction Text Issues
- **Quick Summary:** اعداد، انگلیسی، و فارسی در یک خط نیاز به `dir`/`bdi` محلی دارند.
- **Senior Insight:** phone/email/URL را معمولاً `dir="ltr"` محلی کن.

### Locale-Based Routing — Path Prefixes
- **Quick Summary:** `/fa/...` و `/en/...` رایج‌ترین مدل locale در URL.
- **Senior Insight:** locale پیش‌فرض را صریح سیاست بده (prefix همیشه vs اختیاری).

### Locale-Based Routing — Domain-Based Locales
- **Quick Summary:** `fa.example.com` / `example.ir` برای جداسازی بازار/برند.
- **Senior Insight:** هزینه ops و cookie/SEO پیچیده‌تر از path است.

### Locale-Based Routing — SEO Considerations
- **Quick Summary:** هر locale باید URL پایدار، متادیتای محلی، و سیگنال زبان درست داشته باشد.
- **Senior Insight:** یک URL برای همه زبان‌ها SEO را تضعیف می‌کند.

---

## Formatting & Loading

### Date / Number Formatting — `Intl.DateTimeFormat`
- **Quick Summary:** تاریخ/زمان را با locale و options استاندارد فرمت کن.

```ts
new Intl.DateTimeFormat("fa-IR", { dateStyle: "medium" }).format(date);
```

- **Senior Insight:** string دستی تاریخ = باگ timezone/locale قطعی.

### Date / Number Formatting — `Intl.NumberFormat`
- **Quick Summary:** عدد، درصد، واحد را locale-aware نمایش بده.

```ts
new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
```

- **Senior Insight:** جداکننده هزارگان/اعشار را hardcode نکن.

### Date / Number Formatting — Currencies
- **Quick Summary:** ارز با `currency` code و فرمت `Intl`؛ نماد را دستی نچسبان.
- **Senior Insight:** locale نمایش ≠ currency الزاماً؛ هر دو را صریح پاس بده.

### Date / Number Formatting — Time Zones
- **Quick Summary:** ذخیره معمولاً UTC؛ نمایش با timeZone کاربر/تنظیمات.
- **Senior Insight:** `Date` Alone بدون TZ مشخص در SSR/CSR mismatch می‌سازد.

### Translation Loading — Eager vs Lazy
- **Quick Summary:** eager همه را زود می‌آورد؛ lazy per-route/namespace هزینه اولیه را کم می‌کند.
- **Senior Insight:** app بزرگ → lazy؛ marketing کوچک → eager ساده‌تر است.

### Translation Loading — Namespace Splitting
- **Quick Summary:** دیکشنری را بر اساس feature/صفحه بشکن تا bundle ترجمه کوچک بماند.
- **Senior Insight:** namespace مشترک خیلی بزرگ دوباره به bottleneck تبدیل می‌شود.

### Translation Loading — Caching Translation Resources
- **Quick Summary:** فایل‌های locale را با cache بلند + version/hash سرو کن.
- **Senior Insight:** بدون versioning، کاربر ترجمه کهنه می‌بیند بعد از deploy.

---

## Messages & SEO

### Pluralization — Locale-Specific Plural Rules
- **Quick Summary:** زبان‌ها تعداد شکل جمع متفاوت دارند؛ `one/other` انگلیسی جهانی نیست.
- **Senior Insight:** شرط `count === 1` برای فارسی/عربی/روسی ناکافی است.

### Pluralization — ICU-Style Message Awareness
- **Quick Summary:** ICU MessageFormat برای plural/select/interpolation ساختاریافته استفاده می‌شود.
- **Senior Insight:** منطق جمع را داخل کد component پخش نکن؛ به message ببر.

### Pluralization — Variable Interpolation
- **Quick Summary:** متغیرها داخل پیام تزریق می‌شوند؛ ترتیب کلمات per-locale فرق دارد.
- **Senior Insight:** ترجمه را با concatenate رشته‌ها نساز؛ جای متغیر در پیام بماند.

### SEO for Multilingual — Localized Metadata
- **Quick Summary:** `title`/`description` و Open Graph هر locale جدا و ترجمه‌شده باشد.
- **Senior Insight:** متادیتای یک‌زبانه روی صفحه چندزبانه سیگنال ضعیف است.

### SEO for Multilingual — `hreflang`
- **Quick Summary:** نسخه زبان‌های جایگزین را به موتور جستجو معرفی می‌کند.
- **Senior Insight:** `x-default` و جفت‌های دوطرفه صحیح را فراموش نکن.

### SEO for Multilingual — Canonical Strategy
- **Quick Summary:** canonical باید نسخه ترجیحی همان زبان/محتوا را نشان دهد.
- **Senior Insight:** canonical غلط می‌تواند همه زبان‌ها را به یک URL جمع کند.

### SEO for Multilingual — Translated Slugs
- **Quick Summary:** slug محلی برای UX/SEO مفید است ولی به نقشه redirect پایدار نیاز دارد.
- **Senior Insight:** تغییر slug بدون redirect = از دست رفتن رتبه.
