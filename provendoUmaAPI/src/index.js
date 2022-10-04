const db = require('./conexao')

//Importando express e cors
const express = require("express");
const cors = require("cors");

//Rotas
const rotas = express.Router();

//
rotas.get('/', (req, res) => {
    res.send('Rota inicial do servidro')
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