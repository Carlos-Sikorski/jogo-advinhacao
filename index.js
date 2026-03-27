// gerar um número aleatório
//receber a entrada do usuário
//verificar se o número está correto
//repetir a etapa 2 e 3
//parar de repetir quando acertar o número

const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function random(max) {
    const aleatorio = Math.floor(Math.random() * max) + 1
    return aleatorio;
}


let fase = 1;
const min = 1;
const aleatorio10 = random(10)
const aleatorio100 = random(100)
const aleatorio1000 = random(1000)

let tentativas = 0

console.log(aleatorio10)
console.log(aleatorio100)
console.log(aleatorio1000)

console.log("****SEJA BEM VINDO AO JOGO DA ADVINHAÇÃO!****")

function botao(fase) {
    switch (true) {
        case (fase === 1):
            iniciar(min, 10, aleatorio10)

            break;

        case (fase === 2):
            iniciar(min, 100, aleatorio100)
            break;

        case (fase === 3):
            iniciar(min, 1000, aleatorio1000)
            break;

        default:
            console.log(`Parabéns você finalizou o Desafio!\nOs números sorteados foram:${aleatorio10}, ${aleatorio100} e ${aleatorio1000}.\nVocê precisou de ${tentativas} tentativas para finalizar!`)
            rl.close()
    };
}



function iniciar(min, max, aleatorio) {
    rl.question(`Digite um número entre ${min} e ${max}: `, (input) => {

        let userInput = parseInt(input)
        if (isNaN(userInput) || userInput > min || userInput < max) {
            console.log("Você não digitou um número!")
            botao(fase);

        } else if (userInput === aleatorio) {

            console.log(`Parabéns, você acertou! O número sorteado foi ${userInput}.\n`)
            fase++
            tentativas++
            botao(fase)

        } else {
            console.log("Você errou! Tente novamente!")
            tentativas++
            botao(fase)
        }
    })
}

rl.question("Selecione o nível do desafio:\n[1]-Fácil [2]-Médio [3]-Difícil\nR: ", (input2) => {

    let escolhaUser = parseInt(input2)

    fase = escolhaUser

    botao(fase)


})






