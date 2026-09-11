# Routing — Cheat Sheet

## SPA Routing Fundamentals

### SPA Routing Concepts
- **Quick Summary:** ناوبری بدون full reload؛ URL با History API عوض می‌شود؛ JS view را match می‌کند.
- **Senior Insight:** Deep link و refresh باید همان route را از سرور/fallback بگیرند — deploy مهم است.

### Client-Side Navigation
- **Quick Summary:** `Link`/`navigate` تاریخچه را push/replace می‌کند؛ فقط تکهٔ لازم re-render می‌شود.
- **Senior Insight:** برای منابع خارجی یا دانلود از `<a href>` واقعی استفاده کن.

### History API Usage
- **Quick Summary:** `pushState`/`replaceState` + رویداد `popstate` زیربنای routerها.
- **Senior Insight:** `replace` برای redirectهای auth تا دکمهٔ Back گیر نکند.

### Route Matching
- **Quick Summary:** الگوهای path با اولویت رتبه/اختصاصی بودن به element می‌رسند.
- **Senior Insight:** مسیر مبهم و order اشتباه = صفحهٔ غلط؛ تست صریح routes حیاتی است.

### Deep Linking
- **Quick Summary:** URL مستقیم باید همان UI/state قابل‌بازیابی را باز کند.
- **Senior Insight:** State فقط در memory = لینک مرده؛ فیلترهای مهم را URL-driven کن.

---

## React Router Core

### React Router Fundamentals
- **Quick Summary:** پیکربندی route، `Link`، `Outlet`، hooks ناوبری (`useNavigate`/`useParams`).
- **Senior Insight:** Data Router (createBrowserRouter) مسیر مدرن با loaders/actions است.
- **Code:**
```tsx
createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'users/:id', element: <User /> },
  ]},
]);
```

### Route Config
- **Quick Summary:** درخت routeها به‌صورت object/JSX؛ nested با `children`.
- **Senior Insight:** یک منبع حقیقت برای pathها (constants) تا typo و drift کم شود.

### `Link`
- **Quick Summary:** ناوبری اعلانی دسترس‌پذیر؛ prefetch در بعضی setupها.
- **Senior Insight:** `reloadDocument` وقتی نیاز به full load داری؛ وگرنه SPA بمان.

### `Outlet`
- **Quick Summary:** جای رندر child route داخل layout والد.
- **Senior Insight:** چند سطح `Outlet` = layoutهای تودرتو؛ فراموشی Outlet = صفحه خالی.

### Navigation Hooks
- **Quick Summary:** `useNavigate`، `useLocation`، `useParams`، `useSearchParams`.
- **Senior Insight:** Navigate در render بدون اثر = حلقه؛ در event/effect کنترل‌شده بزن.

---

## Nested & Layout Routes

### Nested Routes
- **Quick Summary:** parent-child؛ UI والد می‌ماند، فقط بخش child عوض می‌شود.
- **Senior Insight:** Shared chrome (nav/sidebar) اینجا زنده می‌ماند بدون remount کامل.

### Parent-Child Rendering
- **Quick Summary:** Parent element + `<Outlet />`؛ child در Outlet ظاهر می‌شود.
- **Senior Insight:** Data والد و فرزند را در loader جدا کن؛ آبشار را آگاهانه طراحی کن.

### Shared Layouts & Index Routes
- **Quick Summary:** Index = مسیر پیش‌فرض وقتی URL دقیقاً روی parent است.
- **Senior Insight:** بدون index، `/parent` ممکن است Outlet خالی بماند.

### Layout Routes
- **Quick Summary:** route بدون path قطعه (pathless layout) فقط برای shell مشترک.
- **Senior Insight:** مناسب گروه‌بندی auth/chrome بدون segment اضافه در URL.
- **Code:**
```tsx
{ element: <AppShell />, children: [
  { path: 'dashboard', element: <Dash /> },
  { path: 'settings', element: <Settings /> },
]}
```

### Shell Components & Persistent UI Regions
- **Quick Summary:** هدر/سایدبار در layout؛ محتوای صفحه در Outlet.
- **Senior Insight:** State محلی layout با تعویض child حفظ می‌شود مگر key/remount.

### Nested Outlet Structure
- **Quick Summary:** هر سطح تو در تو Outlet خودش را دارد (مثلاً settings + tab panel).
- **Senior Insight:** عمق زیاد OK است اگر هر سطح یک مسئولیت layout داشته باشد.

---

## Params, Search & Protection

### Route Params
- **Quick Summary:** بخش پویا مثل `:id`؛ خواندن با `useParams()`.
- **Senior Insight:** همیشه validate/coerce کن — string خام از URL قابل اعتماد نیست — Security.
- **Code:**
```ts
const { id } = useParams();
const userId = z.string().uuid().parse(id);
```

### Dynamic Segments
- **Quick Summary:** `users/:userId/posts/:postId` چند param هم‌زمان.
- **Senior Insight:** Optional/splat را با نسخهٔ router خودت چک کن؛ فرض نکن.

### Param Reading & Validation/Coercion
- **Quick Summary:** عدد/uuid را parse کن؛ نامعتبر → 404/error element نه crash UI.
- **Senior Insight:** IDOR را فقط با چک سرور ببند؛ مخفی کردن route کافی نیست — Security.

### Search Params
- **Quick Summary:** query string به‌عنوان state: فیلتر، sort، صفحه.
- **Senior Insight:** قابل اشتراک/ریفرش؛ برای UI ephemeral (modal) معمولاً زیاده‌روی است.
- **Code:**
```ts
const [sp, setSp] = useSearchParams();
setSp({ q: 'react', page: '2' });
```

### Query String State
- **Quick Summary:** serialize/parse یک‌جا؛ defaultها وقتی کلید نیست.
- **Senior Insight:** از دو منبع (state + URL) بدون sync بپرهیز.

### Filters / Sort / Pagination
- **Quick Summary:** این‌ها کاندید اول URL state هستند.
- **Senior Insight:** با Query keyهای TanStack هماهنگ کن تا cache درست بماند.

### URL Synchronization
- **Quick Summary:** تغییر فیلتر → URL؛ Back/Forward → همان فیلتر.
- **Senior Insight:** `replace` هنگام تایپ جستجو تا history پر نشود.

### Protected Routes
- **Quick Summary:** قبل از رندر صفحه، auth/role را چک و در صورت نیاز redirect کن.
- **Senior Insight:** حفاظت کلاینت UX است؛ مجوز واقعی فقط سرور — Security.
- **Code:**
```tsx
function RequireAuth() {
  const user = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
}
```

### Auth Checks & Redirects
- **Quick Summary:** layout route محافظ؛ کودکان فقط بعد از عبور.
- **Senior Insight:** مقصد قبلی را در `state.from` نگه دار برای برگشت بعد از login.

### Client-Only Limitations
- **Quick Summary:** bundle و routeهای مخفی همچنان قابل حدس/دانلودند.
- **Senior Insight:** دادهٔ حساس را فقط با API مجاز بفرست؛ route guard جایگزین auth نیست.

---

## Lazy Routes & Data Routers

### Lazy Routes
- **Quick Summary:** `lazy: () => import('./Page')` یا `React.lazy` برای code split per route.
- **Senior Insight:** مرز chunk روی صفحه/feature؛ waterfall loader+chunk را اندازه بگیر — Perf.
- **Code:**
```tsx
{ path: 'admin', lazy: () => import('./admin/route') }
```

### Route-Based Code Splitting
- **Quick Summary:** کاربر فقط JS مسیر فعلی را می‌گیرد.
- **Senior Insight:** Prefetch روی hover لینک perceived speed را بالا می‌برد.

### Fallback Loading
- **Quick Summary:** Suspense/fallback هنگام دانلود chunk.
- **Senior Insight:** Skeleton هم‌شکل layout از CLS جلوگیری می‌کند.

### Chunk Boundaries
- **Quick Summary:** یک route ≈ یک chunk منطقی؛ اشتراک vendor جدا.
- **Senior Insight:** import متقاطع سنگین مرز split را می‌شکند — به وابستگی‌ها دقت کن.

### Data Routers Basics
- **Quick Summary:** `loader` قبل از رندر؛ `action` برای mutation فرم؛ `errorElement`.
- **Senior Insight:** ناوبری و داده یکپارچه؛ کمتر `useEffect` fetch روی mount.

### Loaders
- **Quick Summary:** تابع async که دادهٔ route را برمی‌گرداند؛ `useLoaderData`.
- **Senior Insight:** پرتاب `Response`/`defer` الگوهای streaming/404 را فعال می‌کند.
- **Code:**
```ts
export async function loader({ params }) {
  const data = await api.user(params.id);
  if (!data) throw new Response('Not Found', { status: 404 });
  return data;
}
```

### Actions
- **Quick Summary:** پردازش `form` method post/put از route؛ بعداً revalidate.
- **Senior Insight:** Progressive enhancement: فرم بدون JS هم می‌تواند کار کند (با SSR setup).

### Error Elements
- **Quick Summary:** `errorElement` خطای loader/render همان شاخه را می‌گیرد.
- **Senior Insight:** مرز دانه‌ریز بهتر از یک error صفحهٔ سفید سراسری است.

### Mutation / Navigation Integration
- **Quick Summary:** بعد از action، router خودش loaderها را بازخوانی می‌کند.
- **Senior Insight:** با TanStack Query ترکیب کن ولی مالک invalidation را روشن مشخص کن.

---

## Guards, Scroll & URL-Driven State

### Navigation Guards Patterns
- **Quick Summary:** قبل از ترک مسیر: unsaved prompt، auth redirect، نقش کاربر.
- **Senior Insight:** `useBlocker` برای dirty form؛ پیام قبل از دست رفتن داده.

### Unsaved Changes Prompts
- **Quick Summary:** اگر dirty، تأیید کاربر قبل از navigate/refresh.
- **Senior Insight:** `beforeunload` برای بستن تب؛ blocker برای SPA nav — هر دو را بپوشان.

### Auth Redirects
- **Quick Summary:** مهمان → login؛ لاگین‌شده در `/login` → app.
- **Senior Insight:** حلقهٔ redirect با نقش/شرط غلط = باگ شایع؛ شرایط را ساده نگه دار.

### Role-Based Route Handling
- **Quick Summary:** route جدا یا guard بر اساس role/permission.
- **Senior Insight:** UI مخفی ≠ امن؛ API باید همان نقش را enforce کند — Security.

### Scroll Restoration
- **Quick Summary:** برگشت به موقعیت قبلی یا اسکرول بالای صفحه در مسیر جدید.
- **Senior Insight:** لیست بلند بدون restoration = UX ضعیف؛ `<ScrollRestoration />` را بشناس.

### Preserving / Resetting Scroll
- **Quick Summary:** Back = حفظ؛ لینک جدید = معمولاً top؛ hash = اسکرول به id.
- **Senior Insight:** Container اسکرول داخلی غیر window را خودت مدیریت کن.

### SPA UX Expectations
- **Quick Summary:** کاربر رفتار شبیه سایت چندصفحه‌ای از اسکرول و Back می‌خواهد.
- **Senior Insight:** نادیده گرفتن scroll = حس «اپ ناقص» حتی اگر داده درست باشد.

### URL-Driven State
- **Quick Summary:** بخشی از app state که باید share/persist شود داخل URL زندگی می‌کند.
- **Senior Insight:** منبع حقیقت برای فیلترهای قابل‌لینک؛ با local state قاطی نکن.

### Shareable App State
- **Quick Summary:** کپی لینک = همان view برای همکار/کاربر دیگر.
- **Senior Insight:** توکن/secret را در query نگذار — Security.

### Persistence Across Reloads
- **Quick Summary:** Refresh همان صفحه و فیلتر را نگه می‌دارد.
- **Senior Insight:** برخلاف `useState` خالص؛ برای wizard حساس گاهی sessionStorage مکمل است.

### Query vs Local State Tradeoffs
- **Quick Summary:** URL: اشتراک و تاریخچه؛ Local: سرعت و حریم خصوصی UI لحظه‌ای.
- **Senior Insight:** هر keystroke سنگین را مستقیم به URL ننویس — debounce + `replace`.
