## 2024-05-14 - React Derived State Re-render Avoidance
**Learning:** In BlackjackGame, `playerScore` and `dealerScore` were tracked in React state and updated using `useEffect` whenever the hands changed. This is an anti-pattern that caused a double render cycle (first when hand state changes, second when the effect runs and updates score state).
**Action:** Always compute derived state directly during render to prevent unnecessary double renders. Added to BlackjackGame which reduces re-renders by ~50% per card deal.
