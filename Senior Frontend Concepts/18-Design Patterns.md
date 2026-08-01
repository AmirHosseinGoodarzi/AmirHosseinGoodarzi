# Design Patterns — Cheat Sheet

## Classic GoF-style (Frontend Lens)

### Singleton
- **Quick Summary:** یک instance سراسری (store، client، config).
- **Senior Insight:** تست و global state را سخت می‌کند؛ در SSR مواظب leakage بین requestها باش.

### Factory
- **Quick Summary:** انتزاع ساخت object بر اساس config/type بدون `new` پراکنده.
- **Senior Insight:** برای mapperها، chart/series builders، و چند پیاده‌سازی یک قرارداد.

```ts
function createClient(env: 'mock' | 'live'): ApiClient {
  return env === 'mock' ? new MockClient() : new HttpClient();
}
```

### Strategy
- **Quick Summary:** الگوریتم‌های قابل‌تعویض به‌جای شاخه‌های شرطی تو در تو.
- **Senior Insight:** قوانین قیمت‌گذاری، validation، و render strategy را pluggable نگه دار.

### Adapter
- **Quick Summary:** ترجمهٔ interface خارجی به قرارداد داخلی (DTO/third-party SDK).
- **Senior Insight:** SDK عوض شد فقط Adapter می‌شکند — UI دست‌نخورده می‌ماند.

### Observer
- **Quick Summary:** مدل subscription؛ subject تغییر را به observers خبر می‌دهد.
- **Senior Insight:** پایهٔ storeها و EventTarget؛ unsubscribe فراموش = memory leak.

### Pub/Sub
- **Quick Summary:** messaging جدا از هم از طریق event bus؛ ناشر مشترک را نمی‌شناسد.
- **Senior Insight:** Overuse = جریان مبهم و debug سخت؛ برای cross-cutting محدود استفاده کن.

### Decorator
- **Quick Summary:** افزودن رفتار بدون تغییر هسته (HOF، wrapper class، middleware).
- **Senior Insight:** لایه‌های زیاد = stack opaque؛ ترتیب decoratorها معنادار است.

### Facade
- **Quick Summary:** سطح API ساده روی چند subsystem پیچیده.
- **Senior Insight:** نقطهٔ ورود تیم/feature؛ جزئیات infra را پشت facade پنهان کن.

### Command
- **Quick Summary:** کپسوله‌سازی action به‌عنوان object؛ مناسب dispatch و undo/redo.
- **Senior Insight:** editorها، queues، و analytics intent را command کن.

### State Pattern
- **Quick Summary:** رفتار وابسته به state جاری؛ workflow متناهی (wizard، payment).
- **Senior Insight:** بهتر از boolean flags متعدد؛ با XState/reducer رسمی‌تر می‌شود.

---

## Data & DI

### Dependency Injection
- **Quick Summary:** ساخت وابستگی را invert کن؛ از بیرون تزریق کن نه hardcode داخل.
- **Senior Insight:** تست‌پذیری بالا؛ در فرانت با context، params، یا factory سبک رایج است.

### Repository Pattern
- **Quick Summary:** انتزاع دسترسی داده؛ تعویض API/storage پشت یک قرارداد دامنه.
- **Senior Insight:** UI به HTTP جزئیات وابسته نباشد؛ repository زبان دامنه صحبت کند.

---

## React-centric Patterns

### Composition Pattern
- **Quick Summary:** ترکیب parts/behavior به‌جای inheritance؛ الگوی اول React.
- **Senior Insight:** انعطاف و reuse بالاتر از class hierarchy عمیق.

### Render Props
- **Quick Summary:** child به‌صورت function برای اشتراک منطق cross-cutting.
- **Senior Insight:** verbose و nesting تلخ؛ در کد جدید اغلب hook جایگزین می‌شود.

```tsx
<Mouse>{({ x, y }) => <Cursor x={x} y={y} />}</Mouse>
```

### Higher-Order Components (HOC)
- **Quick Summary:** wrapper برای enhance کردن component؛ استراتژی reuse قدیمی.
- **Senior Insight:** هزینه composition، نام‌گذاری، و static type؛ ترجیح hooks مگر legacy.

### Compound Components
- **Quick Summary:** فرزندان هماهنگ با context داخلی؛ API بیانی (`Select.Item`).
- **Senior Insight:** DX عالی برای primitives؛ قرارداد children را مستند و type-safe کن.

### Provider Pattern
- **Quick Summary:** Context Provider برای افشای dependency/state در زیر‌درخت.
- **Senior Insight:** Provider تودرتوی زیاد = «wrapper hell»؛ scope را حداقل نگه دار.

### Hooks as Behavior Composition
- **Quick Summary:** منطق stateful قابل‌reuse؛ جایگزین رایج mixin/HOC/render props.
- **Senior Insight:** Hook را pure از UI نگه دار؛ قوانین hooks و تست‌پذیری را رعایت کن.
