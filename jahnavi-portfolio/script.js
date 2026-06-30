// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.primary-nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Accessible, lightweight contact form handling (no backend wired up)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var valid = form.checkValidity();
      if (!valid) {
        form.reportValidity();
        return;
      }
      status.textContent = 'Thanks — your message has been noted. I will reply by email soon.';
      status.setAttribute('data-state', 'success');
      form.reset();
      status.focus();
    });
  }
});
