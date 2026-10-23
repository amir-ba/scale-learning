# Resources: Web toolchain → Telekom Scale contribution

All URLs checked on 2026-10-02 (HTTP 200). All free unless marked. Phase numbers refer to [reference/learning-plan.html](reference/learning-plan.html).

## Knowledge

### The target: Telekom Scale (phases 1–7)
- [Repo: telekom/scale](https://github.com/telekom/scale) — MPL-2.0, default branch `main`. Use for: the code, issues, PRs. Local clone of the mentor: `workspaces/scale`.
- [CONTRIBUTING.md](https://github.com/telekom/scale/blob/main/CONTRIBUTING.md) — claim an issue with a comment first; @-mention a CODEOWNER in the PR; MPL header on new files. Note: it says "master" and `templates/file-header.txt`; the real values are `main` and `fileheader.txt`.
- [Scale Storybook (docs site)](https://telekom.github.io/scale/) — the live component docs. Use for: what a component should do; reproduce bugs.
- Example small fixes to read before the first PR:
  - [PR #2271 — fix(dropdown-select): disable keyboard navigation when disabled](https://github.com/telekom/scale/pull/2271) — 1-line JSX change.
  - [PR #2396 — fix(switch): add text color for switch toggle](https://github.com/telekom/scale/pull/2396) — 2 lines of CSS custom properties.
  - [PR #2447 — fix: remove disabled attribute when false](https://github.com/telekom/scale/pull/2447) — `@Prop` + `@Watch`; good decorator example.

### Node.js (phase 1)
- [Node.js Learn: Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) — official. Use for: what Node is (a JS runtime outside the browser).
- [Node.js Learn: An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) — official. Use for: `npm install`, versions, scripts.
- [Node.js Learn: development vs. production](https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production) — short. Use for: why `devDependencies` exist.
- [Node API: Packages — determining module system](https://nodejs.org/api/packages.html) — reference. Use for: `"type": "module"`, ESM vs. CommonJS, `exports`.
- [Node API: promise-based file API](https://nodejs.org/api/fs.html#promises-api) — week 2: `readFile`, UTF-8 text and file errors in the dependency report.
- [Video: Fireship — Node.js Ultimate Beginner's Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4) — fast overview. Use for: a first picture before reading.

### npm, Yarn, monorepos (phases 1–2)
- [npm docs: package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) — the primary reference for every field.
- [npm docs: scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts) — `pre`/`post` hooks, `npm run`. Scale uses `postbootstrap`.
- [npm docs: About semantic versioning](https://docs.npmjs.com/about-semantic-versioning) + [semver calculator](https://semver.npmjs.com/) (interactive) + [SemVer spec](https://semver.org/). Use for: `^`, `~`, pre-release tags like `3.0.0-beta.161`.
- [npm docs: package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json) — why lock files exist (Scale has `yarn.lock`).
- [npm docs: dependencies vs. devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/).
- [npm docs: npx](https://docs.npmjs.com/cli/v11/commands/npx).
- [Yarn 1 (classic): Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) — Scale is a Yarn 1 workspace monorepo.
- [Yarn 1 (classic): Installation](https://classic.yarnpkg.com/en/docs/install) — week 3: install the package-manager version requested by the Scale checkout.
- [Lerna: Introduction](https://lerna.js.org/docs/introduction) — Scale runs `lerna run generate` / `lerna run format`.

### Modern JavaScript (background, all phases)
- [javascript.info — The Modern JavaScript Tutorial](https://javascript.info/) — best full tutorial. Use for: gaps in JS (closures, `this`, promises, `async`/`await`, classes, modules).
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) — `import`/`export`, bare specifiers, why the browser needs a path.
- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — reference.
- [javascript.info: Promises](https://javascript.info/promise-basics) and [async/await](https://javascript.info/async-await) — week 2: fulfilment, rejection and awaited error handling.
- [MDN: Clipboard.writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) — week 2: apply promise handling to the existing calculator, with visible success and failure feedback.

### Build tools / modern web development (phase 2)
- [MDN: Understanding client-side web development tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools) — **the best single overview** of why tooling exists (package managers, bundlers, transpilers, linters). Includes a [package management](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) chapter.
- [Vite: Why Vite](https://vite.dev/guide/why) and [Getting started](https://vite.dev/guide/) — dev server vs. production build.
- [Video: Fireship — Vite in 100 Seconds](https://www.youtube.com/watch?v=KCrXgy8qtjM).
- [Microsoft: Set up a WSL development environment](https://learn.microsoft.com/en-us/windows/wsl/setup/environment) and [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) — week 3: choose one shell and keep the clone and tools in that environment.

### TypeScript (phase 3)
- [TS Handbook: TypeScript for Java/C# programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) — **start here** (C++/OOP background). Explains structural typing vs. nominal typing.
- [TS Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — full reference. Read "Everyday Types", "Narrowing", "Object Types", [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html).
- [TS Handbook: Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) — Stencil uses `@Component`, `@Prop`, etc.
- [Node.js Learn: Introduction to TypeScript](https://nodejs.org/en/learn/typescript/introduction).
- [TS Playground](https://www.typescriptlang.org/play) — interactive. Use for: quick experiments and showing compiled JS.
- [Total TypeScript: Beginner's TypeScript Tutorial (Matt Pocock)](https://www.totaltypescript.com/tutorials/beginners-typescript) — free interactive exercises.
- [Video: Fireship — TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA).

### CSS, Shadow DOM, Web Components (phase 4)
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) — primary.
- [MDN: Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots).
- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — Scale styling is built on these (`--telekom-*` tokens).
- [MDN: `::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) and [MDN: `:host`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host) — Scale exposes `part="..."` on internals.
- [web.dev: Custom Element Best Practices](https://web.dev/articles/custom-elements-best-practices) and [Shadow DOM v1](https://web.dev/articles/shadowdom-v1).
- [web.dev: Learn CSS](https://web.dev/learn/css) — course for CSS gaps.
- [Open Web Components guides](https://open-wc.org/guides/).

### StencilJS (phase 4–6) — docs show v4.43; Scale uses 4.35
- [Getting started](https://stenciljs.com/docs/getting-started), [Component](https://stenciljs.com/docs/component), [API overview](https://stenciljs.com/docs/api).
- Decorators: [@Prop](https://stenciljs.com/docs/properties), [@State](https://stenciljs.com/docs/state), [@Event](https://stenciljs.com/docs/events), [@Method](https://stenciljs.com/docs/methods), [@Watch (reactive data)](https://stenciljs.com/docs/reactive-data), [@Element (host element)](https://stenciljs.com/docs/host-element).
- [Lifecycle](https://stenciljs.com/docs/component-lifecycle), [JSX](https://stenciljs.com/docs/templating-jsx), [Styling](https://stenciljs.com/docs/styling), [Output targets](https://stenciljs.com/docs/output-targets).
- Testing — Scale uses the **legacy** Jest + Puppeteer runner: [legacy runner overview](https://stenciljs.com/docs/testing/stencil-testrunner/overview), [unit testing (`newSpecPage`)](https://stenciljs.com/docs/unit-testing), [e2e testing](https://stenciljs.com/docs/end-to-end-testing). The [testing overview](https://stenciljs.com/docs/testing-overview) recommends Vitest/Playwright for new projects; ignore that for Scale.

### Testing (phase 6)
- [Jest: Getting started](https://jestjs.io/docs/getting-started) and [Snapshot testing](https://jestjs.io/docs/snapshot-testing) — every Scale component has `__snapshots__`.

### Vue (phase 5)
- [Vue tutorial (interactive, Vue 3)](https://vuejs.org/tutorial/) — learn the concepts here first.
- [Vue guide](https://vuejs.org/guide/introduction.html) and [Vue and Web Components](https://vuejs.org/guide/extras/web-components.html).
- [Vue 2 guide](https://v2.vuejs.org/v2/guide/) and [Vue 2 components](https://v2.vuejs.org/v2/guide/components.html) — **Scale Storybook uses Vue 2.6 Options API**. Use for: reading `Scale<Name>.vue` and `.stories.mdx` templates.
- [Vue School: Vue.js 3 Fundamentals](https://vueschool.io/courses/vuejs-3-fundamentals) — free video course.
- [Video: Fireship — Vue.js Explained in 100 Seconds](https://www.youtube.com/watch?v=nhBVL41-_Cw).

### Git and GitHub contribution (phases 1 and 7)
- [GitHub Docs: Contributing to a project (fork + PR)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) and [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
- [first-contributions](https://github.com/firstcontributions/first-contributions) — a safe practice PR.
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) — Scale enforces it (commitlint). Form: `fix(dropdown-select): ...`.
- [Learn Git Branching](https://learngitbranching.js.org/) — interactive; do "rebase" levels (CONTRIBUTING asks for rebase + force-push).
- [Pro Git book](https://git-scm.com/book/en/v2) — reference.
- [Video: Fireship — Git Explained in 100 Seconds](https://www.youtube.com/watch?v=hwP7WQkmECE).

### Design patterns (bridge from C++/OOP)
- [patterns.dev](https://www.patterns.dev/) — JS-specific patterns. Start with [Observer](https://www.patterns.dev/vanilla/observer-pattern) (= DOM events, Stencil `@Event`).
- [Refactoring.Guru: design patterns](https://refactoring.guru/design-patterns) with [TypeScript examples](https://refactoring.guru/design-patterns/typescript) — classic GoF patterns; good for a C++ mind.

### Full curricula (optional, for depth)
- [Full Stack Open (University of Helsinki)](https://fullstackopen.com/en/) — free university course. Relevant: [Part 0 Fundamentals of web apps](https://fullstackopen.com/en/part0), [Part 9 TypeScript](https://fullstackopen.com/en/part9). Parts 1, 2, 5, 6 are React.
- [The Odin Project: Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) — project-based.

## Wisdom (Communities)
- [Stencil Discord](https://chat.stenciljs.com) — Use for: Stencil-specific questions (decorators, tests, build).
- [Vue Land Discord](https://chat.vuejs.org/) — Use for: Vue questions.
- [TypeScript Community Discord](https://discord.com/invite/typescript) — Use for: type errors and TS design questions.
- [Frontend Mentor](https://www.frontendmentor.io/) — real-world UI challenges with peer review.
- **Scale GitHub issues and PR reviews** — the most important community. A maintainer review on a real PR is the best feedback the student can get.
- Local: the mentor and the Scale team at Telekom.

## Gaps
- No good, current, free tutorial for **Storybook 6 MDX with Vue 2** (Storybook 6 docs URL gives 404). Teach from the Scale stories directly.
- No tutorial for **TSLint** (deprecated). Teach from `packages/components/tslint.json` and CI output.
- Stencil's legacy test runner is deprecated (from v4.43; removed in v5). Docs still exist; check again if Scale upgrades Stencil.
