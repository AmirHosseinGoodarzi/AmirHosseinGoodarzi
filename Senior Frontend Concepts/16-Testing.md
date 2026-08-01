# Testing — Cheat Sheet

## Testing Strategy

### Testing Pyramid
- **Quick Summary:** پایه = unit زیاد؛ وسط = integration؛ نوک = E2E کم و گران.
- **Senior Insight:** تعادل cost/confidence؛ E2E فقط happy/critical paths — نه پوشش کامل UI.

### Unit Tests
- **Quick Summary:** توابع خالص، reducers، helpers، منطق کوچک component بدون شبکه واقعی.
- **Senior Insight:** سریع و پایدار؛ رفتار کاربر را جایگزین نکن — فقط منطق ایزوله.

### Integration Tests
- **Quick Summary:** component + state + مرز network؛ assertion کاربرمحور.
- **Senior Insight:** معمولاً بهترین ROI فرانت‌اند؛ بیش از unit خام و کمتر از E2E شکننده.

### E2E Tests
- **Quick Summary:** مرورگر واقعی: auth، navigation، فرم‌ها؛ کند ولی confidence بالا.
- **Senior Insight:** Flaky را با isolation/data setup بکش؛ suite را لاغر نگه دار.

---

## Unit / Component Tooling

### Vitest / Jest Fundamentals
- **Quick Summary:** ساختار `describe`/`it`، matchers، mocks، setup files مشترک.
- **Senior Insight:** Vitest برای Vite/ESM سریع‌تر؛ Jest در اکوسیستم قدیمی‌تر رایج — API نزدیک‌اند.

### React Testing Library (RTL)
- **Quick Summary:** `render` + query با role/label/text؛ assertion روی رفتار قابل‌مشاهده کاربر.
- **Senior Insight:** از test کردن implementation detail (state داخلی، class CSS) پرهیز کن.

```tsx
render(<Login />);
await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
```

### Testing User Behavior
- **Quick Summary:** click، typing، keyboard، انتقال UI ناهمزمان را مثل کاربر واقعی شبیه‌سازی کن.
- **Senior Insight:** `userEvent` بر `fireEvent` ارجح؛ ترتیب focus/keyboard = باگ a11y را لو می‌دهد.

### Mocking Strategies
- **Quick Summary:** module mock، spy، network mock؛ فقط مرزهای خارجی را mock کن.
- **Senior Insight:** Over-mock = تست بی‌ارزش؛ چیزی که منطق تحت‌تست است را mock نکن.

### MSW (Mock Service Worker)
- **Quick Summary:** interception لایه شبکه؛ سناریو success/error واقع‌گرایانه.
- **Senior Insight:** Integration نزدیک production؛ از mock مستقیم `fetch` داخل component بهتر است.

### Async Testing
- **Quick Summary:** `findBy*`، `waitFor`، assert روی loading سپس data؛ از `setTimeout` ثابت پرهیز.
- **Senior Insight:** Timing hack = flaky CI؛ منتظر شرط DOM/state باش نه clock دلخواه.

```ts
expect(await screen.findByText('Saved')).toBeInTheDocument();
await waitFor(() => expect(mockSave).toHaveBeenCalled());
```

### Testing Hooks
- **Quick Summary:** رفتار custom hook، انتقال state، منطق async را با `renderHook` بسنج.
- **Senior Insight:** اگر hook فقط با UI معنا دارد، ترجیحاً از طریق component تست کن.

### Testing Forms
- **Quick Summary:** validation، submit، پیام خطا، و assertionهای accessibility فیلدها.
- **Senior Insight:** Error را با `getByRole('alert')` / label مرتبط چک کن — نه فقط text سست.

### Accessibility Testing
- **Quick Summary:** query با role/name، keyboard nav، چک‌های خودکار axe-like.
- **Senior Insight:** axe مکمل است نه جایگزین؛ جریان keyboard را دستی/E2E هم بپوشان.

---

## E2E & Contracts

### Playwright
- **Quick Summary:** تعامل page، assertion، کنترل network، trace/screenshot برای debug.
- **Senior Insight:** Trace روی fail = طلای CI؛ auto-wait قوی‌تر از Cypress در بسیاری سناریوها.

### Cypress Basics
- **Quick Summary:** مدل command chain؛ تست workflow در browser؛ رایج برای تیم‌های جاافتاده.
- **Senior Insight:** برای E2E جدید اغلب Playwright انتخاب می‌شود؛ دانش Cypress هنوز interview-relevant است.

### Snapshot Testing Tradeoffs
- **Quick Summary:** snapshot بزرگ شکننده؛ استفادهٔ متمرکز برای خروجی پایدار کوچک.
- **Senior Insight:** Regression detection محدود؛ review snapshot با بی‌دقتی bug را merge می‌کند.

### Contract Testing Basics
- **Quick Summary:** هم‌ترازی schema فرانت/بک؛ consumer-driven contract؛ mock ≠ قرارداد واقعی.
- **Senior Insight:** MSW اعتماد داخلی می‌دهد؛ قرارداد واقعی با Pact/OpenAPI یا shared types محکم‌تر است.
