## 2024-05-24 - Static Array Hoisting
**Learning:** Found static arrays being instantiated inline inside render functions (e.g., `Array.from({ length: 37 })` and `[5, 10, 25, 50, 100]`) in `RouletteGame.tsx`. While small, re-creating reference types on every render is a common React anti-pattern that triggers unnecessary garbage collection.
**Action:** Extract all static arrays and options used for mapping UI elements to constant files (e.g., `gameLogic.ts`) outside of the component scope to ensure a single memory allocation.
