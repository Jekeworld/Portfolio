/* Apparition des fiches projet au défilement */
(function(){
  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cibles = document.querySelectorAll(".apparait");

  if (reduit || !("IntersectionObserver" in window)) {
    cibles.forEach(function(el){ el.classList.add("visible"); });
    return;
  }

  var observateur = new IntersectionObserver(function(entrees){
    entrees.forEach(function(entree){
      if (entree.isIntersecting) {
        entree.target.classList.add("visible");
        observateur.unobserve(entree.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  cibles.forEach(function(el){ observateur.observe(el); });
})();
