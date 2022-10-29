
const locais= [{
    cidade: "João Pessoa",
    custoDeVida: 2000,
    eSeguro: true,
    oQueFazer: "A cidade de João Pessoa/PB, fica localizada no Nordeste brasileiro, possui cerca de 817mil habitantes. A cidade é famosa pelos seus belos pontos turísticos, possuindo destaque na gastronomia e em suas belas praias",
    imagem: "./imagens/jp.jpg",
    saibaMais: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Pessoa"
}, {
    cidade: "Salvador",
    custoDeVida: 1800,
    eSeguro: false,
    oQueFazer : "A maravilhosa cidade de Salvador/BA,localizada no Nordeste brasileiro, possui cerca de 2milhões de habitantes. Salvador se destaca pelas suas belezas naturais, pontos históricos e gastronomia singular",
    imagem: "./imagens/salvador.jpeg",
    saibaMais: "https://pt.wikipedia.org/wiki/Salvador"
}, {
    cidade: "Gramado",
    custoDeVida: 4000,
    eSeguro: true,
    oQueFazer: "Gramado, é uma cidade localizada no Sul do Brasil, possui cerca de 37mil habitantes. Gramado é conhecida como Europa do Brasil, destaca-se por seus hotéis luxuosos além de possuir diversos pontos turísticos para os mais variados gostos",
    imagem: "./imagens/gramado.png",
    saibaMais: "https://pt.wikipedia.org/wiki/Gramado"
}]


 for(let cidade in locais) {
        console.log(`
        Cidade: ${locais[cidade].cidade}, 
        Custo de vida: ${locais[cidade].custoDeVida}, 
        É seguro(a)? ${locais[cidade].eSeguro}, 
        O que fazer? ${locais[cidade].oQueFazer}`)
        
    }


// function retornarObjeto (string, objeto){
//     if(objeto.cidade === string){
//         console.log(`${objeto.cidade.toUpperCase()}
//         Custo de Vida: ${objeto.custoDeVida}
//         É seguro(a)? ${objeto.eSeguro}
//         O que fazer? ${objeto.oQueFazer}`)
//     } else {
//         alert("Por favor, tente novamente")
//     }
// }

// retornarObjeto("João Pessoa", locais[0])


const renderizarNaTela = document.querySelector(".listas-de-locais")

function adicionar() {
    for(let i of locais) { 
        renderizarNaTela.innerHTML += (` <section>
        <ul class="primeira-lista">
            <ol id="primeira-ol">
                <li><strong>Cidade:</strong> ${i.cidade.toUpperCase()}</li>
                <img class="cidade" src=${i.imagem} alt="Joao-Pessoa">
                <li><strong>O que fazer:</strong> ${i.oQueFazer}.</li>
                <li><strong>Custo de vida mensal:</strong> R$ ${i.custoDeVida},00 </li>
                <li><strong>É seguro(a)? ${i.eSeguro ? "Sim" : "Não"}</strong></li>
                <li><a href=${i.saibaMais} target="_blank">Clique aqui e saiba
                        mais</a></li>
            </ol>
        </ul>
        </section>`) 
    }
}

adicionar()

function verificacaoTrue () {
    const verificaTrue = locais.filter((local) => {
        return local.eSeguro
    })
    console.log(`Essas são as cidades mais seguras encontradas: `, verificaTrue)
}

verificacaoTrue()

console.log(`A média de custo de vida é de: ${(locais[0].custoDeVida + locais[1].custoDeVida + locais[2].custoDeVida) / 3 }`)


const input = document.querySelector("#nome")

function botaoPesquisar () {
    const filtro = locais.filter((local) => {
        return local.cidade.toUpperCase().includes(input.value.toUpperCase())
    })
    console.log(filtro)


    if (input.value === "" ){
        alert("Digite um local")
    } else { 
        renderizarNaTela.innerHTML = ""
        renderizarNaTela.innerHTML = (` <section>
        <ul class="primeira-lista">
            <ol id="primeira-ol">
                <li><strong>Cidade:</strong> ${filtro[0].cidade}</li>
                <img class="cidade" src=${filtro[0].imagem} alt="Joao-Pessoa">
                <li><strong>O que fazer:</strong> ${filtro[0].oQueFazer}.</li>
                <li><strong>Custo de vida mensal:</strong> R$ ${filtro[0].custoDeVida},00 </li>
                <li><strong>É seguro(a)? ${filtro[0].eSeguro ? "Sim" : "Não"}</strong></li>
                <li><a href=${filtro[0].saibaMais} target="_blank">Clique aqui e saiba
                        mais</a></li>
            </ol>
        </ul>
    </section>`) 
    }
    input.value = ""
}