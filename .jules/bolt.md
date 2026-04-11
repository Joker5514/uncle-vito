## 2024-05-15 - Double renders from derived state in React
**Learning:** Using `useEffect` to sync derived state (like player or dealer scores computed from hand arrays) triggers an unnecessary double render cycle, degrading performance.
**Action:** Always compute derived state directly during the render cycle instead of duplicating it in `useState` and syncing via `useEffect`.
