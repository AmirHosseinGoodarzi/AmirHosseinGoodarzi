## Security

- [ ] XSS
  - [ ] stored
  - [ ] reflected
  - [ ] DOM-based
  - [ ] escaping/sanitization basics
  - [ ] React default protections and limits

- [ ] CSRF
  - [ ] cookie-based auth risk
  - [ ] anti-CSRF tokens
  - [ ] SameSite protections
  - [ ] custom header patterns

- [ ] Clickjacking
  - [ ] iframe embedding abuse
  - [ ] `X-Frame-Options`
  - [ ] CSP `frame-ancestors`

- [ ] CSP
  - [ ] content source restrictions
  - [ ] nonces
  - [ ] hashes
  - [ ] inline script mitigation

- [ ] CORS
  - [ ] browser enforcement
  - [ ] preflight
  - [ ] credentials restrictions
  - [ ] frontend debugging

- [ ] Token storage tradeoffs
  - [ ] in-memory
  - [ ] cookies
  - [ ] localStorage
  - [ ] XSS/CSRF balance

- [ ] Cookie security flags
  - [ ] `HttpOnly`
  - [ ] `Secure`
  - [ ] `SameSite`
  - [ ] `Domain`
  - [ ] `Path`

- [ ] Input sanitization
  - [ ] user-generated HTML
  - [ ] rich text/editor scenarios
  - [ ] backend vs frontend responsibility

- [ ] Output escaping
  - [ ] HTML context
  - [ ] URL context
  - [ ] attribute context
  - [ ] template injection basics

- [ ] Auth flow security
  - [ ] login
  - [ ] refresh tokens
  - [ ] logout invalidation
  - [ ] session expiry UX

- [ ] Secret leakage in frontend
  - [ ] build-time env exposure
  - [ ] public vs server-only vars
  - [ ] source map risk awareness

- [ ] Dependency vulnerabilities
  - [ ] audit tools
  - [ ] transitive dependencies
  - [ ] patching strategy

- [ ] Supply chain risks
  - [ ] malicious packages
  - [ ] typosquatting
  - [ ] lockfiles
  - [ ] package pinning awareness

- [ ] SRI basics
  - [ ] subresource integrity hashes
  - [ ] CDN script protection
  - [ ] limitations with dynamic content
