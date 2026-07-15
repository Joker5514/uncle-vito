## 2024-05-24 - Avoid useEffect for Derived State
**Learning:** In React components like `BlackjackGame.tsx`, using `useEffect` to synchronize derived state (like `playerScore` calculated from `playerHand`) triggers unnecessary double render cycles. The first render sets the primary state (`playerHand`), and the subsequent `useEffect` triggers a second render by setting the derived state (`playerScore`).
**Action:** Calculate derived values directly during the render cycle instead of using state and `useEffect`.
