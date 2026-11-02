# CSS cheat sheet

| `Pattern` | Meaning |
| --- | --- |
| `.card / #projects / h1` | Class / ID / element selector |
| `color / background` | Text color / background fill |
| `var(--accent)` | Read a custom property |
| `padding / margin / gap` | Inner space / outer space / space between items |
| `border / border-radius` | Edge / corner rounding |
| `box-sizing: border-box` | Include padding and border in a declared width |
| `display: flex` | Arrange direct children on a main axis |
| `justify-content / align-items` | Align on main axis / cross axis |
| `flex-wrap: wrap` | Allow flex items onto another line |
| `display: grid` | Create a row and column layout |
| `repeat(3, minmax(0, 1fr))` | Three equally flexible Grid tracks |
| `width: min(1100px, calc(100% - 2rem))` | Bounded fluid page width |
| `max-width: 100%; height: auto` | Let images shrink proportionally |
| `@media (min-width: 640px)` | Apply rules at or above this viewport width |
| `:hover / :focus-visible` | Pointer feedback / visible keyboard focus |
| `transition / transform` | Smooth a change / visually move an element |

When styling fails, check the matching selector, stylesheet path, cascade, spelling and missing braces. Inspect the element instead of randomly increasing selector specificity. The final course's only !important rule protects the native hidden attribute from layout overrides.
