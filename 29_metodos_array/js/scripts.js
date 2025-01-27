// Length - Número de elementos

var arr = [1,2,3,4,5]

console.log(arr.length);

// Push - adicionar elementos
arr.push(6);
arr.push(7);
arr.push('Pão');

console.log(arr);

// Pop - Remove um elemento no fim do array

arr.pop();

console.log(arr)

// UnShift - Adicona um elemento no início do array

arr.unshift(0);
arr.unshift('Teste');

console.log(arr);

// Shift - remove um elemento no começo do array

arr.shift();
console.log(arr)

// Acessar o último elemento do array

console.log(arr[arr.length - 1]);

// isArray - Verificar se é um array

console.log(Array.isArray(5));

console.log(Array.isArray(arr));
