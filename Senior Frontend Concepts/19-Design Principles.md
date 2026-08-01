# Design Principles — Cheat Sheet

## SOLID

### SOLID (Overview)
- **Quick Summary:** پنج اصل طراحی شیءگرا با کاربرد عملی در کامپوننت/ماژول فرانت.
- **Senior Insight:** اصول راهنما هستند نه مذهب؛ tradeoff خوانایی/سرعت تحویل را بسنج.

### SRP — Single Responsibility
- **Quick Summary:** یک دلیل برای تغییر؛ component/function/module یک نگرانی اصلی.
- **Senior Insight:** فرم غول‌آسا را به field/validation/submit جدا کن — تغییر UI ≠ تغییر API.

### OCP — Open/Closed
- **Quick Summary:** باز برای extension، بسته برای modification؛ plugin/variant-oriented.
- **Senior Insight:** `cva` variants و strategy map به‌جای ویرایش switch مرکزی هر بار.

### LSP — Liskov Substitution
- **Quick Summary:** جایگزین باید قرارداد را نقض نکند؛ subtype رفتار parent را نشکند.
- **Senior Insight:** Polymorphic/`as` props و API مشترک دکمه/لینک باید انتظارات یکسان برآورند.

### ISP — Interface Segregation
- **Quick Summary:** interfaceهای کوچک و متمرکز؛ از prop API بادکرده پرهیز کن.
- **Senior Insight:** مصرف‌کننده را مجبور به props بی‌ربط نکن؛ چند type باریک بهتر از یکی چاق.

### DIP — Dependency Inversion
- **Quick Summary:** به abstraction وابسته شو نه پیاده‌سازی concrete؛ قرارداد سرویس.
- **Senior Insight:** تست با mock آسان می‌شود؛ UI به Axios/fetch خام قفل نشود.

---

## Pragmatic Principles

### DRY
- **Quick Summary:** تکرار معنا‌دار را حذف کن؛ نه هر شباهت ظاهری را.
- **Senior Insight:** Over-abstract زودهنگام بدتر از duplication موقت است — Rule of Three.

### KISS
- **Quick Summary:** ساده‌ترین راه‌حل کارآمد؛ خوانایی بر cleverness.
- **Senior Insight:** در interview و production، کد قابل‌توضیح برتر از trick است.

### YAGNI
- **Quick Summary:** abstraction گمانه‌زن نساز؛ generalization زودرس هزینه است.
- **Senior Insight:** Feature flag/plugin «شاید بعداً» را تا نیاز واقعی عقب بینداز.

### Composition over Inheritance
- **Quick Summary:** ترکیب رفتار/UI به‌جای سلسله‌مراتب class؛ محور React.
- **Senior Insight:** Inheritance عمیق تغییر را گران می‌کند؛ compose hooks و children.

### High Cohesion / Low Coupling
- **Quick Summary:** ماژول متمرکز؛ وابستگی بین ماژول‌ها کم و جهت‌دار.
- **Senior Insight:** Maintainability مستقیم از این دو می‌آید؛ circular import زنگ خطر است.

### Separation of Concerns
- **Quick Summary:** مرز رندر، data fetching، business logic، styling را جدا نگه دار.
- **Senior Insight:** CSS-in-logic و fetch داخل JSX شلوغ = تغییر یک نگرانی سه جای دیگر را می‌شکند.

### Encapsulation
- **Quick Summary:** داخلی را پنهان کن؛ public API پایدار برای component/module.
- **Senior Insight:** Export انتخابی؛ تغییر internal بدون semver break برای مصرف‌کننده‌ها.

### Immutability
- **Quick Summary:** انتقال state بدون mutate درجا؛ پیش‌بینی‌پذیری بالاتر.
- **Senior Insight:** در React برای detect تغییر و concurrent features حیاتی؛ mutate = bug خاموش.

```ts
// bad: state.items.push(x)
// good:
return { ...state, items: [...state.items, x] };
```

### Idempotency
- **Quick Summary:** همان ورودی → همان اثر/نتیجهٔ امن برای تکرار (retry-friendly).
- **Senior Insight:** Submit دوبار، webhook، و refresh نباید سفارش تکراری بسازند — کلید idempotency.

### Progressive Enhancement
- **Quick Summary:** پایهٔ کارآمد بدون JS غنی؛ قابلیت‌های غنی اختیاری روی آن.
- **Senior Insight:** Resilience: لینک/فرم پایه اول، enhancement بعد — SEO و low-end دوست.

### Graceful Degradation
- **Quick Summary:** در محیط ضعیف‌تر به fallback قابل‌قبول برگرد؛ تفاوت ذهنی با progressive enhancement.
- **Senior Insight:** PE از پایین می‌سازد؛ GD از بالا قطعه‌قطعه عقب می‌نشیند — هر دو استراتژی supportاند.
