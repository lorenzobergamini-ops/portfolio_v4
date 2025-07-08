document.addEventListener('DOMContentLoaded', function () {
  const stelle = document.querySelectorAll('#star-rating .star');
  const inputValutazione = document.getElementById('star-value');
  function aggiornaStelle(valore) {
    stelle.forEach(star => {
      if (parseInt(star.dataset.value) <= valore) {
        star.classList.add('text-yellow-400');
      } else {
        star.classList.remove('text-yellow-400');
      }
    });
  }
  stelle.forEach(star => {
    star.addEventListener('click', () => {
      const valore = parseInt(star.dataset.value);
      inputValutazione.value = valore;
      aggiornaStelle(valore);
    });
    star.addEventListener('mouseover', () => {
      const valore = parseInt(star.dataset.value);
      aggiornaStelle(valore);
    });
    star.addEventListener('mouseout', () => {
      aggiornaStelle(parseInt(inputValutazione.value));
    });
  });
  aggiornaStelle(0);

  const btnTema = document.getElementById('theme-toggle');
  btnTema.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      btnTema.textContent = 'Tema Scuro';
      btnTema.classList.remove('text-black');
      btnTema.classList.add('text-white');
    } else {
      btnTema.textContent = 'Tema Chiaro';
      btnTema.classList.remove('text-white');
      btnTema.classList.add('text-black');
    }
  });

  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('accept-cookies');
  banner.classList.remove('hidden');
  btn.addEventListener('click', function () {
    banner.classList.add('hidden');
  });

  document.getElementById('feedback-form').addEventListener('submit', function(e) {
    var recaptcha = grecaptcha.getResponse();
    if (!recaptcha) {
      e.preventDefault();
      alert('Per favore completa il reCAPTCHA!');
      return false;
    }
  });
});
