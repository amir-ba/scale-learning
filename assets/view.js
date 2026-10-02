/*
 * Reusable view switch for all lessons: mentor view or student view.
 *
 * Student view hides every element with class "mentor" (e.g. <div class="box mentor">).
 * Open a lesson in student view with ?view=student in the URL,
 * or click the switch at the top right. The choice is saved in localStorage.
 */
(function () {
  const KEY = 'lesson-view';
  const param = new URLSearchParams(location.search).get('view');
  let view = param || localStorage.getItem(KEY) || 'mentor';

  const style = document.createElement('style');
  style.textContent = `
    body.view-student .mentor { display: none !important; }
    .view-switch { position: fixed; top: .8rem; right: .8rem; font: 600 .75rem/1 system-ui, sans-serif;
      padding: .4rem .6rem; border: 1px solid var(--rule, #ddd); background: #fff; color: var(--muted, #666); cursor: pointer; }
    .view-switch:hover { border-color: var(--accent, #e20074); }
    @media print { .view-switch { display: none; } }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.className = 'view-switch';
  btn.type = 'button';

  function apply() {
    document.body.classList.toggle('view-student', view === 'student');
    btn.textContent = view === 'student' ? 'Student view · show mentor notes' : 'Mentor view · hide mentor notes';
    localStorage.setItem(KEY, view);
  }

  btn.addEventListener('click', () => {
    view = view === 'student' ? 'mentor' : 'student';
    apply();
  });

  document.body.appendChild(btn);
  apply();
})();
