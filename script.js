document.addEventListener('DOMContentLoaded', () => {
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

  

  document.getElementById('theme-toggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark');
});
  const btnTema = document.getElementById('theme-toggle');
  const body = document.body;

  function applicaTema(tema) {
    if (tema === 'dark') {
      body.classList.add('dark');
      btnTema.textContent = 'Tema Scuro';
      btnTema.classList.remove('text-black');
      btnTema.classList.add('text-white');
    } else {
      body.classList.remove('dark');
      btnTema.textContent = 'Tema Chiaro';
      btnTema.classList.remove('text-white');
      btnTema.classList.add('text-black');
    }
  }
});


document.getElementById('feedback-form').addEventListener('submit', function(e) {
  var recaptcha = grecaptcha.getResponse();
  if (!recaptcha) {
    e.preventDefault();
    alert('Per favore completa il reCAPTCHA!');
    return false;
  }
}); 
document.getElementById('feedback-form').addEventListener('submit', function(e) {
  var recaptcha = grecaptcha.getResponse();
  if (!recaptcha) {
    e.preventDefault();
    alert('Per favore completa il reCAPTCHA!');
    return false;
  }

  e.preventDefault();
  document.getElementById('feedback-response').innerHTML =
    '<img src="check.png" alt="Successo" style="width: 24px; height: 24px; vertical-align:middle; margin-right:8px;" />Feedback inviato con successo!';
  this.reset();
  grecaptcha.reset();
});
