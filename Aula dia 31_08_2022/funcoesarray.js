// function maiorDeIdade (item){
//     return  item >=18;

// }

// console.log(maiorDeIdade(10));

let idades = [11, 3, 19, 35, 17 ]

function maiorDeIdade (item){
    return  item >= 18;

}

const algumMaior = idades.some( maiorDeIdade );
const todosMaior = idades.every( maiorDeIdade );
const primeiroElem = idades.find( maiorDeIdade);
const primeiroIndice = idades.findIndex ( maiorDeIdade );
const maiores = idades.filter( maiorDeIdade );

const menores = idades.filter(item => item < 18)

console.log('some', algumMaior);
console.log('every', todosMaior);
console.log('find', primeiroElem);
console.log('findIndex (posição)', primeiroIndice);
console.log('filter (só a lista dos maiores)', maiores);
console.log('filter (só a lista dos menores)', menores);
console.log('')

let lista = [
    {marca: 'Fiat', modelo: 'Uno'},
    {marca: 'Chevrolet', modelo: 'Astra'},
    {marca: 'Fiat', modelo: 'Argo'},
    {marca: 'VW', modelo: 'Fusca'},
    {marca: 'Fiat', modelo: 'Palio'}
];

const fiats = lista.filter(item => item.marca == 'Fiat');
console.log( fiats );

//FUNCAO MAP utilizada muito para percorrer cada elemento. 
idades = idades.map( item => item + 1);
console.log( "Novas idades ", idades )

//FUNCAO SORT
idades.sort((a, b) => a - b);
console.log('idades ASC', idades)

lista.sort( (a, b) => a.modelo.localeCompare(b.modelo));
console.log('carros ASC', lista);

// const num = 20;
// const str = '20';

// console.log(num !== str);