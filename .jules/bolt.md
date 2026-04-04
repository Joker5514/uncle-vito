## 2026-04-04 - Removed derived state useEffect from BlackjackGame
**Learning:** Avoid using `useEffect` to sync derived state in React (e.g., calculating scores from hand arrays), as it triggers an unnecessary double render cycle. Instead, calculate derived values directly during the render cycle.
**Action:** Remove `playerScore` and `dealerScore` state variables and the `useEffect` that updates them, and replace them with regular variables calculated during the render cycle.
