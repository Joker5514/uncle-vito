## 2024-05-24 - React Derived State Performance
**Learning:** In BlackjackGame.tsx, using useEffect to sync derived state (player/dealer scores from their hands) triggered an unnecessary double render cycle every time a card was dealt. Because score calculation is computationally trivial for small arrays, this synchronization was purely overhead.
**Action:** Always calculate derived state directly during the render cycle instead of using useState/useEffect synchronization, unless the calculation is demonstrably expensive enough to warrant useMemo.
