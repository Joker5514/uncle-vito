## 2024-04-01 - Avoid useEffect for Derived State in React Games
**Learning:** Using `useEffect` to sync derived state (like player/dealer scores calculated from hand arrays) triggers an unnecessary double render cycle, which is especially noticeable and inefficient in fast-paced game components like Blackjack.
**Action:** Calculate derived values directly during the render cycle instead of duplicating state and using `useEffect` to synchronize them.
