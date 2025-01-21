let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){ //função para exibição de texto, espera por uma tag (h1, p, etc.) e um texto para ser repassado.

    let campo = document.querySelector(tag); //recebe e informa a tag (h1, p...)
    campo.innerHTML = texto; //adiconado o texto recebido pela função na tag que foi repassada, seria mesma coisa que: h1 = 'olá mundo'
    //innerHTML está sendo necessário para fazer a inserção dessas informações na tag
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto'); //texto exibido na tag h1
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); //texto exibido na tag p
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value
    //console.log(chute == numeroSecreto); //comparação retornando true/false. Tipo booleano
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou'); //seleciona a tag h1 do HTML e na sequência atribuí o texto informado depois da virgula
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //condicional ternário para singular ou plural das tentativas.
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; //adicionado o número de tentativas e a palavra tentativa singular/plural através de variável.
        exibirTextoNaTela('p', mensagemTentativas) //caso exista o acerto exibe a mensagem de quantas tentativas foram necessárias.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}