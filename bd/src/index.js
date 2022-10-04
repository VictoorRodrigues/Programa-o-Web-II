const db = require('./conexao')

async function getPokemon(){
    try{
        const pokemons = await db.query(
            `SELECT P.numero, P.nome, R.nome AS reg_nome
            FROM pokemon AS P, regioes AS R
            WHERE R.id = P.geracao
            ORDER BY P.numero
            LIMIT 10`
        );
        console.log(pokemon[0].nome);

   } catch (err){
        console.log(err);
   }
}

// getPokemon();

async function getPokemonByName(name) {
    try {
        const pokemon = await db.query(
            `SELECT numero, nome, evolucoes
            FROM pokemon
            WHERE nome = ?`, 
            [name]
        );
        if (pokemon.length > 0)
            console.log(pokemon);
        else
            console.log('Nenhum pokemon encontrado')
    } catch (err) {
        console.log(err);
    }
}

// Pegando argumentos da linha de comando
const args = process.argv.slice(2);
// console.log(args)

getPokemonByName(args[0] !== undefined ? args[0] : 'pikachu')

// Sempre feche a conexão
db.end();