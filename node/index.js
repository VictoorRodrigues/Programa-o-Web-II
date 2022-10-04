// npm init
// Inicializa o NPM neste projeto

const sharp = require("sharp")
    
sharp('images/kennes.jpg')
    .resize({ width: 150, height: 500})
    .toFile('images/mini_kennes.jpg')
    .then(resposta => console.log("Imagem redimensionada"))
    .catch(err => console.log(err));

    