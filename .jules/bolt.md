## 2024-05-15 - Prevent Double Renders in Blackjack
**Learning:** React `useEffect` hooks were used to sync derived state (`playerScore`, `dealerScore`) from primary state (`playerHand`, `dealerHand`). This caused a double render cycle every time a card was dealt, severely degrading performance during game interactions in the Blackjack application.
**Action:** Remove `useState` and `useEffect` for derived values. Calculate derived state directly during the render cycle to guarantee a single efficient render cycle and accurate state sync.
