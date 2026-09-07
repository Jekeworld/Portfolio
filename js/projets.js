/* Fenêtre modale de détail projet */
(function(){
  var modale = document.getElementById("modale-projet");
  if (!modale) return;

  var panneau = modale.querySelector(".modale-panneau");
  var corps = document.getElementById("modale-corps");
  var declencheur = null;

  function ouvrir(carte){
    var gabarit = carte.querySelector("template");
    if (!gabarit) return;
    corps.innerHTML = "";
    corps.appendChild(gabarit.content.cloneNode(true));
    panneau.setAttribute("data-brin", carte.dataset.brin || "neutre");
    declencheur = carte;
    modale.hidden = false;
    document.body.style.overflow = "hidden";
    modale.querySelector(".modale-fermer").focus();
  }

  function fermer(){
    modale.hidden = true;
    document.body.style.overflow = "";
    if (declencheur) { declencheur.focus(); declencheur = null; }
  }

  document.querySelectorAll(".projet-carte").forEach(function(carte){
    carte.addEventListener("click", function(){ ouvrir(carte); });
    carte.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        ouvrir(carte);
      }
    });
  });

  modale.addEventListener("click", function(e){
    if (e.target.closest("[data-fermer]")) fermer();
  });

  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && !modale.hidden) fermer();
  });
})();
