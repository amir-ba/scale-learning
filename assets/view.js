/*
 * Reusable view filter for all pages.
 *
 * Every element with class "mentor" (e.g. <div class="box mentor">) is hidden.
 * The mentor sees these notes only with ?view=mentor in the URL.
 * There is no visible switch, so the student is not distracted.
 * In mentor view, links to other local pages keep ?view=mentor.
 */
(function () {
  const mentor = new URLSearchParams(location.search).get('view') === 'mentor';
  if (mentor) {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (/^(https?:|mailto:|#)/.test(href) || !/\.html(#.*)?$/.test(href)) return;
      const [path, hash] = href.split('#');
      a.setAttribute('href', path + '?view=mentor' + (hash ? '#' + hash : ''));
    });
    return;
  }

  const style = document.createElement('style');
  style.textContent = '.mentor { display: none !important; }';
  document.head.appendChild(style);
})();
