## 2024-05-31 - [Blackjack derived state optimization]
**Learning:** Found unnecessary derived state updated via `useEffect` in `BlackjackGame.tsx` which causes redundant double-renders.
**Action:** Replace derived state updated via `useEffect` with direct constant calculations during render to eliminate unnecessary secondary re-renders.
