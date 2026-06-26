## 2026-06-26 - Derived State Anti-pattern in React
**Learning:** Storing derived data (like game scores computed from state variables) in `useState` and updating it via `useEffect` is an anti-pattern that causes unnecessary double-renders (one for the state change, one for the effect triggering the derived state change).
**Action:** Always compute lightweight derived data (e.g., summing small arrays like card scores) directly during the render cycle as constants to halve the number of render passes during state updates.
## 2026-06-26 - GitHub Actions setup-python caching failure
**Learning:** The `actions/setup-python` cache configuration (e.g., `cache: "pip"`) will fail the entire CI job if the repository does not contain the expected dependency files (like `requirements.txt` or `pyproject.toml`), as it uses these to generate the cache key.
**Action:** When adding or maintaining Python setup steps in repositories that don't strictly use standard Python dependency files, omit the `cache: "pip"` directive to prevent CI failures.
