/* Retournement des cartes de compétences au clic ou au clavier */
(function(){
  function basculer(carte){
    var retournee = carte.classList.toggle("retournee");
    carte.setAttribute("aria-pressed", String(retournee));
  }

  document.querySelectorAll(".competence-carte").forEach(function(carte){
    carte.addEventListener("click", function(){ basculer(carte); });
    carte.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        basculer(carte);
      }
    });
  });
})();
