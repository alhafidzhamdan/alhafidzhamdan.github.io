// Toggle between light and dark themes and remember the choice.
(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Research accordion: keep only one theme open at a time (fallback for browsers
// that don't yet support the native exclusive-accordion `name` attribute).
(function () {
  var items = document.querySelectorAll('.research-item');
  items.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      items.forEach(function (other) {
        if (other !== d) other.open = false;
      });
    });
  });
})();
