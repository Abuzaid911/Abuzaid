# Follow-up Tasks

## Typo Fix
- **Location:** `pages/Components/Main.jsx`
- **Issue:** The text passed to the typing effect spells "Nextjs" without the framework's dot suffix, which is a typographical error in the displayed technology list. 【F:pages/Components/Main.jsx†L17-L20】
- **Suggested Task:** Update the word to "Next.js" (or adjust the display copy accordingly) so the technology name is spelled correctly.

## Bug Fix
- **Location:** `components/Typing-effect.jsx`
- **Issue:** The hook calculates `loopNum % words.length` without guarding against an empty `words` array. When `words` is empty this results in `words.length` being `0`, producing `NaN` indexes and calling `substring` on `undefined`, which will throw at runtime. 【F:components/Typing-effect.jsx†L5-L38】
- **Suggested Task:** Add an early return or default word handling so the effect skips work (and avoids modulo by zero) when no words are provided.

## Documentation Update
- **Location:** `README.md`
- **Issue:** The README references an `pages/api/hello.js` example route that does not exist in this repository, so the documentation sends contributors to a missing file. 【F:README.md†L15-L19】【12838d†L1-L2】
- **Suggested Task:** Update or remove the outdated API route instructions so the README matches the actual project structure.

## Test Improvement
- **Area:** Typing effect behavior
- **Issue:** There are currently no automated tests covering the typing effect logic, leaving regressions (such as the empty-word crash) undetected. 【F:components/Typing-effect.jsx†L5-L45】
- **Suggested Task:** Introduce a unit test (e.g., using React Testing Library and Jest) that mounts the typing effect hook/component and asserts it cycles through the provided words and safely handles an empty array.
