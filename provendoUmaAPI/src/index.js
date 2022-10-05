const db = require('./conexao')

//Importando express e cors
const express = require("express");
const cors = require("cors");

//Rotas
const rotas = express.Router();

//
rotas.get('/', (req, res) => {
    res.send('Rota inicial do servidor')
})

let infoPokemon = []

//rota name 
rotas.get('/pokemon/:nome', (req, res) => {
    const nome = req.params.nome;
    async function getInfoPokemon(){  
        try{
            infoPokemon = await db.query(
                `select * from pokemon as p where p.nome like "%${nome}%";`
            );
            console.log(infoPokemon)
            return infoPokemon;              
        } catch (error){
            console.log(error);
       }
    }
    getInfoPokemon();
    db.end();
    return res.status(200).json(infoPokemon)
});

let regioesPokemon = []

rotas.get('/regioes', (req, res) => {
    const regioes = req.params.regioes;
    async function getRegioesPokemon(){  
        try{
            regioesPokemon = await db.query(
                `SELECT id, nome FROM pokemon.regioes;`
            );
            console.log(regioesPokemon)
            return regioesPokemon;              
        } catch (error){
            console.log(error);
       }
    }
    getRegioesPokemon();
    db.end();
    return res.status(200).json(regioesPokemon)
});

let tiposPokemon = []

rotas.get('/tipos', (req, res) => {
    const tipos = req.params.tipos;
    async function getTiposPokemon(){
        try{
            tiposPokemon = await db.query(
                `SELECT id, nome FROM pokemon.tipos;`
            );
            console.log(tiposPokemon)
            return tiposPokemon;
        } catch (error){
            console.log(error);
        }
    }
    getTiposPokemon();
    db.end();
    return res.status(200).json(tiposPokemon)
})





// async function getPokemon(){
//     try{
//         const pokemons = await db.query(
//             `SELECT P.numero, P.nome, R.nome AS reg_nome
//             FROM pokemon AS P, regioes AS R
//             WHERE R.id = P.geracao
//             ORDER BY P.numero
//             LIMIT 10`
//         );
//         console.log(pokemon[0].nome);

//    } catch (err){
//         console.log(err);
//    }
// }

// // getPokemon();

// async function getPokemonByName(name) {
//     try {
//         const pokemon = await db.query(
//             `SELECT numero, nome, evolucoes
//             FROM pokemon
//             WHERE nome = ?`, 
//             [name]
//         );
//         if (pokemon.length > 0)
//             console.log(pokemon);
//         else
//             console.log('Nenhum pokemon encontrado')
//     } catch (err) {
//         console.log(err);
//     }
// }

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);

const port = 3333;

app.listen(port, () => console.log(`http://localhost:${port}`))



// Sempre feche a conexão
db.end();