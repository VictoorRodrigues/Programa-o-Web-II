//insomnia e postman
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

// Dados
let bd = [
    { id: uuidv4(), produto: "Mouse", preco: 15.99},
    { id: uuidv4(), produto: "Teclado", preco: 25.99},
    { id: uuidv4(), produto: "Fone de ouvido", preco: 10.99},
]

// Rotas
const rotas = express.Router();

// Rota principal
rotas.get("/", (req, res) =>{
    res.send("Rota inicial do servidor");
})

rotas.get("/produtos", (req, res) =>{
    const lista =[];
    for (item of bd){
        lista.push({
            id: item.id,
            nome: item.produto,
            preco: item.preco
        });
    }
    return res.status(200).json(lista);
})

//retorna um produto com nome espeficado
rotas.get ("/produto/:nome", (req, res) =>{
    const nome = req.params.nome;
    let produto ={};
    for (let item of bd){
        if (item.produto == nome){
            produto = item;
            break;
        }
    }

    return res.status(200).json(produto);
})

//cria um nomo produto
rotas.post('/produtos', (req, res) =>{
    const nome = req.body.nome;
    const preco = req.body.preco;

    if (!nome || !preco){
        return res.status(400).json({erro:'Nome e preço devem ser infromados'});
    }

    const novoProduto = {
        id: uuidv4(),
        produto: nome,
        preco: preco
    }
    bd.push( novoProduto);

    return res.status(200).json( novoProduto );

});

//Atualizar um produto existente
rotas.put('/produtos/:id', (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const id = req.params.id;

    let produto = null;
    for (let i = 0; i <bd.length; i++) {
        if ( bd[i].id == id ) {
            produto = i; //encontrou o produto
            break;
        }
    }

    if (produto == null ) {
        return res.status(400).json({ erro: 'ID não encontrado'});
    }
    
    if (!nome || !preco) {
        return res.status(400).json({erro:'Nome e preço devem ser infromados'});
    }

    bd[produto] = {
        id: bd[produto].id,
        produto: nome,
        preco: preco
    }

    return res.status(200).json( bd[produto] );

});

//remover um produto 
rotas.delete('/produtos/:id', (req, res) =>{
    const id = req.params.id;

    bd= bd.filter(item => item.id != id);

    return res.status(200).json({ id : id })
    
    
})









// Configuração do servidor
const app = express();          // Iniciei a configuração do servidor

app.use(cors());                // Permeite o acesso publico
app.use(express.json());        // Toda comunicação ser realizada em JSON
app.use(rotas);                 // define o sistema de rotas

const port = 3333;

// Inicializando o servidor
app.listen(port, () => console.log(`Acesse http://localhost:${port}`));