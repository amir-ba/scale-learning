# Notes

## Audience and format
- The user is the **mentor**. The learner is a first-year informatics student. Lessons are written as mentor session guides: goal, short explanation, student exercise, check questions, answer key.
- Language in lessons: simple English (ASD-STE100 style: short sentences, active voice, one instruction per step).
- Time budget: 6–10 h each week. One lesson ≈ one 60–90 min session plus homework.

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
