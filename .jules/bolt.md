## 2026-06-26 - Derived State Anti-pattern in React
**Learning:** Storing derived data (like game scores computed from state variables) in `useState` and updating it via `useEffect` is an anti-pattern that causes unnecessary double-renders (one for the state change, one for the effect triggering the derived state change).
**Action:** Always compute lightweight derived data (e.g., summing small arrays like card scores) directly during the render cycle as constants to halve the number of render passes during state updates.
