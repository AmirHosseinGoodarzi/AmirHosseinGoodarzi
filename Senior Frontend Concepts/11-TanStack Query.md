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
