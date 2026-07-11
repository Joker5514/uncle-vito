## 2024-11-20 - Derived State Overhead in React
**Learning:** Calculating basic derived state (like Blackjack scores) directly during render is significantly more performant than using `useState` and `useEffect` to synchronize them, as the latter triggers unnecessary double-render cycles.
**Action:** Always compute lightweight derived data directly in the component body instead of managing it as state, unless the computation is proven to be computationally expensive enough to warrant `useMemo`.
