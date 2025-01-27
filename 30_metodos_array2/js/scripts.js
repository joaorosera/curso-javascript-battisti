// Splice - Adicionar um elemento no meio do array

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

// indexOf - Acha  o índice de um elemento

console.log(arr.indexOf(5));

// Join - Transforma o array em uma string

var arr2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];

console.log(arr2.join(" "));

// Reverse - inverte o array

console.log(arr2.reverse());