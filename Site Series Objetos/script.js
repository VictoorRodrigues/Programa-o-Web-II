//Header
document.querySelector("header .poster img").setAttribute('src', bd.fotoPoster);

document.querySelector("header .info h1").innerText = bd.nome;
document.querySelector("header .info .generos").innerText = bd.generos;
document.querySelector("header .info p").innerText = bd.resumo;
document.querySelector("header .info .nota").innerText = bd.nota;

document.querySelector("header").style.backgroundImage = `url("${bd.fotoBg}")`;

//Elenco
document.querySelector(".elenco .elenco-container").innerHTML = '';
for (let ator of bd.elenco){
    let html = `
        <div class="ator">
            <img src="${ator.foto}" /> 
            <span class="nome">${ator.nome}</span>
            <span class="personagem">${ator.personagem}</span>
        </div>
    `;
    document.querySelector(".elenco .elenco-container").insertAdjacentHTML('beforeend',html);
}

// afterbegin: depois do começo
// beforebegin: antes do começo
// afterend: depois do fim
// beforeend: antes do fim

/*
beforebegin<p>afterbegin   TEXTO   beforeend</p> afterend
*/

//temporadas

document.querySelector(".temporadas .temporadas-container").innerHTML = '';
for (let temporada of bd.temporadas){
    let n = temporada.numero;
    
    let html = `
    <div class="temporada">
                <div class="poster">
                    <img src="${temporada.poster}"/>
                </div>
                <div class="info">
                    <h3>Temporada ${temporada.numero}</h3>
                    <div class="subtitulo">
                        ${temporada.exibicao} | ${temporada.numero_episodios}
                    </div>
                    <p class="sinopse">${temporada.resumo}</p>
                    <a href="#" class="botao" id="btn-${n}">Ver episodios</a>
                    <div class="episodios" id="episodios-${n}"></div>
                </div>
            </div>
    `;
    document.querySelector(".temporadas .temporadas-container").insertAdjacentHTML('beforeend', html);

    document.querySelector(`#btn-${n}`).addEventListener('click',
        function (ev){
            mostraEpisodios(ev, n);
        }
    );
}

function mostraEpisodios (ev, id){
    ev.preventDefault();



    document.querySelector(`#episodios-${id}`).innerHTML = ''; 

    for (let ep of bd.temporadas[id-1].episodios){
        let html = `
            <div class="episodio">
                <div class="foto">
                    <img src="${ep.foto}" />
                    <span class="nota">
                        <img src="star.png" />${ep.nota}
                    </span>
                </div>
                <div class="info">
                    <h4>${ep.numero} | ${ep.nome}</h4>
                    <p>${ep.resumo}</p>
                </div>
            </div>
        `;
        document.querySelector(`#episodios-${id}`).insertAdjacentHTML('beforeend', html);
    } 
}