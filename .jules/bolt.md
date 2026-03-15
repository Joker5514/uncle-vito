## 2026-03-15 - Prevent Unnecessary Double Renders from Derived State
**Learning:** Using `useEffect` to sync derived state (like calculating a hand score from an array of cards) triggers an unnecessary double render cycle in React.
**Action:** Always calculate derived values directly during the render cycle to avoid redundant re-renders and improve performance.
