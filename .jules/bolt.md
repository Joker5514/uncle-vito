## 2024-05-14 - Derived State Anti-Pattern
**Learning:** Using `useEffect` to synchronize derived state (like score calculations) causes unnecessary double render cycles.
**Action:** Always compute derived state directly during the render cycle if it's based entirely on props or other state, rather than using `useEffect` to sync state variables.
