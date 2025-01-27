// Boa prática seria declarar as váriaves que se trabalha no escopo global todas no topo do código

// Escopo global
var x = 1;
// Escopo global
var y = 3;

console.log(x,y);

//Escopo local
function teste() {

    var z = 0;

    console.log(z);

    //Escopo global pode ter acesso em escopo local
    console.log(x);
}

teste();

function testando () {
    z = 5;

    console.log(z);
}

testando();


// If não limita escopos no bloco de código
if(true) {
    var p = 1;
}

console.log(p);