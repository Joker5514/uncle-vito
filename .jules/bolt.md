
## 2025-02-12 - Hoisting static arrays from render cycles
**Learning:** In React, inline array instantiation like `[5, 10, 25]` inside `.map()` inside a render loop means the array is recreated every single render. This triggers excess garbage collection and memory allocation, particularly problematic in rapid-update UI like betting components.
**Action:** Extract static arrays (like betting types or grid numbers) into external constants outside the component scope (or in a shared logic file) so they are initialized exactly once.
