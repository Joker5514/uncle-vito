## 2024-05-24 - [Avoid `useEffect` for Derived State]
**Learning:** Using `useEffect` to synchronize derived state (like `playerScore` from `playerHand`) triggers an unnecessary double render cycle. The component first renders with the new hand array but old score, then the effect fires and updates the score, causing a second render.
**Action:** Always calculate derived state directly during the render cycle as a local variable. This prevents the extra render pass and guarantees the derived value is always in sync with the source data.
