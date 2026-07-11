## 2024-03-26 - Blackjack Derived State Re-render
**Learning:** Using useEffect to synchronize derived state (playerScore, dealerScore) from primary state (playerHand, dealerHand) causes an unnecessary double render cycle in React components.
**Action:** Calculate derived values directly during the render cycle to avoid double rendering and improve performance.
