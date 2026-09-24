/* Adlaire-Design sample interactions */

(function () {
  var root = document.documentElement;
  root.classList.add('adlaire-sample-ready');

  var icons = document.querySelectorAll('.adlaire-icon-tile img');
  icons.forEach(function (icon) {
    icon.loading = 'lazy';
  });

  var count = document.querySelector('[data-adlaire-filter-count]');
  if (count) {
    count.textContent = String(document.querySelectorAll('.adlaire-language-option').length);
  }

  var total = document.querySelector('[data-sample-icon-total]');
  if (total) {
    total.textContent = '500';
  }

  var navLinks = document.querySelectorAll('.sample-showcase-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (item) {
        item.removeAttribute('aria-current');
      });
      link.setAttribute('aria-current', 'true');
    });
  });
})();
