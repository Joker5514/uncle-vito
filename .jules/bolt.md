## 2024-05-24 - Unnecessary useEffect in BlackjackGame
**Learning:** Found an unnecessary `useEffect` updating derived state `playerScore` and `dealerScore` based on the hand arrays in `BlackjackGame.tsx`. This causes a double render cycle whenever a card is dealt or drawn.
**Action:** When working with React state derived from other state (like scoring hands, calculating sums), always compute it directly during the render cycle rather than syncing it with `useEffect`.
