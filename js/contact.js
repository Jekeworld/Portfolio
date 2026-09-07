/* Copie de l'adresse e-mail dans le presse-papiers */
(function(){
  var lienEmail = document.getElementById("lien-email");
  var copieMsg = document.getElementById("copie-msg");
  if (!lienEmail || !copieMsg || !navigator.clipboard) return;

  lienEmail.addEventListener("click", function(){
    navigator.clipboard.writeText("jekemode8@gmail.com").then(function(){
      copieMsg.classList.add("visible");
      setTimeout(function(){ copieMsg.classList.remove("visible"); }, 1600);
    }).catch(function(){});
  });
})();
