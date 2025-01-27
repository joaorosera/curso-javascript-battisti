// parseFloat - pega um valor e transforma em float.

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

// parseInt - pega uma string e transforma em inteiro.

console.log(parseInt('10'));
console.log(parseInt('7.77'));

// toFixed - limita as casas decimais de um número

console.log(23.9123129.toFixed(1));

// isNum - para verificar se é um númeri

console.log(isNaN('Teste'));
console.log(isNaN(12));

// MAX_VALUE e MIN_VALUE - Máximos e minimos que o JS aceita, acima disso
// tratado como infinite e abaixo disso como -infinite

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.7976931348623157e+308);
