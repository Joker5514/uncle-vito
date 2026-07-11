## 2024-05-24 - Eliminated Double-Renders from Derived State
**Learning:** The preferred React pattern in this codebase for handling derived data (e.g., game scores derived from hands) is to compute values directly in the component during render as constants, avoiding the overhead and potential sync issues of `useState` and `useEffect` hooks.
**Action:** When implementing derived state, always compute it synchronously during render instead of using useEffect.
