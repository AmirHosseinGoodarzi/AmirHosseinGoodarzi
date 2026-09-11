# Security — Cheat Sheet

## Web Attack Surfaces

### XSS (Cross-Site Scripting)
- **Quick Summary:** تزریق اسکریپت: Stored، Reflected، DOM-based؛ با escape/sanitize مهار می‌شود.
- **Senior Insight:** React متن را escape می‌کند؛ `dangerouslySetInnerHTML`، URL/`javascript:`، و DOM دستی حفره‌اند.

| نوع | ورودی معمول | نکته |
|---|---|---|
| Stored | DB/comment | هر viewer آسیب می‌بیند |
| Reflected | Query/URL | فیشینگ لینک |
| DOM-based | `innerHTML`/location | بدون roundtrip سرور |

### CSRF (Cross-Site Request Forgery)
- **Quick Summary:** مرورگر درخواست authenticated با cookie به سایت قربانی می‌فرستد بدون قصد کاربر.
- **Senior Insight:** Anti-CSRF token، `SameSite` cookies، و custom header (نه فقط cookie) دفاع لایه‌ای‌اند.

### Clickjacking
- **Quick Summary:** صفحه را در iframe شفاف می‌گذارند تا کلیک کاربر دزدیده شود.
- **Senior Insight:** `X-Frame-Options: DENY/SAMEORIGIN` یا CSP `frame-ancestors` را تنظیم کن.

### CSP (Content Security Policy)
- **Quick Summary:** محدودیت منبع content/script؛ کاهش XSS با block اسکریپت غیرمجاز.
- **Senior Insight:** Nonce/hash برای inline؛ `'unsafe-inline'` تقریباً CSP را بی‌اثر می‌کند.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123'
```

### CORS (Cross-Origin Resource Sharing)
- **Quick Summary:** مرورگر دسترسی cross-origin را enforce می‌کند؛ preflight برای درخواست‌های غیرساده.
- **Senior Insight:** CORS امنیت سرور نیست — UI gate است؛ credentials نیاز به `Allow-Credentials` + origin دقیق.

---

## Tokens, Cookies & I/O

### Token Storage Tradeoffs
- **Quick Summary:** In-memory امن‌تر از XSS؛ cookie با پرچم‌ها؛ `localStorage` در برابر XSS ضعیف.
- **Senior Insight:** Access کوتاه‌عمر + refresh در `HttpOnly` cookie تعادل XSS/CSRF رایج است.

| محل | XSS risk | CSRF risk |
|---|---|---|
| Memory | پایین‌تر | پایین |
| `HttpOnly` cookie | پایین | بالاتر (نیاز SameSite/CSRF) |
| `localStorage` | بالا | پایین |

### Cookie Security Flags
- **Quick Summary:** `HttpOnly`، `Secure`، `SameSite`، `Domain`، `Path` سطح دسترسی cookie را محدود می‌کنند.
- **Senior Insight:** Session بدون `HttpOnly`+`Secure`+`SameSite` در production قرمز است.

### Input Sanitization
- **Quick Summary:** پاکسازی HTML کاربر (rich text/editor)؛ مسئولیت اصلی اغلب backend + lib معتبر.
- **Senior Insight:** Sanitize سمت کلاینت UX است؛ اعتماد امنیتی فقط به server/policy.

### Output Escaping
- **Quick Summary:** Escape متناسب context: HTML، attribute، URL؛ جلوگیری از template injection.
- **Senior Insight:** Escape یک‌بار در context اشتباه ≠ امن؛ URL را جدا encode کن.

---

## Auth & Secrets

### Auth Flow Security
- **Quick Summary:** login امن، refresh rotation، logout invalidation، UX انقضای session.
- **Senior Insight:** Refresh را در storage قابل‌خواندن JS نگذار؛ revoke سمت سرور اجباری است.

### Secret Leakage in Frontend
- **Quick Summary:** env در build عمومی می‌شود؛ فقط non-secret با `NEXT_PUBLIC_`/`VITE_`.
- **Senior Insight:** Source map در prod می‌تواند کد/مسیر داخلی لو بدهد — دسترسی را محدود کن.

---

## Supply Chain

### Dependency Vulnerabilities
- **Quick Summary:** `npm audit`/OSV؛ وابستگی‌های transitive؛ استراتژی patch/upgrade.
- **Senior Insight:** Critical را فوری؛ automated Dependabot + CI fail روی severity مشخص.

### Supply Chain Risks
- **Quick Summary:** پکیج مخرب، typosquatting، lockfile، pinning آگاهانه نسخه.
- **Senior Insight:** Lockfile commit اجباری؛ نصب با `--ignore-scripts` در CI حساس را بسنج.

### SRI (Subresource Integrity)
- **Quick Summary:** hash برای اسکریپت/استایل CDN؛ تغییر غیرمجاز → block بارگذاری.
- **Senior Insight:** برای URL ثابت عالی؛ محتوای dynamic/CDN چرخان hash را می‌شکند — به‌روز نگه دار.

```html
<script src="https://cdn.example/lib.js"
  integrity="sha384-..."
  crossorigin="anonymous"></script>
```
