# React Core — Cheat Sheet

## JSX & Virtual DOM

### JSX Syntax Rules
- **Quick Summary:** JSX = syntactic sugar برای `React.createElement`؛ یک root، `className`، camelCase props.
- **Senior Insight:** Expressionها داخل `{}`؛ statement مستقیم (مثل `if`) داخل JSX مجاز نیست.

### JSX Expressions
- **Quick Summary:** هر JS expression معتبر داخل `{}`؛ شرط با ternary/`&&`؛ آرایهٔ elements.
- **Senior Insight:** Object خام render نمی‌شود؛ `undefined`/`null`/`false` چیزی نشان نمی‌دهند.

### Fragments
- **Quick Summary:** `<>...</>` یا `<React.Fragment>` چند child بدون DOM node اضافه.
- **Senior Insight:** Fragment با `key` فقط شکل explicit؛ برای list of groups مفید است.

### Transpilation Concept
- **Quick Summary:** Babel/SWC JSX را به function calls تبدیل می‌کند (classic یا automatic runtime).
- **Senior Insight:** Automatic JSX runtime نیاز به `import React` برای JSX ندارد.

### Virtual DOM
- **Quick Summary:** نمایش سبک in-memory از UI tree برای مقایسهٔ تغییرات قبل از DOM touch.
- **Senior Insight:** VDOM alone سریع نیست؛ diff + batching + Fiber scheduling داستان کامل‌اند.

### Diffing Motivation
- **Quick Summary:** مقایسهٔ درخت قبلی/جدید تا حداقل mutation روی real DOM انجام شود.
- **Senior Insight:** Heuristics O(n) هستند نه perfect tree-diff؛ فرض‌های type/key حیاتی‌اند.

---

## Reconciliation & Fiber

### Reconciliation
- **Quick Summary:** الگوریتم تطبیق element tree با fiber tree و تصمیم update/remount.
- **Senior Insight:** همان type در همان موقعیت → update؛ type عوض → unmount + remount subtree.

### Diffing Heuristics
- **Quick Summary:** مقایسه سطح‌به‌سطح؛ type اول، سپس props؛ lists با keys.
- **Senior Insight:** جابه‌جایی بدون key پایدار = remount اشتباه و از دست رفتن state.

### Element Type Changes
- **Quick Summary:** تغییر `div`→`span` یا Component A→B کل subtree را از نو می‌سازد.
- **Senior Insight:** State محلی با remount reset می‌شود؛ برای reset عمدی از `key` استفاده کن.

### Keys Importance
- **Quick Summary:** هویت پایدار item در list؛ React بداند کدام node جابه‌جا/حذف/اضافه شد.
- **Senior Insight:** Index key با reorder/insert در وسط → bugهای state و focus و animation.

### Subtree Preservation / Remounting
- **Quick Summary:** همان type + همان key → preserve؛ تغییر key یا type → remount کامل.
- **Senior Insight:** Remount ابزار reset فرم/wizard است؛ تصادفی هزینه‌بر و buggy است.

### Fiber Architecture Basics
- **Quick Summary:** واحد کار داخلی React؛ درخت linked-list قابل pause/resume/abort.
- **Senior Insight:** Render از commit جداست؛ کار می‌تواند قبل از paint قطع شود (Concurrent).

### Interruptible Work
- **Quick Summary:** React می‌تواند render را متوقف کند تا به input فوری برسد.
- **Senior Insight:** Side effect در render ممنوع؛ فقط commit/effects قطعی‌اند.

### Scheduling & Priority Model
- **Quick Summary:** به‌روزرسانی‌ها اولویت دارند؛ urgent (input) vs transition (non-urgent).
- **Senior Insight:** `startTransition`/`useDeferredValue` اولویت را پایین می‌آورند تا UI پاسخگو بماند.

---

## Rendering Lifecycle

### Render Phase
- **Quick Summary:** محاسبهٔ next UI بدون DOM mutation؛ ممکن است تکرار/قطع شود.
- **Senior Insight:** Render باید pure باشد؛ fetch/subscription اینجا = bug در Concurrent.

### Commit Phase
- **Quick Summary:** اعمال تغییرات به DOM سپس اجرای layout/passive effects.
- **Senior Insight:** Commit atomic و synchronous است؛ بعد از آن UI با tree نهایی هم‌خوان است.

### Effect Timing Basics
- **Quick Summary:** `useLayoutEffect` قبل از paint؛ `useEffect` بعد از paint (passive).
- **Senior Insight:** اندازه‌گیری layout قبل از flicker → layout effect؛ بقیه → passive.

### DOM Mutations
- **Quick Summary:** در commit، React DOM را با fiber changes همگام می‌کند.
- **Senior Insight:** دستکاری مستقیم DOM خارج از React بدون ref هماهنگ = conflict با reconcile.

### Layout Effects
- **Quick Summary:** `useLayoutEffect` بعد از DOM mutation، قبل از browser paint اجرا می‌شود.
- **Senior Insight:** Blocking paint؛ فقط برای measure/sync DOM ضروری — Performance risk.

### Passive Effects
- **Quick Summary:** `useEffect` بعد از paint؛ مناسب fetch، subscription، logging.
- **Senior Insight:** Cleanup قبل از re-run و unmount؛ leak را اینجا ببند.

---

## Concurrent Features & StrictMode

### Concurrent Rendering
- **Quick Summary:** امکان interruptible render و اولویت‌بندی updates برای responsiveness.
- **Senior Insight:** Mental model: render ممکن است discarded شود؛ effects فقط روی committed tree.

### Interruptible Rendering
- **Quick Summary:** کار سنگین UI می‌تواند yield کند تا click/type فوری بماند.
- **Senior Insight:** با `startTransition` updates غیرضروری را از urgent جدا کن.

### Transitions
- **Quick Summary:** `startTransition` / `useTransition` برای به‌روزرسانی‌های غیر فوری (filter، tab).
- **Senior Insight:** `isPending` برای UX؛ state فوری (input value) را transition نکن.
- **Code:**
```ts
const [isPending, startTransition] = useTransition();
startTransition(() => setQuery(next));
```

### Responsiveness Benefits
- **Quick Summary:** UI تایپ/کلیک روان می‌ماند حتی وقتی list سنگین re-render می‌شود.
- **Senior Insight:** بدون transition، هر keystroke کل heavy tree را block می‌کند.

### StrictMode
- **Quick Summary:** چک‌های development-only برای کشف side effect ناامن و APIهای قدیمی.
- **Senior Insight:** Double-invoke render/effects در dev عمدی است؛ production یک‌بار اجرا می‌شود.

### Double-Invoked Effects / Rendering
- **Quick Summary:** Mount → effect → cleanup → effect دوباره برای آشکار کردن missing cleanup.
- **Senior Insight:** اگر double mount bug می‌سازد، cleanup/idempotency ناقص است — نه «StrictMode خراب».

### Finding Unsafe Side Effects
- **Quick Summary:** Mutation در render، subscribe بدون cleanup، اتکا به single-run effect.
- **Senior Insight:** Effect باید restart-safe باشد؛ Concurrent همین را اجباری می‌کند.

---

## Components, Props & State

### Function Components
- **Quick Summary:** تابعی که props می‌گیرد و element برمی‌گرداند؛ hooks برای state/effects.
- **Senior Insight:** Class تقریباً legacy؛ error boundary هنوز گاهی class لازم دارد.

### Composition
- **Quick Summary:** ساخت UI از ترکیب اجزای کوچک به‌جای درخت وراثتی عمیق.
- **Senior Insight:** `children`/slots انعطاف بیشتر از config-prop غول‌پیکر می‌دهند.

### Reusability Boundaries
- **Quick Summary:** مرز reuse = رفتار پایدار + API واضح؛ نه هر تکه JSX مشترک.
- **Senior Insight:** Premature abstraction بدتر از duplication کوتاه‌مدت است.

### Props & One-Way Data Flow
- **Quick Summary:** داده از parent به child؛ child با callback به بالا اطلاع می‌دهد.
- **Senior Insight:** Mutate کردن props ممنوع؛ منبع حقیقت همان owner است.

### Prop Drilling Basics
- **Quick Summary:** عبور props از چند لایهٔ میانی که خودشان استفاده نمی‌کنند.
- **Senior Insight:** ۲–۳ سطح OK؛ عمیق‌تر → composition، Context، یا state library.

### Stable Prop Patterns
- **Quick Summary:** مقدار/تابع پایدار برای memoized children و dependency arrays.
- **Senior Insight:** Object/array/function جدید هر render = memo بی‌اثر و effect دوباره.

### Local State
- **Quick Summary:** `useState`/`useReducer` متعلق به همان component؛ با unmount از بین می‌رود.
- **Senior Insight:** Minimal state: فقط آنچه compute از props/دیگر state نمی‌شود.

### Async Updates Mental Model
- **Quick Summary:** `setState` زمان‌بندی می‌شود؛ خواندن state بلافاصله بعد از set همان render قبلی است.
- **Senior Insight:** برای مبتنی‌بر مقدار قبلی از updater: `setX(x => x + 1)`.

### Minimal State Principle
- **Quick Summary:** یک source of truth؛ بقیه را derive کن در render.
- **Senior Insight:** State تکراری = sync bug؛ derived را در state نگه ندار.

### Lifting State Up
- **Quick Summary:** state مشترک را به نزدیک‌ترین ancestor مشترک ببر.
- **Senior Insight:** Tradeoff: shared ownership vs prop drilling و بازهٔ re-render بزرگ‌تر.

### Colocation Tension
- **Quick Summary:** state نزدیک مصرف vs lift برای اشتراک؛ تنش دائمی طراحی.
- **Senior Insight:** اول colocate؛ فقط وقتی دو consumer واقعی داری lift کن.

### Controlled vs Uncontrolled Components
- **Quick Summary:** Controlled: value از React state؛ Uncontrolled: DOM/`ref` منبع حقیقت.
- **Senior Insight:** Form libs اغلب uncontrolled-first برای perf؛ UI پیچیده → controlled/`Controller`.
- **Code:**
```tsx
<input value={v} onChange={e => setV(e.target.value)} /> // controlled
<input ref={ref} defaultValue="x" /> // uncontrolled
```

---

## Composition Patterns & Rendering

### Composition vs Inheritance
- **Quick Summary:** React composition را ترجیح می‌دهد؛ inheritance برای UI تقریباً antipattern است.
- **Senior Insight:** منطق مشترک → custom hook؛ UI مشترک → children/slots نه base class.

### Slots / Children Patterns
- **Quick Summary:** `children` یا named props مثل `header`/`footer` برای جایگذاری محتوا.
- **Senior Insight:** از prop-drilling محتوا با composition جلوگیری کن؛ API خواناتر می‌شود.

### Conditional Rendering
- **Quick Summary:** `if` قبل return، ternary، `&&`، یا `return null` برای عدم نمایش.
- **Senior Insight:** `count && <X/>` با `0` خطرناک است؛ از `count > 0 &&` یا ternary استفاده کن.

### Lists and Keys
- **Quick Summary:** `map` به elements با `key` پایدار و یکتا در میان siblings.
- **Senior Insight:** Key از id پایدار؛ index فقط برای list استاتیک بدون reorder/insert.

### Why Index Keys Are Risky
- **Quick Summary:** با تغییر ترتیب، React state را به index اشتباه وصل می‌کند.
- **Senior Insight:** Input داخل list + index key = معروف‌ترین bug مصاحبه.

### Reordering Implications
- **Quick Summary:** بدون stable key، reorder = remount/mismatch؛ animation و focus خراب.
- **Senior Insight:** DnD و filter/sort حتماً id-based keys می‌خواهند.

---

## Refs, Portals & Error Boundaries

### Refs
- **Quick Summary:** دسترسی به DOM node یا نگه‌داشتن مقدار mutable بدون re-render.
- **Senior Insight:** Overuse = فرار از React model؛ اول state، ref برای imperative/DOM.

### Mutable Values via Ref
- **Quick Summary:** `ref.current` بین renders پایدار می‌ماند و update آن render نمی‌زند.
- **Senior Insight:** Ideal برای timer id، previous value، latest callback بدون stale closure.

### Forward Refs
- **Quick Summary:** `forwardRef` اجازه می‌دهد parent به DOM داخلی child دسترسی بگیرد.
- **Senior Insight:** در design system برای focus management ضروری است.
- **Code:**
```tsx
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} {...props} />
));
```

### Imperative Access Use Cases
- **Quick Summary:** `focus()`, `scrollIntoView`, integrate با non-React lib از طریق ref.
- **Senior Insight:** با `useImperativeHandle` سطح API را محدود و کنترل کن.

### Portals
- **Quick Summary:** `createPortal(child, domNode)` خارج از parent DOM ولی در همان React tree.
- **Senior Insight:** Modal/popover/tooltip؛ z-index و overflow parent را دور می‌زند.

### Event Bubbling Behavior
- **Quick Summary:** رویدادهای portal در React tree به parent منطقی bubble می‌شوند نه فقط DOM.
- **Senior Insight:** Handler روی parent React هنوز portal events را می‌گیرد — intentional.

### Error Boundaries
- **Quick Summary:** Catch خطاهای render در subtree و نمایش fallback؛ class یا library.
- **Senior Insight:** Event handlers، async، SSR، و خود boundary را catch نمی‌کنند.
- **Code:**
```tsx
<ErrorBoundary fallback={<ErrorUI />}>
  <RiskyTree />
</ErrorBoundary>
```

### Fallback UI Strategy
- **Quick Summary:** Fallback محلی برای بخش؛ نه لزوماً کل صفحه سفید.
- **Senior Insight:** Boundary دانه‌ریز + logging = resilience بهتر در production.

---

## Context API

### Provider / Consumer Model
- **Quick Summary:** `createContext` + `Provider` value؛ consumers با `useContext` می‌خوانند.
- **Senior Insight:** Value جدید هر render (object literal) = همه consumers re-render.

### Avoiding Prop Drilling
- **Quick Summary:** Theme، locale، auth session از طریق Context به‌جای عبور لایه به لایه.
- **Senior Insight:** برای high-frequency state (هر keystroke) Context اغلب اشتباه است.

### Re-render Caveats
- **Quick Summary:** تغییر value → تمام consumers زیر آن Provider دوباره render می‌شوند.
- **Senior Insight:** Split contexts، memo value، یا store+selector جایگزین بهتر است.

---

## Hooks Rules & Core Hooks

### Hooks Rules
- **Quick Summary:** فقط top-level؛ فقط در React function/custom hook؛ نه در loop/condition.
- **Senior Insight:** `eslint-plugin-react-hooks` اجباری؛ نقض = state mismatch خاموش.

### `useState`
- **Quick Summary:** state محلی + setter؛ lazy init با تابع؛ updater برای مبتنی‌بر prev.
- **Senior Insight:** Automatic batching چند set را در یک render جمع می‌کند.
- **Code:**
```ts
const [n, setN] = useState(() => expensive());
setN(v => v + 1);
```

### `useReducer`
- **Quick Summary:** `(state, action) => next`؛ مناسب state پیچیده با transitions واضح.
- **Senior Insight:** وقتی چند set به هم وابسته‌اند یا action modeling ارزش دارد، بهتر از `useState`.

### `useEffect`
- **Quick Summary:** side effect بعد از paint؛ deps کنترل re-run؛ cleanup برای teardown.
- **Senior Insight:** Race در fetch: flag/`AbortController` در cleanup؛ deps ناقص = stale bug.
- **Code:**
```ts
useEffect(() => {
  const ac = new AbortController();
  load(id, { signal: ac.signal });
  return () => ac.abort();
}, [id]);
```

### `useLayoutEffect`
- **Quick Summary:** قبل از paint برای اندازه‌گیری/همگام‌سازی DOM.
- **Senior Insight:** SSR warning؛ ترجیحاً کمتر استفاده؛ blocking = jank risk.

### `useMemo`
- **Quick Summary:** cache نتیجهٔ محاسبهٔ سنگین تا deps عوض شوند.
- **Senior Insight:** برای هر محاسبهٔ کوچک misuse است؛ هدف: cost یا referential stability.

### `useCallback`
- **Quick Summary:** تابع memoized با deps؛ پایدار برای child memo و effect deps.
- **Senior Insight:** بدون consumer که identity بخواهد، overhead بی‌فایده است.

### `useRef`
- **Quick Summary:** `{ current }` پایدار؛ DOM یا mutable box بدون re-render.
- **Senior Insight:** خواندن/نوشتن `current` در render برای UI state جایگزین `useState` نشود.

### `useContext`
- **Quick Summary:** خواندن نزدیک‌ترین Provider؛ با تغییر value، consumer re-render می‌شود.
- **Senior Insight:** برای slice دقیق از storeهای بزرگ، selector libs بهتر از raw Context.

### `useImperativeHandle`
- **Quick Summary:** سفارشی‌سازی مقداری که parent از طریق ref می‌بیند (با `forwardRef`).
- **Senior Insight:** سطح حملهٔ imperative را کوچک نگه دار؛ فقط متدهای لازم expose کن.
- **Code:**
```ts
useImperativeHandle(ref, () => ({ focus: () => inputRef.current?.focus() }));
```

### `useTransition`
- **Quick Summary:** علامت‌گذاری update به‌عنوان non-urgent + `isPending`.
- **Senior Insight:** Input فوری را جدا نگه دار؛ فقط نتیجهٔ سنگین را transition کن.

### `useDeferredValue`
- **Quick Summary:** نسخهٔ معوق یک value برای renderهای گران (search results).
- **Senior Insight:** UI فوری با value خام؛ list سنگین با deferred — بدون مدیریت دستی pending.

### `useId`
- **Quick Summary:** ID پایدار و SSR-safe برای اتصال label/input و a11y.
- **Senior Insight:** برای list keys استفاده نکن؛ فقط برای DOM id uniqueness.

### `useSyncExternalStore`
- **Quick Summary:** اشتراک به store خارجی با snapshot سازگار با Concurrent.
- **Senior Insight:** پایهٔ Redux/Zustand bindings مدرن؛ از tearing جلوگیری می‌کند.

---

## Custom Hooks, Batching & Closures

### Custom Hooks
- **Quick Summary:** استخراج منطق stateful با نام `use*`؛ UI جدا از behavior.
- **Senior Insight:** Hook باید یک concern داشته باشد؛ God-hook ضد maintainability است.

### State Batching
- **Quick Summary:** React 18+ حتی در timeouts/promises چند update را batch می‌کند.
- **Senior Insight:** کمتر render میانی؛ برای flush فوری نادر از `flushSync` ( sparingly).

### Stale Closures
- **Quick Summary:** handler/effect مقدار قدیمی state را از closure می‌گیرد.
- **Senior Insight:** Fix: deps کامل، updater function، یا ref به latest value.

### Dependency Arrays
- **Quick Summary:** exhaustive-deps = هر مقدار reactive که داخل effect/memo خوانده می‌شود.
- **Senior Insight:** حذف dep برای «بهینه‌سازی» معمولاً bug پنهان است؛ identity را پایدار کن.

### Effect Cleanup
- **Quick Summary:** unsubscribe، `clearTimeout`، `abort` fetch، لغو listeners.
- **Senior Insight:** بدون cleanup → leak، setState روی unmounted، race روی پاسخ کهنه.

---

## Events & Legacy Patterns

### React Event System
- **Quick Summary:** Synthetic events با delegation در root؛ API نرمال‌شده بین browsers.
- **Senior Insight:** در React 17+ delegation به root container است نه `document`.

### Synthetic Events
- **Quick Summary:** wrapper نرمال روی native event؛ `e.nativeEvent` برای دسترسی خام.
- **Senior Insight:** Event pooling قدیمی حذف شده؛ نگه داشتن `e` بعد از handler در modern OK است.

### Render Props
- **Quick Summary:** الگوی `children(api)` یا `render={api => ...}` برای اشتراک منطق.
- **Senior Insight:** انعطاف بالا، خوانایی پایین‌تر؛ اغلب با hooks جایگزین شده.

### HOC Pattern
- **Quick Summary:** تابعی که Component می‌گیرد و نسخهٔ enhanced برمی‌گرداند.
- **Senior Insight:** Prop forwarding + displayName مهم؛ wrapper hell و static type دردسر.

### Compound Components
- **Quick Summary:** اجزای مرتبط با Context والد مشترک (Tabs/Tab/Panel).
- **Senior Insight:** API بیانی مثل HTML؛ implicit state sharing بدون prop drilling زیاد.
- **Code:**
```tsx
<Tabs>
  <TabList><Tab>A</Tab></TabList>
  <TabPanel>…</TabPanel>
</Tabs>
```

### Headless Component Patterns
- **Quick Summary:** منطق و a11y بدون UI/style اجباری؛ consumer رندر را کنترل می‌کند.
- **Senior Insight:** Accessibility ownership روی headless lib است؛ استایل را جدا نگه دار.

---

## Suspense, Lazy & RSC Boundaries

### Suspense
- **Quick Summary:** مرز async با `fallback` تا وقتی child آماده شود (code/data).
- **Senior Insight:** با Error Boundary جفت کن؛ Suspense خطا را handle نمی‌کند.

### Lazy Components
- **Quick Summary:** `React.lazy(() => import(...))` + Suspense برای code splitting.
- **Senior Insight:** مرز chunk روی route/feature سنگین؛ نه هر دکمهٔ کوچک.
- **Code:**
```tsx
const Page = lazy(() => import('./Page'));
<Suspense fallback={<Spinner />}><Page /></Suspense>
```

### Server Components Concept
- **Quick Summary:** Componentهایی که روی server اجرا/رندر می‌شوند و JS کمتری به client می‌فرستند.
- **Senior Insight:** Bundle reduction و دسترسی مستقیم به backend؛ تعاملی نیستند.

### Client Components Concept
- **Quick Summary:** `"use client"`؛ hooks، events، browser APIs؛ مرز interactive.
- **Senior Insight:** هر Client boundary هزینهٔ bundle دارد؛ تا جای ممکن leaf را client کن.
