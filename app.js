let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio() // atribui a variavel a função de gerar número
let tentativas = 1;

// funções são blocos de códigos que são acionados em deterninento de uma ação
// função que gera um número aleatorio
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo+ 1); // usei "return" para retornar o valor que ele gerou para o código
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
    }
}

// essa é uma função que recebe o parâmento tag e texto, onde respectivamente seleciona a tag e o que escrevemos nela
function exibirTextoNaTela(tag,texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

// funcão da mensagem Inicial
function exibirMensagemInicial() {
    exibirTextoNaTela("h1","Bem vindo(a) ao jogo do número secreto");
    exibirTextoNaTela("p","Digite um número de 1 a 10");
     
}

exibirMensagemInicial()

// nesse caso, essa função é acionada quando clicamos no botão de chutar, rodando o código dentro dela
function verificarChute() {  
    let chute = document.querySelector("input").value; // value permite que se tenha acesso aos dados e, assim, ele possa ser utilizado efetivamente.
    
    if (chute == numeroSecreto) {
        let palavraTentativa = (tentativas > 1) ? "tentativas" : "tentativa"
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`)
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")

    } else {
        
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");

        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }

        tentativas++;
        limparCampo();
    }
    
}

// função de limpar o campo de imput quando chutamos
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = ("");

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true); // código que só ativa o botão reiciar jogo quando ganha
}
