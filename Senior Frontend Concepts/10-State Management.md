# State Management — Cheat Sheet

## Context + Reducer

### Context + Reducer Pattern
- **Quick Summary:** `useReducer` در Provider؛ state/dispatch از Context به درخت می‌رسد.
- **Senior Insight:** مناسب app متوسط؛ value ناپایدار یا state پرتنش = re-render گسترده.
- **Code:**
```tsx
const Ctx = createContext(null);
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>;
}
```

### Provider Setup
- **Quick Summary:** یک Provider در root بخش؛ consumers فقط زیر آن معنی دارند.
- **Senior Insight:** `value={{ state, dispatch }}` هر render جدید است → memo یا جدا کردن contexts.

### Reducer Actions
- **Quick Summary:** `{ type, payload }`؛ reducer خالص next state را برمی‌گرداند.
- **Senior Insight:** Side effect داخل reducer نگذار؛ اثر را در handler/effect/middleware بزن.

### Performance Caveats
- **Quick Summary:** هر dispatch همه consumers را render می‌کند مگر جداسازی شود.
- **Senior Insight:** State Context و Dispatch Context را جدا کن؛ یا به Zustand/Redux برو.

### Selector Workaround Patterns
- **Quick Summary:** split context، memo، یا store خارجی با selector به‌جای یک Context بزرگ.
- **Senior Insight:** `useContext` selector بومی ندارد؛ کتابخانه یا external store راه درست است.

---

## Redux & Redux Toolkit

### Redux Fundamentals
- **Quick Summary:** یک store؛ actions توصیف رویداد؛ reducers خالص؛ جریان یک‌طرفه.
- **Senior Insight:** Predicable updates + DevTools؛ boilerplate خام بدون Toolkit سنگین است.

### Single Store
- **Quick Summary:** یک درخت state برای app؛ منطق در slice/reducer جدا می‌شود نه چند store.
- **Senior Insight:** چند store نادر و معمولاً anti-pattern در Redux کلاسیک است.

### Actions
- **Quick Summary:** Plain object با `type`؛ «چه اتفاقی افتاد» نه «چطور UI عوض شود».
- **Senior Insight:** Action creators تایپ‌شده اشتباه string typo را کم می‌کنند.

### Reducers
- **Quick Summary:** `(state, action) => nextState` خالص؛ بدون I/O و random.
- **Senior Insight:** Immutability اجباری؛ با Toolkit/Immer ظاهر mutate مجاز است.

### Unidirectional Flow
- **Quick Summary:** UI → dispatch(action) → reducer → new state → subscribe/render.
- **Senior Insight:** مسیر باگ‌یابی خطی؛ خلاف two-way binding پراکنده.

### Redux Toolkit
- **Quick Summary:** استاندارد مدرن Redux: `configureStore`، `createSlice`، Immer، thunks.
- **Senior Insight:** RTK را پیش‌فرض بدان؛ hand-written Redux دیگر توصیه نمی‌شود.

### `configureStore`
- **Quick Summary:** store با reducerها، middleware پیش‌فرض خوب، DevTools آماده.
- **Senior Insight:** Serializability check در dev اشتباهات non-serializable را لو می‌دهد.

### `createSlice`
- **Quick Summary:** name + initialState + reducers → actions و reducer یکجا.
- **Senior Insight:** کمتر boilerplate؛ action types از نام slice ساخته می‌شوند.
- **Code:**
```ts
const counter = createSlice({
  name: 'counter',
  initialState: { n: 0 },
  reducers: { inc(s) { s.n++; } },
});
```

### Immer Usage
- **Quick Summary:** در slice می‌توانی «mutate» بنویسی؛ Immer نسخهٔ immutable می‌سازد.
- **Senior Insight:** بیرون از Immer هنوز spread دستی؛ اتفاقی mutate واقعی = bug خاموش.

### Async Tooling Overview
- **Quick Summary:** `createAsyncThunk` یا RTK Query برای دادهٔ سرور.
- **Senior Insight:** برای server state اغلب TanStack Query/RTK Query بهتر از thunk دستی است.

---

## Middleware & Async State

### Middleware Concept
- **Quick Summary:** زنجیره بین dispatch و reducer؛ action را می‌بیند/عوض می‌کند/عوارض می‌زند.
- **Senior Insight:** نقطهٔ گسترش برای log، crash report، async — نه منطق UI.

### Intercepting Actions
- **Quick Summary:** قبل از رسیدن به reducer، middleware می‌تواند transform/ignore/dispatch بیشتر کند.
- **Senior Insight:** ترتیب middleware مهم است؛ side effect سنگین را دقیق جای‌گذاری کن.

### Logging
- **Quick Summary:** prev state / action / next state برای دیباگ جریان.
- **Senior Insight:** در production حجم log و PII را کنترل کن — Security.

### Async Side Effects
- **Quick Summary:** thunk/saga/listener middleware کار async را خارج از reducer نگه می‌دارند.
- **Senior Insight:** Cancellation و race را فراموش نکن؛ وگرنه پاسخ کهنه state را می‌نویسد.

### Extensibility Role
- **Quick Summary:** اکوسیستم Redux روی middleware سوار است (persist، router sync، analytics).
- **Senior Insight:** هر قابلیت جدید = middleware؟ نه — فقط وقتی واقعاً cross-cutting است.

### Async State Handling
- **Quick Summary:** معمولاً `idle|loading|success|error` + data/error جدا یا union.
- **Senior Insight:** Booleanهای موازی حالت نامعتبر می‌سازند؛ ماشین/union ترجیح دارد.

### Loading / Error / Data States
- **Quick Summary:** UI برای هر فاز صریح؛ empty ≠ error ≠ loading.
- **Senior Insight:** پس از error، data کهنه را سیاست‌مند نگه دار یا پاک کن.

### Thunks / Sagas / Query Libs
- **Quick Summary:** Thunk ساده؛ Saga جریان پیچیده؛ Query lib cache/dedupe آماده.
- **Senior Insight:** بیشتر اپ‌ها با Query lib از saga بی‌نیاز می‌شوند.

### Cancellation Concerns
- **Quick Summary:** abort درخواست، ignore نتیجهٔ قدیمی، cancel روی unmount/route change.
- **Senior Insight:** بدون cancel = setState/leak و چشمک دادهٔ غلط — Memory/Correctness.

---

## Zustand

### Zustand Fundamentals
- **Quick Summary:** store کوچک با hook API؛ بدون Provider اجباری؛ boilerplate کم.
- **Senior Insight:** عالی برای client state؛ server state را باز هم به Query بسپار.

### Store Creation
- **Quick Summary:** `create((set, get) => ({ ...state, actions }))`.
- **Senior Insight:** Actions را داخل store بگذار تا identity پایدار بماند.
- **Code:**
```ts
const useStore = create((set) => ({
  n: 0,
  inc: () => set(s => ({ n: s.n + 1 })),
}));
```

### Hook-Based Access
- **Quick Summary:** `useStore(selector)` در component؛ خارج React با `useStore.getState()`.
- **Senior Insight:** در event غیر React از `getState` استفاده کن نه hook.

### Minimal API
- **Quick Summary:** عمداً کوچک؛ middleware برای persist/devtools/immer اضافه می‌شود.
- **Senior Insight:** سادگی = سرعت تیم؛ قوانین معماری را خودت وضع کن.

### Mutable Internals with Immutable Updates
- **Quick Summary:** `set` باید state جدید بدهد (یا Immer middleware)؛ mutate خام بدون Immer خطرناک.
- **Senior Insight:** Partial `set({ x })` merge سطحی است نه deep merge خودکار.

### Zustand Selectors
- **Quick Summary:** فقط slice لازم را برگردان تا subscription باریک شود.
- **Senior Insight:** `useStore()` بدون selector = هر تغییر store = re-render.

### Selecting Slices
- **Quick Summary:** `useStore(s => s.user.id)` دقیق و ارزان.
- **Senior Insight:** چند فیلد جدا یا یک object + shallow — یکی را انتخاب کن.

### Preventing Broad Subscriptions
- **Quick Summary:** از انتخاب کل state یا object بزرگ بدون equality بپرهیز.
- **Senior Insight:** این شایع‌ترین منبع jank با Zustand است.

### Derived Reads
- **Quick Summary:** derive در selector یا در store با `get()`؛ duplicate state نساز.
- **Senior Insight:** Object derived جدید هر بار → نیاز به `shallow`.

### Zustand Shallow Compare
- **Quick Summary:** `useStore(selector, shallow)` برای object/array خروجی.
- **Senior Insight:** بدون shallow، `{ a, b }` هر بار مرجع جدید = render دائم.
- **Code:**
```ts
useStore(s => ({ a: s.a, b: s.b }), shallow);
```

### Object Selector Pitfalls
- **Quick Summary:** برگرداندن object/array از selector بدون equality سفارشی.
- **Senior Insight:** یا primitive برگردان، یا shallow، یا چند hook جدا.

### Zustand Middleware
- **Quick Summary:** `devtools`، `persist`، `subscribeWithSelector`، `immer` قابل ترکیب‌اند.
- **Senior Insight:** ترتیب wrap مهم است؛ معمولاً `devtools(persist(...))`.

### Logging / Devtools / Persist / Immer
- **Quick Summary:** DevTools برای trace؛ persist برای storage؛ immer برای draft updates.
- **Senior Insight:** persist دادهٔ حساس را بدون encrypt ننویس — Security.

### Zustand Persist
- **Quick Summary:** sync با `localStorage`/async storage؛ hydrate بعد از خواندن.
- **Senior Insight:** تا قبل از rehydration مقدار اولیه نشان می‌شود — UI flash را مدیریت کن.

### Storage Sync & Rehydration
- **Quick Summary:** خواندن storage → merge به store؛ رویداد `onRehydrateStorage` برای timing.
- **Senior Insight:** SSR: storage مرورگر ندارد؛ persist را فقط client اجرا کن.

### Versioning / Migration Basics
- **Quick Summary:** `version` + `migrate` وقتی شکل state عوض می‌شود.
- **Senior Insight:** بدون migrate، schema قدیم = runtime crash یا data silent-corrupt.

### Zustand Re-render Pitfalls
- **Quick Summary:** select زیاد، derived ناپایدار، فرض غلط دربارهٔ identity اکشن‌ها.
- **Senior Insight:** Actions داخل store معمولاً پایدارند؛ هر render از نو نساز.

### Selecting Too Much State
- **Quick Summary:** یک component به نصف store subscribe می‌کند و مدام render می‌شود.
- **Senior Insight:** UI را بشکن؛ selector را باریک کن.

### Unstable Derived Objects
- **Quick Summary:** `s => s.items.map(...)` هر بار آرایهٔ جدید حتی اگر items همان باشد.
- **Senior Insight:** Memoize بیرون، یا مقایسهٔ سفارشی، یا derive در store با set هوشمند.

### Action Identity Misconceptions
- **Quick Summary:** نیازی به `useCallback` دور `useStore.getState().inc` نیست اگر از store آمده.
- **Senior Insight:** مشکل وقتی action را در component با closure هر render می‌سازی.

---

## Other Libraries & Strategy

### Jotai Basics
- **Quick Summary:** atoms مستقل؛ component به atom subscribe می‌کند نه به کل store.
- **Senior Insight:** Fine-grained updates؛ fore bottom-up به‌جای یک درخت بزرگ.

### Atoms & Derived Atoms
- **Quick Summary:** atom پایه + atom مشتق از بقیه؛ وابستگی خودکار.
- **Senior Insight:** از Context hell و selector دستی برای خیلی موارد بی‌نیاز می‌شوی.

### Fine-Grained Subscriptions
- **Quick Summary:** فقط consumers همان atom با تغییر آن render می‌شوند.
- **Senior Insight:** مناسب UI با قطعات مستقل زیاد؛ نمودار وابستگی را ساده نگه دار.

### Recoil Basics
- **Quick Summary:** atoms + selectors روی graph؛ شبیه Jotai با اکوسیستم Meta تاریخی.
- **Senior Insight:** نگهداری/آیندهٔ پروژه را قبل از انتخاب جدید بررسی کن.

### Graph-Based State Concept
- **Quick Summary:** state به‌صورت گره‌های وابسته؛ derived خودکار invalidate می‌شود.
- **Senior Insight:** قدرت در وابستگی‌هاست؛ پیچیدگی گراف هزینهٔ ذهنی دارد.

### MobX Basics
- **Quick Summary:** observables + reactions؛ سبک mutable با tracking خودکار.
- **Senior Insight:** ذهنی متفاوت از immutable React؛ انضباط تیم لازم است.

### Observables & Reactions
- **Quick Summary:** تغییر observable واکنش‌ها را تریگر می‌کند؛ `observer` برای component.
- **Senior Insight:** Mutation آزاد است ولی مرز React render را درست بفهم.

### Mutable Style Tradeoffs
- **Quick Summary:** کد کوتاه‌تر؛ سخت‌تر برای time-travel و فرض‌های خالص React.
- **Senior Insight:** در تیم immutable-first ممکن است cognitive clash بسازد.

### XState Basics
- **Quick Summary:** ماشین حالت رسمی: states، events، transitions، actors.
- **Senior Insight:** برای workflow پیچیده (onboarding، پرداخت) نه برای هر toggle.

### States / Events / Transitions
- **Quick Summary:** تعریف صریح «از کجا با چه رویدادی به کجا».
- **Senior Insight:** Documentation زندهٔ رفتار؛ تست‌پذیرتر از if پراکنده.

### Invoked Async Flows Basics
- **Quick Summary:** invoke سرویس async داخل state؛ موفقیت/شکست = event.
- **Senior Insight:** Race و cancel در مدل ماشین جای طبیعی دارند.

### Choosing State Management Strategy
- **Quick Summary:** اندازهٔ app، آشنایی تیم، نیاز DevTools، همپوشانی با server state، پیچیدگی.
- **Senior Insight:** Local → Context/Zustand؛ بزرگ/روشن → RTK؛ سرور → Query؛ جریان سخت → XState.

| نیاز | انتخاب رایج |
|------|-------------|
| UI محلی | `useState` / colocate |
| Client مشترک سبک | Zustand |
| Client بزرگ + استاندارد | Redux Toolkit |
| Server/cache | TanStack Query |
| Workflow سخت | XState / reducer machine |
| Prop drilling کم | Context (کم‌چرخش) |
