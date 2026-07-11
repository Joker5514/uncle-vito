## 2024-05-28 - [Derived State Anti-Pattern in React Games]
**Learning:** Computing deterministic game states (like scores) using `useState` and `useEffect` creates redundant render cycles and potential sync issues. React naturally handles derived state during the render cycle without hooks.
**Action:** Always compute derived state as regular variables directly within the render function.

## 2024-05-28 - [Static Array Re-allocation]
**Learning:** Defining static arrays inline for UI rendering (like roulette boards or chips) causes unnecessary memory allocation on every render cycle.
**Action:** Hoist static configuration arrays completely outside of component scopes so they are only allocated once in memory.
