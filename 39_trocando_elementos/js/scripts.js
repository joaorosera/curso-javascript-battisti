// Criar um elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Esse é o texto do h3");

el.appendChild(texto);

console.log(el);

// Selecionar o elemento para trocar

var title = document.querySelector("#title");

console.log(title);

// Selecionar o pai do elemento

var pai = title.parentNode;

// Trocar os elementos 

pai.replaceChild(el, title);
