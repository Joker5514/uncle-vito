## 2024-05-24 - [Remove redundant derived state]
**Learning:** Avoid using useEffect to sync derived state in React (e.g., calculating scores from hand arrays), as it triggers an unnecessary double render cycle.
**Action:** Calculate derived values directly during the render cycle.
