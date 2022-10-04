// Callbacks

let btn = document.querySelector("#btn");
btn.addEventListener("click", (ev) => console.log(ev.target));

function botaoClicado() {
    console.log("O botao foi clicado"); 
    buscaUsuario();
}
function buscaUsuario(){
    console.log("Buscando Usuario");
    listaPedidos();
}
function listaPedidos(){
    console.log("Listando pedidos");
    verificaStatus();
}
function verificaStatus(){
    console.log("Verificando status")
}

// Arrow Function
// function somar(n1, n2){
//     return n1 +n2;
// }

// let somar = function (n1, n2){
//     return n1 + n2;
// }

// let somar = (n1, n2) => {
//     return n1 + n2;
// }

let somar = (n1, n2) => n1+n2;


let res = somar(10, 20);
console.log(res)


// Promises
// Síncrono: acontece uma após a outra
// Assíncrona: acontecem em paralelo
function soAceitaPares(numero){
    let promessa = new Promise( (resolve, reject) => {
        if (numero % 2 == 0 ){
            // PAR
            let resultado = "O numero é par";
            resolve(numero);

        } else{
            // IMPAR
            let erro = "O numero e impar";
            reject(erro);
        }

    });

    return promessa;
}

function soAceitaPositivos(numero){
    return new Promise ( ( resolve, reject) => {
        if (numero >= 0 ){
            resolve("O numero e positivo");
        }else{
            reject("O numero e negativo");
        }
    })
}




soAceitaPares(-10)
    .then( (responsePar) => soAceitaPositivos(responsePar))
    .then( (responsePositivo) => console.log(responsePositivo))
    .catch((err) => console.log(err) );


console.log("PROGRAMA");




// APIs
fetch("https://restcountries.com/v3.1/name/Brazil")
    .then( (response) => response.json() )
    .then( (dados) => console.log(dados[0].name.common) )
    .catch( (err) => console.log(err) );