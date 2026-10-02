/*
 * Reusable checklist component. Saves the state in localStorage.
 *
 * Markup:
 *   <ul class="checklist" data-key="lesson-0001">
 *     <li>Step text</li>
 *   </ul>
 *
 * Each <li> gets a checkbox. data-key must be unique for each list.
 */
(function () {
  const css = `
    ul.checklist { list-style: none; padding-left: 0; }
    ul.checklist li { margin: .45rem 0; padding-left: 1.8rem; position: relative; }
    ul.checklist input { position: absolute; left: 0; top: .3rem; width: 1.05rem; height: 1.05rem; accent-color: var(--accent, #e20074); }
    ul.checklist li.done { color: var(--muted, #666); text-decoration: line-through; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  document.querySelectorAll('ul.checklist').forEach((list) => {
    const key = 'checklist:' + (list.dataset.key || location.pathname);
    let state = {};
    try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { state = {}; }
    list.querySelectorAll(':scope > li').forEach((li, i) => {
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.checked = !!state[i];
      li.classList.toggle('done', box.checked);
      box.addEventListener('change', () => {
        state[i] = box.checked;
        li.classList.toggle('done', box.checked);
        localStorage.setItem(key, JSON.stringify(state));
      });
      li.prepend(box);
    });
  });
})();
