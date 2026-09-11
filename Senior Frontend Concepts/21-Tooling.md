# Tooling — Cheat Sheet

## Package Managers

### npm / pnpm / yarn
- **Quick Summary:** ابزار نصب/انتشار packages؛ تفاوت اصلی در سرعت، disk، و workspace model.
- **Senior Insight:** تیم روی یک manager توافق کند؛ lockfile همان tool را در CI enforce کن.

### Package Management Basics
- **Quick Summary:** `dependencies` برای runtime؛ `devDependencies` برای build/test؛ scripts در `package.json`.
- **Senior Insight:** وابستگی runtime اشتباه در `devDependencies` → production break.

### Lockfiles
- **Quick Summary:** نسخه دقیق tree را قفل می‌کند (`package-lock.json` / `pnpm-lock.yaml` / `yarn.lock`).
- **Senior Insight:** همیشه commit کن؛ بدون lockfile = builds غیرقابل‌تکرار و supply-chain drift.

### Workspaces
- **Quick Summary:** چند package در یک monorepo با shared install و local linking.
- **Senior Insight:** boundaryهای package را واضح نگه دار؛ circular deps بین workspaces سم است.

### pnpm Symlink/Store Model
- **Quick Summary:** content-addressable store سراسری + symlinks؛ phantom dependencies را سخت‌گیرانه بلاک می‌کند.
- **Senior Insight:** اگر کد به undeclared dep تکیه دارد، با pnpm می‌شکند — درست است، نه باگ.

---

## Bundlers & Compilers

### Vite — Dev Server Model
- **Quick Summary:** dev با native ESM + on-demand transform؛ HMR سریع بدون full bundle اولیه.
- **Senior Insight:** رفتار dev ≠ prod (Rollup)؛ همیشه prod build را قبل از release چک کن.

### Vite — ESM-Based Development
- **Quick Summary:** browser ماژول‌ها را مستقیم load می‌کند؛ فقط فایل‌های تغییرکرده transform می‌شوند.
- **Senior Insight:** وابستگی‌های سنگین pre-bundle با esbuild می‌شوند تا cold start سبک بماند.

### Vite — Build Pipeline Basics
- **Quick Summary:** production با Rollup: tree-shaking، chunking، minify، asset hashing.
- **Senior Insight:** `manualChunks` و asset budget را برای large apps عمداً طراحی کن.

### Vite — Plugin Ecosystem
- **Quick Summary:** plugins برای framework، env، PWA، analyze، و transform سفارشی.
- **Senior Insight:** plugin order مهم است؛ تعداد زیاد = overhead و debugging سخت‌تر.

### Webpack — Entry / Output
- **Quick Summary:** `entry` نقطه شروع گراف؛ `output` مسیر/نام bundle نهایی.
- **Senior Insight:** چند entry برای multi-page یا legacy shells هنوز رایج است.

### Webpack — Loaders
- **Quick Summary:** فایل‌ها را قبل از bundle transform می‌کنند (TS، CSS، images).
- **Senior Insight:** loader chain از راست به چپ اجرا می‌شود؛ ترتیب اشتباه = bug مرموز.

### Webpack — Plugins
- **Quick Summary:** در lifecycle کامپایل دخالت می‌کنند (HTML inject، define، minify، analyze).
- **Senior Insight:** منطق build پیچیده را در plugin متمرکز کن، نه در loaderهای شکننده.

### Webpack — Bundling Mental Model
- **Quick Summary:** dependency graph از entry ساخته می‌شود؛ modules → chunks → assets.
- **Senior Insight:** درک graph > حفظ config؛ بیشتر perf bugs از chunk boundaries می‌آید.

### Babel — Transpilation
- **Quick Summary:** JS جدید را به target قدیمی‌تر تبدیل می‌کند (syntax + گاهی helpers).
- **Senior Insight:** over-transpile = bundle بزرگ‌تر؛ `browserslist` را واقعی نگه دار.

### Babel — Presets
- **Quick Summary:** مجموعه plugins آماده (`@babel/preset-env`, `react`, `typescript`).
- **Senior Insight:** preset-env با browserslist هدف می‌گیرد؛ polyfill strategy را جدا تصمیم بگیر.

### Babel — Plugins
- **Quick Summary:** transform تک‌منظوره (syntax proposal، optimize، instrument).
- **Senior Insight:** plugin سفارشی هزینه maintain دارد؛ فقط برای نیاز واقعی.

### Babel — Modern Usage Context
- **Quick Summary:** در toolchainهای جدید اغلب با SWC/esbuild جایگزین یا محدود شده.
- **Senior Insight:** اگر Vite/Next از SWC استفاده می‌کند، Babel را فقط برای plugin خاص نگه دار.

### SWC — Rust-Based Compiler
- **Quick Summary:** compiler نوشته‌شده با Rust برای parse/transform/minify بسیار سریع.
- **Senior Insight:** سرعت CI و local DX را بالا می‌برد؛ اکوسیستم plugin از Babel کوچک‌تر است.

### SWC — Speed Advantage
- **Quick Summary:** معمولاً چند برابر سریع‌تر از Babel در transpile/minify.
- **Senior Insight:** در monorepoهای بزرگ، compile time bottleneck اصلی را جابه‌جا می‌کند.

### SWC — Transpilation Role
- **Quick Summary:** جایگزین Babel برای TS/JSX transform در Next/Vite و مشابه.
- **Senior Insight:** رفتار edge-case ممکن است با Babel فرق کند؛ تست regression ضروری است.

---

## Code Quality Tooling

### ESLint — Static Analysis
- **Quick Summary:** با AST کد را برای bug، anti-pattern، و style اجباری تحلیل می‌کند.
- **Senior Insight:** rules مهم را error کن؛ warning زیاد → noise و نادیده‌گرفتن.

### ESLint — Rules
- **Quick Summary:** هر rule یک چک؛ قابل configure به `off` / `warn` / `error`.
- **Senior Insight:** `eslint-disable` را نادر و با دلیل بگذار؛ disable سراسری بوی بدهی فنی است.

### ESLint — Shareable Configs
- **Quick Summary:** configهای مشترک مثل `eslint:recommended`، Airbnb، یا config داخلی تیم.
- **Senior Insight:** یک source of truth برای org؛ forkهای محلی drift می‌سازند.

### ESLint — Autofix Basics
- **Quick Summary:** `--fix` اصلاحات امن را اعمال می‌کند؛ همه rules قابل fix نیستند.
- **Senior Insight:** autofix را در lint-staged بگذار تا PRهای style-only کم شوند.

### Prettier — Formatting Role
- **Quick Summary:** فرمت یکنواخت کد؛ بحث style را از review حذف می‌کند.
- **Senior Insight:** Prettier = formatting؛ ESLint = correctness/patterns — نقش‌ها را قاطی نکن.

### Prettier — Opinionated Output
- **Quick Summary:** گزینه‌های کم؛ عمداً بحث بی‌پایان formatting را می‌بندد.
- **Senior Insight:** با config تیم قفل کن؛ per-file bikeshed ممنوع.

### Prettier — ESLint Integration Boundaries
- **Quick Summary:** formatting rules را از ESLint بردار (`eslint-config-prettier`) تا conflict نشود.
- **Senior Insight:** دو tool نباید یک concern را enforce کنند.

### Husky / lint-staged — Git Hooks
- **Quick Summary:** Husky hookهای git را مدیریت می‌کند؛ lint-staged فقط روی فایل‌های staged اجرا می‌شود.
- **Senior Insight:** hook سریع بماند؛ چک‌های سنگین مال CI هستند نه هر commit.

### Husky / lint-staged — Pre-commit Checks
- **Quick Summary:** معمولاً lint + format روی staged files قبل از قبول commit.
- **Senior Insight:** bypass با `--no-verify` را در تیم محدود/منع کن مگر emergency.

### Husky / lint-staged — Preventing Bad Commits
- **Quick Summary:** خطای واضح syntax/lint را قبل از remote متوقف می‌کند.
- **Senior Insight:** جایگزین CI نیست؛ safety net محلی برای feedback سریع است.

---

## CSS & Debug Tooling

### PostCSS — CSS Processing Pipeline
- **Quick Summary:** CSS را با plugins transform می‌کند (مثل JS tooling برای styles).
- **Senior Insight:** Tailwind/Autoprefixer اغلب روی PostCSS سوارند؛ ترتیب plugins مهم است.

### PostCSS — Autoprefixer
- **Quick Summary:** vendor prefixes را بر اساس browserslist اضافه می‌کند.
- **Senior Insight:** prefix دستی ننویس؛ source of truth = browserslist.

### PostCSS — Plugin Ecosystem
- **Quick Summary:** nesting، nesting legacy، minify، custom media، و غیره.
- **Senior Insight:** هر plugin هزینه parse/transform دارد؛ فقط لازم‌ها را فعال کن.

### Source Maps — Debugging Built Code
- **Quick Summary:** موقعیت کد bundleشده را به source اصلی map می‌کنند.
- **Senior Insight:** بدون source map، prod stack trace تقریباً بی‌فایده است.

### Source Maps — Production Exposure Tradeoffs
- **Quick Summary:** map کامل = debug آسان‌تر ولی افشای ساختار کد؛ اغلب private upload به error tracker.
- **Senior Insight:** map را public serve نکن مگر آگاهانه؛ به Sentry و مشابه upload کن.

### Source Maps — Stack Trace Relevance
- **Quick Summary:** error monitoring با map، خط واقعی فایل/کامپوننت را نشان می‌دهد.
- **Senior Insight:** CI باید map را با همان commit artifact هم‌نسخه نگه دارد.

---

## Environment & Delivery

### Environment Variables — Build-Time Injection
- **Quick Summary:** بیشتر FE tools متغیرها را در build جایگزین/تعریف می‌کنند، نه در runtime مرورگر.
- **Senior Insight:** تغییر env بدون rebuild معمولاً روی client اثر ندارد.

### Environment Variables — Client Exposure Limitations
- **Quick Summary:** فقط متغیرهای صریحاً public (مثل `VITE_` / `NEXT_PUBLIC_`) به bundle می‌روند.
- **Senior Insight:** هر چیزی در client bundle قابل استخراج است — secret نگذار.

### Environment Variables — Environment Separation
- **Quick Summary:** `development` / `staging` / `production` با مقادیر و دسترسی جدا.
- **Senior Insight:** staging باید prod-like باشد وگرنه bugs دیر کشف می‌شوند.

### `.env` Handling — Naming Conventions
- **Quick Summary:** `.env`, `.env.local`, `.env.[mode]`؛ اولویت load بسته به ابزار فرق دارد.
- **Senior Insight:** `.env.local` را gitignore کن؛ مثال‌ها را در `.env.example` نگه دار.

### `.env` Handling — Secrets Hygiene
- **Quick Summary:** API keys خصوصی، tokens، و credentials هرگز در repo یا client env.
- **Senior Insight:** leak در git history هم خطرناک است؛ rotate فوری بعد از افشا.

### `.env` Handling — Local vs Production Config
- **Quick Summary:** local برای DX؛ prod از secret manager / CI vars تزریق می‌شود.
- **Senior Insight:** رفتار feature را فقط با env عوض نکن اگر audit/flag نیاز دارد.

### CI/CD Basics — Automated Checks
- **Quick Summary:** هر push/PR: install، lint، typecheck، test، build به‌صورت خودکار.
- **Senior Insight:** red main ممنوع؛ flake را triage کن وگرنه اعتماد به CI می‌میرد.

### CI/CD Basics — Build / Test / Deploy Stages
- **Quick Summary:** pipeline مرحله‌ای: validate → artifact → deploy با gates.
- **Senior Insight:** deploy بدون artifact immutable = rollback سخت.

### CI/CD Basics — Branch Protections
- **Quick Summary:** require PR review + green checks قبل از merge به main.
- **Senior Insight:** force-push و bypass را برای protected branches محدود کن.

### Build Pipelines — Install → Deploy Flow
- **Quick Summary:** `install` → `lint` → `test` → `build` → publish artifact → deploy.
- **Senior Insight:** cache وابستگی‌ها؛ اما cache غلط = heisenbugs — key را درست طراحی کن.

### Docker Basics — Multi-Stage Builds
- **Quick Summary:** stage build برای compile؛ stage نهایی فقط static assets + server سبک.
- **Senior Insight:** image نهایی بدون node_modules/dev tools = حمله و سایز کمتر.

### Docker Basics — Static Asset Serving
- **Quick Summary:** خروجی build را با nginx/Caddy یا object storage + CDN سرو کن.
- **Senior Insight:** cache headers برای hashed assets طولانی؛ برای `index.html` کوتاه/no-cache.

### Docker Basics — Environment Injection Patterns
- **Quick Summary:** runtime config از طریق env در container یا config.js تولیدشده هنگام start.
- **Senior Insight:** برای SPA خالص، build-time inject رایج‌تر است؛ runtime نیاز طراحی دارد.

---

## Analysis & Component Tooling

### Bundle Analyzers — Chunk Inspection
- **Quick Summary:** visualization از اندازه modules/chunks (rollup-plugin-visualizer، webpack-bundle-analyzer).
- **Senior Insight:** هر release بزرگ را analyze کن؛ regression سایز را زود ببین.

### Bundle Analyzers — Dependency Size Analysis
- **Quick Summary:** کتابخانه‌های سنگین و duplicate versions را پیدا می‌کند.
- **Senior Insight:** گاهی import اشتباه کل lib را می‌آورد؛ ESM/named imports را چک کن.

### Bundle Analyzers — Optimization Workflow
- **Quick Summary:** اندازه را ببین → علت → split/replace/lazy → دوباره اندازه بگیر.
- **Senior Insight:** optimize بدون budget و baseline = حدس؛ عدد قبل/بعد ثبت کن.

### Storybook — Component Isolation
- **Quick Summary:** کامپوننت‌ها را خارج از app با controls/stories توسعه و تست می‌کنی.
- **Senior Insight:** states مهم (loading/empty/error/edge) را story کن نه فقط happy path.

### Storybook — Docs
- **Quick Summary:** مستند تعاملی props، variants، و usage برای design system.
- **Senior Insight:** docs نزدیک کد بماند وگرنه drift می‌کند.

### Storybook — Visual Testing Support
- **Quick Summary:** snapshot/visual regression روی stories برای جلوگیری از UI drift.
- **Senior Insight:** visual tests مکمل unit هستند، جایگزین منطق نیستند.

### Storybook — Design System Workflows
- **Quick Summary:** منبع مشترک برای design/dev review، tokenها، و ترکیب primitives.
- **Senior Insight:** versioning و governance design system را به publish pipeline وصل کن.

### Chromatic — Visual Regression
- **Quick Summary:** تغییرات UI stories را cloud-side capture و diff می‌کند.
- **Senior Insight:** review بصری را مثل code review اجباری کن برای DS/critical flows.

### Chromatic — Storybook Integration
- **Quick Summary:** مستقیماً روی Storybook build کار می‌کند؛ stories = test surface.
- **Senior Insight:** story ناقص = coverage بصری ناقص.

### Chromatic — Review Workflows
- **Quick Summary:** UI changes در PR قابل accept/reject؛ تاریخچه بصری نگه داشته می‌شود.
- **Senior Insight:** approve کورکورانه = regressionهای خاموش؛ diff را جدی بگیر.
