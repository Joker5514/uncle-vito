## 2024-05-14 - Removed Derived State from useEffect
**Learning:** Using `useEffect` to synchronize derived state (like `playerScore` and `dealerScore` from their respective hand arrays) in React components causes an unnecessary double render cycle. This is a common performance bottleneck in React.
**Action:** Always calculate derived values directly during the render cycle instead of storing them in state and updating them via `useEffect`.
