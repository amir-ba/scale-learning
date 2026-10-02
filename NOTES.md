# Notes

## Audience and format
- The user is the **mentor**. The learner is a first-year informatics student who **learns on their own**. The mentor gives one handout each week (`weeks/week-NN.html`) and runs a **weekly sync** as checkpoint (agenda in `reference/how-to-learn.html`).
- Handouts and lessons are written **for the student** (self-sufficient: study list with "look for", build steps, troubleshooting table, self-check quiz, "Done when", "Bring to the sync"). Mentor-only text goes in `.box.mentor` (checkpoint questions, red flags, evidence).
- Week structure: 0 Warm-up (recall) → A Study (≈3 h) → B Build (a lesson, ≈3 h) → C Check (≈1 h). The student keeps only a short **question list** (`QUESTIONS.md`) of things they do not understand.
- **Hands-on, not school** (mentor feedback 2026-10-02): no learning log, no written summaries, no note-taking tasks. Prefer try / break / repair in the terminal and the **rubber duck approach** (mentor's name for "explain it out loud"; use this term). Only things not understood are written down (question list).
- Write week N+1 only after the mentor reports the week N sync. Overview of all 8 weeks: `reference/learning-plan.html`.
- Language in lessons: simple English (ASD-STE100 style: short sentences, active voice, one instruction per step).
- The mentor used the analogy "npm is like NuGet in C#". Use C#/NuGet analogies next to C++ ones.

## Student profile
- Knows C++ and OOP; likes design patterns. Use this as a bridge: compare TS classes/interfaces/generics with C++; name patterns when they appear (Observer = DOM events / `@Event`, Decorator = Stencil decorators, Composite = slots).
- Built a calculator with HTML + JS + JSDoc types + Scale from unpkg. Reuse this project as the running example (move to npm → Vite → TypeScript).

## Scale repo facts (checked in local clone, 2026-10-02)
- Yarn 1 workspaces + Lerna. `engines.node: 24.x`, `npm: please-use-yarn`.
- `packages/components`: Stencil `^4.35`, TSLint, Prettier, `stencil test` (Jest spec + Puppeteer e2e), snapshot files in `__snapshots__`.
- `packages/storybook-vue`: Storybook 6.4 + **Vue 2** (Options API), stories in `.stories.mdx` with a `Scale<Name>.vue` wrapper.
- Commit messages: Conventional Commits (commitlint + husky).
- PRs target `main` (CONTRIBUTING.md still says "master" — outdated). CI `build-pr.yml`: Prettier check, TSLint, tests.
- Scripts use bash (`./scripts/build.sh`, `rm -rf`, `cp -a`). On Windows, use WSL2 or Git Bash.
- Small components for first reading: `divider` (49 lines), `card`, `badge`, `callout`.
- New files need the MPL-2.0 license header (`fileheader.txt`).

## Delivery
- The mentor gives the student the **whole folder** (lessons link `../assets/`). Mentor notes (`.mentor`) are always hidden; the mentor opens pages with `?view=mentor` (`assets/view.js`). **No visible switch** — the mentor does not want the student distracted by it. Entry page: `index.html`.
- Every lesson: put text for the student outside `.box.mentor`; put mentor-only text inside it. Load `view.js` before `quiz.js`.
