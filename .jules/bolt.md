## 2024-06-25 - [Removed useEffect derived state in BlackjackGame]
**Learning:** Found an anti-pattern where derived state (`playerScore` and `dealerScore`) was being synced via `useEffect`. This caused unnecessary double re-renders whenever the `playerHand` or `dealerHand` updated.
**Action:** Always calculate derived state directly during the render cycle rather than using `useState` + `useEffect` to keep it synced.
