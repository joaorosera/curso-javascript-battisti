// toLowerCase e toUpperCase

var frase = ("Está é frase que vamos manipular");

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

// Trim - Aparar os espaços

var nome = "      João      ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// Split - Separa o array

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var frase2 = "Eu quero a última palavra teste dessa frase de teste"

console.log(frase2.indexOf("teste"));
console.log(frase2.lastIndexOf("teste"));