## 2024-06-13 - [Performance] Derived State Overuse
**Learning:** Using `useEffect` and `useState` for highly predictable, low-cost derived data (like Blackjack scores) forces redundant React render passes. Summing an array of ~2-11 integers is trivial and wrapping it in state or even `useMemo` introduces unnecessary overhead.
**Action:** Always compute trivial derived values directly during the render pass as constants to prevent double-rendering.
