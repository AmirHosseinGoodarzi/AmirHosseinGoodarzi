# TanStack Query — Cheat Sheet

## Keys, Freshness & Cache

### Query Keys
- **Quick Summary:** آرایهٔ پایدار هویت cache: `['todos', { status }]`؛ پارامترها داخل key.
- **Senior Insight:** Key ناپایدار (object جدید بی‌نظم) = cache miss و fetch تکراری.
- **Code:**
```ts
useQuery({ queryKey: ['user', userId], queryFn: () => api.user(userId) });
```

### Stable Key Structure
- **Quick Summary:** قرارداد تیمی: entity اول، سپس id/فیلترها به ترتیب ثابت.
- **Senior Insight:** Invalidation با prefix (`['user']`) همهٔ زیرکلیدها را می‌گیرد.

### Parameterized Keys & Cache Scoping
- **Quick Summary:** هر ترکیب پارامتر = ورودی cache جدا؛ scope دقیق داده.
- **Senior Insight:** فیلتر را در key بگذار نه فقط در closure مخفی — دیباگ‌پذیر بماند.

### Stale Time
- **Quick Summary:** مدت fresh بودن؛ تا `staleTime` refetch خودکار برای stale نمی‌شود.
- **Senior Insight:** Default اغلب `0` (فوراً stale)؛ برای دادهٔ کم‌تغییر بالا ببر — Perf/UX.
- **Code:**
```ts
useQuery({ queryKey, queryFn, staleTime: 60_000 });
```

### Fresh vs Stale Data
- **Quick Summary:** Fresh: از cache بدون refetch پس‌زمینه؛ Stale: نشان بده + ممکن است refetch.
- **Senior Insight:** Stale ≠ خالی؛ UX اغلب دادهٔ کهنهٔ فوری + به‌روزسازی بی‌صدا است.

### Refetch Frequency Impact
- **Quick Summary:** `staleTime` پایین + focus/reconnect = ترافیک بیشتر.
- **Senior Insight:** API گران/rate-limit: staleTime و refetchOnWindowFocus را تنظیم کن.

### Cache Time / Garbage Collection
- **Quick Summary:** `gcTime` (قدیماً cacheTime): نگه‌داشت query غیرفعال قبل از حذف از حافظه.
- **Senior Insight:** زیاد = Memory؛ کم = remount همیشه loading بدون placeholder.

### Inactive Query Retention
- **Quick Summary:** وقتی هیچ subscriber نیست، تا gcTime در cache می‌ماند.
- **Senior Insight:** برگشت سریع به صفحه = instant data اگر هنوز gc نشده باشد.

### Memory Tradeoff & Lifecycle
- **Quick Summary:** cache بزرگ سریع‌تر حس می‌شود ولی RAM و دادهٔ کهنهٔ حساس می‌ماند.
- **Senior Insight:** دادهٔ حساس را روی logout با `clear` پاک کن — Security.

---

## Refetch, Invalidation & Mutations

### Refetch Behaviors
- **Quick Summary:** mount، window focus، reconnect، `refetchInterval` — قابل تنظیم per query.
- **Senior Insight:** Dashboard زنده → interval؛ فرم استاتیک → focus را خاموش کن.

### On Mount / Focus / Reconnect / Interval
- **Quick Summary:** هر کدام جدا: `refetchOnMount`، `refetchOnWindowFocus`، `refetchOnReconnect`.
- **Senior Insight:** ترکیب با `staleTime`: اگر fresh باشد بسیاری refetchها skip می‌شوند.

### Invalidation
- **Quick Summary:** `invalidateQueries` علامت stale + refetch برای actives.
- **Senior Insight:** بعد از mutation، هدفمند invalidate کن نه کل cache.
- **Code:**
```ts
await qc.invalidateQueries({ queryKey: ['todos'] });
```

### Targeted Invalidation
- **Quick Summary:** دقیق‌ترین key ممکن؛ یا predicate برای فیلتر هوشمند.
- **Senior Insight:** Broad invalidation = waterfall و UI flicker — Perf.

### After Mutations & Stale Marking
- **Quick Summary:** موفقیت mutate → invalidate/setQueryData؛ سپس UI با حقیقت سرور هم‌تراز.
- **Senior Insight:** فقط `setQueryData` بدون invalidation ممکن است با سرور drift کند.

### Mutation Lifecycle
- **Quick Summary:** `onMutate` → request → `onSuccess`/`onError` → `onSettled`.
- **Senior Insight:** Rollback در `onError`؛ همگام‌سازی نهایی اغلب در `onSettled`.

### `onMutate` / `onSuccess` / `onError` / `onSettled`
- **Quick Summary:** Mutate: optimistic + snapshot؛ Success: merge؛ Error: rollback؛ Settled: همیشه.
- **Senior Insight:** `cancelQueries` در onMutate جلوی overwrite race را می‌گیرد.

### Optimistic Updates
- **Quick Summary:** cache را فوراً عوض کن؛ اگر fail شد به snapshot برگرد؛ بعد invalidate.
- **Senior Insight:** Conflict سرور را جدی بگیر؛ بعد از settle refetch حقیقت را قفل می‌کند.
- **Code:**
```ts
onMutate: async (v) => {
  await qc.cancelQueries({ queryKey });
  const prev = qc.getQueryData(queryKey);
  qc.setQueryData(queryKey, v);
  return { prev };
},
onError: (_e, _v, ctx) => qc.setQueryData(queryKey, ctx?.prev),
onSettled: () => qc.invalidateQueries({ queryKey }),
```

### Snapshotting & Rollback
- **Quick Summary:** prev را در context برگردان؛ در error بازیابی کن.
- **Senior Insight:** چند query درگیر → چند snapshot؛ ناقص = UI شکسته.

---

## Lists, Pagination & Prefetch

### Infinite Queries
- **Quick Summary:** `useInfiniteQuery` صفحات را با `pageParam` زنجیره می‌کند؛ `data.pages`.
- **Senior Insight:** شکل cache آرایهٔ pages است نه یک list تخت — flatten در select/UI.
- **Code:**
```ts
useInfiniteQuery({
  queryKey: ['feed'],
  queryFn: ({ pageParam }) => api.feed(pageParam),
  initialPageParam: 0,
  getNextPageParam: (last) => last.next,
});
```

### Page Param & Load More
- **Quick Summary:** `fetchNextPage` / `hasNextPage` / `isFetchingNextPage` الگوی UX.
- **Senior Insight:** دکمه یا infinite scroll؛ جلوگیری از double-fetch با flagها.

### Cache Shape Understanding
- **Quick Summary:** invalidation کل infinite ممکن است همهٔ صفحات را دوباره بیاورد — هزینه.
- **Senior Insight:** گاهی `setQueryData` هدفمند برای یک آیتم داخل pages بهتر است.

### Pagination
- **Quick Summary:** page در query key؛ هر صفحه cache جدا یا placeholderData برای UX نرم.
- **Senior Insight:** `placeholderData: keepPreviousData` (یا معادل) پرش خالی بین صفحات را کم می‌کند.

### Page-Based Query Keys
- **Quick Summary:** `['users', page, pageSize]` جداسازی واضح cache per صفحه.
- **Senior Insight:** Prefetch صفحهٔ بعدی با همان قرارداد key.

### Placeholder / Keep Previous Patterns
- **Quick Summary:** نمایش دادهٔ قبلی تا دادهٔ صفحهٔ جدید برسد.
- **Senior Insight:** با `isPlaceholderData` استایل/افکت «در حال تعویض» بده.

### Prefetching
- **Quick Summary:** `prefetchQuery` قبل از نیاز (hover لینک، صفحهٔ بعد).
- **Senior Insight:** Perceived latency پایین؛ prefetch کور = هدر رفت ترافیک.
- **Code:**
```ts
qc.prefetchQuery({ queryKey: ['user', id], queryFn: () => api.user(id) });
```

### Next-Page / Route Hover Predict
- **Quick Summary:** روی `onMouseEnter` مسیر یا نزدیک ته لیست prefetch کن.
- **Senior Insight:** فقط برای مسیرهای محتمل؛ موبایل hover ندارد — touch/visible استراتژی بخواه.

---

## Query Composition & SSR

### Dependent Queries
- **Quick Summary:** `enabled: !!id` تا پارامتر آماده شود؛ زنجیرهٔ امن درخواست‌ها.
- **Senior Insight:** بدون `enabled`، `undefined` در URL = 404 نویزی و cache کثیف.
- **Code:**
```ts
const user = useQuery({ queryKey: ['user', id], queryFn: ... });
const posts = useQuery({
  queryKey: ['posts', id],
  queryFn: ...,
  enabled: !!user.data,
});
```

### Chaining Safely
- **Quick Summary:** خروجی یکی ورودی بعدی؛ loading مرکب را صریح مدل کن.
- **Senior Insight:** آبشار طولانی = latency؛ موازی کن اگر وابستگی واقعی نیست.

### Parallel Queries
- **Quick Summary:** چند `useQuery` مستقل همزمان؛ یا `useQueries` برای لیست پویا.
- **Senior Insight:** Concurrency کامل شبکه؛ `isLoading`ها را درست aggregate کن.

### Aggregate Loading States
- **Quick Summary:** `isPending` هر query جدا؛ UI وقتی همه آماده‌اند یا progressive نشان بده.
- **Senior Insight:** یک spinner سراسری گاهی بدتر از skeleton تکه‌تکه است.

### Suspense Integration
- **Quick Summary:** `useSuspenseQuery` داده را suspend می‌کند تا آماده شود؛ fallback از Suspense.
- **Senior Insight:** با Error Boundary جفت کن؛ بدون آن crash به بالا می‌رود.

### Error Boundaries & Fallback Strategy
- **Quick Summary:** مرز Suspense برای loading؛ مرز Error برای fail؛ دانه‌ریز per section.
- **Senior Insight:** Retry UI نزدیک داده بهتر از یک fallback تمام‌صفحه است.

### SSR Hydration / Dehydration
- **Quick Summary:** سرور prefetch → `dehydrate` cache → کلاینت `hydrate` بدون refetch فوری.
- **Senior Insight:** Key و serialize یکسان؛ mismatch = double fetch یا warning.
- **Code:**
```ts
const qc = new QueryClient();
await qc.prefetchQuery({ queryKey, queryFn });
return dehydrate(qc);
```

### Prefetch on Server & Serialize Cache
- **Quick Summary:** دادهٔ لازم مسیر را روی server پر کن؛ JSON قابل انتقال بفرست.
- **Senior Insight:** فقط دادهٔ لازم صفحه؛ cache کامل اپ را serialize نکن.

---

## Errors, Retry, Placeholders & Persistence

### Error Handling
- **Quick Summary:** retry خودکار vs نشان دادن خطا؛ محلی در UI یا boundary سراسری.
- **Senior Insight:** 401/403 را معمولاً retry نکن؛ به auth flow بفرست — Security.

### Retry vs Surfaced Errors
- **Quick Summary:** خطای موقت شبکه → retry؛ خطای دامنه → فوری به کاربر.
- **Senior Insight:** پیام کاربر ≠ log فنی؛ PII در toast نریز.

### Retry Strategies
- **Quick Summary:** پیش‌فرض چند retry با backoff؛ per-query قابل خاموش/سفارشی.
- **Senior Insight:** `retry: (count, err) => err.status >= 500` الگوی رایج.

### Disabling for Some Errors & Backoff
- **Quick Summary:** 4xx را سریع fail کن؛ 5xx/network را با تأخیر نمایی.
- **Senior Insight:** Retry بی‌پایان = فشار به API و باتری — Perf.

### Placeholder Data vs Initial Data
- **Quick Summary:** `placeholderData`: موقتی و UX؛ `initialData`: بذر cache با semantics خاص.
- **Senior Insight:** initialData ممکن است fresh به حساب آید؛ تفاوت stale را در docs نسخه بخوان.

### Temporary Placeholder UX
- **Quick Summary:** اسکلت از دادهٔ تقریبی/قبلی تا پاسخ واقعی برسد.
- **Senior Insight:** با flag مشخص کن تا کاربر دادهٔ موقت را قطعی فرض نکند.

### Cache Seeding
- **Quick Summary:** از detail به list یا برعکس با `setQueryData` بذر بزن.
- **Senior Insight:** شکل داده باید با queryFn سازگار باشد وگرنه hydrate دروغین می‌گیری.

### Query Cancellation
- **Quick Summary:** `queryFn` با `AbortSignal`؛ تغییر key/unmount درخواست را abort می‌کند.
- **Senior Insight:** بدون abort، پاسخ کهنه ممکن است بعداً cache را بنویسد.
- **Code:**
```ts
queryFn: ({ signal }) => fetch(url, { signal }).then(r => r.json())
```

### Stale Request Cleanup & Route Change
- **Quick Summary:** با عوض شدن route/key، fetch قبلی لغو یا ignore می‌شود.
- **Senior Insight:** در wrapperهای دستی fetch حتماً signal را پاس بده.

### Persisted Cache
- **Quick Summary:** persist کلاینت به storage؛ استارت سریع‌تر با hydrate از دیسک.
- **Senior Insight:** version/buster برای schema؛ دادهٔ auth را persist نکن مگر امن — Security.

### Hydration Timing & Version Concerns
- **Quick Summary:** قبل از آماده شدن persist ممکن است fetch زود رخ دهد؛ APIهای persist را هماهنگ کن.
- **Senior Insight:** Invalidation بعد از deploy برای جلوگیری از shape کهنه حیاتی است.

### Devtools
- **Quick Summary:** مشاهدهٔ cache، status، fetch timeline، دستی invalidate/refetch.
- **Senior Insight:** در production bundle نگذار مگر flag محدود؛ اطلاعات داخلی لو نرود.

### Inspecting Cache & Lifecycle Visibility
- **Quick Summary:** چرا refetch شد؟ stale؟ observer چندتا؟ — Devtools جواب می‌دهد.
- **Senior Insight:** قبل از «Query خراب است» اول key و staleTime را در Devtools چک کن.

---

## Anti-Patterns

### Common Anti-Patterns
- **Quick Summary:** Query برای state محلی؛ key ناپایدار؛ invalidate وسیع؛ کپی duplicate در Redux.
- **Senior Insight:** Server state را یک‌بار در Query نگه دار — دو منبع = drift تضمینی.

### Overusing Query for Local State
- **Quick Summary:** modal open یا theme را داخل Query نگذار.
- **Senior Insight:** ابزار غلط = پیچیدگی lifecycle بی‌دلیل.

### Unstable Query Keys
- **Quick Summary:** object inline بدون ساختار ثابت یا ترتیب کلید تصادفی.
- **Senior Insight:** serialize پایدار یا فیلدهای primitive مرتب در آرایه.

### Broad Invalidation
- **Quick Summary:** `invalidateQueries()` بدون فیلتر بعد از هر mutate کوچک.
- **Senior Insight:** Prefetch و staleTime را با invalidation هدفمند ترکیب کن.

### Duplicate State Copies
- **Quick Summary:** همان list در Query و Zustand/Redux هم‌زمان.
- **Senior Insight:** یکی را source of truth کن؛ بقیه derive/select.
