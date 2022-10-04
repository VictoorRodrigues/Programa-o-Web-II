let nome = document.querySelector("#nome");
let resumo = document.querySelector("#resumo");
let nota = document.querySelector("#nota");
let poster = document.querySelector("#poster");
let generos = document.querySelector("#generos");
let elenco = document.querySelector("#elenco");

nome.innerText = bd.nome;
resumo.innerText = bd.resumo;
nota.innerText = bd.nota;



//poster.setAttribute('src', bd.fotoPoster);
poster.innerHTML = `<img src= "${bd.fotoPoster}" width="250" />`;

let html = '';
for (let gen of bd.generos){
    html += `<li>${gen}</li>`;
}

generos.innerHTML = html;


html = '';
for(let ator of bd.elenco){
    html = `<li><img src="${ator.foto}" width="100" /></li>`;
}
elenco.innerHTML = html;
