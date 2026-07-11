
## 2024-05-14 - Unnecessary Double Render in React Components
**Learning:** Using `useEffect` to sync derived state (like `playerScore` calculating from `playerHand` in `BlackjackGame`) is an anti-pattern that triggers an unnecessary double render cycle every time the primary state changes.
**Action:** Always calculate derived state directly during the render cycle. Removed `useEffect` and `useState` for `playerScore` and `dealerScore` in `BlackjackGame` to eliminate the extra re-render on card deal or hit.

## 2024-05-14 - Memory Allocation for Static Arrays in Render
**Learning:** Inline array generation (e.g., `Array.from({length: 37})`) and static arrays (`['red', 'black']`) inside the render method cause unnecessary memory allocation and garbage collection on every render.
**Action:** Extracted static arrays (`ROULETTE_NUMBERS`, `ROULETTE_BET_TYPES`, `ROULETTE_CHIPS`) into centralized constants in `utils/gameLogic.ts`.
