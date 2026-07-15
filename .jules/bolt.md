## 2024-05-14 - Prevent double re-renders with derived state
**Learning:** Avoid using `useEffect` to sync derived state in React (e.g., calculating scores from hand arrays), as it triggers an unnecessary double render cycle (one for the primary state update, another for the derived state update within the effect).
**Action:** Calculate derived values directly during the render cycle rather than saving them in `useState` synchronized by `useEffect`.
