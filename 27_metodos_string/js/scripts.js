// Lenght - quantiade de caractéres que uma string possui

var nome = "João";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf - dá o índice de um texto

console.log(nome[[2]]);

var frase = "O rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu"));

// Slice - remove uma parte da frase desejada

var roeu = frase.slice(7,11);

console.log(roeu);

// Replace - Troca uma palavra da string

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);