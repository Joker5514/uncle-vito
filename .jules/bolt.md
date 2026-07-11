## 2024-06-16 - ESLint Fallback Issue
**Learning:** If `npm run lint` fails with an ESLint 10.0.2 error complaining about a missing `eslint.config.js` file, it is due to a missing or corrupted local `node_modules` installation incorrectly falling back to a global instance.
**Action:** Run `npm ci --legacy-peer-deps` to resolve this by correctly installing the local ESLint version that respects the existing `.eslintrc.cjs` configuration.
## 2024-06-16 - GitHub Actions setup-python cache issue
**Learning:** If the `actions/setup-python` GitHub Action fails with 'No file... matched to [**/requirements.txt or **/pyproject.toml]', it's because it's trying to cache pip dependencies but no lockfile/requirements file exists to hash.
**Action:** Fix it by removing the `cache: "pip"` configuration rather than deleting the entire Python setup or adding dummy files.
