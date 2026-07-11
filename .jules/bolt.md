## 2024-03-30 - Prevent unnecessary double render cycle in BlackjackGame
**Learning:** `useEffect` should not be used to sync derived state in React (e.g., calculating scores from `playerHand` and `dealerHand` arrays in `BlackjackGame`), as it triggers an unnecessary double render cycle.
**Action:** Calculate derived values directly during the render cycle instead.

## 2024-03-30 - Prevent redundant memory allocations on every render cycle in RouletteGame
**Learning:** Static arrays used for rendering (e.g., `ROULETTE_NUMBERS`, `OUTSIDE_BETS`, `CHIP_VALUES` in `RouletteGame`) should be hoisted outside the React component scope to prevent redundant memory allocations and garbage collection overhead on every render cycle.
**Action:** Hoist static arrays outside the component scope or memoize them to prevent unnecessary memory allocations.
