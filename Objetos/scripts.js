// scripts.js
let nomes = ['Ana', 'Bruno', 'Carlos'];
console.log(nomes)

let primeiro = nomes[0];
console.log(primeiro);

let tamanho = nomes.length;
console.log("A lista possui" + tamanho + "elementos");

//nomes[0] = 'Ana Maria';
//nomes[0] = nomes[0] + ' Maria';
nomes[0] += ' Maria';
console.log(nomes);

// Inserindo um novo elemento na lista
nomes.push('Daniel', 'Edson', 'Fernando');
console.log(nomes);

// Removendo o ultimo elemento da lista
nomes.pop();
console.log(nomes);

for (let i = 0; i < nomes.length; i++){
    console.log( nomes[i]);
}

console.log("##### FOR OF #####")
for (let nome of nomes) {
    nome = 'Dr ' + nome;
    console.log( nome );
}

console.log("-----------------------");


let ficha = {
    nome: 'Ana', 
    idade:30, 
    cidade: 'Ituiutaba', 
    devendo: false
};
console.log(ficha);

let campo = 'idade';
console.log(ficha[campo]);

console.log("### FOR IN ###")

for (let item in ficha){
    console.log(item, ficha[item]);
}

console.log("------------------");

let alunos = [
    {
        nome: 'Ana',
        nota: 9.7,
        disciplinas: [
            {
                nome: 'PI 1',
                cursado: true
            },
            {
                nome: 'PI 2',
                cursado : false
            },
        ]
    },
    {
        nome: 'Bruno',
        nota: 2.4
    },
    {
        nome: 'Carlos',
        nota: 6.0
    }
];

console.log(alunos);

for (let itemm of alunos){
    console.log(itemm.nome)
}

console.log(alunos[0].disciplinas[0].nome);

for (let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome);
    console.log(alunos[i].nota);
}



// Manipulando o HTML
let infoNome = document.getElementById("infoNome");
console.log( infoNome.innerText)
let infoDisciplinas = document.querySelector("#infoDisciplinas");

infoNome.innerText = alunos[0].nome;

let html = '';
for (let i = 0;i < alunos[0].disciplinas.length; i++){

    let nomeDisc = alunos[0].disciplinas[i].nome;
    let status = (alunos[0].disciplinas[i].cursado == true) ? 'cursado' : 'cursando';

    //html += '<b>' + nomeDisc + '</b> (' + status + ')<br>';
    html += `<b>${nomeDisc}</b> (${status})<br />`;

}
infoDisciplinas.innerHTML = html;














