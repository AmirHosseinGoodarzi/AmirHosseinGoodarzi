# Git — Cheat Sheet

## Branching Strategies

### Feature Branches
- **Quick Summary:** هر feature/fix روی branch جدا از main؛ با PR merge می‌شود.
- **Senior Insight:** branchهای طولانی = merge hell؛ کوتاه و integrate مکرر باش.

### Trunk-Based Basics
- **Quick Summary:** توسعه نزدیک به `main`/`trunk` با branchهای خیلی کوتاه یا pair commits.
- **Senior Insight:** نیاز به feature flags و CI قوی دارد؛ برای تیم‌های سریع مقیاس‌پذیر است.

### Git Flow Awareness
- **Quick Summary:** مدل کلاسیک با `develop`، `feature/*`، `release/*`، `hotfix/*`.
- **Senior Insight:** برای releaseهای نسخه‌ای سنگین خوب است؛ برای SaaS پیوسته اغلب overkill است.

### Release Branching Tradeoffs
- **Quick Summary:** branch جدا برای stabilize/release در حالی که main پیش می‌رود.
- **Senior Insight:** backport و cherry-pick هزینه دارد؛ فقط وقتی parallel release واقعاً لازم است.

---

## Integrating Changes

### Rebase vs Merge — History Cleanliness
- **Quick Summary:** merge تاریخچه واقعی branch را نگه می‌دارد؛ rebase تاریخچه خطی‌تر می‌سازد.
- **Senior Insight:** روی shared/public branch rebase نکن مگر تیم صریحاً موافق باشد.

### Rebase vs Merge — Conflict Handling
- **Quick Summary:** rebase تعارض را commitبه‌commit بازپخش می‌کند؛ merge یک‌بار در نقطه اتصال.
- **Senior Insight:** تعارض چندمرحله‌ای rebase دقیق‌تر ولی ذهنی سنگین‌تر است.

### Rebase vs Merge — Team Workflow Tradeoffs
- **Quick Summary:** merge = ساده‌تر و امن‌تر برای مبتدی؛ rebase = history تمیزتر برای review.
- **Senior Insight:** یک سیاست تیمی انتخاب کن؛ اختلاط بی‌قانون = آشوب.

### Conflict Resolution — Understanding Markers
- **Quick Summary:** `<<<<<<<` / `=======` / `>>>>>>>` دو نسخه متعارض را نشان می‌دهند.
- **Senior Insight:** فقط markers را پاک کردن کافی نیست؛ معنای هر دو طرف را بفهم.

### Conflict Resolution — Semantic Merge Decisions
- **Quick Summary:** انتخاب خط درست بر اساس رفتار محصول است، نه «آخرین تغییر».
- **Senior Insight:** گاهی هر دو طرف باید ترکیب شوند؛ auto-resolve کور خطرناک است.

### Conflict Resolution — Retesting After Resolve
- **Quick Summary:** بعد از resolve حتماً تست/اجرا کن؛ conflict حل‌شده ≠ رفتار درست.
- **Senior Insight:** مخصوصاً imports، routes، و configهای duplicated را دستی verify کن.

### Cherry-pick — Selective Commit Transfer
- **Quick Summary:** یک commit مشخص را روی branch دیگر اعمال می‌کند.
- **Senior Insight:** تاریخچه تکراری/مشابه می‌سازد؛ برای hotfix هدفمند مفید است.

### Cherry-pick — Backporting Fixes
- **Quick Summary:** فیکس از main را به release/older branch برمی‌گرداند.
- **Senior Insight:** وابستگی‌های commit را چک کن؛ cherry-pick ناقص = bug ناقص‌تر.

### Cherry-pick — Conflict Risks
- **Quick Summary:** اگر context فرق کرده باشد تعارض یا اعمال نادرست رخ می‌دهد.
- **Senior Insight:** بعد از cherry-pick، diff و تست همان فیکس را دوباره مرور کن.

---

## Recovery & Commit Quality

### Reflog Basics — Recovering Lost Commits
- **Quick Summary:** `reflog` حرکت‌های محلی HEAD را نگه می‌دارد؛ commit «گم‌شده» اغلب قابل برگشت است.
- **Senior Insight:** قبل از panic، `git reflog`؛ زمان محدود است ولی معمولاً نجات‌دهنده است.

### Reflog Basics — HEAD History Awareness
- **Quick Summary:** checkout، reset، rebase همه در reflog ثبت می‌شوند.
- **Senior Insight:** فقط local است؛ جایگزین remote backup نیست.

### Commit Hygiene — Small Focused Commits
- **Quick Summary:** هر commit یک هدف؛ review و revert را آسان می‌کند.
- **Senior Insight:** commit غول‌آسا با چند concern = blame و rollback دردناک.

### Commit Hygiene — Meaningful Messages
- **Quick Summary:** پیام باید why را بگوید، نه فقط what بدیهی از diff.
- **Senior Insight:** پیام مبهم هزینه دانش تیمی را بالا می‌برد.

### Commit Hygiene — Avoiding Mixed Concerns
- **Quick Summary:** refactor + feature + format را قاطی نکن.
- **Senior Insight:** جدا کردن concerns = review سریع‌تر و bisect مؤثرتر.

### Conventional Commits — `feat` / `fix` / `chore`
- **Quick Summary:** `feat:` قابلیت؛ `fix:` باگ؛ `chore:` نگهداری بدون تغییر رفتار کاربر.
- **Senior Insight:** سازگاری با changelog خودکار و semver؛ scope را یکدست نگه دار.

### Conventional Commits — Semantic Release Awareness
- **Quick Summary:** از نوع commit برای bump نسخه و release notes استفاده می‌شود.
- **Senior Insight:** `BREAKING CHANGE` / `!` را جدی بگیر؛ اشتباه = نسخه غلط در prod.

---

## Pull Request Practices

### PR Review — Scope Clarity
- **Quick Summary:** PR باید هدف، محدوده، و out-of-scope را روشن کند.
- **Senior Insight:** PR بزرگ را بشکن؛ review سطحی نتیجه scope پهن است.

### PR Review — Constructive Feedback
- **Quick Summary:** روی ریسک، correctness، و maintainability تمرکز کن؛ نه سلیقه صرف.
- **Senior Insight:** پیشنهاد جایگزین بده؛ nit را از blocker جدا علامت بزن.

### PR Review — Test Evidence
- **Quick Summary:** نشان بده چه تست شد (دستی/اتوماتیک) و چه edge case پوشش دارد.
- **Senior Insight:** «کار می‌کند» بدون evidence در review ارشد کافی نیست.

### PR Review — Checklist Mindset
- **Quick Summary:** correctness، a11y، perf، security، i18n، rollback را عمداً مرور کن.
- **Senior Insight:** checklist کوتاه تیمی > حافظه فردی در فشار زمان.
