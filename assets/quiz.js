/*
 * Reusable quiz component for all lessons.
 *
 * Markup:
 *   <div class="quiz" data-explain="Why the right answer is right.">
 *     <p class="q">Question text</p>
 *     <button data-correct>Option A</button>
 *     <button>Option B</button>
 *   </div>
 *
 * The student clicks one option and gets feedback at once.
 * Keep all options the same length so the format gives no clue.
 */
(function () {
  const css = `
    .quiz { margin: 1.4rem 0; padding: .9rem 1rem; border: 1px solid var(--rule, #ddd); background: #fff; }
    .quiz .q { margin: 0 0 .6rem; font-weight: 600; }
    .quiz button.opt { display: block; width: 100%; text-align: left; margin: .35rem 0; padding: .5rem .7rem;
      font: inherit; font-size: .95rem; background: #faf9f2; border: 1px solid var(--rule, #ddd); cursor: pointer; }
    .quiz button.opt:hover:not([disabled]) { border-color: var(--accent, #e20074); }
    .quiz button.opt.right { background: var(--ok-soft, #e3f3e7); border-color: var(--ok, #1f7a3a); }
    .quiz button.opt.wrong { background: var(--bad-soft, #f8e1df); border-color: var(--bad, #a3221b); }
    .quiz .fb { margin: .6rem 0 0; font-size: .92rem; }
    .quiz .fb.right { color: var(--ok, #1f7a3a); }
    .quiz .fb.wrong { color: var(--bad, #a3221b); }
    .quiz .retry { font: inherit; font-size: .8rem; margin-top: .4rem; background: none; border: none; color: var(--muted, #666); text-decoration: underline; cursor: pointer; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function setup(quiz) {
    const options = Array.from(quiz.querySelectorAll(':scope > button'));
    const fb = document.createElement('p');
    fb.className = 'fb';
    fb.setAttribute('aria-live', 'polite');
    quiz.appendChild(fb);

    options.forEach((btn) => {
      btn.classList.add('opt');
      btn.type = 'button';
      btn.addEventListener('click', () => {
        const right = btn.hasAttribute('data-correct');
        options.forEach((o) => (o.disabled = true));
        btn.classList.add(right ? 'right' : 'wrong');
        if (!right) options.find((o) => o.hasAttribute('data-correct'))?.classList.add('right');
        fb.className = 'fb ' + (right ? 'right' : 'wrong');
        fb.textContent = (right ? 'Correct. ' : 'Not correct. ') + (quiz.dataset.explain || '');
        const retry = document.createElement('button');
        retry.className = 'retry';
        retry.textContent = 'Try again later (reset)';
        retry.addEventListener('click', () => {
          options.forEach((o) => { o.disabled = false; o.classList.remove('right', 'wrong'); });
          fb.textContent = ''; fb.className = 'fb'; retry.remove();
        });
        fb.after(retry);
      });
    });
  }

  document.querySelectorAll('.quiz').forEach(setup);
})();
