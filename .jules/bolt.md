## 2024-06-15 - React Derived State Performance
**Learning:** Using `useEffect` to synchronize derived state (like `playerScore` and `dealerScore` based on `playerHand` and `dealerHand` in Blackjack) forces unnecessary double render cycles on every action.
**Action:** When computing simple derived state from existing state props/variables, calculate it directly during render rather than using `useState` and `useEffect`.
## 2024-06-15 - GitHub Actions Python Caching
**Learning:** Using `cache: "pip"` in the `actions/setup-python` GitHub Action will predictably fail if the repository does not contain dependency manifest files (like `requirements.txt` or `pyproject.toml`), as the action cannot generate a cache key. This is a common pitfall when reusing Python workflows in JavaScript/Node.js repositories that occasionally run Python scripts.
**Action:** When setting up Python via GitHub Actions in a repository that doesn't primarily use Python dependency management files, ensure the `cache: "pip"` configuration is omitted to prevent the pipeline from breaking during the setup step.
