# React Rendering & State — Cheat Sheet

## What Triggers Renders

### Render Triggers
- **Quick Summary:** re-render با state change، parent render، Context update، یا external store.
- **Senior Insight:** Props change alone trigger نیست مگر parent دوباره render شود (یا store).

### State Changes
- **Quick Summary:** `setState`/`dispatch` همان component و فرزندان پیش‌فرض را schedule می‌کند.
- **Senior Insight:** Batching چند set = یک render؛ همان مقدار (Object.is) اغلب bailout می‌دهد.

### Parent Re-render
- **Quick Summary:** وقتی parent render می‌شود، children به‌طور پیش‌فرض دوباره render می‌شوند.
- **Senior Insight:** حتی با props «مساوی» — مگر `memo` و referential equality برقرار باشد.

### Context Updates
- **Quick Summary:** تغییر Provider value همه consumers آن context را re-render می‌کند.
- **Senior Insight:** Context برای high-churn state = cascade؛ split یا selector store بهتر است.

### External Store Updates
- **Quick Summary:** Redux/Zustand/`useSyncExternalStore` با notify، subscribers را به‌روز می‌کند.
- **Senior Insight:** Selector باریک = کمتر render؛ subscribe به کل store = نویز.

---

## Parent/Child & Keys

### Parent/Child Re-render Behavior
- **Quick Summary:** Default: child با parent می‌آید؛ `React.memo` با props برابر bailout می‌کند.
- **Senior Insight:** Inline object/function در props = memo را خنثی می‌کند.

### Memoized Child Behavior
- **Quick Summary:** `memo(Child)` فقط وقتی props shallow-equal عوض شوند render می‌شود.
- **Senior Insight:** Context مصرف‌شده داخل child همچنان render می‌زند حتی با memo.

### Prop Identity Effects
- **Quick Summary:** هویت مرجع props روی memo، deps، و child optimization اثر می‌گذارد.
- **Senior Insight:** `style={{}}` / `onClick={() => {}}` هر بار جدید → بهینه‌سازی بی‌اثر.

### Key-Based Remounting
- **Quick Summary:** عوض کردن `key` = unmount + mount تازه؛ state محلی صفر می‌شود.
- **Senior Insight:** ابزار عمدی reset فرم/wizard؛ تصادفی در list = از دست رفتن input.

### Reset Local State
- **Quick Summary:** `key={userId}` روی فرم وقتی کاربر عوض می‌شود state کهنه را پاک می‌کند.
- **Senior Insight:** پاک‌کردن دستی چند `useState` شکننده‌تر از remount با key است.

### Preserving Identity
- **Quick Summary:** key پایدار نگه داشتن instance و state هنگام reorder/update.
- **Senior Insight:** هویت منطقی entity را با key مدل کن نه موقعیت آرایه.

### List Key Pitfalls
- **Quick Summary:** index با insert/delete/reorder state را به ردیف اشتباه می‌چسباند.
- **Senior Insight:** لیست فیلتر/مرتب‌شونده همیشه id پایدار می‌خواهد.

---

## Identity, Immutability & Derived State

### Identity and Referential Equality
- **Quick Summary:** `{}`/`[]`/arrow هر render مرجع جدید؛ `Object.is` برای memo/deps شکست می‌خورد.
- **Senior Insight:** پایداری مرجع را فقط جایی بخر که consumer واقعاً identity می‌خواهد.

### Objects/Functions Recreated Each Render
- **Quick Summary:** تعریف داخل component = هویت تازه مگر memo/callback/state نگه دارد.
- **Senior Insight:** ثابت‌های غیر وابسته به props را بیرون component تعریف کن.

### Memoization Impact
- **Quick Summary:** `useMemo`/`useCallback`/`memo` هویت یا نتیجه را قفل می‌کنند تا deps ثابت بماند.
- **Senior Insight:** بدون اندازهٔ هزینه یا child memo، معمولاً noise است (Compiler ممکن است کمک کند).

### Dependency Array Implications
- **Quick Summary:** هویت ناپایدار در deps → effect/memo هر render دوباره اجرا می‌شود.
- **Senior Insight:** اول identity را درست کن؛ dep را حذف نکن تا «آرام شود».

### Immutable Updates
- **Quick Summary:** همیشه next state با کپی؛ mutate درجا React را از تغییر باخبر نمی‌کند.
- **Senior Insight:** Mutation = bailout اشتباه، bug در memo، و زمان‌سفر DevTools خراب.
- **Code:**
```ts
setItems(items => [...items, next]);
setUser(u => ({ ...u, name }));
```

### Arrays / Objects / Nested Updates
- **Quick Summary:** spread برای سطح؛ nested → کپی هر سطح تغییر یافته (یا Immer).
- **Senior Insight:** deep clone کور هزینه و reference churn دارد؛ فقط path لازم را کپی کن.

### Why Mutation Breaks Assumptions
- **Quick Summary:** React با مقایسهٔ مرجع/مقدار قبلی تصمیم render می‌گیرد نه deep watch.
- **Senior Insight:** `arr.push` سپس `setArr(arr)` ممکن است هیچ UI به‌روز نکند.

### Derived State Pitfalls
- **Quick Summary:** کپی props داخل state = دو منبع حقیقت و sync دستی buggy.
- **Senior Insight:** Prefer compute در render؛ sync با `useEffect` آخرین راه‌حل است.

### Duplicated Source of Truth
- **Quick Summary:** همان داده در props و state محلی به‌سرعت ناهمگام می‌شود.
- **Senior Insight:** اگر «editable draft» لازم است، reset را با `key` یا commit صریح مدل کن.

### Syncing Props to State Issues
- **Quick Summary:** `useEffect(() => setX(prop), [prop])` اغلب smell و render اضافه دارد.
- **Senior Insight:** کاملاً controlled باش یا کاملاً uncontrolled با initial + key reset.

### Compute-on-Render Alternatives
- **Quick Summary:** `const full = first + ' ' + last` به‌جای state مشتق.
- **Senior Insight:** اگر گران است `useMemo`؛ اول سادگی، بعد اندازه بگیر.

---

## State Placement & Types

### Colocation of State
- **Quick Summary:** state را نزدیک‌ترین جایی بگذار که خوانده/نوشته می‌شود.
- **Senior Insight:** Colocation بازهٔ re-render را کوچک می‌کند؛ lift فقط برای share واقعی.

### Reducing Re-renders via Colocation
- **Quick Summary:** state پرتنش در leaf = والدهای سنگین بی‌دلیل render نمی‌شوند.
- **Senior Insight:** Input state را از لیست بزرگ جدا کن (child stateful یا deferred).

### Balance with Shared Needs
- **Quick Summary:** چند consumer واقعی → lift یا store؛ یک consumer → محلی بمان.
- **Senior Insight:** Global زودهنگام پیچیدگی و coupling می‌آورد.

### Global vs Local State Tradeoffs
- **Quick Summary:** Local ساده و ایزوله؛ global اشتراک، DevTools، و هزینهٔ معماری.
- **Senior Insight:** مالکیت را از «راحتی دسترسی» جدا فکر کن؛ هر چیز global نیست.

### Scope of Ownership
- **Quick Summary:** چه کسی حق update دارد و lifecycle داده با کدام UI گره خورده؟
- **Senior Insight:** UI-ephemeral (modal open) ندرتاً به Redux نیاز دارد.

### Complexity Cost
- **Quick Summary:** Store بزرگ = boilerplate، قرارداد تیم، و مسیر باگ طولانی‌تر.
- **Senior Insight:** پیچیدگی را با قابلیت لازم هم‌تراز کن نه با مد روز.

### DevTools / Debugging Benefits
- **Quick Summary:** Redux/Zustand DevTools time-travel و action trace می‌دهند.
- **Senior Insight:** برای جریان‌های پیچیده ارزش دارد؛ برای toggle ساده overkill است.

### URL State
- **Quick Summary:** فیلتر/صفحه/sort در search params؛ قابل اشتراک و bookmark.
- **Senior Insight:** Source of truth برای state قابل‌لینک؛ با router sync کن نه کپی در Redux.

### Search Params
- **Quick Summary:** `?q=&page=` به‌عنوان state سریالایز شده در آدرس.
- **Senior Insight:** Parse/serialize یک‌جا؛ نوع و default را صریح نگه دار.

### Shareable Filters & Navigation Persistence
- **Quick Summary:** لینک همان view را بعد از refresh/share برمی‌گرداند.
- **Senior Insight:** UX انتظار deep link دارد؛ فقط `useState` این را نمی‌دهد.

### Form State
- **Quick Summary:** values، errors، dirty/touched، submitting — اغلب در form library.
- **Senior Insight:** با server state قاطی نکن؛ draft محلی است تا submit موفق.

### Field Values / Validation / Metadata
- **Quick Summary:** مقدار فیلد + پیام خطا + touched/dirty جدا از cache سرور.
- **Senior Insight:** Field-level subscription = perf در فرم‌های بزرگ.

### Server State vs Client State
- **Quick Summary:** Server: remote، cacheable، async؛ Client: UI محلی، فوری، ephemeral.
- **Senior Insight:** Server state → TanStack Query؛ client → useState/Zustand. قاطی نکن.

### Fetched / Cacheable Data
- **Quick Summary:** دارای stale/fresh، retry، dedupe، invalidation — کار cache library.
- **Senior Insight:** کپی list سرور داخل Redux بدون policy = چرخ‌اختراع buggy.

### Local Interaction State
- **Quick Summary:** open/close، hover، wizard step، input draft.
- **Senior Insight:** نزدیک UI بمان؛ global کردن دیباگ را سخت می‌کند.

### Choosing the Right Tool
- **Quick Summary:** سؤال: منبع؟ عمر؟ اشتراک؟ نیاز cache/async؟
- **Senior Insight:** اشتباه رایج: همه چیز در یک store — یا Query برای toggle محلی.

---

## Optimistic UI, Normalization & Selectors

### Optimistic UI
- **Quick Summary:** UI فوراً به‌روز می‌شود؛ سرور بعداً تأیید/رد می‌کند.
- **Senior Insight:** حتماً snapshot + rollback؛ conflict سرور را صریح handle کن.
- **Code:**
```ts
onMutate: async (next) => {
  await qc.cancelQueries({ queryKey });
  const prev = qc.getQueryData(queryKey);
  qc.setQueryData(queryKey, next);
  return { prev };
}
```

### Immediate Feedback
- **Quick Summary:** حس سرعت با فرض موفقیت قبل از network settle.
- **Senior Insight:** برای عملیات برگشت‌پذیر مناسب‌تر از پرداخت قطعی است.

### Rollback Handling
- **Quick Summary:** در error، cache/UI را به snapshot قبلی برگردان.
- **Senior Insight:** بدون rollback، optimistic = ناهمگامی دائمی با سرور.

### Server Conflict Risks
- **Quick Summary:** پاسخ نهایی با فرض optimistic فرق دارد (version/permission).
- **Senior Insight:** بعد از settle معمولاً invalidate/refetch برای حقیقت سرور.

### Normalization
- **Quick Summary:** entities به‌صورت map با id؛ روابط با id reference نه nest عمیق.
- **Senior Insight:** Update یک entity بدون بازنویسی کل درخت؛ اشتراک داده بدون duplicate.

### Entity Maps & ID References
- **Quick Summary:** `{ users: { [id]: User }, order: id[] }` الگوی کلاسیک.
- **Senior Insight:** Redux/Query select با id ارزان‌تر از deep find در آرایهٔ تو در تو.

### Update Efficiency
- **Quick Summary:** تغییر یک کلید در map مرجع بقیه را حفظ می‌کند (با selector درست).
- **Senior Insight:** بدون selector، حتی normalize هم broad render می‌دهد.

### Selector Patterns
- **Quick Summary:** تابعی که slice/derived را از store می‌خواند؛ subscribe باریک.
- **Senior Insight:** برگرداندن object جدید هر بار بدون equality = re-render همیشگی.

### Extracting Slices
- **Quick Summary:** `useStore(s => s.user.name)` به‌جای کل `s`.
- **Senior Insight:** چند فیلد → shallow compare یا چند subscription جدا.

### Preventing Unnecessary Renders
- **Quick Summary:** خروجی selector باید فقط وقتی معنا عوض شد مرجع/مقدار جدید بگیرد.
- **Senior Insight:** `useStore(s => ({ a: s.a, b: s.b }))` بدون shallow = دام رایج.

### Memoized Selectors
- **Quick Summary:** Reselect/`createSelector` ورودی‌ها ثابت → همان خروجی cached.
- **Senior Insight:** برای derived گران یا برای حفظ referential stability در map/filter.

### Computed Derivations
- **Quick Summary:** فیلتر/aggregate از state خام در selector نه duplicate state.
- **Senior Insight:** یک منبع حقیقت + derive = کمتر sync bug.

### Cache Invalidation Basics
- **Quick Summary:** وقتی input selector عوض شود cache نتیجه باطل می‌شود.
- **Senior Insight:** Input ناپایدار = هیچ‌وقت hit نمی‌شود؛ همان مشکل identity.

### Referential Stability
- **Quick Summary:** همان ورودی‌ها → همان reference خروجی برای memo children.
- **Senior Insight:** هدف اغلب stability است نه «صرفه‌جویی میکروثانیه».

---

## State Machines

### State Machines Basics
- **Quick Summary:** مجموعهٔ finite states + events + transitions صریح.
- **Senior Insight:** حالت‌های غیرممکن (loading+error با هم) را با مدل حذف کن.

### Finite States
- **Quick Summary:** UI در یک وضعیت مشخص است: `idle | loading | success | error`.
- **Senior Insight:** Booleanهای موازی (`isLoading`+`isError`) ترکیب‌های نامعتبر می‌سازند.

### Transitions
- **Quick Summary:** فقط از state مشخص با event مشخص به next؛ بقیه ignore/illegal.
- **Senior Insight:** رویداد غیرمجاز را خاموش نبلع؛ در ماشین سخت‌گیر باش.

### Impossible State Reduction
- **Quick Summary:** مدل ماشین جلوی `success` با `data: null` و flags متناقض را می‌گیرد.
- **Senior Insight:** TypeScript discriminated unions همان ایده را در سطح نوع می‌دهند.

### UI Workflow Modeling
- **Quick Summary:** Wizard، auth flow، payment — با XState یا reducer ماشینی.
- **Senior Insight:** پیچیدگی جریان بالا = ماشین؛ toggle ساده = overkill.
