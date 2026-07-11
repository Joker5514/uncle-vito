
## 2026-04-19 - Removed useEffect for syncing derived state in BlackjackGame
**Learning:** Found an anti-pattern in `src/components/BlackjackGame.tsx` where `useEffect` was used to sync `playerScore` and `dealerScore` derived from state variables `playerHand` and `dealerHand`. This causes unnecessary double render cycles in React.
**Action:** Use direct variable assignment for derived state during render (e.g. `const playerScore = calculateScore(playerHand)`) instead of synchronizing it through `useEffect`.
