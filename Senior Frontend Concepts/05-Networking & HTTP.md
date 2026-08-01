# Networking & HTTP — Cheat Sheet

## HTTP Methods

### HTTP Methods Overview
- **Quick Summary:** فعل‌های استاندارد روی resource: `GET`/`POST`/`PUT`/`PATCH`/`DELETE`.
- **Senior Insight:** قرارداد method را بشکنی → caching، retry و امنیت خراب می‌شود.

| Method | Safe | Idempotent | کاربرد رایج |
|--------|------|------------|-------------|
| `GET` | ✓ | ✓ | خواندن |
| `POST` | ✗ | ✗ | ایجاد / اقدام |
| `PUT` | ✗ | ✓ | جایگزینی کامل |
| `PATCH` | ✗ | معمولاً ✗* | به‌روزرسانی جزئی |
| `DELETE` | ✗ | ✓ | حذف |

\*PATCH می‌تواند idempotent طراحی شود ولی تضمین استاندارد نیست.

### Safe vs Idempotent
- **Quick Summary:** Safe = بدون side-effect؛ Idempotent = تکرار همان اثر نهایی.
- **Senior Insight:** فقط درخواست‌های idempotent را بی‌پروا retry کن؛ برای POST از Idempotency-Key استفاده کن.

## Status Codes

### Status Code Families
- **Quick Summary:** `2xx` موفقیت، `3xx` هدایت، `4xx` خطای کلاینت، `5xx` خطای سرور.
- **Senior Insight:** UI را بر اساس خانواده + کد خاص طراحی کن نه فقط `!ok`.

| Code | معنی | نکته Frontend |
|------|------|---------------|
| `200` | OK | بدنه دارد |
| `201` | Created | معمولاً Location |
| `204` | No Content | body خالی — `json()` نزن |
| `301`/`302` | Redirect | fetch معمولاً دنبال می‌کند |
| `304` | Not Modified | کش معتبر است |
| `400` | Bad Request | validation ورودی |
| `401` | Unauthorized | نیاز به auth/refresh |
| `403` | Forbidden | هویت هست، مجوز نیست |
| `404` | Not Found | resource نیست |
| `409` | Conflict | نسخه/حالت ناسازگار |
| `422` | Unprocessable | validation معنایی |
| `429` | Too Many Requests | rate limit |
| `500` | Internal Error | retry محتاطانه |

## Headers

### Request / Response / Auth / Cache / Content
- **Quick Summary:** Metadata پیام: هویت، نوع محتوا، کش، زبان، CORS.
- **Senior Insight:** Header سفارشی می‌تواند preflight CORS را اجبار کند؛ حداقل لازم را بفرست.

| دسته | مثال |
|------|------|
| Auth | `Authorization: Bearer …` |
| Content | `Content-Type`, `Accept` |
| Cache | `Cache-Control`, `ETag`, `If-None-Match` |
| CORS | `Origin`, `Access-Control-*` |

## Content Negotiation

### `Accept` / `Content-Type` / `Accept-Language`
- **Quick Summary:** کلاینت می‌گوید چه می‌خواهد؛ سرور با `Content-Type` پاسخ می‌دهد.
- **Senior Insight:** mismatch نوع = bug پنهان؛ همیشه response را مطابق نوع واقعی parse کن.

## Cookies & Security Attributes

### `HttpOnly` / `Secure` / `SameSite`
- **Quick Summary:** `HttpOnly` مخفی از JS؛ `Secure` فقط HTTPS؛ `SameSite` محدودهٔ ارسال cross-site.
- **Senior Insight:** Session cookie: هر سه با هم؛ `SameSite=Lax` تعادل UX/CSRF؛ `None` نیاز به Secure.

## Caching

### Browser vs Shared Cache / Validation vs Expiration
- **Quick Summary:** Expiration با TTL؛ Validation با ETag/Last-Modified و `304`.
- **Senior Insight:** HTML کوتاه‌عمر؛ assetهای hashed بلندعمر (`immutable`).

### ETag
- **Quick Summary:** اثرانگشت نسخه؛ کلاینت با `If-None-Match` می‌پرسد آیا عوض شده.
- **Senior Insight:** ETag ضعیف/قوی و CDN mismatch را در invalidation در نظر بگیر.

### `Cache-Control`
- **Quick Summary:** دستورالعمل کش برای مرورگر و CDN.

| Directive | معنی |
|-----------|------|
| `max-age` | عمر کش مرورگر (ثانیه) |
| `s-maxage` | عمر کش shared/CDN |
| `public` | قابل‌کش مشترک |
| `private` | فقط مرورگر کاربر |
| `no-cache` | قبل از استفاده revalidate |
| `no-store` | اصلاً ذخیره نکن |
| `stale-while-revalidate` | کهنه سرو کن، پس‌زمینه تازه کن |

- **Senior Insight:** `no-cache` ≠ عدم کش؛ `no-store` برای دادهٔ حساس.

## CDN

### Edge Caching / Static Delivery / Invalidation / Geo
- **Quick Summary:** محتوای نزدیک کاربر؛ latency کمتر؛ purge/versioned URL برای تازگی.
- **Senior Insight:** Invalidation گران/کند است؛ ترجیح fingerprint در نام فایل.

## HTTP Versions

### HTTP/1.1 vs HTTP/2 vs HTTP/3
- **Quick Summary:** H1: چند connection و head-of-line؛ H2: multiplexing + HPACK؛ H3: QUIC روی UDP.
- **Senior Insight:** Domain sharding برای H2/H3 مضر است؛ روی multiplexing حساب کن.

| | HTTP/1.1 | HTTP/2 | HTTP/3 |
|--|----------|--------|--------|
| Multiplexing | محدود | ✓ | ✓ |
| Header compression | ضعیف | HPACK | QPACK |
| Transport | TCP | TCP | QUIC/UDP |

## TLS / HTTPS

### Encryption / Certificates / Handshake
- **Quick Summary:** رمزنگاری در مسیر؛ گواهی هویت سرور؛ handshake کلید جلسه می‌سازد.
- **Senior Insight:** بدون HTTPS: cookie Secure، بسیاری APIها، و اعتماد کاربر از بین می‌رود.

## API Styles

### REST Principles
- **Quick Summary:** Resource-oriented، stateless، method استاندارد، نمایش با URL/status.
- **Senior Insight:** RPC را پشت ظاهر REST قایم نکن؛ caching و ابزارها می‌شکنند.

### GraphQL Basics
- **Quick Summary:** Schema + Query/Mutation؛ کلاینت فیلد می‌گیرد → کمتر over/under-fetch.
- **Senior Insight:** کش HTTP سخت‌تر؛ N+1 و complexity limit سمت سرور حیاتی است.

## Client Data Patterns

### Pagination Patterns
- **Quick Summary:** Offset ساده ولی شکننده؛ Cursor پایدار برای feed/infinite scroll.
- **Senior Insight:** Offset با insert همزمان صفحه را جا‌به‌جا می‌کند؛ cursor را ترجیح بده.

| الگو | مزیت | ضعف |
|------|------|-----|
| Offset | ساده، صفحهٔ تصادفی | drift با دادهٔ زنده |
| Cursor | پایدار، مقیاس‌پذیر | پرش به صفحهٔ N سخت |

### Optimistic Updates
- **Quick Summary:** UI فوری؛ در failure rollback؛ conflict را merge یا refetch کن.
- **Senior Insight:** فقط وقتی احتمال موفقیت بالاست؛ برای پول/حذف حساس محتاط باش.

### Retry / Backoff
- **Quick Summary:** شکست گذرا → retry با exponential backoff و سقف تلاش.
- **Senior Insight:** روی `4xx` (جز `429`) کورکورانه retry نکن؛ jitter اضافه کن.

### Idempotent Requests
- **Quick Summary:** تکرار همان نتیجه؛ پایهٔ retry امن برای PUT/DELETE/GET.
- **Senior Insight:** POST را با Idempotency-Key سمت سرور idempotent کن.

### Request Cancellation
- **Quick Summary:** `AbortController` برای لغو fetch هنگام unmount یا تغییر route/query.
- **Senior Insight:** جلوی race و setState روی unmounted و bandwidth هدررفته را می‌گیرد.
- **Code:**
```ts
const ac = new AbortController();
fetch(url, { signal: ac.signal });
// on route change / effect cleanup:
ac.abort();
```

### Rate Limiting Basics
- **Quick Summary:** سرور `429` + اغلب `Retry-After`؛ کلاینت صف/throttle و پیام UX.
- **Senior Insight:** دکمه را spam-proof کن؛ backoff را احترام بگذار تا ban نشوی.
