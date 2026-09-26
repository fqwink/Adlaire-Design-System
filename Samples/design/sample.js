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

  document.querySelectorAll('[data-sample-toggle-hidden]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var target = document.querySelector(trigger.getAttribute('data-sample-toggle-hidden'));
      if (target) {
        target.hidden = !target.hidden;
        target.classList.toggle('is-open', !target.hidden);
        trigger.setAttribute('aria-expanded', String(!target.hidden));
        updateSampleOutput(trigger, target.hidden ? 'sample target hidden' : 'sample target visible');
      }
    });
  });

  document.querySelectorAll('[data-sample-toggle-class]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var parts = trigger.getAttribute('data-sample-toggle-class').split('|');
      var target = document.querySelector(parts[0]);
      if (target && parts[1]) {
        target.classList.toggle(parts[1]);
        trigger.setAttribute('aria-pressed', String(target.classList.contains(parts[1])));
      }
    });
  });

  document.querySelectorAll('[data-sample-cycle-text]').forEach(function (trigger) {
    var parts = trigger.getAttribute('data-sample-cycle-text').split('|');
    var target = document.querySelector(parts.shift());
    var index = 0;
    trigger.addEventListener('click', function () {
      if (!target || parts.length === 0) {
        return;
      }
      index = (index + 1) % parts.length;
      target.textContent = parts[index];
    });
  });

  var progressValues = ['32%', '72%', '100%'];
  var progressNumbers = ['32', '72', '100'];
  var progressIndex = 1;
  var progress = document.querySelector('[data-sample-progress]');
  var progressMeter = document.querySelector('[data-sample-progress-meter]');
  var progressButton = document.querySelector('[data-sample-cycle-progress]');
  if (progress && progressButton) {
    progressButton.addEventListener('click', function () {
      progressIndex = (progressIndex + 1) % progressValues.length;
      progress.style.setProperty('--adlaire-progress-value', progressValues[progressIndex]);
      if (progressMeter) {
        progressMeter.setAttribute('aria-valuenow', progressNumbers[progressIndex]);
      }
    });
  }

  function updateSampleOutput(trigger, text) {
    var outputSelector = trigger.getAttribute('data-sample-state-output');
    var output = outputSelector ? document.querySelector(outputSelector) : null;
    if (output) {
      output.textContent = text;
    }
  }
})();
