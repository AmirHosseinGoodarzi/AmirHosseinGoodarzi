# TypeScript — Cheat Sheet

## Core Types & Inference

### Type Inference
- **Quick Summary:** TS نوع متغیر/return را حدس می‌زند؛ contextual typing در callback/jsx.
- **Senior Insight:** Annotate مرزهای عمومی (exports، params پیچیده)؛ داخل تابع زیاد annotate نکن.

### `any` vs `unknown` vs `never`
- **Quick Summary:** `any` سیستم نوع را خاموش؛ `unknown` باید narrow شود؛ `never` حالت غیرممکن.
- **Senior Insight:** External data را `unknown` بگیر نه `any`؛ exhaustive switch با `never` چک کن.

### Union / Intersection
- **Quick Summary:** `|` یکی از چند شکل؛ `&` ترکیب همزمان خواص.
- **Senior Insight:** `A & B` متناقض → `never`؛ برای UI state ترجیح discriminated union.

### Literal Types / Discriminated Unions
- **Quick Summary:** `'idle' | 'loading'`؛ با فیلد `type`/`kind` مشترک برای narrow امن.
- **Senior Insight:** مدل state ماشین با union بهتر از booleanهای پراکنده است.

```ts
type State =
  | { status: "idle" }
  | { status: "error"; message: string };
```

---

## Narrowing & Guards

### Type Narrowing (`typeof` / `instanceof` / `in` / CFA)
- **Quick Summary:** Control flow نوع را در شاخه‌ها باریک می‌کند.
- **Senior Insight:** بعد از guard، IDE باید فیلدهای اختصاصی را نشان دهد — وگرنه مدل غلط است.

### Type Guards / Assertion Functions
- **Quick Summary:** Predicate `x is T`؛ `asserts x is T` برای پرتاب خطا و باریک‌سازی.
- **Senior Insight:** Guard دروغین = bug در runtime با خیال compile-safe.

```ts
function isStr(x: unknown): x is string {
  return typeof x === "string";
}
```

---

## Generics & Type Operators

### Generics
- **Quick Summary:** پارامتر نوع برای توابع/interfaceها؛ `extends` محدودیت؛ inference معمولاً بهتر از آرگومان صریح.
- **Senior Insight:** Generic زیاد بدون نیاز = ناخوانا؛ وقتی رابطه بین ورودی/خروجی هست استفاده کن.

### Utility Types (`Partial` / `Required` / `Pick` / `Omit` / `Record` / `ReturnType`)
- **Quick Summary:** تبدیل سریع شکل‌ها؛ `ReturnType<typeof fn>` از پیاده‌سازی نوع می‌کشد.
- **Senior Insight:** Omit/Pick زنجیره‌ای طولانی = بوی مدل دامنه ضعیف.

### `keyof` / `typeof` / Indexed Access
- **Quick Summary:** `keyof T` اتحاد کلیدها؛ `typeof` value→type؛ `T[K]` نوع مقدار خاصیت.
- **Senior Insight:** `as const` + `typeof` برای union از object ثابت عالی است.

### Mapped Types
- **Quick Summary:** `{ [K in keyof T]: ... }` با `-?`/`+readonly` و key remapping `as`.
- **Senior Insight:** پایه ساخت utilityهای سفارشی design-system/API.

### Conditional Types / `extends` / `infer`
- **Quick Summary:** `T extends U ? X : Y`؛ روی union توزیع می‌شود؛ `infer` نوع داخلی را می‌کشد.
- **Senior Insight:** Unwrap: `T extends Promise<infer U> ? U : T`.

```ts
type Elem<T> = T extends (infer U)[] ? U : T;
```

---

## Functions, Interfaces, Mutability

### Function Overloads
- **Quick Summary:** چند signature عمومی + یک implementation signature وسیع‌تر.
- **Senior Insight:** اگر union ساده کافی است overload ننویس — هزینه نگهداری.

### Interface vs `type`
- **Quick Summary:** هر دو شکل object؛ interface extend/merge؛ type برای union/tuple قوی‌تر.
- **Senior Insight:** تیم: props/object → interface یا type یکدست؛ union حتماً `type`.

### Declaration Merging
- **Quick Summary:** Interfaceهای هم‌نام ادغام می‌شوند؛ برای augment کتابخانه مفید.
- **Senior Insight:** Merge تصادفی = باگ نوع پنهان؛ فایل ambient را کنترل کن.

### `readonly`
- **Quick Summary:** خاصیت/آرایه فقط‌خواندنی در compile-time؛ runtime enforce نمی‌کند.
- **Senior Insight:** props و shared config را readonly کن؛ با `as const` عمیق‌تر می‌شود.

### Enums vs Union Literals
- **Quick Summary:** Enum خروجی runtime دارد؛ union/`as const` معمولاً سبک‌تر و tree-shakeable.
- **Senior Insight:** در FE مدرن اغلب union string ترجیح؛ const enum محدودیت bundler دارد.

### Branded Types
- **Quick Summary:** شبیه‌سازی nominal: `type UserId = string & { __brand: "UserId" }`.
- **Senior Insight:** جلوگیری از جابه‌جایی تصادفی IDها/مقدار validate‌شده.

---

## Modules & Augmentation

### Module Augmentation / Declaration Files
- **Quick Summary:** گسترش نوع پکیج third-party با `declare module`؛ `.d.ts` برای JS بدون نوع.
- **Senior Insight:** Augment غلط کل پروژه را آلوده می‌کند؛ نسخه پکیج را هم‌تراز کن.

---

## React + TypeScript

### Component Props / Children / Events / Intrinsics
- **Quick Summary:** `type Props = {...}`؛ `React.ReactNode` برای children؛ `React.ChangeEvent<HTMLInputElement>`.
- **Senior Insight:** از intrinsicها قرض بگیر: `ButtonHTMLAttributes<HTMLButtonElement>`.

```ts
type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};
```

### Typing Hooks (`useState` / `useReducer` / Custom / Generic)
- **Quick Summary:** Inference از initial؛ بدون initial صریح annotate کن؛ reducer با typed actions.
- **Senior Insight:** Custom hook: نوع برگشتی را پایدار و کم‌عریض نگه دار.

### Typing Refs (`DOM` / `forwardRef` / Nullable / Imperative Handle)
- **Quick Summary:** `useRef<HTMLDivElement>(null)`؛ current قبل از mount `null`؛ `forwardRef`+generics.
- **Senior Insight:** `useImperativeHandle` فقط API محدود والد؛ escape hatch نه state عمومی.

---

## Data at the Boundary

### API Response Typing
- **Quick Summary:** DTO جدا از UI model؛ state با discriminated union؛ خطا typed.
- **Senior Insight:** TypeScript runtime validate نمی‌کند — فرض `as Resp` خطرناک است.

### Zod + TypeScript
- **Quick Summary:** Schema منبع حقیقت؛ `z.infer<typeof schema>`؛ `parse`/`safeParse` روی unknown.
- **Senior Insight:** مرز شبکه/فرم را با Zod ببند؛ نوع و validate یکجا می‌مانند.

```ts
const User = z.object({ id: z.string(), email: z.string().email() });
type User = z.infer<typeof User>;
```

---

## Tooling Config

### Strict Mode Flags
- **Quick Summary:** `strict` بسته کامل؛ شامل `noImplicitAny` و `strictNullChecks`.
- **Senior Insight:** `noUncheckedIndexedAccess` سخت ولی باگ index را می‌گیرد — مهاجرت تدریجی.

### `tsconfig` Essentials
- **Quick Summary:** `target`/`module`/`moduleResolution`/`jsx`/`baseUrl`+`paths`/`isolatedModules`/`skipLibCheck`.
- **Senior Insight:** `paths` با bundler sync باشد؛ `skipLibCheck` سرعت می‌دهد ولی باگ `.d.ts` را پنهان می‌کند؛ `isolatedModules` برای transpile تک‌فایلی (Babel/SWC) لازم.
