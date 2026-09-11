# Senior-Level Non-Technical — Cheat Sheet

## Code Review & Mentoring

### Code Review Mindset — Correctness First
- **Quick Summary:** اول درست بودن رفتار و قراردادها؛ بعد سبک و ترجیح شخصی.
- **Senior Insight:** approve روی کد «تمیز اما غلط» شکست ارشد است.

### Code Review Mindset — Edge Cases
- **Quick Summary:** empty، error، permission، race، و داده ناقص را عمداً جستجو کن.
- **Senior Insight:** happy path alone در prod دوام نمی‌آورد.

### Code Review Mindset — Maintainability
- **Quick Summary:** آیا شش ماه بعد قابل فهم/تغییر است؟ نام‌ها، مرزها، تست‌ها.
- **Senior Insight:** هوشمندی بیش‌ازحد خوانایی را می‌کشد؛ سادگی را دفاع کن.

### Code Review Mindset — Performance / Security Awareness
- **Quick Summary:** هزینه رندر/شبکه و ریسک XSS/authz/secret را در review ببین.
- **Senior Insight:** این دو را «بعداً» سپردن معمولاً یعنی هرگز.

### Mentoring Juniors — Teaching Through Feedback
- **Quick Summary:** در review دلیل و الگوی بهتر بده، نه فقط «این اشتباه است».
- **Senior Insight:** بازخورد قابل عمل > نقد مبهم شخصیت/سطح.

### Mentoring Juniors — Pairing
- **Quick Summary:** کنار هم مسئله را بشکنید؛ مدل فکر کردن را منتقل کن.
- **Senior Insight:** گاهی keyboard را به junior بده؛ گفتن Alone کافی نیست.

### Mentoring Juniors — Leveling Guidance
- **Quick Summary:** انتظارات سطح بعدی را شفاف و با مثال‌های واقعی بگو.
- **Senior Insight:** بدون معیار واضح، رشد تصادفی و ناعادلانه حس می‌شود.

### Mentoring Juniors — Safe Learning Space
- **Quick Summary:** سؤال و اشتباه بخشی از یادگیری باشد، نه منبع شرم.
- **Senior Insight:** ترس از سؤال = باگ پنهان و دانش تیمی ضعیف.

---

## Decisions & Estimation

### Tradeoff Analysis — Speed vs Quality
- **Quick Summary:** تحویل سریع‌تر در برابر بدهی/ریسک؛ هزینه تأخیر را هم قیمت بده.
- **Senior Insight:** «بعداً درست می‌کنیم» را با owner و تاریخ ثبت کن وگرنه دروغ است.

### Tradeoff Analysis — Flexibility vs Simplicity
- **Quick Summary:** تعمیم زود = پیچیدگی؛ سادگی زود = بازنویسی بعدی.
- **Senior Insight:** برای نیاز واقعی طراحی کن، نه تصور آینده نامعلوم.

### Tradeoff Analysis — Build vs Buy
- **Quick Summary:** ساخت داخلی در برابر خرید/SaaS از نظر هزینه، کنترل، و تمایز.
- **Senior Insight:** undifferentiated heavy lifting را بخر مگر مزیت رقابتی باشد.

### Tradeoff Analysis — Short-Term vs Long-Term Costs
- **Quick Summary:** راه‌حل امروز ممکن است هزینه نگهداری فردا را چندبرابر کند.
- **Senior Insight:** هزینه کل مالکیت را بگو، نه فقط estimate اسپرینت.

### Communicating Technical Decisions — Audience Awareness
- **Quick Summary:** جزئیات را با سطح شنونده (مهندس/محصول/مدیر) تنظیم کن.
- **Senior Insight:** jargon بدون ترجمه = تصمیم‌گیری ضعیف در لایه کسب‌وکار.

### Communicating Technical Decisions — Concise Rationale
- **Quick Summary:** مشکل، گزینه انتخابی، و چرا — کوتاه و قابل اسکن.
- **Senior Insight:** دیوار متن خوانده نمی‌شود؛ ساختار بگیر.

### Communicating Technical Decisions — Risks and Alternatives
- **Quick Summary:** گزینه‌های ردشده و ریسک‌های گزینه انتخابی را صریح بگو.
- **Senior Insight:** پنهان کردن ریسک اعتماد را می‌کشد وقتی reality می‌رسد.

### Communicating Technical Decisions — Decision Records
- **Quick Summary:** ADR/RFC کوتاه برای چرا و زمینه تصمیم ماندگار.
- **Senior Insight:** حافظه تیمی ضعیف است؛ نوشته کوتاه از بحث شفاهی بهتر می‌ماند.

### Estimation Basics — Uncertainty Awareness
- **Quick Summary:** برآورد حدس آگاهانه است؛ ناشناخته‌ها را پنهان نکن.
- **Senior Insight:** عدد تکی بدون دامنه معمولاً دروغ دقیق است.

### Estimation Basics — Splitting Work
- **Quick Summary:** کار بزرگ را به قطعات قابل برآورد و تحویل بشکن.
- **Senior Insight:** اگر نمی‌توانی بشکنی، هنوز مسئله را نفهمیده‌ای.

### Estimation Basics — Assumptions
- **Quick Summary:** فرض‌ها (API آماده، طراحی ثابت، دسترسی) را نوشته اعلام کن.
- **Senior Insight:** فرض شکسته = estimate شکسته؛ زود validate کن.

### Estimation Basics — Range Estimates
- **Quick Summary:** بازه یا confidence بده (مثلاً 2–4 روز) نه فقط یک نقطه.
- **Senior Insight:** بازه به stakeholder برای برنامه‌ریزی واقعی کمک می‌کند.

### Breaking Down Tasks — Incremental Delivery
- **Quick Summary:** هر قطعه ارزش/ریسک را زود کم کند، نه big-bang آخر اسپرینت.
- **Senior Insight:** end-to-end نازک اول > لایه‌های افقی کامل بدون demo.

### Breaking Down Tasks — Dependencies
- **Quick Summary:** وابستگی به تیم/API/طراحی را زود سطح و دنبال کن.
- **Senior Insight:** dependency دیرکشف = مسیر بحرانی پنهان.

### Breaking Down Tasks — Risk Isolation
- **Quick Summary:** بخش نامطمئن را زود Spike/POC کن تا بقیه unblock شود.
- **Senior Insight:** ریسک فنی را به آخر نگذار.

### Breaking Down Tasks — Testability
- **Quick Summary:** هر تکه باید قابل تست/بازبینی باشد، نه فقط «کد زده شد».
- **Senior Insight:** task بدون تعریف Done تست‌پذیر، نیمه‌کاره تحویل می‌شود.

---

## Stakeholders, Incidents & Collaboration

### Stakeholder Communication — Status Updates
- **Quick Summary:** پیشرفت، بلاکر، و ETA بعدی را منظم و کوتاه بگو.
- **Senior Insight:** سکوت طولانی بدتر از خبر بد زود است.

### Stakeholder Communication — Expectation Management
- **Quick Summary:** محدودیت و tradeoff را قبل از تعهد نهایی شفاف کن.
- **Senior Insight:** overpromise اعتماد را برای ماه‌ها می‌سوزاند.

### Stakeholder Communication — Translating Technical Constraints
- **Quick Summary:** محدودیت فنی را به اثر محصول/زمان/ریسک ترجمه کن.
- **Senior Insight:** «نمی‌شود» Alone کافی نیست؛ گزینه‌ها و هزینه را بگو.

### Owning Production Issues — Triage
- **Quick Summary:** شدت، گستره، و مسیر mitigate را سریع مشخص کن.
- **Senior Insight:** مالکیت یعنی جلو بایستی، نه اینکه انگشت اشاره کنی.

### Owning Production Issues — Communication
- **Quick Summary:** وضعیت، اثر کاربر، و گام بعدی را به کانال درست بگو.
- **Senior Insight:** در outage، ارتباط منظم بخشی از فیکس است.

### Owning Production Issues — Mitigation
- **Quick Summary:** اول درد را کم کن (rollback/flag/limit)، بعد علت ریشه‌ای.
- **Senior Insight:** اصرار روی root cause کامل قبل از mitigate = ضرر بیشتر.

### Owning Production Issues — Retrospective Follow-up
- **Quick Summary:** بعد از آرام شدن، علت، اقدام پیشگیرانه، و owner دار کن.
- **Senior Insight:** blameless + action items واقعی؛ وگرنه incident تکرار می‌شود.

### Writing Technical RFCs — Problem Statement
- **Quick Summary:** مشکل و زمینه را قبل از راه‌حل ثابت کن.
- **Senior Insight:** RFC بدون مشکل روشن = bikeshedding معماری.

### Writing Technical RFCs — Goals / Non-Goals
- **Quick Summary:** چه چیزی داخل/خارج محدوده است را صریح بنویس.
- **Senior Insight:** non-goals از scope creep جلوگیری می‌کند.

### Writing Technical RFCs — Alternatives
- **Quick Summary:** گزینه‌های جدی و دلیل رد/قبول هر کدام را بیاور.
- **Senior Insight:** یک گزینه Alone تصمیم نیست؛ مقایسه است که ارزش دارد.

### Writing Technical RFCs — Rollout Plan
- **Quick Summary:** مراحل انتشار، مهاجرت، و معیار موفقیت/برگشت.
- **Senior Insight:** طراحی بدون rollout در سیستم واقعی ناقص است.

### Writing Technical RFCs — Risks
- **Quick Summary:** ریسک‌های فنی/عملیاتی/محصولی و mitigation هر کدام.
- **Senior Insight:** ریسک ناگفته بعداً به‌صورت حادثه ظاهر می‌شود.

### Cross-Team Collaboration — Backend / Design / Product Alignment
- **Quick Summary:** قراردادها و انتظارات را زود بین نقش‌ها هم‌تراز کن.
- **Senior Insight:** یک‌طرفه ساختن = بازکاری گران آخر چرخه.

### Cross-Team Collaboration — Interface Contracts
- **Quick Summary:** API، event، و UI contract را نسخه/مستند و قابل تست نگه دار.
- **Senior Insight:** قرارداد مبهم منبع اصلی تأخیر بین تیم‌هاست.

### Cross-Team Collaboration — Dependency Management
- **Quick Summary:** تحویل وابسته را با تاریخ، مالک، و برنامه جایگزین مدیریت کن.
- **Senior Insight:** منتظر ماندن خام بدون escalation = شکست خاموش برنامه.
