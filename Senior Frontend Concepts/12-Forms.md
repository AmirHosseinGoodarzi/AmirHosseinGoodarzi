# Forms — Cheat Sheet

## Controlled vs Uncontrolled

### Controlled Forms
- **Quick Summary:** هر فیلد `value` + `onChange`؛ React state منبع حقیقت است.
- **Senior Insight:** اعتبارسنجی لحظه‌ای آسان؛ فرم بزرگ بدون بهینه‌سازی = re-render زیاد.
- **Code:**
```tsx
const [email, setEmail] = useState('');
<input value={email} onChange={e => setEmail(e.target.value)} />
```

### Value + onChange
- **Quick Summary:** جریان یک‌طرفه: state → UI؛ رویداد → setState.
- **Senior Insight:** نیمه‌controlled (`value` بدون onChange) = input قفل‌شده — bug کلاسیک.

### React State as Source of Truth
- **Quick Summary:** همهٔ مقادیر در state/store؛ submit همان snapshot را می‌فرستد.
- **Senior Insight:** برای sync با URL/server، یک owner مشخص کن تا drift نشود.

### Validation Integration
- **Quick Summary:** روی change/blur/submit به schema یا قوانین وصل می‌شود.
- **Senior Insight:** Controlled برای cross-field validation زنده مناسب‌تر است.

### Uncontrolled Forms
- **Quick Summary:** DOM مقدار را نگه می‌دارد؛ خواندن با `ref` یا `FormData` هنگام submit.
- **Senior Insight:** کمتر re-render؛ کنترل دقیق UI لحظه‌ای سخت‌تر است.
- **Code:**
```tsx
const ref = useRef<HTMLInputElement>(null);
<input ref={ref} defaultValue="a@b.com" name="email" />
```

### Refs & Native Form Behavior
- **Quick Summary:** `defaultValue` اولیه؛ native submit و Constraint Validation فعال می‌مانند.
- **Senior Insight:** Reset واقعی با remount/`key` یا `form.reset()` هم‌تراز شود.

### Simpler Inputs & Tradeoffs
- **Quick Summary:** فیلد کم‌تعامل یا prototype سریع → uncontrolled کافی است.
- **Senior Insight:** اگر نیاز به disable شرطی/ماسک پیچیده شد، به controlled/`Controller` برو.

---

## Validation Strategies

### Form Validation Strategies
- **Quick Summary:** native HTML، schema (Zod/Yup)، sync/async، زمان‌بندی change/blur/submit.
- **Senior Insight:** یک source of truth برای قوانین — ترجیحاً schema قابل اشتراک با API.

### Native Validation
- **Quick Summary:** `required`، `type`، `pattern`، `min`/`max`؛ پیام browser پیش‌فرض.
- **Senior Insight:** UX/استایل محدود؛ برای a11y سفارشی معمولاً schema+ARIA لازم است.

### Schema Validation
- **Quick Summary:** تعریف متمرکز شکل داده؛ parse موفق = دادهٔ تایپ‌شده.
- **Senior Insight:** همان schema در client و edge/API = کمتر drift — Security/Consistency.

### Sync vs Async Validation
- **Quick Summary:** Sync فوری؛ async (unique email) بعد از شبکه با loading/error جدا.
- **Senior Insight:** Async بدون debounce/cancel = race و خطا روی مقدار کهنه.

### onChange / onBlur / onSubmit Timing
- **Quick Summary:** Change پر سر و صدا؛ blur ملایم‌تر؛ submit آخرین خط دفاع.
- **Senior Insight:** ترکیب رایج: blur برای فیلد، submit برای کل فرم، change بعد از اولین error.

---

## React Hook Form

### React Hook Form
- **Quick Summary:** register-based، uncontrolled-first؛ re-render حداقلی؛ resolver برای schema.
- **Senior Insight:** انتخاب ارشد برای فرم‌های بزرگ از نظر Performance.
- **Code:**
```ts
const { register, handleSubmit, formState: { errors } } = useForm<Form>();
<input {...register('email', { required: true })} />
```

### Registration Model
- **Quick Summary:** `register('name')` ref + handlers به input بومی وصل می‌کند.
- **Senior Insight:** نام فیلد باید با شکل defaultValues/schema هم‌خوان باشد.

### Uncontrolled-First Design
- **Quick Summary:** مقدار در DOM تا subscribe/watch/submit لازم شود.
- **Senior Insight:** `watch()` گسترده کل مزیت perf را می‌سوزاند — دانه‌ریز subscribe کن.

### Performance Benefits
- **Quick Summary:** تایپ در یک فیلد بقیهٔ فرم را render نمی‌کند (با الگوی درست).
- **Senior Insight:** در فرم ۱۰۰+ فیلد تفاوت محسوس با controlled خالص.

### Resolver Integration
- **Quick Summary:** `zodResolver(schema)` اعتبارسنجی را به RHF وصل می‌کند.
- **Senior Insight:** خطاها به `formState.errors` map می‌شوند؛ مسیر nested را درست نگه دار.

### `Controller`
- **Quick Summary:** پل برای inputهای controlled کتابخانه‌ای (Select، DatePicker).
- **Senior Insight:** فقط جایی که ref/register بومی کار نمی‌کند؛ همه چیز را Controller نکن.
- **Code:**
```tsx
<Controller
  name="country"
  control={control}
  render={({ field }) => <Select {...field} />}
/>
```

### Third-Party Controlled Inputs
- **Quick Summary:** UI lib که فقط `value`/`onChange` می‌فهمد → `Controller` یا `setValue`.
- **Senior Insight:** `onChange` را با قرارداد component مقصد تطبیق بده (رویداد vs value).

### Field Arrays
- **Quick Summary:** `useFieldArray` برای لیست پویا (سطر آیتم‌ها) با append/remove/move.
- **Senior Insight:** `key` پایدار از `field.id` نه index — وگرنه state فیلد قاطی می‌شود.
- **Code:**
```ts
const { fields, append, remove } = useFieldArray({ control, name: 'items' });
```

### Dynamic List Fields & Nested Data
- **Quick Summary:** مسیرهای `items.0.price`؛ مقادیر تودرتو در submit یک object می‌شوند.
- **Senior Insight:** Schema با `z.array(...)` هم‌تراز field array باشد.

### Stable Keys
- **Quick Summary:** RHF برای هر ردیف `id` داخلی می‌دهد؛ در React `key={field.id}`.
- **Senior Insight:** Index key در field array همان bug لیست‌های React است.

---

## Schema Libraries & Async

### Schema Validation (Forms)
- **Quick Summary:** قوانین یکجا؛ UI و شبکه از همان تعریف تغذیه می‌کنند.
- **Senior Insight:** پیام خطا را کاربرپسند در schema یا map لایه‌ای تعریف کن.

### Single Source of Truth
- **Quick Summary:** تکرار `required` در JSX و API ممنوع؛ schema تنها مرجع.
- **Senior Insight:** تغییر قرارداد = یک نقطهٔ ویرایش — کمتر باگ production.

### Typed Validation Output
- **Quick Summary:** بعد از parse موفق، TypeScript نوع خروجی را می‌شناسد.
- **Senior Insight:** `z.infer<typeof schema>` را به `useForm<T>` بده تا end-to-end type شود.

### Zod
- **Quick Summary:** schema declarative؛ `parse`/`safeParse`؛ refine/superRefine برای قوانین پیچیده.
- **Senior Insight:** برای form+API reuse ایده‌آل؛ transform را از validate جدا بفهم.
- **Code:**
```ts
const schema = z.object({
  email: z.string().email(),
  age: z.number().int().min(18),
});
type Form = z.infer<typeof schema>;
```

### Schema Definitions & Parsing
- **Quick Summary:** تعریف شکل؛ parse پرتاب خطا یا safeParse با success/error.
- **Senior Insight:** در UI معمولاً safeParse/resolver؛ در مرز API سخت‌گیر باش.

### Refinements
- **Quick Summary:** `refine` برای password confirm و قوانین چندفیلدی.
- **Senior Insight:** `path` خطا را به فیلد درست بچسبان تا RHF نشان دهد.

### Form + API Validation Reuse
- **Quick Summary:** یک schema در کلاینت و سرور/edge.
- **Senior Insight:** کلاینت UX است نه امنیت؛ سرور همیشه دوباره validate کند — Security.

### Async Validation
- **Quick Summary:** چک uniqueness روی سرور؛ وضعیت pending جدا از sync errors.
- **Senior Insight:** Debounce + AbortController؛ آخرین پاسخ برنده شود.

### Username / Email Availability
- **Quick Summary:** بعد از blur یا debounce؛ پیام «قبلاً گرفته شده».
- **Senior Insight:** 429/rate-limit را به کاربر مهربان نشان بده نه stack trace.

### Debounce & Race Condition Handling
- **Quick Summary:** تایپ سریع چند request؛ فقط نتیجهٔ آخرین مقدار معتبر است.
- **Senior Insight:** بدون cancel، پاسخ کندِ قدیمی خطا روی ایمیل جدید می‌گذارد.

---

## Performance, A11y & Form Meta State

### Form Performance
- **Quick Summary:** کاهش re-render؛ subscription سطح فیلد؛ جدا کردن بخش‌های سنگین.
- **Senior Insight:** RHF + اجتناب از `watch()` سراسری الگوی ارشد است.

### Minimizing Re-renders
- **Quick Summary:** state پرتنش را در leaf نگه دار؛ Context فرم را بدون دقت پخش نکن.
- **Senior Insight:** هر keystroke کل صفحه را نباید reconcile کند.

### Field-Level Subscriptions
- **Quick Summary:** `useWatch({ name })` / `formState` با proxy RHF فقط وابسته‌ها را به‌روز می‌کند.
- **Senior Insight:** `formState` را destructure درست استفاده کن تا proxy subscription فعال شود.

### Large Form Optimization
- **Quick Summary:** wizard چندمرحله، virtualize لیست‌های بلند، lazy mount بخش‌ها.
- **Senior Insight:** Validate فقط مرحلهٔ جاری تا کار CPU/UX سبک بماند.

### Accessible Error Handling
- **Quick Summary:** خطای inline مرتبط با فیلد؛ اعلام برای AT؛ فوکوس روی اولین خطا بعد submit.
- **Senior Insight:** رنگ تنها کافی نیست؛ متن + ARIA الزامی است — a11y.

### Inline Errors
- **Quick Summary:** پیام کنار همان فیلد بلافاصله قابل دیدن و مرتبط.
- **Senior Insight:** خلاصهٔ بالای فرم مکمل است نه جایگزین ارتباط فیلد.

### `aria-describedby` / `aria-invalid`
- **Quick Summary:** `aria-invalid="true"` + `aria-describedby={errorId}` اتصال خطا به input.
- **Senior Insight:** id خطا پایدار باشد؛ بدون لینک، SR پیام را به فیلد وصل نمی‌کند.
- **Code:**
```tsx
<input aria-invalid={!!err} aria-describedby={err ? 'email-err' : undefined} />
<span id="email-err" role="alert">{err}</span>
```

### Focus on Submit Errors
- **Quick Summary:** بعد از submit ناموفق، focus را به اولین فیلد نامعتبر ببر.
- **Senior Insight:** RHF `setFocus`؛ بدون آن صفحه‌کلید/SR گم می‌شوند.

### Live Region Announcements
- **Quick Summary:** `role="alert"` یا `aria-live` برای اعلام خطای مهم/نتیجهٔ submit.
- **Senior Insight:** زندهٔ پرحرفی نکن؛ فقط تغییرات مهم تا AT overload نشود.

### Dirty / Touched / Submit States
- **Quick Summary:** dirty=تغییر از default؛ touched=تعامل؛ submitting/submitted برای UX دکمه.
- **Senior Insight:** هشدار unsaved بر اساس dirty؛ خطا را اغلب بعد از touched/submit نشان بده.

### Pristine vs Dirty
- **Quick Summary:** pristine=بدون تغییر؛ dirty=کاربر مقدار را عوض کرده.
- **Senior Insight:** مقایسهٔ deep برای object/array در field array حساس است.

### Touched Tracking
- **Quick Summary:** فیلد focus/blur دیده؛ برای تأخیر در نمایش خطا مفید است.
- **Senior Insight:** نمایش خطا از frame اول معمولاً UX بد است.

### Submitting State
- **Quick Summary:** disable دکمه، جلوگیری double-submit، نشان spinner.
- **Senior Insight:** Idempotency سمت سرور هم لازم است — فقط UI کافی نیست — Security.

### Submit Success / Failure Handling
- **Quick Summary:** موفقیت: reset/redirect/toast؛ شکست: خطاهای سرور را به فیلدها map کن.
- **Senior Insight:** خطای شبکه را از 422 اعتبارسنجی جدا کن تا پیام درست باشد.
