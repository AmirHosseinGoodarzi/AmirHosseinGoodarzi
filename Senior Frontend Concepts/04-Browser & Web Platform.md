# Browser & Web Platform — Cheat Sheet

## DOM

### DOM / Node Tree
- **Quick Summary:** درخت زندهٔ HTML/XML؛ Nodeها با روابط parent/child/sibling قابل پیمایش‌اند.
- **Senior Insight:** درخت عمیق = هزینهٔ selector و mutation بیشتر؛ از DocumentFragment برای batch insert استفاده کن.

### Element Selection
- **Quick Summary:** `querySelector(All)`، `getElementById`، `getElementsBy*` برای دسترسی به Nodeها.
- **Senior Insight:** Live collections (`getElementsBy*`) در loop خطرناک‌اند؛ NodeList ایستا امن‌تر است.
- **Code:**
```ts
const el = document.querySelector<HTMLButtonElement>('#save');
el?.addEventListener('click', onSave);
```

### Manipulation Basics
- **Quick Summary:** تغییر `textContent`/`innerHTML`، attribute، classList، و ساختار درخت با `append`/`remove`.
- **Senior Insight:** `innerHTML` ریسک XSS دارد؛ برای متن از `textContent` استفاده کن.

### Event Attachment
- **Quick Summary:** `addEventListener` با capture/bubble؛ delegation روی ancestor برای لیست‌های پویا.
- **Senior Insight:** همیشه cleanup با `removeEventListener` یا AbortController تا memory leak نگیری.

## BOM

### `window`
- **Quick Summary:** Global object مرورگر؛ دسترسی به DOM، timers، storage و Web APIها.
- **Senior Insight:** وابستگی مستقیم به `window` تست و SSR را سخت می‌کند؛ پشت abstraction بگذار.

### `location`
- **Quick Summary:** URL فعلی؛ خواندن/نوشتن `href`، `pathname`، `search`، `hash`.
- **Senior Insight:** `location.assign` history می‌سازد؛ `replace` برای redirect بدون back-entry.

### `history`
- **Quick Summary:** کنترل stack ناوبری؛ پایهٔ SPA routing با History API.
- **Senior Insight:** دستکاری نادرست بدون sync کردن state UI باعث mismatch مسیر و محتوا می‌شود.

### `navigator`
- **Quick Summary:** اطلاعات محیط: userAgent، language، online، permissions، serviceWorker.
- **Senior Insight:** به userAgent sniffing تکیه نکن؛ feature detection بهتر است.

### Dialogs / Timers Basics
- **Quick Summary:** `alert`/`confirm`/`prompt` همگام و مسدودکننده؛ `setTimeout`/`setInterval` async.
- **Senior Insight:** Dialog بومی UX را می‌کشد؛ timers را clear کن تا leak و race نماند.

## Render Tree

### DOM + CSSOM → Render Tree
- **Quick Summary:** Render tree فقط Nodeهای قابل‌نمایش از ترکیب DOM و CSSOM است.
- **Senior Insight:** CSS/JS مسدودکننده ساخت Render tree را عقب می‌اندازد → First Paint دیرتر.

### Hidden Elements Impact
- **Quick Summary:** `display:none` از Render tree حذف می‌شود؛ `visibility:hidden`/`opacity:0` می‌مانند.
- **Senior Insight:** مخفی‌کردن اشتباهی هنوز layout/paint هزینه می‌دهد؛ انتخاب property مهم است.

### Renderable Nodes Only
- **Quick Summary:** `<head>`، meta، script و عناصر کاملاً مخفی معمولاً در Render tree نیستند.
- **Senior Insight:** کمتر بودن Nodeهای renderable = کار کمتر در layout/paint.

## Reflow / Repaint

### Layout-Triggering Changes (Reflow)
- **Quick Summary:** تغییر هندسه (width، height، font، DOM structure) باعث recalculate layout می‌شود.
- **Senior Insight:** خواندن layout بعد از write = thrashing؛ batch read سپس write.

### Paint-Only Changes
- **Quick Summary:** رنگ، shadow، outline معمولاً فقط paint می‌خواهند نه layout کامل.
- **Senior Insight:** ترجیح transform/opacity برای انیمیشن تا روی Composite بماند.

### Performance Costs
- **Quick Summary:** Reflow گران‌تر از Repaint؛ هر دو Main thread را مشغول می‌کنند.
- **Senior Insight:** اندازه‌گیری با Performance panel قبل از بهینه‌سازی حدسی.

## Browser Rendering Pipeline

### Parse → Style → Layout → Paint → Composite
- **Quick Summary:** HTML/CSS parse → computed style → هندسه → پیکسل‌ها → لایه‌ها روی GPU.
- **Senior Insight:** هدف انیمیشن روان: تغییرات را در Composite نگه دار (transform/opacity).

| Stage | کار اصلی | تریگر رایج |
|-------|----------|------------|
| Parse | DOM/CSSOM | HTML/CSS جدید |
| Style | Computed styles | class/CSS change |
| Layout | هندسه | size/position |
| Paint | پیکسل | color/image |
| Composite | لایه‌ها | transform/opacity |

## Critical Rendering Path

### Render-Blocking CSS
- **Quick Summary:** CSS در `<head>` معمولاً First Paint را block می‌کند تا CSSOM آماده شود.
- **Senior Insight:** Critical CSS اینلاین؛ non-critical را defer/media-split کن.

### Script Blocking
- **Quick Summary:** `<script>` بدون `async`/`defer` parser را متوقف می‌کند.
- **Senior Insight:** `defer` برای وابسته‌به‌DOM؛ `async` برای مستقل؛ ماژول‌ها defer-like‌اند.

### Resource Prioritization
- **Quick Summary:** مرورگر اولویت preload/preconnect/priority hints را برای منابع حیاتی اعمال می‌کند.
- **Senior Insight:** preload زیاد = رقابت bandwidth؛ فقط LCP/critical را هدف بگیر.

### First Paint Relevance
- **Quick Summary:** کوتاه کردن CRP = FP/FCP سریع‌تر و حس پاسخ‌گویی بهتر.
- **Senior Insight:** FP زود ≠ تجربه خوب؛ LCP/INP را هم اندازه بگیر.

## Hydration

### SSR Markup Activation
- **Quick Summary:** کلاینت JS روی HTML سرور attach می‌شود تا اپ interactive شود.
- **Senior Insight:** Hydration کل درخت می‌تواند TTI را بکشد؛ partial/selective را در نظر بگیر.

### Event Listener Attachment
- **Quick Summary:** در hydration، listenerها و state به DOM موجود وصل می‌شوند نه recreate کامل.
- **Senior Insight:** تأخیر تا attach = UI قابل‌دیدن ولی مرده (uncanny valley).

### Mismatch Causes
- **Quick Summary:** تفاوت HTML سرور/کلاینت (Date، random، locale) باعث warning یا remount می‌شود.
- **Senior Insight:** خروجی SSR باید deterministic باشد؛ `suppressHydrationWarning` sparingly.

### Performance Cost
- **Quick Summary:** دانلود + parse + اجرای JS hydration هزینهٔ اصلی interactivity است.
- **Senior Insight:** کمتر JS روی مسیر بحرانی = hydration ارزان‌تر.

## Web APIs

### Timers / Fetch / Storage / Observers / Media
- **Quick Summary:** APIهای مرورگر فراتر از DOM: شبکه، ذخیره، مشاهده، دستگاه، رسانه.
- **Senior Insight:** هر API مدل permission/lifetime خودش را دارد؛ cleanup و feature detect الزامی است.

## Storage

### `localStorage`
- **Quick Summary:** Key-value رشته‌ای، ماندگار per-origin، API همگام.
- **Senior Insight:** Sync روی Main thread؛ XSS کل داده را می‌خواند — برای token حساس مناسب نیست.
- **Code:**
```ts
localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
const theme = JSON.parse(localStorage.getItem('theme') ?? '{}');
```

### `sessionStorage`
- **Quick Summary:** مثل localStorage ولی محدود به tab؛ با بستن tab پاک می‌شود.
- **Senior Insight:** مناسب wizard/draft موقت؛ بین tabها share نمی‌شود.

### Cookies
- **Quick Summary:** تا ~4KB؛ با هر request (در scope) به سرور می‌روند مگر محدودیت attribute.
- **Senior Insight:** `HttpOnly`+`Secure`+`SameSite` برای session؛ اندازه را برای perf کنترل کن.

### IndexedDB
- **Quick Summary:** ذخیرهٔ ساخت‌یافتهٔ async در کلاینت؛ مناسب دادهٔ حجیم/آفلاین.
- **Senior Insight:** API پیچیده؛ از wrapper (idb) استفاده کن؛ schema migration را طراحی کن.

### Cache Storage
- **Quick Summary:** کش Request/Response؛ معمولاً با Service Worker برای offline.
- **Senior Insight:** استراتژی cache (cache-first vs network-first) را صریح انتخاب کن.

## Workers & Messaging

### Service Worker
- **Quick Summary:** Proxy شبکه در پس‌زمینه؛ lifecycle: register → install → activate → fetch.
- **Senior Insight:** Update/activate اشتباه = کاربر روی نسخهٔ کهنه گیر می‌کند؛ skipWaiting محتاطانه.
- **Code:**
```ts
navigator.serviceWorker.register('/sw.js');
// sw.js: self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request)); });
```

### Web Workers
- **Quick Summary:** Thread جدا برای کار CPU-سنگین؛ ارتباط با `postMessage`.
- **Senior Insight:** به DOM دسترسی ندارند؛ انتقال دادهٔ بزرگ هزینه دارد (structured clone / Transferable).

### Shared Workers
- **Quick Summary:** یک Worker مشترک بین tabهای هم‌origin.
- **Senior Insight:** پشتیبانی/دیباگ سخت‌تر؛ در عمل کمتر از BroadcastChannel استفاده می‌شود.

### BroadcastChannel
- **Quick Summary:** پیام‌رسانی سادهٔ cross-tab هم‌origin (مثلاً logout sync).
- **Senior Insight:** برای sync سبک عالی؛ state پیچیده را با منبع حقیقت واحد نگه دار.
- **Code:**
```ts
const bc = new BroadcastChannel('auth');
bc.postMessage({ type: 'logout' });
bc.onmessage = (e) => { if (e.data.type === 'logout') clearSession(); };
```

### `postMessage`
- **Quick Summary:** ارتباط window↔window یا page↔worker با structured clone.
- **Senior Insight:** همیشه `event.origin` را validate کن؛ پیام بدون چک = XSS vector.

## Security (Browser)

### Same-Origin Policy
- **Quick Summary:** Origin = scheme + host + port؛ دسترسی متقابل به DOM/storage محدود است.
- **Senior Insight:** پایه‌ای‌ترین مرز امنیتی مرورگر؛ دور زدنش فقط با مکانیزم‌های صریح (CORS، postMessage).

### CORS
- **Quick Summary:** سرور با headerها اجازهٔ cross-origin به JS می‌دهد؛ گاهی preflight `OPTIONS`.
- **Senior Insight:** `credentials` نیاز به `Access-Control-Allow-Credentials` و origin مشخص دارد نه `*`.
- **Code:**
```ts
fetch(url, { credentials: 'include', headers: { Authorization: `Bearer ${token}` } });
```

### CSP
- **Quick Summary:** Policy برای محدود کردن منابع (`script-src`، `style-src`) با nonce/hash.
- **Senior Insight:** قوی‌ترین دفاع XSS در عمق دفاع؛ `unsafe-inline` را تا حد ممکن حذف کن.

### XSS / CSRF Basics
- **Quick Summary:** XSS اجرای اسکریپت مهاجم؛ CSRF سوءاستفاده از cookie session کاربر.
- **Senior Insight:** Escape خروجی + CSP برای XSS؛ SameSite/token برای CSRF.

| Attack | بردار اصلی | دفاع کلیدی |
|--------|------------|------------|
| Stored/Reflected/DOM XSS | ورودی ناامن در DOM | Escape، CSP، sanitize |
| CSRF | Request ناخواسته با cookie | SameSite، CSRF token |

### JWT Storage Tradeoffs
- **Quick Summary:** Memory امن‌تر از XSS؛ localStorage در برابر XSS ضعیف؛ cookie با HttpOnly در برابر XSS قوی‌تر.
- **Senior Insight:** Cookie → ریسک CSRF؛ localStorage → ریسک XSS؛ انتخاب = مدل تهدید.

### Authentication Flow in Browser
- **Quick Summary:** Login → ذخیره token/cookie → refresh session → logout و باطل‌سازی.
- **Senior Insight:** Refresh را rotate کن؛ logout باید سمت سرور و همهٔ tabها sync شود.

### Authorization Concepts
- **Quick Summary:** AuthN هویت است؛ AuthZ مجوز؛ roles درشت، permissions ریز.
- **Senior Insight:** چک فقط در UI امنیت نیست؛ سرور باید enforce کند.

## Files & Binary

### File API
- **Quick Summary:** `<input type="file">` و drag-drop → `File` با name/size/type و preview با `URL.createObjectURL`.
- **Senior Insight:** Object URL را `revoke` کن؛ اندازه/نوع را قبل از upload اعتبارسنجی کن.

### Blob / ArrayBuffer / Stream
- **Quick Summary:** Blob دادهٔ خام؛ ArrayBuffer بافر باینری؛ Stream خواندن تکه‌تکه.
- **Senior Insight:** برای فایل بزرگ از Stream استفاده کن تا memory منفجر نشود؛ download با `URL.createObjectURL(blob)`.

## Realtime

### WebSocket
- **Quick Summary:** اتصال دوطرفهٔ ماندگار روی یک TCP/TLS connection.
- **Senior Insight:** Reconnect با backoff + heartbeat؛ auth و message schema را سخت‌گیرانه طراحی کن.

### SSE
- **Quick Summary:** جریان یک‌طرفهٔ سرور→کلاینت روی HTTP؛ ساده‌تر از WebSocket.
- **Senior Insight:** برای notification/stream کافی است؛ نیاز دوطرفه = WebSocket/WebTransport.

| | WebSocket | SSE |
|--|-----------|-----|
| جهت | Bidirectional | Server → client |
| پروتکل | WS | HTTP |
| Reconnect | دستی | خودکار مرورگر |

## Navigation & URL

### History API
- **Quick Summary:** `pushState`/`replaceState` بدون reload؛ `popstate` برای back/forward.
- **Senior Insight:** پایهٔ SPA router؛ state را با URL sync نگه دار نه فقط memory.
- **Code:**
```ts
history.pushState({ page: 2 }, '', '/items?page=2');
window.addEventListener('popstate', (e) => render(e.state));
```

### URL / URLSearchParams
- **Quick Summary:** پارس امن URL و خواندن/نوشتن query با encoding درست.
- **Senior Insight:** دستی string نساز؛ `URLSearchParams` از bugهای encode جلوگیری می‌کند.
- **Code:**
```ts
const url = new URL(location.href);
url.searchParams.set('q', 'react hooks');
history.replaceState(null, '', url);
```

## Observers & Scheduling

### IntersectionObserver
- **Quick Summary:** تشخیص visibility برای lazy-load، infinite scroll، impression.
- **Senior Insight:** به‌جای scroll listener؛ `threshold`/`rootMargin` را دقیق تنظیم کن.
- **Code:**
```ts
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) load(e.target); });
}, { rootMargin: '200px' });
```

### MutationObserver
- **Quick Summary:** واکنش به تغییر DOM (childList، attributes، subtree).
- **Senior Insight:** observer را disconnect کن؛ حلقهٔ mutation→write→mutation بساز نکن.

### ResizeObserver
- **Quick Summary:** مشاهدهٔ تغییر اندازهٔ element برای layout responsive در component.
- **Senior Insight:** در callback دوباره size را عوض نکن — feedback loop و jank.

### Performance API
- **Quick Summary:** Navigation Timing، `mark`/`measure` برای متریک سفارشی.
- **Senior Insight:** متریک business را خودت mark کن؛ فقط Lighthouse کافی نیست.

### `requestAnimationFrame`
- **Quick Summary:** زمان‌بندی کار بصری قبل از paint بعدی (~60fps).
- **Senior Insight:** برای انیمیشن بهتر از `setTimeout`؛ در tab مخفی throttle می‌شود.

### `requestIdleCallback`
- **Quick Summary:** کار کم‌اولویت وقتی مرورگر idle است.
- **Senior Insight:** پشتیبانی/اولویت محدود؛ کار حیاتی را به آن نسپار؛ timeout بگذار.

## Device & UX APIs

### Clipboard API
- **Quick Summary:** `navigator.clipboard.writeText/readText` با محدودیت permission و secure context.
- **Senior Insight:** UX بازخورد کپی بده؛ fallback برای مرورگرهای قدیمی.

### Geolocation API
- **Quick Summary:** مختصات با permission؛ success/error callback یا Promise wrapper.
- **Senior Insight:** حریم خصوصی حساس؛ فقط وقتی لازم؛ دقت بالا = باتری بیشتر.

### Notifications API
- **Quick Summary:** اعلان سیستم بعد از permission؛ معمولاً با Service Worker برای push.
- **Senior Insight:** Permission را در context مفید بخواه نه در اولین load.

## Web Components

### Custom Elements / Shadow DOM / Templates
- **Quick Summary:** اجزای بومی با encapsulation (Shadow DOM)، تعریف element، و `<template>`.
- **Senior Insight:** با React/Vue قابل‌همزیستی است ولی event/style bridging پیچیدگی دارد؛ برای design system بین فریم‌ورک‌ها مفید.
