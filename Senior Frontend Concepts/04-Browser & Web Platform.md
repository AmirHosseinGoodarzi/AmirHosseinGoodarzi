## Browser & Web Platform

- [ ] DOM
  - [ ] node tree
  - [ ] element selection
  - [ ] manipulation basics
  - [ ] event attachment

- [ ] BOM
  - [ ] `window`
  - [ ] `location`
  - [ ] `history`
  - [ ] `navigator`
  - [ ] dialogs / timers basics

- [ ] Render tree
  - [ ] DOM + CSSOM
  - [ ] hidden elements impact
  - [ ] renderable nodes only

- [ ] Reflow / repaint
  - [ ] layout-triggering changes
  - [ ] paint-only changes
  - [ ] performance costs

- [ ] Browser rendering pipeline
  - [ ] parse
  - [ ] style
  - [ ] layout
  - [ ] paint
  - [ ] composite

- [ ] Critical rendering path
  - [ ] render-blocking CSS
  - [ ] script blocking
  - [ ] resource prioritization
  - [ ] first paint relevance

- [ ] Hydration concept
  - [ ] SSR markup activation
  - [ ] event listener attachment
  - [ ] mismatch causes
  - [ ] performance cost

- [ ] Web APIs
  - [ ] timers
  - [ ] fetch
  - [ ] storage
  - [ ] observers
  - [ ] media / device APIs

- [ ] `localStorage`
  - [ ] persistence
  - [ ] sync API cost
  - [ ] string-only values
  - [ ] security caveats

- [ ] `sessionStorage`
  - [ ] tab-scoped lifetime
  - [ ] differences from localStorage
  - [ ] practical use cases

- [ ] Cookies
  - [ ] request/response behavior
  - [ ] browser storage model
  - [ ] security attributes
  - [ ] size limitations

- [ ] IndexedDB
  - [ ] structured client storage
  - [ ] async API
  - [ ] offline data use cases
  - [ ] complexity tradeoffs

- [ ] Cache Storage
  - [ ] Request/Response caching
  - [ ] Service Worker integration
  - [ ] offline strategies

- [ ] Service Worker
  - [ ] registration lifecycle
  - [ ] install / activate
  - [ ] fetch interception
  - [ ] offline caching patterns

- [ ] Web Workers
  - [ ] background threads
  - [ ] message passing
  - [ ] CPU-heavy tasks
  - [ ] DOM access limitation

- [ ] Shared Workers
  - [ ] multi-tab shared context
  - [ ] communication basics
  - [ ] practical rarity

- [ ] BroadcastChannel
  - [ ] cross-tab communication
  - [ ] auth/logout sync
  - [ ] state sync basics

- [ ] `postMessage`
  - [ ] window-to-window messaging
  - [ ] worker communication
  - [ ] origin validation

- [ ] CORS
  - [ ] same-origin restriction
  - [ ] preflight requests
  - [ ] credentials
  - [ ] common frontend debugging

- [ ] Same-origin policy
  - [ ] protocol/host/port
  - [ ] restricted interactions
  - [ ] exceptions and controlled relaxations

- [ ] CSP
  - [ ] `script-src`
  - [ ] `style-src`
  - [ ] nonces / hashes basics
  - [ ] XSS mitigation role

- [ ] XSS / CSRF basics
  - [ ] stored/reflected/DOM XSS
  - [ ] anti-CSRF tokens
  - [ ] SameSite cookies
  - [ ] output escaping relevance

- [ ] JWT storage tradeoffs
  - [ ] memory
  - [ ] `localStorage`
  - [ ] cookies
  - [ ] XSS vs CSRF tradeoffs

- [ ] Authentication flow in browser
  - [ ] login request
  - [ ] token/cookie storage
  - [ ] session refresh
  - [ ] logout flow

- [ ] Authorization concepts
  - [ ] authentication vs authorization
  - [ ] roles vs permissions
  - [ ] frontend-only auth limitations

- [ ] File API
  - [ ] file input handling
  - [ ] file metadata
  - [ ] previews
  - [ ] drag and drop basics

- [ ] Blob / ArrayBuffer / Stream basics
  - [ ] binary data representations
  - [ ] file downloads
  - [ ] streaming data concepts

- [ ] WebSocket basics
  - [ ] persistent connection
  - [ ] bidirectional messaging
  - [ ] reconnect strategies basics

- [ ] SSE basics
  - [ ] server-to-client stream
  - [ ] one-way updates
  - [ ] comparison with WebSocket

- [ ] History API
  - [ ] `pushState`
  - [ ] `replaceState`
  - [ ] `popstate`
  - [ ] SPA routing relevance

- [ ] URL / URLSearchParams
  - [ ] parsing URLs
  - [ ] query param read/write
  - [ ] encoding basics

- [ ] IntersectionObserver
  - [ ] lazy loading
  - [ ] infinite scroll
  - [ ] visibility detection
  - [ ] threshold/root basics

- [ ] MutationObserver
  - [ ] DOM mutation tracking
  - [ ] integration use cases
  - [ ] cleanup concerns

- [ ] ResizeObserver
  - [ ] element size observation
  - [ ] responsive components
  - [ ] layout feedback loop caution

- [ ] Performance API
  - [ ] navigation timing basics
  - [ ] marks / measures
  - [ ] custom metrics

- [ ] `requestAnimationFrame`
  - [ ] animation scheduling
  - [ ] paint-aligned updates
  - [ ] better than setTimeout for visuals

- [ ] `requestIdleCallback`
  - [ ] background work scheduling
  - [ ] browser support caveats
  - [ ] low-priority tasks

- [ ] Clipboard API
  - [ ] copy text
  - [ ] permission constraints
  - [ ] UX feedback

- [ ] Geolocation API
  - [ ] permission model
  - [ ] success/error handling
  - [ ] privacy implications

- [ ] Notifications API
  - [ ] permission request
  - [ ] notification lifecycle
  - [ ] browser constraints

- [ ] Web Components basics
  - [ ] custom elements
  - [ ] shadow DOM
  - [ ] templates
  - [ ] interoperability with frameworks
