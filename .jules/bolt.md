## 2024-05-18 - Avoid Derived State with useEffect
**Learning:** React state shouldn't mirror derived values using useEffect (like `playerScore` from `playerHand`), as it triggers unnecessary double re-renders. Calculate derived values during render instead.
**Action:** Always compute derived state dynamically directly within the component function to avoid an extra render cycle, particularly when performance matters.
