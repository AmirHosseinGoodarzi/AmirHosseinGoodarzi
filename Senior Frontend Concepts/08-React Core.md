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
