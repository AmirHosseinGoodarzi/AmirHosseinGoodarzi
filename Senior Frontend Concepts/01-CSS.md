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
