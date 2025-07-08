document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const panel = document.getElementById("control-panel");
  menuToggle.addEventListener("click", () => {
    panel.classList.toggle("hidden");
    const expanded = panel.classList.contains("hidden") ? "false" : "true";
    menuToggle.setAttribute("aria-expanded", expanded);
    panel.setAttribute("aria-hidden", panel.classList.contains("hidden"));
  });

  const themeToggle = document.getElementById("theme-toggle");
  function updateThemeButton(lang) {
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? (lang === "en" ? "Dark" : "Scuro")
      : (lang === "en" ? "Light" : "Chiaro");
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    updateThemeButton(languageSelect.value);
  });

  const translations = {
    en: {
      "chi-sono": "About",
      "skills": "Skills",
      "progetti": "Projects",
      "contatti": "Contacts",
      "torna": "Back to top",
      "tema": "Theme:",
      "lingua": "Language:",
      "impostazioni": "Settings",
      "descrizione": "My name is Lorenzo Bergamini, I am 18 years old, and one of my lifelong passions is computer science. This interest was born in a completely spontaneous and natural way during childhood. I still remember with enthusiasm the moment when, after finishing elementary school, my parents gave me my first phone. That apparently simple object aroused in me a deep sense of wonder and a strong curiosity: I wondered how it was possible to build such a sophisticated instrument, capable of performing so many functions so quickly and efficiently. It was from that very moment that I began to approach the world of technology. I began to read up on it, reading articles, watching videos, exploring forums, and always asking myself new questions. I wanted to understand what was behind the screen, how software worked, what languages allowed a program to “talk” to a device, and how the systems that are part of our daily lives today were designed. Over time, this simple curiosity turned into a real passion. When the time came to choose a course of study in high school, I had no doubts: I decided to enroll in a technical institute with a focus on computer science. This choice represented for me the first concrete step toward a future in the technology sector, allowing me to acquire the theoretical and practical foundations on which I intend to build my career. Today, looking back, I can say with certainty that that decision marked the beginning of a path that I feel is deeply mine.",
      "descrizione-progetto": "A website created with HTML, CSS and JavaScript to showcase my skills.",
      "social": "You can also find me on:",
      "feedback": "Send me a feedback!",
      "email": "Your email (optional):",
      "messaggio": "Your message:",
      "informazioni": "Information",
      "valutazione": "Rating:",
      "invia": "Send feedback",
      "guarda": "View on GitHub",
      "portfolio": "Personal Portfolio",
      "versione": "\nThis site was created by Lorenzo Bergamini as a personal portfolio. Version: 1.0.0 Last updated: July 2025 This site is not official: it was created exclusively for personal use and educational purposes."





    },
    it: {
      "chi-sono": "Chi sono",
      "skills": "Skills",
      "progetti": "Progetti",
      "contatti": "Contatti",
      "torna": "Torna all'inizio",
      "tema": "Tema:",
      "lingua": "Lingua:",
      "impostazioni": "Impostazioni",
      "descrizione": "Mi chiamo Lorenzo Bergamini, ho 18 anni e una delle passioni che da sempre mi accompagna è l’informatica. Questo interesse è nato in modo del tutto spontaneo e naturale durante l'infanzia. Ricordo ancora con entusiasmo il momento in cui, terminata la scuola elementare, i miei genitori mi regalarono il mio primo telefono. Quell’oggetto, apparentemente semplice, suscitò in me un profondo senso di meraviglia e una forte curiosità: mi chiedevo come fosse possibile costruire uno strumento così sofisticato, capace di svolgere così tante funzioni in modo così rapido ed efficiente. Fu proprio da quel momento che iniziai ad avvicinarmi al mondo della tecnologia. Cominciai a documentarmi, leggendo articoli, guardando video, esplorando forum e ponendomi sempre nuove domande. Volevo comprendere cosa si nascondesse dietro lo schermo, come funzionassero i software, quali linguaggi permettessero a un programma di “parlare” con un dispositivo e come venissero progettati i sistemi che oggi fanno parte della nostra quotidianità. Con il tempo, questa semplice curiosità si è trasformata in una vera e propria passione. Quando giunse il momento di scegliere il percorso di studi alle scuole superiori, non ebbi dubbi: decisi di iscrivermi a un istituto tecnico con indirizzo informatico. Questa scelta ha rappresentato per me il primo passo concreto verso un futuro nel settore tecnologico, permettendomi di acquisire le basi teoriche e pratiche su cui intendo costruire la mia carriera. Oggi, guardandomi indietro, posso dire con certezza che quella decisione ha segnato l’inizio di un percorso che sento profondamente mio.",
      "descrizione-progetto": "Un sito web realizzato con HTML, CSS e JavaScript per presentare le mie competenze.",
      "social": "Mi trovi anche su:",
      "feedback": "Mandami un feedback!",
      "email": "La tua email (facoltativa):",
      "messaggio": "Il tuo messaggio:",
      "informazioni": "Informazioni",
      "valutazione": "Valutazione:",
      "invia": "Invia feedback",
      "guarda": "Guarda su GitHub",
      "portfolio": "Portfolio Personale",
      "versione":"\nQuesto sito è stato creato da Lorenzo Bergamini come portfolio personale. Versione: 1.0.0 Ultimo aggiornamento: Luglio 2025 Questo sito non è ufficiale: è stato realizzato esclusivamente per uso personale e a scopo didattico."
    }
  };

  const languageSelect = document.getElementById("language-select");
  languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      el.textContent = translations[lang][key] || el.textContent;
    });
    updateThemeButton(lang);
  });
  updateThemeButton(languageSelect.value);

  const form = document.getElementById("feedback-form");
  const response = document.getElementById("feedback-response");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const starValue = document.getElementById("star-value");
    if (starValue) starValue.value = "0";

    setTimeout(() => {
      response.innerHTML = "";
    }, 5000);
  });
});
