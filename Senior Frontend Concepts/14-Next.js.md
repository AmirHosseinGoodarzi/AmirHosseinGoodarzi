# Next.js — Cheat Sheet

## Routing & App Structure

### App Router
- **Quick Summary:** مدل پیش‌فرض مبتنی بر `app/`؛ Server Components، nested layouts، streaming.
- **Senior Insight:** Server-first فکر کن؛ Client فقط برای interactivity/browser APIs.

### Folder Conventions
- **Quick Summary:** `page`، `layout`، `loading`، `error`، `not-found`، `route`، `template`، `default`.
- **Senior Insight:** Convention = routing API؛ نام فایل اشتباه = route خاموش یا behavior غیرمنتظره.

### Nested Layouts
- **Quick Summary:** UI shell پایدار در سلسله‌مراتب پوشه؛ بدون remount کامل بین فرزندها.
- **Senior Insight:** Shared layout state در layout بگذار؛ از prop-drilling بین صفحات اجتناب کن.

### Layout Hierarchy
- **Quick Summary:** Root → segment layouts؛ هر سطح UI مشترک و data boundary خودش را دارد.
- **Senior Insight:** Layout سنگین = هر navigation زیرش هزینه می‌پردازد؛ سبک نگه دار.

### Pages Router (Legacy)
- **Quick Summary:** `pages/` با file-based routing قدیمی؛ data با `getServerSideProps`/`getStaticProps`.
- **Senior Insight:** دانش migration لازم است؛ پروژه جدید را App Router شروع کن مگر constraint.

### `getServerSideProps` / `getStaticProps`
- **Quick Summary:** SSR در request-time؛ SSG در build-time — فقط Pages Router.
- **Senior Insight:** در App Router معادل‌ها: dynamic rendering، `fetch` cache، `revalidate`.

### File-system Routing
- **Quick Summary:** مسیر از ساختار پوشه ساخته می‌شود؛ segment = یک بخش URL.
- **Senior Insight:** Colocation فایل‌های غیر-route کنار route OK؛ فقط special files route می‌سازند.

### Route Colocation Patterns
- **Quick Summary:** `_components`، `_lib`، یا private folders (`_folder`) کنار `page.tsx`.
- **Senior Insight:** Feature کنار route = discoverability بهتر؛ shared را به packages/lib ببر.

### Route Groups
- **Quick Summary:** `(marketing)` / `(dashboard)` سازماندهی بدون تغییر URL.
- **Senior Insight:** برای layouts متفاوت روی مسیرهای هم‌سطح بدون segment اضافه در URL.

### Parallel Routes
- **Quick Summary:** چند `@slot` همزمان در یک layout (مثلاً `@modal` + `@feed`).
- **Senior Insight:** Dashboard/modal عالی؛ complexity و soft-navigation edge cases را دست‌کم نگیر.

### Intercepting Routes
- **Quick Summary:** با `(.)`/`(..)` route را intercept کن تا modal روی context صفحه قبلی باز شود.
- **Senior Insight:** Soft nav = modal؛ hard/refresh = صفحه کامل — هر دو UX را طراحی کن.

### Dynamic Routes
- **Quick Summary:** `[id]`، `[...slug]` catch-all، `[[...slug]]` optional catch-all.
- **Senior Insight:** `params` در App Router اغلب `Promise` است؛ await کن و validate کن.

```ts
// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

### `Link`
- **Quick Summary:** Client navigation با prefetch پیش‌فرض برای لینک‌های viewport.
- **Senior Insight:** Prefetch ترافیک می‌سازد؛ برای لینک زیاد/`prefetch={false}` را بسنج. a11y: متن معنادار.

### Metadata API
- **Quick Summary:** `export const metadata` یا `generateMetadata` برای title/description/OG.
- **Senior Insight:** Dynamic metadata روی server = SEO قوی؛ social tags را فراموش نکن.

---

## Built-in Components

### `Image`
- **Quick Summary:** بهینه‌سازی خودکار، lazy، responsive `sizes`؛ CLS را با width/height کم کن.
- **Senior Insight:** Remote images نیاز به `remotePatterns` در config دارند؛ بدون size → CLS.

### `Script`
- **Quick Summary:** استراتژی‌های `beforeInteractive` / `afterInteractive` / `lazyOnload` / `worker`.
- **Senior Insight:** Third-party را `lazyOnload` کن؛ critical analytics را با هزینه TTI بسنج.

---

## Server & Client Model

### Server Components (RSC)
- **Quick Summary:** پیش‌فرض App Router؛ بدون hooks کلاینت؛ data fetch مستقیم روی server.
- **Senior Insight:** Bundle کلاینت کوچک‌تر؛ secrets و DB فقط اینجا امن‌اند.

### Client Components
- **Quick Summary:** interactivity، state، effects، browser APIs؛ با `'use client'` مرز می‌خورند.
- **Senior Insight:** Boundary را پایین نگه دار (leaf)؛ کل tree را client نکن.

### `use client`
- **Quick Summary:** اعلام client boundary؛ همه importهای پایین‌دست هم client bundle می‌شوند.
- **Senior Insight:** Import یک client module از server = آن subtree وارد client bundle می‌شود.

### Data Fetching in App Router
- **Quick Summary:** `async` Server Component + `fetch`؛ caching/revalidate در خود fetch.
- **Senior Insight:** Colocated fetch نزدیک UI = waterfall کمتر با streaming؛ dedupe خودکار `fetch`.

```ts
const res = await fetch(url, { next: { revalidate: 60, tags: ['posts'] } });
```

### Route Handlers
- **Quick Summary:** `app/api/.../route.ts` با `GET`/`POST`/...؛ Request/Response Web API.
- **Senior Insight:** Edge یا Node runtime را صریح انتخاب کن؛ برای mutations حساس Node امن‌تر است.

### Server Actions
- **Quick Summary:** توابع server برای mutation؛ یکپارچه با `<form action={...}>`.
- **Senior Insight:** همیشه auth/authorize داخل action؛ input را validate کن — DX ≠ security.

```ts
'use server'
export async function updatePost(formData: FormData) {
  // auth + validate + mutate + revalidatePath
}
```

### Middleware
- **Quick Summary:** interception قبل از request در Edge؛ auth redirect، rewrite، headers.
- **Senior Insight:** منطق سنگین/Node API اینجا نگذار؛ فقط gate سبک.

### Edge Runtime
- **Quick Summary:** latency پایین، API محدود (بدون Node کامل).
- **Senior Insight:** برای geo/auth gate/A-B؛ نه برای ORM سنگین یا crypto پیچیده Node.

### Node Runtime
- **Quick Summary:** دسترسی کامل به Node APIs؛ مناسب DB، file، SDKهای سنگین.
- **Senior Insight:** سنگین‌تر از Edge؛ default امن برای اکثر Server Actions/Handlers.

---

## Rendering Strategies

### Streaming
- **Quick Summary:** HTML به‌تدریج ارسال می‌شود؛ UI partial reveal با Suspense.
- **Senior Insight:** Perceived performance بالا؛ TTFB اولیه را جدا از تکمیل کل صفحه بسنج.

### Suspense Boundaries
- **Quick Summary:** `loading.tsx` یا `<Suspense>` برای segment/partial reveal + fallback.
- **Senior Insight:** Fallback معنادار طراحی کن؛ boundary خیلی درشت = skeleton بی‌فایده.

### CSR
- **Quick Summary:** رندر کامل در browser؛ رفتار SPA-like.
- **Senior Insight:** SEO ضعیف‌تر، TTI وابسته به JS؛ فقط برای بخش‌های واقعاً interactive/private.

### SSR
- **Quick Summary:** رندر در request-time با دادهٔ پویا؛ HTML آماده برای اولین paint.
- **Senior Insight:** TTFB بالاتر؛ برای personalized/dynamic ضروری — cache را از دست نده بی‌دلیل.

### SSG
- **Quick Summary:** تولید در build-time؛ cacheable و سریع روی CDN.
- **Senior Insight:** محتوای نسبتاً ثابت؛ تغییر مکرر → ISR یا dynamic.

### ISR
- **Quick Summary:** بازتولید تدریجی پس از `revalidate`؛ stale تا refresh بعدی ممکن است.
- **Senior Insight:** Stale-while-revalidate را با SLA محتوا بسنج؛ on-demand برای critical paths.

### Partial Prerendering (PPR)
- **Quick Summary:** shell استاتیک + حفره‌های dynamic که stream می‌شوند.
- **Senior Insight:** هدف: سرعت static + انعطاف dynamic؛ mental model = static shell + Suspense holes.

### Static vs Dynamic Rendering
- **Quick Summary:** Static اگر بدون request-time dependency؛ dynamic با cookies/headers/searchParams/no-store.
- **Senior Insight:** یک `cookies()` تصادفی کل مسیر را dynamic می‌کند — آگاهانه استفاده کن.

### Hydration in Next.js
- **Quick Summary:** فعال‌سازی JS کلاینت روی HTML سرور؛ mismatch = warning/bug.
- **Senior Insight:** علت‌های رایج: `Date.now()`، `Math.random()`، locale/browser-only در SSR. Client JS را کم کن.

---

## Caching & Revalidation

### Caching in Next.js
- **Quick Summary:** لایه‌ها: Request Memoization، Data Cache (`fetch`)، Full Route Cache، Router Cache.
- **Senior Insight:** Cache confusion شایع‌ترین bug ارشد است؛ لایه و invalidation را نام ببر.

### Revalidation
- **Quick Summary:** Time-based (`revalidate: N`) یا on-demand؛ رفتار اغلب SWR-like.
- **Senior Insight:** بعد از mutation حتماً path/tag را invalidate کن وگرنه UI کهنه می‌ماند.

### `revalidatePath`
- **Quick Summary:** باطل‌سازی cache بر اساس path پس از mutation.
- **Senior Insight:** در Server Action بعد از write صدا بزن؛ scope را دقیق نگه دار.

### `revalidateTag`
- **Quick Summary:** باطل‌سازی گروهی با tag روی `fetch`های مرتبط.
- **Senior Insight:** برای دادهٔ مشترک بین چند route؛ tagging منظم = invalidation دقیق.

---

## Auth, SEO & Ops

### Auth Patterns in Next.js
- **Quick Summary:** Cookie session + Middleware gate + چک server-side در RSC/Action.
- **Senior Insight:** Client guard فقط UX است؛ امنیت واقعی روی server/middleware.

### Cookies / Headers APIs
- **Quick Summary:** `cookies()` / `headers()` دادهٔ request را روی server می‌خوانند.
- **Senior Insight:** استفاده = opt into dynamic rendering؛ static cache را می‌شکنند.

### SEO in Next.js
- **Quick Summary:** Metadata API + SSR/SSG + امکان JSON-LD/structured data در server HTML.
- **Senior Insight:** Server-rendered content برای crawler طلاست؛ client-only content را SEO ندان.

### Deployment Considerations
- **Quick Summary:** سازگاری platform/runtime، env vars، انتخاب Edge vs Node per route.
- **Senior Insight:** `NEXT_PUBLIC_*` عمومی است؛ secrets فقط server env بدون prefix.

### Bundle Analysis
- **Quick Summary:** با analyzer حجم client bundle و dependencyهای چاق را پیدا کن.
- **Senior Insight:** مرز `'use client'` را کوچک کن؛ heavy libs را dynamic import کن.

### Common App Router Pitfalls
- **Quick Summary:** مخلوط server/client، dynamic تصادفی، cache گیج‌کننده، hydration mismatch.
- **Senior Insight:** قبل از «bug framework» لایه cache و boundary را audit کن.
