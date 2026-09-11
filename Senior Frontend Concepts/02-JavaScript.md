# JavaScript — Cheat Sheet

## Execution Model

### Execution Context
- **Quick Summary:** محیط اجرای کد: global یکبار؛ هر function call یک context جدید.
- **Senior Insight:** Creation phase bindings می‌سازد؛ execution مقادیر را assign می‌کند.

### Creation vs Execution Phase / Variable Environment
- **Quick Summary:** Hoist/bind در creation؛ اجرا خط‌به‌خط؛ VE محل نگه‌داری متغیرها/arguments.
- **Senior Insight:** فهم این مدل پایه TDZ، hoist و closure است.

### Call Stack
- **Quick Summary:** Stack از frameها؛ LIFO؛ recursion عمیق → stack overflow.
- **Senior Insight:** Long sync work روی stack = UI freeze؛ کار را chunk کن.

---

## Scope, Hoisting, Closures

### Scope (Global / Function / Block) / Lexical Scope
- **Quick Summary:** محل تعریف دسترسی را مشخص می‌کند؛ lexical = بر اساس نوشته نه call-site.
- **Senior Insight:** `let`/`const` block-scoped؛ `var` function-scoped — منبع باگ قدیمی.

### Hoisting (`var` / `let` / `const` / Functions) / TDZ
- **Quick Summary:** Declarations بالا می‌آیند؛ `var`=undefined؛ `let`/`const` تا init در TDZ؛ function decl کامل hoist.
- **Senior Insight:** دسترسی قبل از init به `let`/`const` → ReferenceError.

### Closures
- **Quick Summary:** تابع lexical environment بیرونی را زنده نگه می‌دارد حتی بعد از return.
- **Senior Insight:** Stale closure در React/async رایج؛ memory تا unreachable شدن captiveها.

```ts
function makeCounter() {
  let n = 0;
  return () => ++n; // closes over n
}
```

---

## `this` & Prototypes

### `this` Binding Rules
- **Quick Summary:** default→global/`undefined`(strict)؛ implicit→receiver؛ explicit→`call`/`apply`/`bind`؛ `new`→instance.
- **Senior Insight:** Arrow `this` ندارد؛ از lexical بیرونی می‌گیرد — method object نشو.

### Prototypes / Prototype Chain
- **Quick Summary:** اشیاء به prototype delegate می‌کنند؛ lookup از own → chain تا `null`.
- **Senior Insight:** متد مشترک روی prototype = حافظه کمتر از per-instance function.

### `Object.create` / `hasOwnProperty`
- **Quick Summary:** شیء با prototype دلخواه؛ own vs inherited را با `Object.hasOwn`/`hasOwnProperty` تفکیک کن.
- **Senior Insight:** `for...in` inherited را هم می‌آورد؛ معمولاً `Object.keys`/hasOwn ترجیح.

### Classes vs Prototypes
- **Quick Summary:** `class` شکر نحوی روی prototype؛ `constructor`، instance/static methods.
- **Senior Insight:** رفتار runtime همان prototype است؛ فهم chain برای debug ضروری.

---

## Event Loop & Queues

### Event Loop / Single-threaded Model
- **Quick Summary:** یک call stack؛ کار async از queueها وقتی stack خالی است برداشته می‌شود.
- **Senior Insight:** Browser: tasks + microtasks + render؛ Node: phases متفاوت ولی microtask اولویت مشابه.

### Task Queue (Macrotasks)
- **Quick Summary:** `setTimeout`، DOM events، I/O → macrotask؛ بینشان فرصت render هست.
- **Senior Insight:** `setTimeout(0)` فوری نیست؛ بعد از stack + microtasks فعلی.

### Microtask Queue
- **Quick Summary:** Promise jobs و `queueMicrotask`؛ همه قبل از task بعدی/render خالی می‌شوند.
- **Senior Insight:** Microtask بی‌نهایت = starvation UI؛ recursion Promise خطرناک.

```ts
setTimeout(() => console.log("task"), 0);
Promise.resolve().then(() => console.log("micro")); // micro first
```

---

## Async: Promises, await, Errors

### Promises
- **Quick Summary:** `pending` → `fulfilled`/`rejected`؛ سپس immutable؛ chain با then/catch.
- **Senior Insight:** Unhandled rejection را monitor کن؛ خطا در chain ببلع نشود.

### `Promise.all` / `allSettled` / `race`
- **Quick Summary:** all=همه یا fail-fast؛ allSettled=همه نتایج؛ race=اولین settle.
- **Senior Insight:** Parallel fetch با all؛ UI partial با allSettled.

### `async/await`
- **Quick Summary:** شکر روی Promise؛ `try/catch` برای reject؛ await در loop = ترتیبی.
- **Senior Insight:** مستقل‌ها را با `Promise.all` موازی کن نه await پشت‌سرهم.

```ts
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

### Error Handling
- **Quick Summary:** `try/catch/finally`؛ sync همان‌جا؛ async نیاز await/catch؛ custom `Error` subclass.
- **Senior Insight:** مرز لایه‌ها: UI vs domain vs network — یک catch همه‌چیز را قاطی نکند.

---

## Networking Helpers

### `fetch`
- **Quick Summary:** Request شبکه؛ `res.ok` را چک کن — فقط network fail throw می‌کند نه 404/500.
- **Senior Insight:** JSON با `res.json()`؛ credentials برای cookie؛ CORS محدودیت browser.

```ts
const res = await fetch(url);
if (!res.ok) throw new Error(String(res.status));
const data = await res.json();
```

### AbortController
- **Quick Summary:** `signal` برای cancel fetch/timer؛ cleanup روی unmount یا درخواست جدید.
- **Senior Insight:** جلوگیری از race: پاسخ کهنه state را overwrite نکند.

---

## DOM Events

### Bubbling / Capturing / Delegation
- **Quick Summary:** فازها: capture → target → bubble؛ delegation روی parent با matching `target`.
- **Senior Insight:** لیست دینامیک بزرگ: یک listener روی parent به‌جای N تا — perf بهتر.

### `stopPropagation()` / `preventDefault()`
- **Quick Summary:** قطع انتشار فازها؛ جلوگیری از رفتار پیش‌فرض (submit، link...).
- **Senior Insight:** stopPropagation زیاد = debugging جهنم؛ فقط وقتی واقعاً لازم.

---

## Timing Utilities & Copy

### Debounce / Throttle
- **Quick Summary:** Debounce=بعد از سکوت اجرا؛ Throttle=حداکثر یکبار در بازه.
- **Senior Insight:** Search→debounce؛ scroll/resize→throttle.

### Shallow vs Deep Copy
- **Quick Summary:** Spread/`Object.assign` سطحی؛ nested همان reference؛ `structuredClone` عمیق‌تر.
- **Senior Insight:** `JSON.parse(JSON.stringify)` Date/Map/undefined/function را خراب می‌کند.

---

## Equality & Syntax Sugar

### `==` / `===` / `Object.is`
- **Quick Summary:** `==` coerce؛ `===` بدون coerce؛ `Object.is` مثل === ولی `NaN` برابر و `-0`≠`+0`.
- **Senior Insight:** تقریباً همیشه `===`؛ برای NaN از `Number.isNaN`/`Object.is`.

### Destructuring / Spread / Rest
- **Quick Summary:** Unpack object/array با rename/default؛ spread کپی سطحی؛ rest باقی‌مانده.
- **Senior Insight:** Rest در params برای variadic API تمیز.

### Optional Chaining / Nullish Coalescing
- **Quick Summary:** `?.` دسترسی امن؛ `??` فقط برای `null`/`undefined` (برخلاف `||` که falsyها را می‌بلعد).
- **Senior Insight:** `?.` سمت چپ assignment نیست؛ `0`/`''`/`false` را با `??` حفظ کن.

---

## Modules & Bundling

### ESM vs CJS
- **Quick Summary:** ESM=`import`/`export` استاتیک؛ CJS=`require`/`module.exports`؛ default vs named فرق دارد.
- **Senior Insight:** ESM برای tree-shaking؛ interop default گاهی `.default` دردسر دارد.

### Tree Shaking
- **Quick Summary:** حذف dead exportهای ESM توسط bundler؛ side-effect ماژول مانع می‌شود.
- **Senior Insight:** `sideEffects` در package.json مهم است؛ import برای side-effect عمدی را جدا کن.

---

## Iterators & Collections

### Iterators / Generators
- **Quick Summary:** Iterator protocol + `for...of`؛ generator با `function*` مقدار را lazy `yield` می‌کند.
- **Senior Insight:** برای stream/lazy sequence و cancellable iteration مفید.

### Map / Set / WeakMap / WeakSet
- **Quick Summary:** Map کلید هر نوعی؛ Set یکتایی؛ Weak* کلید object با GC قابل‌جمع.
- **Senior Insight:** WeakMap برای metadata خصوصی روی object بدون leak نگه داشتن کلید.

---

## Memory & FP Basics

### Memory Leaks / GC
- **Quick Summary:** Reachability مبناست (mark-and-sweep)؛ listener/timer/closure/DOM detached منابع رایج leak.
- **Senior Insight:** Cleanup در unmount؛ WeakRef فقط برای cache پیشرفته.

### Immutability / Pure Functions / FP Basics
- **Quick Summary:** Replace به‌جای mutate؛ pure=deterministic بدون side effect؛ compose و HOF.
- **Senior Insight:** React state باید immutable update شود تا change detection درست کار کند.

### Idempotency
- **Quick Summary:** تکرار عملیات همان نتیجه امن؛ مهم برای retry شبکه.
- **Senior Insight:** POST غیرidempotent را کور retry نکن؛ کلید idempotency در API.

### Big O Basics
- **Quick Summary:** `O(1)` دسترسی؛ `O(n)` پیمایش؛ `O(log n)` جستجوی تقسیم؛ `O(n²)` حلقه تو در تو.
- **Senior Insight:** Render لیست n×m فیلتر تودرتو = jank؛ پیش‌محاسبه/index/memo استراتژیک.

---

## Array / Object Transforms

### `map` / `filter` / `reduce` / `find` / `some` / `every`
- **Quick Summary:** تبدیل؛ پالایش؛ تجمیع؛ اولین؛ وجود؛ همگی — بدون mutate اصلی (معمولاً).
- **Senior Insight:** Chain بلند = intermediate arrays؛ گاهی یک `reduce` یا loop خوانا/سریع‌تر.

### `Object.entries` / `Object.fromEntries`
- **Quick Summary:** Object ↔ جفت‌های `[key, value]` برای map/filter روی کلیدها.
- **Senior Insight:** کلیدهای object همیشه string/symbol؛ ترتیب/عدد را با Map مقایسه کن.
