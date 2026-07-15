## 2024-03-16 - Avoid useEffect for derived state
**Learning:** Using `useEffect` to sync derived state (like score calculations from a hand of cards) in React components triggers unnecessary double renders, which causes a performance regression.
**Action:** Always calculate derived state directly during the render cycle or use `useMemo` if the computation is expensive.
