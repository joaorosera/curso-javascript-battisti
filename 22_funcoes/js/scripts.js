// Declara o nome da função
function primeiraFuncao() {

    console.log("Hello World das Funções")

}

//Chama a função
primeiraFuncao();

function dizerNome(nome) {

    console.log("O nome é: " + nome);

}

dizerNome("João");
dizerNome("Vitor");
dizerNome("Rosera");

var nomeDoBancoDeDados = "Oracle Data Base";

dizerNome(nomeDoBancoDeDados);

function soma(a,b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2,5);

console.log(somaUm);

var somaDois = (5,5);

console.log(somaDois);