function exibir(num) {
    console.log("A Operação resultou em: " + num);
}

function soma(a, b, cb) {
    var op = a + b;
    cb(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2,2, exibir);

multiplicacao(2,4, exibir);