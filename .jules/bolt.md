## 2024-06-23 - [Refactoring derived state to improve performance]
**Learning:** Derived state (like computing a total score from an array of cards) calculated in a `useEffect` and stored in `useState` leads to an unnecessary double re-render when the original array changes.
**Action:** Always compute cheap derived values directly during render. Use `React.memo` or `useMemo` for heavy components, but array calculations on ~2-5 elements are extremely cheap.
