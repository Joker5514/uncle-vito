## 2024-06-24 - [Derived State Optimization in React]
**Learning:** React state (`useState`) and `useEffect` used purely to derive new values from existing state causes redundant re-renders and degrades performance unnecessarily. This pattern existed in `BlackjackGame.tsx` for player and dealer scores.
**Action:** Always compute lightweight derived data (like small array summations for game scores) directly during the render cycle to save React synchronization overhead. Only reach for `useMemo` if the derivation is computationally expensive.
