
## 2026-03-21 - Derived State Performance Anti-Pattern
**Learning:** Using `useEffect` to synchronize derived state (`playerScore` and `dealerScore` from hand arrays) causes an unnecessary double-render cycle. The first render processes the new hand state, and then the effect fires to set the score state, which triggers a second render.
**Action:** Avoid syncing derived state in `useEffect`. Instead, calculate derived values directly during the render cycle to save one complete render pass.
