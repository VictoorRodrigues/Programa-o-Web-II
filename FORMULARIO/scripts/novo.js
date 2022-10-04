const btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", salvarProduto);

function salvarProduto(ev) {
    const nome = document.querySelector("#txtNome").value;
    const preco = document.querySelector("#txtPreco").value;
    
    const body = {
        nome: nome,
        preco: preco
    }

    const opcoes = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
   

    fetch("http://localhost:3333/produtos", opcoes)
        .then(resposta => resposta.json())
        .then(produto => produtoCadastrado(produto))
        .catch(erro => console.log(erro));
}

function produtoCadastrado(produto){
    alert("Produto cadastrado com sucesso: " + produto.produto);
    location.href="index.html"
}