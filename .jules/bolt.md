## 2024-06-25 - React Derived State Optimization
**Learning:** In BlackjackGame, `playerScore` and `dealerScore` were synchronized using `useEffect`, which caused React to render twice every time the player's or dealer's hand changed.
**Action:** When working on components that rely on derived state from arrays/objects (like calculated hand scores), calculate the state directly during the render cycle rather than using `useEffect` with state setters.
