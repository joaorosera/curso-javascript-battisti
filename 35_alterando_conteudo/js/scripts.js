// Selecionar elemento

var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContet => Mais utilizado, recomendado e perfomado.

var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent"