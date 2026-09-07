/* Barre de progression de lecture + bouton remonter en haut */
(function(){
  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var progression = document.getElementById("progression");
  var boutonHaut = document.getElementById("bouton-haut");

  function surDefilement(){
    var h = document.documentElement;
    var hauteur = h.scrollHeight - h.clientHeight;
    var pourcent = hauteur > 0 ? (h.scrollTop / hauteur) * 100 : 0;
    if (progression) progression.style.width = pourcent + "%";
    if (boutonHaut) boutonHaut.classList.toggle("visible", h.scrollTop > 480);
  }

  document.addEventListener("scroll", surDefilement, { passive: true });
  surDefilement();

  if (boutonHaut) {
    boutonHaut.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: reduit ? "auto" : "smooth" });
    });
  }
})();
