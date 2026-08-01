# Debugging — Cheat Sheet

## Browser DevTools

### Elements Panel
- **Quick Summary:** DOM و CSS محاسبه‌شده را inspect/edit می‌کند؛ برای layout و cascade حیاتی است.
- **Senior Insight:** اول computed styles و box model را ببین، بعد حدس class اشتباه نزن.

### Console
- **Quick Summary:** log، error، و اجرای JS در context صفحه؛ filter و levels را جدی بگیر.
- **Senior Insight:** `console.log` موقت را در PR نگذار؛ برای اشیا از breakpoints بهتر است.

### Sources
- **Quick Summary:** breakpoints، step-through، watch، و call stack روی اسکریپت‌ها.
- **Senior Insight:** conditional breakpoint برای نویز کم؛ blackbox کردن vendor کد را تمیز می‌کند.

### Application Tab Basics
- **Quick Summary:** Storage (local/session/IndexedDB)، cookies، cache، service workers.
- **Senior Insight:** بسیاری از «باگ‌های عجیب» از stale cache/SW یا cookie غلط است.

---

## Network & Performance

### Network Tab — Requests
- **Quick Summary:** همه XHR/fetch/assetها با status، زمان، و initiator.
- **Senior Insight:** initiator و waterfall را ببین تا waterfallهای سریالی API را پیدا کنی.

### Network Tab — Headers
- **Quick Summary:** request/response headers: auth، cache-control، content-type، CORS.
- **Senior Insight:** بیشتر باگ‌های CORS/cache اول از headers معلوم می‌شوند.

### Network Tab — Payloads
- **Quick Summary:** query، form body، JSON request/response برای قرارداد API.
- **Senior Insight:** mismatch shape/type را قبل از شک به UI state چک کن.

### Network Tab — Waterfalls
- **Quick Summary:** ترتیب و هم‌پوشانی درخواست‌ها؛ کشف زنجیره وابسته و blocking.
- **Senior Insight:** waterfall بلند سریالی = فرصت parallelize یا BFF.

### Network Tab — Cache / Debugging Clues
- **Quick Summary:** از `(disk cache)` / `304` / service worker بفهم پاسخ از کجا آمده.
- **Senior Insight:** Disable cache هنگام debug؛ در prod رفتار cache را جدا verify کن.

### Performance Tab — Recording
- **Quick Summary:** timeline اجرای runtime را record کن: script، render، paint.
- **Senior Insight:** روی scenario واقعی و device throttle ضبط کن، نه فقط desktop ایده‌آل.

### Performance Tab — Flame Charts
- **Quick Summary:** عرض = زمان؛ ارتفاع/stack = call chain؛ نقاط پهن = داغ.
- **Senior Insight:** دنبال long task و تابع‌های پهن تکراری بگرد، نه هر فریم کوچک.

### Performance Tab — Long Tasks
- **Quick Summary:** کار اصلی thread بالای ~50ms که input را بلوکه می‌کند.
- **Senior Insight:** split کار، defer، یا انتقال به worker؛ INP/responsiveness را هدف بگیر.

### Performance Tab — Layout / Paint Analysis
- **Quick Summary:** Recalculate Style، Layout، Paint، Composite را جدا ببین.
- **Senior Insight:** layout thrash (خواندن/نوشتن متناوب DOM) را از flame پیدا و حذف کن.

---

## Memory & React Tooling

### Memory Tab — Heap Snapshots
- **Quick Summary:** گرفتن snapshot از اشیای heap برای مقایسه رشد حافظه.
- **Senior Insight:** snapshot قبل/بعد از action؛ detatched DOM و retainerها را دنبال کن.

### Memory Tab — Allocation Timeline
- **Quick Summary:** تخصیص حافظه در زمان را نشان می‌دهد؛ الگوهای allocate مکرر را می‌بینی.
- **Senior Insight:** allocation زیاد ≠ حتماً leak؛ نبودن GC آزادسازی مهم است.

### Memory Tab — Leak Detection Basics
- **Quick Summary:** رشد پایدار بعد از تکرار action + باقی‌ماندن objects غیرمنتظره = leak مشکوک.
- **Senior Insight:** listenerها، timers، closures روی DOM بزرگ، و caches بی‌کران را اول چک کن.

### React DevTools — Component Tree Inspection
- **Quick Summary:** درخت کامپوننت واقعی، نه فقط DOM؛ ساختار و مالکیت state را می‌بینی.
- **Senior Insight:** برای bug state، اول owner واقعی state را در tree پیدا کن.

### React DevTools — Props / State Viewing
- **Quick Summary:** props، state، hooks فعلی هر کامپوننت را زنده inspect می‌کند.
- **Senior Insight:** مقدار غیرمنتظره را با render count و parent props correl کن.

### React DevTools — Context Visibility
- **Quick Summary:** مقادیر context مصرف‌شده را برای فهم coupling و rerender می‌بینی.
- **Senior Insight:** context پهن = rerender گسترده؛ مرز provider را عمداً طراحی کن.

### React Profiler — Commit Duration
- **Quick Summary:** زمان هر commit render را اندازه می‌گیرد.
- **Senior Insight:** commitهای مکرر گران > یک commit کمی کند؛ الگوی تکرار را ببین.

### React Profiler — Render Counts
- **Quick Summary:** چند بار هر کامپوننت در scenario رندر شده.
- **Senior Insight:** render زیاد با props/identity ناپایدار معمولاً مقصر است.

### React Profiler — Slow Component Discovery
- **Quick Summary:** رتبه/رنگ مدت رندر برای پیدا کردن گلوگاه UI.
- **Senior Insight:** اول گران‌ترین برگ/subtree را بهینه کن، نه کل درخت کورکورانه.

---

## Advanced Frontend Debugging

### Source Maps Debugging — Stepping Through Original Source
- **Quick Summary:** با source map در Sources روی TS/JSX اصلی قدم بزن، نه bundle.
- **Senior Insight:** اگر map غلط باشد، breakpointها گمراه‌کننده‌اند — config build را چک کن.

### Source Maps Debugging — Prod Issue Diagnosis
- **Quick Summary:** stack trace prod را با uploadشده maps به فایل اصلی برمی‌گرداند.
- **Senior Insight:** version/release را با artifact map هم‌تراز نگه دار.

### Source Maps Debugging — Config Awareness
- **Quick Summary:** `devtool`/sourcemap options کیفیت و افشای map را تعیین می‌کنند.
- **Senior Insight:** prod: hidden/private maps؛ public map فقط با آگاهی امنیتی.

### Hydration Mismatch — Inconsistent Server/Client Output
- **Quick Summary:** HTML سرور با اولین رندر کلاینت یکی نیست → warning/bug UI.
- **Senior Insight:** خروجی اولیه باید deterministic باشد؛ تفاوت را بعد از mount اعمال کن.

### Hydration Mismatch — Browser-Only APIs
- **Quick Summary:** استفاده از `window`/`localStorage` در render اولیه باعث mismatch می‌شود.
- **Senior Insight:** دسترسی browser-only را به `useEffect` یا client-only gate ببر.

### Hydration Mismatch — Unstable Values
- **Quick Summary:** `Date.now()`، `Math.random()`، locale/timezone ناپایدار بین server/client.
- **Senior Insight:** این مقادیر را suppress/hydrate-safe کن یا بعد از mount نشان بده.

### Production Issue Triage — Reproduce
- **Quick Summary:** اول با نسخه، user، env، و steps باگ را reproduce کن.
- **Senior Insight:** بدون repro پایدار، hotfix حدسی خطرناک است.

### Production Issue Triage — Scope Impact
- **Quick Summary:** چند کاربر/منطقه/feature درگیر است؟ blast radius را سریع بسنج.
- **Senior Insight:** impact بالا → mitigate اول (flag/rollback)، بعد root cause عمیق.

### Production Issue Triage — Logs / Monitoring
- **Quick Summary:** error tracker، metrics، traces، و logs را با timestamp/release correl کن.
- **Senior Insight:** بدون observability، triage ارشد عملاً کور است.

### Production Issue Triage — Rollback vs Hotfix
- **Quick Summary:** rollback سریع وقتی تغییر اخیر مقصر است؛ hotfix وقتی rollback ممکن/امن نیست.
- **Senior Insight:** تصمیم را با risk/time اعلام کن؛ سکوت در outage بدتر از فیکس ناقص موقت است.

### Reproducible Bug Isolation — Minimal Repro
- **Quick Summary:** کوچک‌ترین صفحه/داده/گام که باگ را نشان می‌دهد بساز.
- **Senior Insight:** minimal repro نیمی از حل است و برای تیم/vendor طلاست.

### Reproducible Bug Isolation — Binary Search of Changes
- **Quick Summary:** با bisect/commit یا حذف نیمه‌نیمه تغییر، مقصر را پیدا کن.
- **Senior Insight:** `git bisect` برای regressionهای بعد از deploy بسیار قدرتمند است.

### Reproducible Bug Isolation — Environment / Data Factors
- **Quick Summary:** locale، timezone، role، feature flag، و داده خاص کاربر را جدا کن.
- **Senior Insight:** «فقط برای یک tenant» اغلب config/data است نه logic عمومی.
