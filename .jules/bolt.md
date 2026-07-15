## 2024-03-05 - Avoid Derived State inside useEffect
**Learning:** Found a performance bottleneck specific to this codebase's architecture where derived states (`playerScore`, `dealerScore`) were computed using `useState` and updated via `useEffect`. This triggered unnecessary duplicate render cycles whenever the source states (`playerHand`, `dealerHand`) changed.
**Action:** Replace `useState` and `useEffect` patterns for derivable state with `useMemo` so that the values are computed synchronously during render, eliminating duplicate render passes.
