# Senior Frontend Concepts

## HTML

- [ ] Semantic HTML
  - [ ] `div` vs semantic tags
  - [ ] `header`
  - [ ] `nav`
  - [ ] `main`
  - [ ] `section`
  - [ ] `article`
  - [ ] `aside`
  - [ ] `footer`
  - [ ] when to use `section` vs `article`
  - [ ] when not to overuse generic `div`

- [ ] Document structure
  - [ ] `<!DOCTYPE html>`
  - [ ] `html`
  - [ ] `head`
  - [ ] `body`
  - [ ] standards mode vs quirks mode
  - [ ] language declaration with `lang`

- [ ] SEO basics
  - [ ] Titles and heading structure
  - [ ] Meta tags
  - [ ] image `alt`
  - [ ] canonical URL
  - [ ] robots meta / `robots.txt`
  - [ ] sitemap
  - [ ] Core Web Vitals / Google UX principles
    - [ ] `LCP`
    - [ ] `INP`
    - [ ] `CLS`
  - [ ] structured data / schema markup / JSON-LD
  - [ ] Open Graph / Twitter Card

- [ ] Meta tags
  - [ ] `charset`
  - [ ] `viewport`
  - [ ] `description`
  - [ ] `robots`
  - [ ] `theme-color`
  - [ ] social sharing tags

- [ ] Open Graph / Twitter Card
  - [ ] `og:title`
  - [ ] `og:description`
  - [ ] `og:image`
  - [ ] `og:url`
  - [ ] `twitter:card`
  - [ ] preview debugging basics

- [ ] Accessibility attributes
  - [ ] `aria-label`
  - [ ] `aria-labelledby`
  - [ ] `aria-describedby`
  - [ ] `aria-hidden`
  - [ ] `role`
  - [ ] when native HTML is better than ARIA

- [ ] Forms
  - [ ] `form`
  - [ ] `input`
  - [ ] `textarea`
  - [ ] `select`
  - [ ] `option`
  - [ ] `button`
  - [ ] `fieldset`
  - [ ] `legend`
  - [ ] `label`
  - [ ] form submission basics

- [ ] Native form validation
  - [ ] `required`
  - [ ] `minlength` / `maxlength`
  - [ ] `min` / `max`
  - [ ] `pattern`
  - [ ] `type="email"` / `type="url"`
  - [ ] `checkValidity()`
  - [ ] `reportValidity()`
  - [ ] validation UX tradeoffs

- [ ] Input types
  - [ ] `text`
  - [ ] `email`
  - [ ] `password`
  - [ ] `number`
  - [ ] `tel`
  - [ ] `url`
  - [ ] `search`
  - [ ] `date`
  - [ ] `checkbox`
  - [ ] `radio`
  - [ ] `file`
  - [ ] mobile keyboard implications

- [ ] Label / Fieldset / Legend
  - [ ] explicit vs implicit labels
  - [ ] grouping related fields
  - [ ] radio group accessibility
  - [ ] checkbox group accessibility

- [ ] Button types
  - [ ] `type="button"`
  - [ ] `type="submit"`
  - [ ] `type="reset"`
  - [ ] default button type pitfalls

- [ ] ARIA roles
  - [ ] landmark roles
  - [ ] widget roles
  - [ ] `role="button"` pitfalls
  - [ ] `role="dialog"`
  - [ ] `role="tab"`
  - [ ] first rule of ARIA

- [ ] Landmark elements
  - [ ] `header`
  - [ ] `nav`
  - [ ] `main`
  - [ ] `aside`
  - [ ] `footer`
  - [ ] page structure for screen readers

- [ ] `data-*` attributes
  - [ ] custom metadata
  - [ ] `dataset`
  - [ ] test selectors
  - [ ] when not to store app state in DOM

- [ ] Script loading
  - [ ] blocking scripts
  - [ ] `defer`
  - [ ] `async`
  - [ ] `type="module"`
  - [ ] execution order differences

- [ ] Resource hints
  - [ ] `preload`
  - [ ] `prefetch`
  - [ ] `preconnect`
  - [ ] `dns-prefetch`
  - [ ] misuse risks

- [ ] iframe / sandbox / CSP interactions
  - [ ] `iframe`
  - [ ] `sandbox`
  - [ ] `allow`
  - [ ] embedding third-party content
  - [ ] isolation and security basics

- [ ] Critical rendering path basics
  - [ ] HTML parsing
  - [ ] CSSOM creation
  - [ ] render tree
  - [ ] blocking resources
  - [ ] render-critical CSS / JS

## CSS

- [ ] Cascade
  - [ ] origin (`user-agent`, `user`, `author`)
  - [ ] importance (`!important`)
  - [ ] specificity
  - [ ] source order

- [ ] Specificity
  - [ ] inline styles
  - [ ] `#id`
  - [ ] `.class` / `[attr]` / `:pseudo-class`
  - [ ] `tag` / `::pseudo-element`
  - [ ] specificity conflicts
  - [ ] `!important` interaction

- [ ] Inheritance
  - [ ] inheritable properties
  - [ ] non-inheritable properties
  - [ ] `inherit`
  - [ ] `initial`
  - [ ] `unset`
  - [ ] `revert`

- [ ] Box model
  - [ ] content
  - [ ] padding
  - [ ] border
  - [ ] margin
  - [ ] `box-sizing: border-box`
  - [ ] margin collapsing basics

- [ ] `display` types
  - [ ] `block`
  - [ ] `inline`
  - [ ] `inline-block`
  - [ ] `none`
  - [ ] `contents`
  - [ ] `flex`
  - [ ] `grid`

- [ ] Positioning
  - [ ] `static`
  - [ ] `relative`
  - [ ] `absolute`
  - [ ] `fixed`
  - [ ] `sticky`
  - [ ] containing block basics

- [ ] Stacking context
  - [ ] what creates a stacking context
  - [ ] `position` + `z-index`
  - [ ] `opacity`
  - [ ] `transform`
  - [ ] `filter`
  - [ ] why `z-index` "does not work"

- [ ] `z-index`
  - [ ] stacking order
  - [ ] positioned elements
  - [ ] nested stacking contexts
  - [ ] modals / dropdowns / overlays

- [ ] Flexbox
  - [ ] main axis / cross axis
  - [ ] `flex-direction`
  - [ ] `justify-content`
  - [ ] `align-items`
  - [ ] `align-content`
  - [ ] `align-self`
  - [ ] `flex-grow`
  - [ ] `flex-shrink`
  - [ ] `flex-basis`
  - [ ] `gap`

- [ ] Grid
  - [ ] `grid-template-columns`
  - [ ] `grid-template-rows`
  - [ ] `fr`
  - [ ] `repeat()`
  - [ ] `minmax()`
  - [ ] implicit vs explicit grid
  - [ ] `grid-area`
  - [ ] `auto-fit` / `auto-fill`
  - [ ] gap management

- [ ] Responsive design
  - [ ] mobile-first approach
  - [ ] fluid layout
  - [ ] flexible units
  - [ ] responsive typography
  - [ ] responsive images
  - [ ] breakpoint strategy

- [ ] Media queries
  - [ ] `min-width`
  - [ ] `max-width`
  - [ ] range syntax basics
  - [ ] `prefers-color-scheme`
  - [ ] `prefers-reduced-motion`
  - [ ] `hover` / `pointer`

- [ ] Container queries
  - [ ] `container-type`
  - [ ] component-driven responsiveness
  - [ ] when to use instead of media queries
  - [ ] container query units basics

- [ ] Logical properties
  - [ ] `margin-inline`
  - [ ] `padding-block`
  - [ ] `inset-inline`
  - [ ] `inline-size`
  - [ ] `block-size`
  - [ ] RTL/LTR friendliness

- [ ] CSS variables
  - [ ] custom properties syntax
  - [ ] scope
  - [ ] fallback values
  - [ ] theme tokens
  - [ ] runtime theming

- [ ] `calc()` / `clamp()` / `min()` / `max()`
  - [ ] layout calculations
  - [ ] fluid typography
  - [ ] responsive sizing
  - [ ] practical interview examples

- [ ] Pseudo classes / pseudo elements
  - [ ] `:hover`
  - [ ] `:focus`
  - [ ] `:focus-visible`
  - [ ] `:disabled`
  - [ ] `:nth-child()`
  - [ ] `::before`
  - [ ] `::after`
  - [ ] `::placeholder`

- [ ] Transitions
  - [ ] `transition-property`
  - [ ] `transition-duration`
  - [ ] `transition-timing-function`
  - [ ] `transition-delay`
  - [ ] UX-friendly transitions

- [ ] Animations
  - [ ] `@keyframes`
  - [ ] animation properties
  - [ ] infinite vs finite animations
  - [ ] performance considerations
  - [ ] reduced motion support

- [ ] Transforms
  - [ ] `translate`
  - [ ] `scale`
  - [ ] `rotate`
  - [ ] `skew`
  - [ ] transform origin
  - [ ] transform vs top/left

- [ ] `overflow`
  - [ ] `visible`
  - [ ] `hidden`
  - [ ] `clip`
  - [ ] `scroll`
  - [ ] `auto`
  - [ ] scroll container behavior

- [ ] `contain`
  - [ ] `layout`
  - [ ] `paint`
  - [ ] `size`
  - [ ] `content`
  - [ ] performance isolation

- [ ] `will-change`
  - [ ] when to use
  - [ ] overuse risks
  - [ ] animation performance hints

- [ ] `aspect-ratio`
  - [ ] image placeholders
  - [ ] cards / media wrappers
  - [ ] responsive embeds

- [ ] Custom properties theming
  - [ ] design tokens
  - [ ] semantic color variables
  - [ ] spacing / radius tokens
  - [ ] light/dark theming

- [ ] Dark mode strategies
  - [ ] class-based theming
  - [ ] `prefers-color-scheme`
  - [ ] persistence
  - [ ] avoiding flash of wrong theme
  - [ ] contrast considerations

- [ ] BEM / CSS Modules / CSS-in-JS tradeoffs
  - [ ] BEM naming tradeoffs
  - [ ] CSS Modules scoping
  - [ ] runtime vs compile-time CSS-in-JS
  - [ ] maintainability tradeoffs

- [ ] Tailwind CSS fundamentals
  - [ ] utility-first approach
  - [ ] responsive utilities
  - [ ] state modifiers
  - [ ] arbitrary values
  - [ ] pros / cons

- [ ] Tailwind config
  - [ ] theme extension
  - [ ] colors
  - [ ] spacing
  - [ ] breakpoints
  - [ ] plugins
  - [ ] content paths

- [ ] Tailwind composition patterns
  - [ ] `clsx`
  - [ ] `tailwind-merge`
  - [ ] `cva`
  - [ ] variant-driven components
  - [ ] class conflict management

- [ ] Tailwind performance / purge / content scanning
  - [ ] content scanning
  - [ ] dead class removal
  - [ ] dynamic class pitfalls
  - [ ] build output awareness

- [ ] shadcn/ui architecture
  - [ ] copy-into-project model
  - [ ] ownership of components
  - [ ] Tailwind integration
  - [ ] Radix integration
  - [ ] customization patterns

- [ ] Radix UI primitives
  - [ ] headless accessibility primitives
  - [ ] `Dialog`
  - [ ] `Popover`
  - [ ] `DropdownMenu`
  - [ ] `Tabs`
  - [ ] controlled/uncontrolled support

- [ ] Styling accessibility states
  - [ ] `:focus`
  - [ ] `:focus-visible`
  - [ ] `:disabled`
  - [ ] `[aria-*]`
  - [ ] `[data-state]`
  - [ ] visible focus indicators

- [ ] Cross-browser CSS issues
  - [ ] browser default styles
  - [ ] support differences
  - [ ] fallbacks
  - [ ] progressive enhancement
  - [ ] testing strategy

## JavaScript

- [ ] Execution context
  - [ ] global execution context
  - [ ] function execution context
  - [ ] creation phase vs execution phase
  - [ ] variable environment

- [ ] Scope
  - [ ] global scope
  - [ ] function scope
  - [ ] block scope
  - [ ] lexical scope

- [ ] Hoisting
  - [ ] `var`
  - [ ] `let`
  - [ ] `const`
  - [ ] function declarations
  - [ ] temporal dead zone

- [ ] Closures
  - [ ] lexical environment capture
  - [ ] practical use cases
  - [ ] stale closure bugs
  - [ ] memory implications

- [ ] `this`
  - [ ] default binding
  - [ ] implicit binding
  - [ ] explicit binding
  - [ ] `new` binding
  - [ ] arrow functions and `this`

- [ ] Prototypes
  - [ ] object delegation
  - [ ] constructor functions
  - [ ] prototype methods
  - [ ] shared memory benefits

- [ ] Prototype chain
  - [ ] property lookup
  - [ ] `Object.create`
  - [ ] `hasOwnProperty`
  - [ ] inheritance behavior

- [ ] Classes vs prototypes
  - [ ] syntactic sugar
  - [ ] `constructor`
  - [ ] instance methods
  - [ ] static methods
  - [ ] tradeoffs

- [ ] Event loop
  - [ ] single-threaded model
  - [ ] call stack interaction
  - [ ] task scheduling
  - [ ] browser vs Node differences

- [ ] Call stack
  - [ ] stack frames
  - [ ] recursion
  - [ ] stack overflow basics

- [ ] Task queue
  - [ ] macrotasks
  - [ ] `setTimeout`
  - [ ] DOM events
  - [ ] scheduling order basics

- [ ] Microtask queue
  - [ ] promises
  - [ ] `queueMicrotask`
  - [ ] execution before next render/task

- [ ] Promises
  - [ ] pending / fulfilled / rejected
  - [ ] chaining
  - [ ] error propagation
  - [ ] `Promise.all`
  - [ ] `Promise.allSettled`
  - [ ] `Promise.race`

- [ ] `async/await`
  - [ ] syntactic sugar over promises
  - [ ] `try/catch`
  - [ ] parallel vs sequential awaits
  - [ ] common pitfalls

- [ ] Error handling
  - [ ] `try/catch/finally`
  - [ ] sync vs async errors
  - [ ] throwing custom errors
  - [ ] error boundaries between layers

- [ ] `fetch`
  - [ ] request basics
  - [ ] response parsing
  - [ ] non-2xx handling
  - [ ] headers
  - [ ] credentials

- [ ] AbortController
  - [ ] cancellation basics
  - [ ] `signal`
  - [ ] request cleanup
  - [ ] race condition prevention

- [ ] Event delegation
  - [ ] bubbling-based handling
  - [ ] dynamic DOM lists
  - [ ] target matching
  - [ ] performance benefits

- [ ] Bubbling / capturing
  - [ ] event phases
  - [ ] `stopPropagation()`
  - [ ] `preventDefault()`
  - [ ] delegation implications

- [ ] Debounce / throttle
  - [ ] debounce behavior
  - [ ] throttle behavior
  - [ ] search input use case
  - [ ] scroll / resize use case

- [ ] Shallow copy / deep copy
  - [ ] spread copy limitations
  - [ ] nested objects
  - [ ] `structuredClone`
  - [ ] JSON clone caveats

- [ ] Equality (`==`, `===`, `Object.is`)
  - [ ] coercion with `==`
  - [ ] strict equality
  - [ ] `NaN`
  - [ ] `-0` vs `0`

- [ ] Destructuring
  - [ ] object destructuring
  - [ ] array destructuring
  - [ ] default values
  - [ ] renaming

- [ ] Spread / rest
  - [ ] arrays
  - [ ] objects
  - [ ] function rest params
  - [ ] copy semantics

- [ ] Optional chaining
  - [ ] safe property access
  - [ ] optional call
  - [ ] limitations on assignment

- [ ] Nullish coalescing
  - [ ] `??`
  - [ ] difference from `||`
  - [ ] preserving falsy values

- [ ] Modules (`ESM`, `CJS`)
  - [ ] `import` / `export`
  - [ ] default vs named export
  - [ ] `require`
  - [ ] interoperability basics

- [ ] Tree shaking
  - [ ] static imports
  - [ ] dead code elimination
  - [ ] side effects awareness
  - [ ] bundler dependency

- [ ] Iterators / generators
  - [ ] iterator protocol
  - [ ] `for...of`
  - [ ] generator functions
  - [ ] lazy iteration basics

- [ ] Map / Set / WeakMap / WeakSet
  - [ ] key differences from objects/arrays
  - [ ] weak references basics
  - [ ] use cases
  - [ ] memory behavior

- [ ] Memory leaks
  - [ ] lingering event listeners
  - [ ] timers
  - [ ] closures
  - [ ] detached DOM nodes

- [ ] Garbage collection basics
  - [ ] reachability
  - [ ] mark-and-sweep concept
  - [ ] weak references relevance

- [ ] Immutability
  - [ ] mutation vs replacement
  - [ ] shallow updates
  - [ ] React relevance

- [ ] Functional programming basics
  - [ ] pure functions
  - [ ] immutability
  - [ ] composition
  - [ ] higher-order functions

- [ ] Pure functions
  - [ ] deterministic output
  - [ ] no side effects
  - [ ] testability benefits

- [ ] Idempotency
  - [ ] repeatable outcomes
  - [ ] frontend/networking examples
  - [ ] mutation caveats

- [ ] Big O basics
  - [ ] `O(1)`
  - [ ] `O(n)`
  - [ ] `O(log n)`
  - [ ] `O(n^2)`
  - [ ] practical frontend examples

- [ ] Common array/object transformations
  - [ ] `map`
  - [ ] `filter`
  - [ ] `reduce`
  - [ ] `find`
  - [ ] `some` / `every`
  - [ ] `Object.entries` / `Object.fromEntries`

## TypeScript

- [ ] Type inference
  - [ ] variable inference
  - [ ] function return inference
  - [ ] contextual typing
  - [ ] when to annotate explicitly

- [ ] `any` vs `unknown` vs `never`
  - [ ] escape hatch risks of `any`
  - [ ] safe narrowing with `unknown`
  - [ ] impossible states with `never`

- [ ] Union / intersection types
  - [ ] union modeling
  - [ ] intersections for composition
  - [ ] common pitfalls

- [ ] Literal types
  - [ ] string literals
  - [ ] numeric literals
  - [ ] boolean literals
  - [ ] discriminated unions

- [ ] Type narrowing
  - [ ] `typeof`
  - [ ] `instanceof`
  - [ ] `in`
  - [ ] control flow analysis

- [ ] Type guards
  - [ ] built-in guards
  - [ ] custom predicates
  - [ ] assertion functions basics

- [ ] Generics
  - [ ] generic functions
  - [ ] generic interfaces
  - [ ] constraints
  - [ ] inference vs explicit generic args

- [ ] Utility types
  - [ ] `Partial`
  - [ ] `Required`
  - [ ] `Pick`
  - [ ] `Omit`
  - [ ] `Record`
  - [ ] `ReturnType`

- [ ] `keyof`
  - [ ] key unions
  - [ ] object key constraints
  - [ ] common generic usage

- [ ] `typeof`
  - [ ] value-to-type extraction
  - [ ] constants and inferred types
  - [ ] `as const` synergy

- [ ] Indexed access types
  - [ ] `T[K]`
  - [ ] property value extraction
  - [ ] array element access types

- [ ] Mapped types
  - [ ] transforming object types
  - [ ] key remapping basics
  - [ ] readonly/optional modifiers

- [ ] Conditional types
  - [ ] `T extends U ? X : Y`
  - [ ] distributive behavior
  - [ ] practical use cases

- [ ] `extends`
  - [ ] generic constraints
  - [ ] inheritance vs assignability semantics
  - [ ] conditional type branch trigger

- [ ] `infer`
  - [ ] extracting nested types
  - [ ] return type extraction
  - [ ] array/promise unwrapping

- [ ] Function overloads
  - [ ] overload signatures
  - [ ] implementation signature
  - [ ] when unions are simpler

- [ ] Interface vs type
  - [ ] extension
  - [ ] declaration merging
  - [ ] unions support
  - [ ] practical team conventions

- [ ] Declaration merging
  - [ ] interface merging
  - [ ] namespace merging basics
  - [ ] augmentation scenarios

- [ ] `readonly`
  - [ ] readonly properties
  - [ ] readonly arrays
  - [ ] compile-time only limitation

- [ ] Enums vs union literals
  - [ ] runtime output
  - [ ] ergonomics
  - [ ] bundle implications
  - [ ] preferred patterns

- [ ] Branded types
  - [ ] nominal typing simulation
  - [ ] domain safety use cases
  - [ ] IDs and validated values

- [ ] Module augmentation
  - [ ] extending third-party types
  - [ ] declaration files basics
  - [ ] common pitfalls

- [ ] React typings
  - [ ] component props typing
  - [ ] children typing
  - [ ] event types
  - [ ] intrinsic element props

- [ ] Typing hooks
  - [ ] `useState`
  - [ ] `useReducer`
  - [ ] custom hooks return types
  - [ ] generic hooks

- [ ] Typing refs
  - [ ] DOM refs
  - [ ] `forwardRef`
  - [ ] nullable refs
  - [ ] imperative handles

- [ ] API response typing
  - [ ] DTO shapes
  - [ ] discriminated union for states
  - [ ] runtime validation gap
  - [ ] error typing

- [ ] Zod + TypeScript integration
  - [ ] schema definition
  - [ ] `z.infer`
  - [ ] parsing unknown data
  - [ ] form validation integration

- [ ] Strict mode configs
  - [ ] `strict`
  - [ ] `noImplicitAny`
  - [ ] `strictNullChecks`
  - [ ] `noUncheckedIndexedAccess`
  - [ ] migration tradeoffs

- [ ] `tsconfig` essentials
  - [ ] `target`
  - [ ] `module`
  - [ ] `moduleResolution`
  - [ ] `jsx`
  - [ ] `baseUrl` / `paths`
  - [ ] `isolatedModules`
  - [ ] `skipLibCheck`

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

## Networking & HTTP

- [ ] HTTP methods
  - [ ] `GET`
  - [ ] `POST`
  - [ ] `PUT`
  - [ ] `PATCH`
  - [ ] `DELETE`
  - [ ] safe vs idempotent methods

- [ ] Status codes
  - [ ] `2xx`
  - [ ] `3xx`
  - [ ] `4xx`
  - [ ] `5xx`
  - [ ] common interview examples (`200`, `201`, `204`, `301`, `304`, `400`, `401`, `403`, `404`, `409`, `422`, `500`)

- [ ] Headers
  - [ ] request headers
  - [ ] response headers
  - [ ] auth headers
  - [ ] caching headers
  - [ ] content headers

- [ ] Content negotiation
  - [ ] `Accept`
  - [ ] `Content-Type`
  - [ ] `Accept-Language`
  - [ ] response format selection

- [ ] Cookies / `HttpOnly` / `Secure` / `SameSite`
  - [ ] cookie attributes
  - [ ] security implications
  - [ ] auth/session use cases

- [ ] Caching headers
  - [ ] browser cache basics
  - [ ] shared cache basics
  - [ ] validation vs expiration

- [ ] ETag
  - [ ] entity validation
  - [ ] `If-None-Match`
  - [ ] `304 Not Modified`

- [ ] `Cache-Control`
  - [ ] `max-age`
  - [ ] `s-maxage`
  - [ ] `public`
  - [ ] `private`
  - [ ] `no-cache`
  - [ ] `no-store`
  - [ ] `stale-while-revalidate`

- [ ] CDN basics
  - [ ] edge caching
  - [ ] static asset delivery
  - [ ] cache invalidation basics
  - [ ] geo distribution

- [ ] HTTP/1.1 vs HTTP/2 vs HTTP/3
  - [ ] multiplexing
  - [ ] header compression
  - [ ] connection behavior
  - [ ] QUIC basics

- [ ] TLS / HTTPS basics
  - [ ] encryption in transit
  - [ ] certificate basics
  - [ ] handshake concept
  - [ ] why HTTPS matters

- [ ] REST principles
  - [ ] resource-oriented design
  - [ ] statelessness
  - [ ] standard methods
  - [ ] common misunderstandings

- [ ] GraphQL basics
  - [ ] schema
  - [ ] query / mutation
  - [ ] overfetching/underfetching story
  - [ ] caching complexity

- [ ] Pagination patterns
  - [ ] offset pagination
  - [ ] cursor pagination
  - [ ] infinite scroll implications

- [ ] Optimistic updates
  - [ ] immediate UI updates
  - [ ] rollback on failure
  - [ ] conflict handling basics

- [ ] Retry / backoff
  - [ ] transient failures
  - [ ] exponential backoff
  - [ ] retry limits
  - [ ] idempotency concerns

- [ ] Idempotent requests
  - [ ] definition
  - [ ] safe retries
  - [ ] practical HTTP examples

- [ ] Request cancellation
  - [ ] aborting fetch
  - [ ] stale request prevention
  - [ ] route-change cleanup

- [ ] Rate limiting basics
  - [ ] `429`
  - [ ] retry headers basics
  - [ ] client-side mitigation
  - [ ] user feedback

## Accessibility

- [ ] Semantic structure
  - [ ] headings
  - [ ] landmarks
  - [ ] lists
  - [ ] table semantics

- [ ] Keyboard navigation
  - [ ] tab navigation
  - [ ] enter/space behavior
  - [ ] escape handling
  - [ ] arrow key patterns

- [ ] Focus management
  - [ ] focus placement
  - [ ] returning focus
  - [ ] modals/popovers
  - [ ] route change considerations

- [ ] Tab order
  - [ ] natural DOM order
  - [ ] avoid positive `tabindex`
  - [ ] focusable elements awareness

- [ ] Screen readers basics
  - [ ] accessible names
  - [ ] announced roles/states
  - [ ] hidden content behavior
  - [ ] testing basics

- [ ] ARIA usage
  - [ ] use native first
  - [ ] roles
  - [ ] states
  - [ ] properties
  - [ ] no ARIA better than bad ARIA

- [ ] `aria-label` / `aria-describedby`
  - [ ] labeling icon buttons
  - [ ] supplemental descriptions
  - [ ] form error association

- [ ] Live regions
  - [ ] `aria-live`
  - [ ] polite vs assertive
  - [ ] status updates
  - [ ] validation feedback

- [ ] Accessible forms
  - [ ] labels
  - [ ] grouped controls
  - [ ] errors
  - [ ] required state
  - [ ] instructions

- [ ] Accessible modals
  - [ ] dialog role
  - [ ] initial focus
  - [ ] focus trap
  - [ ] background inertness
  - [ ] escape to close

- [ ] Accessible dropdowns / combobox
  - [ ] keyboard interactions
  - [ ] selected state
  - [ ] active descendant patterns
  - [ ] native select vs custom widget

- [ ] Accessible tables
  - [ ] table semantics
  - [ ] headers associations
  - [ ] captions
  - [ ] when not to use tables

- [ ] Color contrast
  - [ ] WCAG contrast basics
  - [ ] text vs UI controls
  - [ ] dark mode considerations

- [ ] Reduced motion support
  - [ ] `prefers-reduced-motion`
  - [ ] disabling non-essential animations
  - [ ] preserving usability

- [ ] Focus trap
  - [ ] modals
  - [ ] side panels
  - [ ] escape hatches and restoration

- [ ] Skip links
  - [ ] skip to main content
  - [ ] keyboard visibility
  - [ ] layout integration

- [ ] WCAG basics
  - [ ] POUR principles
  - [ ] A / AA / AAA
  - [ ] practical frontend relevance

## Performance

- [ ] Core Web Vitals
  - [ ] `LCP`
  - [ ] `INP`
  - [ ] `CLS`
  - [ ] field vs lab data

- [ ] LCP
  - [ ] largest content candidate
  - [ ] image/font/server causes
  - [ ] optimization techniques

- [ ] INP
  - [ ] input responsiveness
  - [ ] long tasks impact
  - [ ] handler optimization

- [ ] CLS
  - [ ] layout shift causes
  - [ ] image dimensions
  - [ ] font shift
  - [ ] ad/embed placeholders

- [ ] TTFB
  - [ ] server response delay
  - [ ] SSR impact
  - [ ] caching effect

- [ ] Bundle size optimization
  - [ ] dependency auditing
  - [ ] dead code elimination
  - [ ] splitting strategies
  - [ ] avoiding heavy libs

- [ ] Code splitting
  - [ ] route-based splitting
  - [ ] component-level splitting
  - [ ] tradeoff with too many chunks

- [ ] Lazy loading
  - [ ] component lazy loading
  - [ ] image lazy loading
  - [ ] below-the-fold strategy

- [ ] Dynamic import
  - [ ] `import()`
  - [ ] on-demand modules
  - [ ] chunk generation basics

- [ ] Image optimization
  - [ ] responsive images
  - [ ] modern formats
  - [ ] compression
  - [ ] placeholders
  - [ ] width/height to avoid CLS

- [ ] Font optimization
  - [ ] preload critical fonts
  - [ ] subset fonts
  - [ ] `font-display`
  - [ ] fallback strategy

- [ ] Memoization tradeoffs
  - [ ] `useMemo`
  - [ ] `useCallback`
  - [ ] cache cost vs benefit
  - [ ] premature optimization risk

- [ ] Avoiding unnecessary re-renders
  - [ ] stable props
  - [ ] state colocation
  - [ ] selector patterns
  - [ ] component splitting

- [ ] Virtualization
  - [ ] large lists
  - [ ] windowing
  - [ ] overscan tradeoffs
  - [ ] dynamic height complexity

- [ ] Caching strategies
  - [ ] browser cache
  - [ ] app cache
  - [ ] data cache
  - [ ] CDN cache

- [ ] Prefetch / preload
  - [ ] preload current-critical resources
  - [ ] prefetch likely-next resources
  - [ ] misuse pitfalls

- [ ] Suspense impact on UX
  - [ ] loading boundaries
  - [ ] reveal strategy
  - [ ] fallback flashing
  - [ ] skeleton vs spinner tradeoffs

- [ ] Hydration cost
  - [ ] JS execution overhead
  - [ ] interactive delay
  - [ ] partial hydration concepts

- [ ] SSR vs CSR performance tradeoffs
  - [ ] initial load
  - [ ] interactivity
  - [ ] caching
  - [ ] SEO implications

- [ ] Profiling with DevTools
  - [ ] performance flame chart
  - [ ] layout/paint analysis
  - [ ] long tasks

- [ ] React Profiler
  - [ ] commit timings
  - [ ] render reasons
  - [ ] expensive component discovery

- [ ] Lighthouse
  - [ ] lab metrics
  - [ ] audits
  - [ ] limitations
  - [ ] prioritizing fixes

- [ ] WebPageTest basics
  - [ ] real-world testing
  - [ ] waterfalls
  - [ ] filmstrip
  - [ ] regional/network testing

## React Core

- [ ] JSX
  - [ ] syntax rules
  - [ ] expressions
  - [ ] fragments
  - [ ] transpilation concept

- [ ] Virtual DOM
  - [ ] representation concept
  - [ ] diffing motivation
  - [ ] not the full performance story

- [ ] Reconciliation
  - [ ] diffing heuristics
  - [ ] element type changes
  - [ ] keys importance
  - [ ] subtree preservation/remounting

- [ ] Fiber architecture basics
  - [ ] interruptible work concept
  - [ ] scheduling
  - [ ] priority model basics

- [ ] Rendering lifecycle
  - [ ] render phase
  - [ ] commit phase
  - [ ] effect timing basics

- [ ] Commit phase
  - [ ] DOM mutations
  - [ ] layout effects
  - [ ] passive effects

- [ ] Concurrent rendering
  - [ ] interruptible rendering
  - [ ] transitions
  - [ ] responsiveness benefits
  - [ ] mental model updates

- [ ] StrictMode
  - [ ] development-only checks
  - [ ] double-invoked effects/rendering scenarios
  - [ ] finding unsafe side effects

- [ ] Components
  - [ ] function components
  - [ ] composition
  - [ ] reusability boundaries

- [ ] Props
  - [ ] one-way data flow
  - [ ] prop drilling basics
  - [ ] stable prop patterns

- [ ] State
  - [ ] local state
  - [ ] async updates mental model
  - [ ] minimal state principle

- [ ] Lifting state up
  - [ ] shared ownership
  - [ ] tradeoff with prop drilling
  - [ ] colocation tension

- [ ] Controlled vs uncontrolled components
  - [ ] controlled inputs
  - [ ] refs-based uncontrolled inputs
  - [ ] form library implications

- [ ] Composition vs inheritance
  - [ ] React composition preference
  - [ ] slots/children patterns
  - [ ] inheritance downsides

- [ ] Conditional rendering
  - [ ] `if`
  - [ ] ternary
  - [ ] `&&`
  - [ ] rendering `null`

- [ ] Lists and keys
  - [ ] stable identity
  - [ ] why index keys are risky
  - [ ] reordering implications

- [ ] Refs
  - [ ] DOM access
  - [ ] mutable values
  - [ ] avoiding overuse

- [ ] Forward refs
  - [ ] ref forwarding
  - [ ] library component patterns
  - [ ] imperative access use cases

- [ ] Portals
  - [ ] rendering outside parent DOM tree
  - [ ] modal/popover use cases
  - [ ] event bubbling behavior

- [ ] Error boundaries
  - [ ] catching render errors
  - [ ] what they do not catch
  - [ ] fallback UI strategy

- [ ] Context API
  - [ ] provider/consumer model
  - [ ] avoiding prop drilling
  - [ ] re-render caveats

- [ ] Hooks rules
  - [ ] top-level only
  - [ ] React functions only
  - [ ] lint enforcement

- [ ] `useState`
  - [ ] updater function
  - [ ] lazy init
  - [ ] batching implications

- [ ] `useReducer`
  - [ ] reducer shape
  - [ ] action modeling
  - [ ] when better than useState

- [ ] `useEffect`
  - [ ] side effects
  - [ ] dependency arrays
  - [ ] cleanup
  - [ ] race conditions

- [ ] `useLayoutEffect`
  - [ ] timing before paint
  - [ ] layout measurement
  - [ ] blocking paint caveat

- [ ] `useMemo`
  - [ ] memoizing expensive computation
  - [ ] referential stability
  - [ ] misuse risks

- [ ] `useCallback`
  - [ ] stable function references
  - [ ] dependency management
  - [ ] overuse tradeoffs

- [ ] `useRef`
  - [ ] mutable container
  - [ ] DOM refs
  - [ ] avoiding re-renders

- [ ] `useContext`
  - [ ] reading context
  - [ ] update propagation
  - [ ] selector alternatives

- [ ] `useImperativeHandle`
  - [ ] controlled imperative API exposure
  - [ ] ref customization

- [ ] `useTransition`
  - [ ] non-urgent updates
  - [ ] pending state
  - [ ] UX benefit

- [ ] `useDeferredValue`
  - [ ] deferring expensive rendering
  - [ ] search/filter use cases

- [ ] `useId`
  - [ ] stable IDs
  - [ ] SSR-safe labeling
  - [ ] not for list keys

- [ ] `useSyncExternalStore`
  - [ ] external state subscription
  - [ ] consistency with concurrent rendering
  - [ ] store integration basics

- [ ] Custom hooks
  - [ ] extracting reusable behavior
  - [ ] naming convention
  - [ ] separating logic from UI

- [ ] State batching
  - [ ] automatic batching
  - [ ] update coalescing
  - [ ] effect on render count

- [ ] Stale closures
  - [ ] effects
  - [ ] event handlers
  - [ ] timers
  - [ ] fixing with dependencies/refs/updaters

- [ ] Dependency arrays
  - [ ] exhaustive-deps mental model
  - [ ] stable dependency techniques
  - [ ] false optimization pitfalls

- [ ] Effect cleanup
  - [ ] subscriptions
  - [ ] timers
  - [ ] fetch cancellation
  - [ ] preventing leaks

- [ ] React event system
  - [ ] synthetic wrapper model
  - [ ] delegation
  - [ ] compatibility layer

- [ ] Synthetic events
  - [ ] normalized event interface
  - [ ] native event access
  - [ ] modern pooling note

- [ ] Render props
  - [ ] function-as-child pattern
  - [ ] flexibility vs readability

- [ ] HOC pattern
  - [ ] component enhancement
  - [ ] prop forwarding
  - [ ] wrapper hell tradeoffs

- [ ] Compound components
  - [ ] shared parent context
  - [ ] expressive APIs
  - [ ] tabs/accordion examples

- [ ] Headless component patterns
  - [ ] behavior without styles
  - [ ] render flexibility
  - [ ] accessibility ownership

- [ ] Suspense
  - [ ] async boundaries
  - [ ] fallback UI
  - [ ] code/data loading role

- [ ] Lazy components
  - [ ] `React.lazy`
  - [ ] Suspense wrapping
  - [ ] route/component splitting

- [ ] Server Components concept
  - [ ] server-rendered component model
  - [ ] bundle reduction
  - [ ] server/client boundaries

- [ ] Client Components concept
  - [ ] interactive components
  - [ ] browser-only APIs
  - [ ] boundary costs

## React Rendering & State

- [ ] Render triggers
  - [ ] state changes
  - [ ] parent re-render
  - [ ] context updates
  - [ ] external store updates

- [ ] Parent/child re-render behavior
  - [ ] default propagation
  - [ ] memoized child behavior
  - [ ] prop identity effects

- [ ] Key-based remounting
  - [ ] reset local state
  - [ ] preserving identity
  - [ ] list key pitfalls

- [ ] Identity and referential equality
  - [ ] objects/functions recreated each render
  - [ ] memoization impact
  - [ ] dependency array implications

- [ ] Immutable updates
  - [ ] arrays
  - [ ] objects
  - [ ] nested update patterns
  - [ ] why mutation breaks assumptions

- [ ] Derived state pitfalls
  - [ ] duplicated source of truth
  - [ ] syncing props to state issues
  - [ ] compute-on-render alternatives

- [ ] Colocation of state
  - [ ] keep state close to use site
  - [ ] reducing re-renders
  - [ ] balance with shared needs

- [ ] Global vs local state tradeoffs
  - [ ] scope of ownership
  - [ ] complexity cost
  - [ ] devtools/debugging benefits

- [ ] URL state
  - [ ] search params
  - [ ] shareable filters
  - [ ] navigation persistence

- [ ] Form state
  - [ ] field values
  - [ ] validation/errors
  - [ ] dirty/touched metadata

- [ ] Server state vs client state
  - [ ] fetched/cacheable data
  - [ ] local interaction state
  - [ ] choosing right tool

- [ ] Optimistic UI
  - [ ] immediate feedback
  - [ ] rollback handling
  - [ ] server conflict risks

- [ ] Normalization
  - [ ] entity maps
  - [ ] IDs as references
  - [ ] update efficiency

- [ ] Selector patterns
  - [ ] extracting slices
  - [ ] preventing unnecessary renders
  - [ ] memoized selectors

- [ ] Memoized selectors
  - [ ] computed derivations
  - [ ] cache invalidation basics
  - [ ] referential stability

- [ ] State machines basics
  - [ ] finite states
  - [ ] transitions
  - [ ] impossible state reduction
  - [ ] UI workflow modeling

## State Management

- [ ] Context + reducer pattern
  - [ ] provider setup
  - [ ] reducer actions
  - [ ] performance caveats
  - [ ] selector workaround patterns

- [ ] Redux fundamentals
  - [ ] single store
  - [ ] actions
  - [ ] reducers
  - [ ] unidirectional flow

- [ ] Redux Toolkit
  - [ ] `configureStore`
  - [ ] `createSlice`
  - [ ] Immer usage
  - [ ] async tooling overview

- [ ] Middleware concept
  - [ ] intercepting actions
  - [ ] logging
  - [ ] async side effects
  - [ ] extensibility role

- [ ] Async state handling
  - [ ] loading/error/data states
  - [ ] thunks/sagas/query libs
  - [ ] cancellation concerns

- [ ] Zustand fundamentals
  - [ ] store creation
  - [ ] hook-based access
  - [ ] minimal API
  - [ ] mutable internals with immutable updates

- [ ] Zustand selectors
  - [ ] selecting slices
  - [ ] preventing broad subscriptions
  - [ ] derived reads

- [ ] Zustand shallow compare
  - [ ] shallow equality
  - [ ] object selector pitfalls
  - [ ] rerender optimization

- [ ] Zustand middleware
  - [ ] logging
  - [ ] devtools
  - [ ] persist
  - [ ] immer integration basics

- [ ] Zustand persist
  - [ ] storage sync
  - [ ] rehydration
  - [ ] versioning/migration basics

- [ ] Zustand pitfalls with re-renders
  - [ ] selecting too much state
  - [ ] unstable derived objects
  - [ ] action identity misconceptions

- [ ] Jotai basics
  - [ ] atoms
  - [ ] derived atoms
  - [ ] fine-grained subscriptions

- [ ] Recoil basics
  - [ ] atoms
  - [ ] selectors
  - [ ] graph-based state concept

- [ ] MobX basics
  - [ ] observables
  - [ ] reactions
  - [ ] mutable style tradeoffs

- [ ] XState basics
  - [ ] states
  - [ ] events
  - [ ] transitions
  - [ ] invoked async flows basics

- [ ] Choosing state management strategy
  - [ ] app size
  - [ ] team familiarity
  - [ ] debugging needs
  - [ ] server-state overlap
  - [ ] complexity vs capability

## TanStack Query

- [ ] Query keys
  - [ ] stable key structure
  - [ ] parameterized keys
  - [ ] cache scoping

- [ ] Stale time
  - [ ] fresh vs stale data
  - [ ] refetch frequency impact
  - [ ] UX/perf tradeoffs

- [ ] Cache time / garbage collection
  - [ ] inactive query retention
  - [ ] memory tradeoff
  - [ ] lifecycle expectations

- [ ] Refetch behaviors
  - [ ] on mount
  - [ ] on window focus
  - [ ] on reconnect
  - [ ] interval refetching

- [ ] Invalidation
  - [ ] targeted invalidation
  - [ ] after mutations
  - [ ] stale marking strategy

- [ ] Mutation lifecycle
  - [ ] `onMutate`
  - [ ] `onSuccess`
  - [ ] `onError`
  - [ ] `onSettled`

- [ ] Optimistic updates
  - [ ] snapshotting previous cache
  - [ ] rollback
  - [ ] invalidation after settle

- [ ] Infinite queries
  - [ ] page param handling
  - [ ] load more patterns
  - [ ] cache shape understanding

- [ ] Pagination
  - [ ] page-based query keys
  - [ ] placeholder/keep previous patterns
  - [ ] UX implications

- [ ] Prefetching
  - [ ] next-page data
  - [ ] route hover/page predict
  - [ ] reducing perceived latency

- [ ] Dependent queries
  - [ ] enabled flag
  - [ ] chaining requests safely
  - [ ] avoiding undefined params

- [ ] Parallel queries
  - [ ] independent data fetching
  - [ ] concurrency benefits
  - [ ] aggregate loading states

- [ ] Suspense integration
  - [ ] suspense mode basics
  - [ ] error boundaries
  - [ ] fallback strategy

- [ ] SSR hydration / dehydration
  - [ ] prefetch on server
  - [ ] serialize cache
  - [ ] hydrate on client

- [ ] Error handling
  - [ ] retry vs surfaced errors
  - [ ] local vs global error boundaries
  - [ ] user messaging

- [ ] Retry strategies
  - [ ] default retries
  - [ ] disabling for some errors
  - [ ] backoff awareness

- [ ] Placeholder data vs initial data
  - [ ] temporary placeholder UX
  - [ ] cache seeding
  - [ ] stale/fresh semantics difference

- [ ] Query cancellation
  - [ ] abort support
  - [ ] stale request cleanup
  - [ ] route change behavior

- [ ] Persisted cache
  - [ ] storage persistence
  - [ ] hydration timing
  - [ ] invalidation/version concerns

- [ ] Devtools
  - [ ] inspecting cache
  - [ ] debugging statuses
  - [ ] query lifecycle visibility

- [ ] Common anti-patterns
  - [ ] overusing query for local state
  - [ ] unstable query keys
  - [ ] broad invalidation
  - [ ] duplicate state copies

## Forms

- [ ] Controlled forms
  - [ ] value + onChange
  - [ ] React state as source of truth
  - [ ] validation integration

- [ ] Uncontrolled forms
  - [ ] refs
  - [ ] native form behavior
  - [ ] simpler inputs
  - [ ] tradeoffs vs controlled

- [ ] Form validation strategies
  - [ ] native validation
  - [ ] schema validation
  - [ ] sync vs async validation
  - [ ] onChange/onBlur/onSubmit timing

- [ ] React Hook Form
  - [ ] registration model
  - [ ] uncontrolled-first design
  - [ ] performance benefits
  - [ ] resolver integration

- [ ] `Controller`
  - [ ] third-party controlled inputs
  - [ ] bridging RHF with custom UI libs

- [ ] Field arrays
  - [ ] dynamic list fields
  - [ ] stable keys
  - [ ] nested form data

- [ ] Schema validation
  - [ ] Zod/Yup style integration
  - [ ] single source of truth
  - [ ] typed validation output

- [ ] Zod
  - [ ] schema definitions
  - [ ] parsing
  - [ ] refinements
  - [ ] form + API validation reuse

- [ ] Async validation
  - [ ] username/email availability
  - [ ] debounce
  - [ ] race condition handling

- [ ] Form performance
  - [ ] minimizing re-renders
  - [ ] field-level subscriptions
  - [ ] large form optimization

- [ ] Accessible error handling
  - [ ] inline errors
  - [ ] `aria-describedby`
  - [ ] `aria-invalid`
  - [ ] focus on submit errors
  - [ ] live region announcements

- [ ] Dirty / touched / submit states
  - [ ] pristine vs dirty
  - [ ] touched tracking
  - [ ] submitting state
  - [ ] submit success/failure handling

## Routing

- [ ] SPA routing concepts
  - [ ] client-side navigation
  - [ ] history API usage
  - [ ] route matching
  - [ ] deep linking

- [ ] React Router fundamentals
  - [ ] route config
  - [ ] `Link`
  - [ ] `Outlet`
  - [ ] navigation hooks

- [ ] Nested routes
  - [ ] parent-child rendering
  - [ ] shared layouts
  - [ ] index routes basics

- [ ] Layout routes
  - [ ] shell components
  - [ ] persistent UI regions
  - [ ] nested outlet structure

- [ ] Route params
  - [ ] dynamic segments
  - [ ] param reading
  - [ ] validation/coercion

- [ ] Search params
  - [ ] query string state
  - [ ] filters/sort/pagination
  - [ ] URL synchronization

- [ ] Protected routes
  - [ ] auth checks
  - [ ] redirects
  - [ ] client-only limitations

- [ ] Lazy routes
  - [ ] route-based code splitting
  - [ ] fallback loading
  - [ ] chunk boundaries

- [ ] Data routers basics
  - [ ] loaders
  - [ ] actions
  - [ ] error elements
  - [ ] mutation/navigation integration

- [ ] Navigation guards patterns
  - [ ] unsaved changes prompts
  - [ ] auth redirects
  - [ ] role-based route handling

- [ ] Scroll restoration
  - [ ] preserving/ resetting scroll
  - [ ] SPA UX expectations

- [ ] URL-driven state
  - [ ] shareable app state
  - [ ] persistence across reloads
  - [ ] query vs local state tradeoffs

## Next.js

- [ ] App Router
  - [ ] folder conventions
  - [ ] nested layouts
  - [ ] server-first mental model

- [ ] Pages Router
  - [ ] legacy routing model
  - [ ] `getServerSideProps`
  - [ ] `getStaticProps`
  - [ ] migration awareness

- [ ] File-system routing
  - [ ] segment-based routes
  - [ ] conventions
  - [ ] route colocation patterns

- [ ] Nested layouts
  - [ ] persistent UI shells
  - [ ] shared layout state
  - [ ] layout hierarchy

- [ ] Route groups
  - [ ] organization without URL change
  - [ ] grouping layouts

- [ ] Parallel routes
  - [ ] multiple route slots
  - [ ] dashboard/modal use cases
  - [ ] complexity tradeoffs

- [ ] Intercepting routes
  - [ ] modal-over-route patterns
  - [ ] preserving background page context

- [ ] Dynamic routes
  - [ ] `[id]`
  - [ ] catch-all segments
  - [ ] params handling

- [ ] Metadata API
  - [ ] title/description
  - [ ] dynamic metadata
  - [ ] SEO/social tags integration

- [ ] `Link`
  - [ ] client navigation
  - [ ] prefetch behavior
  - [ ] accessibility basics

- [ ] `Image`
  - [ ] optimization
  - [ ] responsive behavior
  - [ ] sizing to avoid CLS
  - [ ] remote patterns

- [ ] `Script`
  - [ ] loading strategies
  - [ ] third-party script control
  - [ ] performance considerations

- [ ] Server Components
  - [ ] default in App Router
  - [ ] no client hooks
  - [ ] server-only data fetching
  - [ ] bundle-size benefits

- [ ] Client Components
  - [ ] interactivity
  - [ ] browser APIs
  - [ ] boundary cost

- [ ] `use client`
  - [ ] client boundary declaration
  - [ ] propagation to imports
  - [ ] bundle implications

- [ ] Data fetching in App Router
  - [ ] async server components
  - [ ] fetch caching behavior
  - [ ] colocated data fetching

- [ ] Route Handlers
  - [ ] API endpoints in App Router
  - [ ] request/response handling
  - [ ] edge/node support

- [ ] Server Actions
  - [ ] server-side mutations
  - [ ] form integrations
  - [ ] security and DX tradeoffs

- [ ] Middleware
  - [ ] request interception
  - [ ] auth/redirect use cases
  - [ ] edge runtime constraints

- [ ] Edge runtime
  - [ ] low-latency execution
  - [ ] limited APIs
  - [ ] suitable workloads

- [ ] Node runtime
  - [ ] full Node APIs
  - [ ] heavier server capabilities

- [ ] Streaming
  - [ ] progressive rendering
  - [ ] Suspense boundaries
  - [ ] perceived performance benefits

- [ ] Suspense boundaries
  - [ ] route segment loading
  - [ ] partial reveal
  - [ ] fallback design

- [ ] CSR
  - [ ] client-side rendering
  - [ ] SPA-like behavior
  - [ ] SEO/perf tradeoffs

- [ ] SSR
  - [ ] request-time rendering
  - [ ] dynamic data
  - [ ] TTFB tradeoffs

- [ ] SSG
  - [ ] build-time generation
  - [ ] cacheability
  - [ ] static content use cases

- [ ] ISR
  - [ ] incremental regeneration
  - [ ] stale content tradeoff
  - [ ] revalidation flow

- [ ] Partial prerendering concept
  - [ ] mixing static shell with dynamic content
  - [ ] performance goals
  - [ ] current mental model

- [ ] Hydration in Next.js
  - [ ] client activation
  - [ ] mismatch causes
  - [ ] reducing client JS

- [ ] Caching in Next.js
  - [ ] fetch cache
  - [ ] route cache
  - [ ] full-page/static cache concepts
  - [ ] invalidation awareness

- [ ] Revalidation
  - [ ] time-based
  - [ ] on-demand
  - [ ] stale-while-revalidate behavior

- [ ] `revalidatePath`
  - [ ] path-based invalidation
  - [ ] mutation workflows

- [ ] `revalidateTag`
  - [ ] tag-based invalidation
  - [ ] grouped cache refresh

- [ ] Static vs dynamic rendering
  - [ ] build-time eligibility
  - [ ] request-time dependencies
  - [ ] cache/perf tradeoffs

- [ ] Auth patterns in Next.js
  - [ ] cookie-based auth
  - [ ] middleware protection
  - [ ] server-side session checks
  - [ ] client guard limitations

- [ ] Cookies / headers APIs
  - [ ] reading request data on server
  - [ ] dynamic rendering implications

- [ ] SEO in Next.js
  - [ ] metadata API
  - [ ] server rendering benefits
  - [ ] structured data injection

- [ ] Deployment considerations
  - [ ] platform/runtime compatibility
  - [ ] env vars
  - [ ] edge vs node deployment

- [ ] Bundle analysis
  - [ ] client bundle inspection
  - [ ] finding large dependencies
  - [ ] reducing client boundaries

- [ ] Common App Router pitfalls
  - [ ] mixing server/client concerns
  - [ ] accidental dynamic rendering
  - [ ] cache confusion
  - [ ] hydration mismatch issues

## UI Libraries & Component Systems

- [ ] shadcn/ui setup
  - [ ] init process
  - [ ] Tailwind dependency
  - [ ] component generation
  - [ ] project structure

- [ ] shadcn/ui customization
  - [ ] editing generated code
  - [ ] theme tokens
  - [ ] variants
  - [ ] ownership model

- [ ] Radix accessibility model
  - [ ] headless primitives
  - [ ] keyboard support
  - [ ] ARIA/state management
  - [ ] styling responsibility

- [ ] Headless UI concepts
  - [ ] behavior without styles
  - [ ] composability
  - [ ] accessibility-first primitives

- [ ] Design tokens
  - [ ] colors
  - [ ] spacing
  - [ ] typography
  - [ ] radius
  - [ ] semantic vs raw tokens

- [ ] Theming architecture
  - [ ] token layers
  - [ ] CSS variables
  - [ ] dark mode
  - [ ] brand theming

- [ ] Component API design
  - [ ] prop naming
  - [ ] sensible defaults
  - [ ] extensibility
  - [ ] consistency across system

- [ ] Controlled/uncontrolled component APIs
  - [ ] `value` + `onChange`
  - [ ] `defaultValue`
  - [ ] predictable ownership
  - [ ] dual-mode support

- [ ] Polymorphic components
  - [ ] `as` prop concept
  - [ ] semantic flexibility
  - [ ] typing complexity

- [ ] `asChild`
  - [ ] slotting behavior into child
  - [ ] avoiding extra wrapper nodes
  - [ ] Radix/shadcn pattern

- [ ] Slot pattern
  - [ ] composable child injection
  - [ ] layout flexibility
  - [ ] ownership of semantics

- [ ] Compound component APIs
  - [ ] `Tabs`, `Accordion`, `Select`
  - [ ] shared context
  - [ ] expressive usage

- [ ] Variant systems (`cva` / `clsx` / `tailwind-merge`)
  - [ ] base classes
  - [ ] variants
  - [ ] conditional classes
  - [ ] deduping conflicting utilities

- [ ] Icon strategy
  - [ ] icon library choice
  - [ ] tree shaking
  - [ ] accessibility labeling
  - [ ] sizing consistency

- [ ] Responsive component patterns
  - [ ] adaptable layout
  - [ ] container queries possibility
  - [ ] mobile-first API decisions

## Testing

- [ ] Testing pyramid
  - [ ] unit tests
  - [ ] integration tests
  - [ ] E2E tests
  - [ ] balancing cost and confidence

- [ ] Unit tests
  - [ ] pure functions
  - [ ] reducers
  - [ ] utility helpers
  - [ ] small component logic

- [ ] Integration tests
  - [ ] component + state + network boundaries
  - [ ] user-centric assertions
  - [ ] higher confidence than unit-only

- [ ] E2E tests
  - [ ] real browser workflows
  - [ ] auth/navigation/form flows
  - [ ] slow but high confidence

- [ ] Vitest / Jest fundamentals
  - [ ] test structure
  - [ ] matchers
  - [ ] mocks
  - [ ] setup files

- [ ] React Testing Library
  - [ ] render
  - [ ] queries by role/label/text
  - [ ] user-focused assertions
  - [ ] avoiding implementation detail tests

- [ ] Testing user behavior
  - [ ] clicks
  - [ ] typing
  - [ ] keyboard interaction
  - [ ] async UI transitions

- [ ] Mocking strategies
  - [ ] module mocks
  - [ ] function spies
  - [ ] network mocks
  - [ ] when not to mock

- [ ] MSW
  - [ ] API interception
  - [ ] realistic network layer tests
  - [ ] success/error scenario modeling

- [ ] Async testing
  - [ ] `findBy`
  - [ ] `waitFor`
  - [ ] loading state assertions
  - [ ] avoiding flaky timing hacks

- [ ] Testing hooks
  - [ ] custom hook behavior
  - [ ] state transitions
  - [ ] async hook logic

- [ ] Testing forms
  - [ ] validation
  - [ ] submission
  - [ ] error messaging
  - [ ] accessibility assertions

- [ ] Accessibility testing
  - [ ] role/name queries
  - [ ] keyboard navigation
  - [ ] axe-style automated checks basics

- [ ] Playwright
  - [ ] page interactions
  - [ ] assertions
  - [ ] network control
  - [ ] tracing/screenshots basics

- [ ] Cypress basics
  - [ ] command chain model
  - [ ] browser workflow tests
  - [ ] common use cases

- [ ] Snapshot testing tradeoffs
  - [ ] brittle large snapshots
  - [ ] focused snapshot use
  - [ ] regression detection limits

- [ ] Contract testing basics
  - [ ] frontend/backend schema alignment
  - [ ] mocked vs real contract confidence
  - [ ] consumer-driven contract concept

## Architecture

- [ ] Feature-based folder structure
  - [ ] by domain/feature
  - [ ] collocation
  - [ ] scaling benefits vs shared folder sprawl

- [ ] Domain-driven frontend concepts
  - [ ] business domains
  - [ ] ubiquitous language
  - [ ] domain boundaries in UI

- [ ] Separation of concerns
  - [ ] UI vs logic vs data access
  - [ ] component/service boundaries
  - [ ] avoiding god components

- [ ] Smart vs dumb components
  - [ ] container logic
  - [ ] presentational rendering
  - [ ] modern tradeoffs

- [ ] Container/presentational pattern
  - [ ] historical pattern
  - [ ] hook-based alternatives
  - [ ] when still useful

- [ ] Atomic design
  - [ ] atoms
  - [ ] molecules
  - [ ] organisms
  - [ ] template/page mental model

- [ ] Module boundaries
  - [ ] public API per module
  - [ ] avoiding deep imports
  - [ ] dependency direction

- [ ] API layer abstraction
  - [ ] fetch client wrapper
  - [ ] DTO mapping
  - [ ] error normalization
  - [ ] testability

- [ ] Error handling strategy
  - [ ] UI errors
  - [ ] network errors
  - [ ] global logging
  - [ ] retry/fallback decisions

- [ ] Logging strategy
  - [ ] client logs
  - [ ] structured logging basics
  - [ ] privacy concerns
  - [ ] correlation IDs awareness

- [ ] Observability basics
  - [ ] logs
  - [ ] metrics
  - [ ] traces
  - [ ] frontend monitoring tools basics

- [ ] Monorepo basics
  - [ ] shared packages
  - [ ] workspace tooling
  - [ ] versioning tradeoffs

- [ ] Shared UI packages
  - [ ] component library extraction
  - [ ] versioning
  - [ ] styling/token sharing
  - [ ] release management

- [ ] Microfrontend basics
  - [ ] independent deployments
  - [ ] integration strategies
  - [ ] runtime overhead
  - [ ] org-driven tradeoffs

- [ ] SSR architecture tradeoffs
  - [ ] performance
  - [ ] caching
  - [ ] complexity
  - [ ] infra cost

- [ ] BFF concept
  - [ ] Backend for Frontend role
  - [ ] API aggregation
  - [ ] frontend-specific shaping
  - [ ] tradeoffs

## Design Patterns

- [ ] Singleton
  - [ ] one instance concept
  - [ ] pitfalls in tests/global state
  - [ ] practical frontend examples

- [ ] Factory
  - [ ] object creation abstraction
  - [ ] configuration-based instantiation
  - [ ] use cases

- [ ] Strategy
  - [ ] interchangeable algorithms
  - [ ] conditional complexity reduction
  - [ ] UI/business rule examples

- [ ] Adapter
  - [ ] interface translation
  - [ ] third-party integration use cases
  - [ ] DTO adaptation

- [ ] Observer
  - [ ] subscription model
  - [ ] event-driven updates
  - [ ] store/event emitter relation

- [ ] Pub/Sub
  - [ ] decoupled messaging
  - [ ] event bus basics
  - [ ] overuse risks

- [ ] Decorator
  - [ ] behavior extension without modifying core
  - [ ] higher-order function/class parallels

- [ ] Facade
  - [ ] simplified API surface
  - [ ] wrapper around complex subsystems

- [ ] Command
  - [ ] encapsulating actions
  - [ ] undo/redo mental model
  - [ ] task dispatching

- [ ] State pattern
  - [ ] behavior by current state
  - [ ] finite-state workflows
  - [ ] UI wizard examples

- [ ] Dependency injection
  - [ ] invert construction
  - [ ] testability benefits
  - [ ] frontend service injection patterns

- [ ] Repository pattern
  - [ ] data access abstraction
  - [ ] API/storage swapping
  - [ ] domain-oriented access

- [ ] Composition pattern
  - [ ] composing behavior/parts
  - [ ] React-first relevance
  - [ ] flexibility vs inheritance

- [ ] Render props
  - [ ] function child pattern
  - [ ] cross-cutting behavior reuse
  - [ ] verbosity tradeoff

- [ ] Higher-order components
  - [ ] wrapper enhancement pattern
  - [ ] legacy reuse strategy
  - [ ] composition cost

- [ ] Compound components
  - [ ] coordinated child components
  - [ ] expressive APIs
  - [ ] context-driven internals

- [ ] Provider pattern
  - [ ] context provider abstraction
  - [ ] app-wide dependency exposure

- [ ] Hooks as behavior composition
  - [ ] reusable stateful logic
  - [ ] replacing mixins/HOCs/render props in many cases

## Design Principles

- [ ] SOLID
  - [ ] overview
  - [ ] frontend applicability
  - [ ] tradeoff awareness

- [ ] SRP
  - [ ] single reason to change
  - [ ] components/functions/modules examples

- [ ] OCP
  - [ ] open for extension, closed for modification
  - [ ] plugin/variant-oriented design

- [ ] LSP
  - [ ] substitutability
  - [ ] component/API contract correctness

- [ ] ISP
  - [ ] small focused interfaces
  - [ ] avoiding bloated prop APIs

- [ ] DIP
  - [ ] depend on abstractions
  - [ ] service contracts
  - [ ] testability benefits

- [ ] DRY
  - [ ] avoiding duplication
  - [ ] not over-abstracting too early

- [ ] KISS
  - [ ] simplest workable solution
  - [ ] readability over cleverness

- [ ] YAGNI
  - [ ] avoid speculative abstractions
  - [ ] premature generalization risks

- [ ] Composition over inheritance
  - [ ] React relevance
  - [ ] flexibility and reuse

- [ ] High cohesion / low coupling
  - [ ] module focus
  - [ ] dependency minimization
  - [ ] maintainability benefits

- [ ] Separation of concerns
  - [ ] rendering
  - [ ] data fetching
  - [ ] business logic
  - [ ] styling boundaries

- [ ] Encapsulation
  - [ ] hiding internals
  - [ ] stable public APIs
  - [ ] component abstraction

- [ ] Immutability
  - [ ] safer state transitions
  - [ ] predictability
  - [ ] perf implications in React

- [ ] Idempotency
  - [ ] same input same effect/result semantics
  - [ ] network/UI operation examples

- [ ] Progressive enhancement
  - [ ] working baseline
  - [ ] optional richer behavior
  - [ ] resilience

- [ ] Graceful degradation
  - [ ] fallback behavior in weaker environments
  - [ ] support strategy differences vs progressive enhancement

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

## Tooling

- [ ] npm / pnpm / yarn
  - [ ] package management basics
  - [ ] lockfiles
  - [ ] workspaces
  - [ ] pnpm symlink/store model awareness

- [ ] Vite
  - [ ] dev server model
  - [ ] ESM-based development
  - [ ] build pipeline basics
  - [ ] plugin ecosystem

- [ ] Webpack basics
  - [ ] entry/output
  - [ ] loaders
  - [ ] plugins
  - [ ] bundling mental model

- [ ] Babel basics
  - [ ] transpilation
  - [ ] presets
  - [ ] plugins
  - [ ] modern usage context

- [ ] SWC basics
  - [ ] Rust-based compiler
  - [ ] speed advantage
  - [ ] transpilation role

- [ ] ESLint
  - [ ] static analysis
  - [ ] rules
  - [ ] shareable configs
  - [ ] autofix basics

- [ ] Prettier
  - [ ] formatting role
  - [ ] opinionated output
  - [ ] ESLint integration boundaries

- [ ] Husky / lint-staged
  - [ ] git hooks
  - [ ] pre-commit checks
  - [ ] preventing bad commits

- [ ] PostCSS
  - [ ] CSS processing pipeline
  - [ ] autoprefixer
  - [ ] plugin ecosystem

- [ ] Source maps
  - [ ] debugging built code
  - [ ] production exposure tradeoffs
  - [ ] stack trace relevance

- [ ] Environment variables
  - [ ] build-time injection
  - [ ] client exposure limitations
  - [ ] environment separation

- [ ] `.env` handling
  - [ ] naming conventions
  - [ ] secrets hygiene
  - [ ] local vs production config

- [ ] CI/CD basics
  - [ ] automated checks
  - [ ] build/test/deploy stages
  - [ ] branch protections basics

- [ ] Build pipelines
  - [ ] install
  - [ ] lint
  - [ ] test
  - [ ] build
  - [ ] artifact/deploy flow

- [ ] Docker basics for frontend
  - [ ] multi-stage builds
  - [ ] static asset serving
  - [ ] environment injection patterns

- [ ] Bundle analyzers
  - [ ] chunk inspection
  - [ ] dependency size analysis
  - [ ] optimization workflow

- [ ] Storybook
  - [ ] component isolation
  - [ ] docs
  - [ ] visual testing support
  - [ ] design system workflows

- [ ] Chromatic basics
  - [ ] visual regression
  - [ ] Storybook integration
  - [ ] review workflows

## Git

- [ ] Branching strategies
  - [ ] feature branches
  - [ ] trunk-based basics
  - [ ] git flow awareness
  - [ ] release branching tradeoffs

- [ ] Rebase vs merge
  - [ ] history cleanliness
  - [ ] conflict handling
  - [ ] team workflow tradeoffs

- [ ] Conflict resolution
  - [ ] understanding markers
  - [ ] semantic merge decisions
  - [ ] retesting after resolve

- [ ] Cherry-pick
  - [ ] selective commit transfer
  - [ ] backporting fixes
  - [ ] conflict risks

- [ ] Reflog basics
  - [ ] recovering lost commits
  - [ ] HEAD history awareness

- [ ] Commit hygiene
  - [ ] small focused commits
  - [ ] meaningful messages
  - [ ] avoiding mixed concerns

- [ ] Conventional commits
  - [ ] `feat`
  - [ ] `fix`
  - [ ] `chore`
  - [ ] semantic release awareness

- [ ] PR review practices
  - [ ] scope clarity
  - [ ] constructive feedback
  - [ ] test evidence
  - [ ] review checklist mindset

## Debugging

- [ ] Browser DevTools
  - [ ] elements panel
  - [ ] console
  - [ ] sources
  - [ ] application tab basics

- [ ] Network tab
  - [ ] requests
  - [ ] headers
  - [ ] payloads
  - [ ] waterfalls
  - [ ] cache/debugging clues

- [ ] Performance tab
  - [ ] recording
  - [ ] flame charts
  - [ ] long tasks
  - [ ] layout/paint analysis

- [ ] Memory tab
  - [ ] heap snapshots
  - [ ] allocation timeline
  - [ ] leak detection basics

- [ ] React DevTools
  - [ ] component tree inspection
  - [ ] props/state viewing
  - [ ] context visibility

- [ ] React Profiler
  - [ ] commit duration
  - [ ] render counts
  - [ ] slow component discovery

- [ ] Source maps debugging
  - [ ] stepping through original source
  - [ ] prod issue diagnosis
  - [ ] config awareness

- [ ] Hydration mismatch debugging
  - [ ] inconsistent server/client output
  - [ ] browser-only APIs
  - [ ] unstable values (`Date`, random, locale) issues

- [ ] Production issue triage
  - [ ] reproduce
  - [ ] scope impact
  - [ ] logs/monitoring
  - [ ] rollback vs hotfix decision

- [ ] Reproducible bug isolation
  - [ ] minimal repro
  - [ ] binary search of changes
  - [ ] isolating environment/data factors

## System Design for Frontend

- [ ] Designing scalable frontend architecture
  - [ ] modularity
  - [ ] team scalability
  - [ ] ownership boundaries
  - [ ] performance and DX balance

- [ ] SSR vs CSR decision making
  - [ ] SEO needs
  - [ ] personalization
  - [ ] infra cost
  - [ ] UX/performance tradeoffs

- [ ] Caching layers
  - [ ] browser
  - [ ] CDN
  - [ ] app data cache
  - [ ] server cache
  - [ ] invalidation strategy

- [ ] State ownership decisions
  - [ ] local vs global
  - [ ] server vs client
  - [ ] URL state
  - [ ] persistence decisions

- [ ] API orchestration
  - [ ] frontend aggregation
  - [ ] BFF usage
  - [ ] waterfall avoidance
  - [ ] error/loading composition

- [ ] Error boundaries strategy
  - [ ] page-level boundaries
  - [ ] widget isolation
  - [ ] fallback UX
  - [ ] logging/reporting

- [ ] Loading / empty / error UX states
  - [ ] skeletons
  - [ ] spinners
  - [ ] retry actions
  - [ ] no-data messaging

- [ ] Design system architecture
  - [ ] tokens
  - [ ] primitives
  - [ ] composed components
  - [ ] governance and versioning

- [ ] Large form architecture
  - [ ] field composition
  - [ ] validation orchestration
  - [ ] performance
  - [ ] autosave/draft strategy

- [ ] Data-heavy table architecture
  - [ ] virtualization
  - [ ] sorting/filtering/pagination
  - [ ] server-side vs client-side ops
  - [ ] accessibility

- [ ] Realtime UI architecture
  - [ ] WebSocket/SSE
  - [ ] optimistic updates
  - [ ] conflict reconciliation
  - [ ] reconnect behavior

- [ ] Offline-first basics
  - [ ] caching
  - [ ] queued mutations
  - [ ] sync conflict handling
  - [ ] service worker role

- [ ] Multi-tenant frontend concerns
  - [ ] theming
  - [ ] permissions
  - [ ] tenant config
  - [ ] data isolation awareness

- [ ] Internationalization architecture
  - [ ] locale routing
  - [ ] translation loading
  - [ ] formatting boundaries
  - [ ] RTL support

- [ ] Feature flags
  - [ ] rollout control
  - [ ] kill switches
  - [ ] cleanup of stale flags
  - [ ] targeting basics

- [ ] A/B testing basics
  - [ ] experiment assignment
  - [ ] metrics
  - [ ] flicker avoidance
  - [ ] analytics integrity

## Internationalization

- [ ] i18n fundamentals
  - [ ] translation keys
  - [ ] locale switching
  - [ ] content externalization
  - [ ] fallback locales

- [ ] RTL/LTR handling
  - [ ] `dir`
  - [ ] logical CSS properties
  - [ ] icon/layout mirroring
  - [ ] mixed-direction text issues

- [ ] Locale-based routing
  - [ ] path prefixes
  - [ ] domain-based locales
  - [ ] SEO considerations

- [ ] Date / number formatting
  - [ ] `Intl.DateTimeFormat`
  - [ ] `Intl.NumberFormat`
  - [ ] currencies
  - [ ] time zones

- [ ] Translation loading strategies
  - [ ] eager vs lazy loading
  - [ ] namespace splitting
  - [ ] caching translation resources

- [ ] Pluralization
  - [ ] locale-specific plural rules
  - [ ] ICU-style message awareness
  - [ ] variable interpolation

- [ ] SEO for multilingual apps
  - [ ] localized metadata
  - [ ] `hreflang`
  - [ ] canonical strategy
  - [ ] translated slugs considerations

## Senior-Level Non-Technical

- [ ] Code review mindset
  - [ ] correctness first
  - [ ] edge cases
  - [ ] maintainability
  - [ ] performance/security awareness

- [ ] Mentoring juniors
  - [ ] teaching through feedback
  - [ ] pairing
  - [ ] leveling guidance
  - [ ] creating safe learning space

- [ ] Tradeoff analysis
  - [ ] speed vs quality
  - [ ] flexibility vs simplicity
  - [ ] build vs buy
  - [ ] short-term vs long-term costs

- [ ] Communicating technical decisions
  - [ ] audience awareness
  - [ ] concise rationale
  - [ ] risks and alternatives
  - [ ] decision records

- [ ] Estimation basics
  - [ ] uncertainty awareness
  - [ ] splitting work
  - [ ] assumptions
  - [ ] range estimates

- [ ] Breaking down tasks
  - [ ] incremental delivery
  - [ ] dependencies
  - [ ] risk isolation
  - [ ] testability

- [ ] Stakeholder communication
  - [ ] status updates
  - [ ] expectation management
  - [ ] translating technical constraints

- [ ] Owning production issues
  - [ ] triage
  - [ ] communication
  - [ ] mitigation
  - [ ] retrospective follow-up

- [ ] Writing technical RFCs
  - [ ] problem statement
  - [ ] goals/non-goals
  - [ ] alternatives
  - [ ] rollout plan
  - [ ] risks

- [ ] Cross-team collaboration
  - [ ] backend/design/product alignment
  - [ ] interface contracts
  - [ ] dependency management

## High-Frequency Interview Terms

- [ ] Reconciliation
  - [ ] React diffing heuristic
  - [ ] keys impact
  - [ ] remount vs update

- [ ] Hydration
  - [ ] attaching interactivity to SSR HTML
  - [ ] mismatch causes
  - [ ] cost implications

- [ ] Hoisting
  - [ ] creation phase behavior
  - [ ] function declarations vs variables
  - [ ] TDZ

- [ ] Closure
  - [ ] lexical scope capture
  - [ ] practical use cases
  - [ ] stale closure risk

- [ ] Event loop
  - [ ] call stack
  - [ ] task queue
  - [ ] microtask queue

- [ ] Memoization
  - [ ] caching results
  - [ ] referential stability
  - [ ] tradeoffs

- [ ] Referential equality
  - [ ] object/function identity
  - [ ] React rerender implications
  - [ ] dependency arrays

- [ ] Stale closure
  - [ ] outdated captured state/props
  - [ ] effects/handlers/timers
  - [ ] mitigation patterns

- [ ] Race condition
  - [ ] out-of-order async results
  - [ ] cancellation/guards
  - [ ] UI inconsistency

- [ ] Debounce
  - [ ] wait until idle before running
  - [ ] typing/search example

- [ ] Throttle
  - [ ] limit execution frequency
  - [ ] scroll/resize example

- [ ] Idempotency
  - [ ] repeat-safe operations
  - [ ] HTTP and UI examples

- [ ] Pure function
  - [ ] same input same output
  - [ ] no side effects
  - [ ] predictability

- [ ] Side effect
  - [ ] external interaction
  - [ ] network/DOM/logging/storage
  - [ ] render purity relevance

- [ ] Tree shaking
  - [ ] unused export removal
  - [ ] ESM/static analysis dependency

- [ ] Code splitting
  - [ ] breaking bundle into chunks
  - [ ] route/component split
  - [ ] loading tradeoffs

- [ ] Lazy loading
  - [ ] defer loading until needed
  - [ ] components/images/routes

- [ ] Suspense
  - [ ] async boundary
  - [ ] fallback
  - [ ] progressive reveal

- [ ] Concurrent rendering
  - [ ] interruptible render work
  - [ ] responsiveness improvements
  - [ ] mental model changes

- [ ] Server Components
  - [ ] server-rendered components without client JS cost
  - [ ] boundary with client components

- [ ] Optimistic update
  - [ ] assume success in UI first
  - [ ] rollback strategy

- [ ] Normalization
  - [ ] entity-based state shape
  - [ ] deduplication and efficient updates

- [ ] Cache invalidation
  - [ ] knowing when cached data becomes stale
  - [ ] targeted vs broad invalidation

- [ ] Re-render
  - [ ] component function re-execution
  - [ ] triggers
  - [ ] commit vs render distinction

- [ ] Hydration mismatch
  - [ ] server/client output difference
  - [ ] debugging common causes

- [ ] Critical rendering path
  - [ ] parse to paint pipeline
  - [ ] blocking resources
  - [ ] optimization levers

- [ ] Progressive enhancement
  - [ ] baseline-first UX
  - [ ] optional richer capabilities
