## 2024-06-15 - React Derived State Performance
**Learning:** Using `useEffect` to synchronize derived state (like `playerScore` and `dealerScore` based on `playerHand` and `dealerHand` in Blackjack) forces unnecessary double render cycles on every action.
**Action:** When computing simple derived state from existing state props/variables, calculate it directly during render rather than using `useState` and `useEffect`.
