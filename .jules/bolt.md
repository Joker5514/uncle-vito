## 2024-05-24 - Avoid useEffect for derived state in React
**Learning:** Using `useEffect` to synchronize derived state (like hand scores from hand arrays in Blackjack) causes a double render cycle whenever the source state changes. This is a common but expensive React anti-pattern.
**Action:** Always derive values directly from props or state during the render cycle instead of duplicating them into new state variables synced by effects. If the calculation is truly expensive (not the case for 5-card blackjack scores), wrap it in `useMemo`.
