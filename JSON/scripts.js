// scripts.js
// JavaScript Object Notation

let box = document.querySelector("#box")

let json = JSON.stringify(bd);

box.innerText = json;


let str = '{"nome":"Ana","filhos":[{"nome":"Aninha", "idade":5},{"nome":"Joaozinho", "idade":3}]}';

let obj = JSON.parse(str);
alert(obj.filhos[0].nome)
