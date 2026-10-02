# Mission: From browser JavaScript to a first bug fix in Telekom Scale

## Why
The student must become a contributor to [Telekom Scale](https://github.com/telekom/scale), a StencilJS web component library. The first concrete goal is one merged bug-fix pull request. To get there, the student must understand the modern web toolchain (Node.js, npm/Yarn, TypeScript, build tools, Vue for the Storybook), not only the browser.

## Success looks like
- The student can explain each part of a `package.json` and each script in the Scale root and `packages/components` `package.json`.
- The student can install, build and run Scale locally (`yarn bootstrap`, `yarn start` in `packages/components`, Storybook).
- The student can read and change a Stencil component (`@Prop`, `@State`, `@Event`, JSX `render()`, Shadow DOM CSS, `part`).
- The student can run and update a Stencil spec test and its snapshot.
- The student can change a Storybook story (Vue 2 Options API in `.stories.mdx`).
- The student opens a pull request from a fork with a Conventional Commit message that passes CI (Prettier, TSLint, tests).

## Constraints
- **Self-study and independent learning.** The student gets one handout each week and works alone. The mentor runs a weekly sync as a checkpoint. Handouts are written for the student; mentor-only notes are hidden in student view.
- Time: approx. 6–10 hours each week. Target: first PR in approx. 8 weeks.
- Prior knowledge: C++, OOP, interest in design patterns; HTML, JS, CSS basics; git basics; Node.js and Web Components basics. Built a calculator (HTML + JS + JSDoc types) with Scale from unpkg.
- Contribution flow: public GitHub, fork + pull request to `telekom/scale` (`main`).

## Out of scope (for now)
- React and Angular (Scale proxies for them are auto-generated).
- Back-end Node.js (Express, databases). Node.js is in scope only as the toolchain runtime.
- Release and publish process (Lerna publish), visual tests.
- New components or large features. First target is a small bug fix.
