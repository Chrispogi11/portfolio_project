/**
 * Minimal JS for Christopher Licuanan portfolio.
 * Newsletter forms: frontend only — prevent default submit, no backend.
 */

document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        // No backend: just show a simple message
        alert('Thanks for subscribing! (This is a placeholder — no backend connected.)');
        email.value = '';
      }
    });
  });
});
