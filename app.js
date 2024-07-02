// ----------------------------/// Jogo Do Número Secreto // --------------------------------------------------------//
// ----------------------------/// Por Gabriel Borba // -------------------------------------------------------------//
                                    
// Declaração Das Variáveis 
let listaNum = []; // Essa Varíavel Declara A Lista De Números já Geradas Pelo Jogo!
let nummax = 10; // Essa Varíavel Declara O número Maximo Gerado Pelo Jogo!
let numS = gerarNumeroAleatorio (); // Essa Variável Serve para Criar A Função na qual cria o número Gerado
let tentativas = 1; // Essa Variável Serve Como Um Contador De Tentativas
let maxtentativas = 5

function exibirTextoNaTela(tag, texto) { // Essa Função Define Qual texto será exibido na tela.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
function exibirmensageminicial () { // Essa função Define Qual Texto Será exibido no início do jogo
    exibirTextoNaTela('h1', `Jogo Do Nº Secreto`);
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${nummax}:`);
}
exibirmensageminicial () // Chamando A Mensagem Inicial
function verificarChute() { // Função Para Verificar se o Chute está Correto
    let resp = document.querySelector ('input').value;
    if (resp == numS) {
        exibirTextoNaTela (`h1`, `Acertou! 🥳`);
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        exibirTextoNaTela ('p',`Você Descobriu o número secreto! com ${tentativas} ${palavraTentativa}!`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
 ;
    } else {
        if (numS < resp) {
            exibirTextoNaTela (`h1`, `Que pena!`);
            exibirTextoNaTela (`p`, `O número Secreto é menor que ${resp}`); 
         } else {
                exibirTextoNaTela (`h1`,`Que Pena!`);
                exibirTextoNaTela (`p`,`O número Secreto é maior que ${resp}`);
         }
         tentativas++;
         if (tentativas > maxtentativas) {
            let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
            exibirTextoNaTela (`h1`, `Que Pena! 😢`)
            exibirTextoNaTela (`p`, `Você Passou Das ${maxtentativas} ${palavraTentativa}, Tente Novamente outra Hora!`)
            document.getElementById ('reiniciar').removeAttribute ('disabled');
         } 
         limparcampo ()
    } 
    }

function gerarNumeroAleatorio() { // Geração De Números Aleatórios
    let numEs = parseInt(Math.random() * nummax + 1);
    let qntElementos = listaNum.length;
    if (qntElementos == nummax) {
        listaNum = []
    }
    if (listaNum.includes(numEs)) {
        return gerarNumeroAleatorio ();
    } else {
        listaNum.push (numEs);
        console.log (listaNum)
        return numEs;
    }
}
 console.log (`Número Secreto ${numS}`);

 // Final de Jogo //
 
 function limparcampo () {
    resp = document.querySelector ('input');
    resp.value = '';
 }
 function reiniciarJogo () {
    numS = gerarNumeroAleatorio ();
    limparcampo ();
    tentativas = 1;
    console.log (`Número Secreto ${numS}`);
    exibirmensageminicial ();
    document.getElementById ('reiniciar').setAttribute ('disabled', true)
 }