/* Menu mobile + navigation active au défilement (scroll-spy) */
(function(){
  var bascule = document.getElementById("bascule-menu");
  var menu = document.getElementById("menu-principal");

  if (bascule && menu) {
    bascule.addEventListener("click", function(){
      var ouvert = bascule.getAttribute("aria-expanded") === "true";
      bascule.setAttribute("aria-expanded", String(!ouvert));
      menu.classList.toggle("ouvert", !ouvert);
    });
    menu.querySelectorAll(".lien-nav").forEach(function(lien){
      lien.addEventListener("click", function(){
        bascule.setAttribute("aria-expanded", "false");
        menu.classList.remove("ouvert");
      });
    });
  }

  var sections = document.querySelectorAll("main section[id]");
  var liensNav = document.querySelectorAll(".lien-nav[data-cible]");
  if (sections.length && liensNav.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function(entrees){
      entrees.forEach(function(entree){
        if (entree.isIntersecting) {
          var id = entree.target.id;
          liensNav.forEach(function(lien){
            lien.classList.toggle("actif", lien.dataset.cible === id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function(s){ spy.observe(s); });
  }
})();
