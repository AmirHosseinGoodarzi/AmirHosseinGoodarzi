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
