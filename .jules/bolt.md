## 2024-06-16 - ESLint Fallback Issue
**Learning:** If `npm run lint` fails with an ESLint 10.0.2 error complaining about a missing `eslint.config.js` file, it is due to a missing or corrupted local `node_modules` installation incorrectly falling back to a global instance.
**Action:** Run `npm ci --legacy-peer-deps` to resolve this by correctly installing the local ESLint version that respects the existing `.eslintrc.cjs` configuration.
