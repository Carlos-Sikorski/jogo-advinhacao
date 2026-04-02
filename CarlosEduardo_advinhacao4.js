
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function aleatorio() {

    const randomNumber = Math.floor((Math.random() * 100) + 1)
    return randomNumber;

}

const randomizador = aleatorio()

let somaTentativas = 0
let vida = 10

console.log("***BEM-VINDO AO JOGO DA ADVINHAÇÃO!\nTENTE ACERTAR O NÚMERO MISTERIOSO DE 1 A 100\nVOCÊ TEM 10 TENTATIVAS!")


function entrada() {
    rl.question("Digite seu palpite: ", (input) => {

        const escolhaUser = parseInt(input)

        if (escolhaUser === randomizador) {

            somaTentativas++
            console.log(`Parabéns!!! Você acertou o número!\nForam necessárias ${somaTentativas} tentativas.\nAté a próxima!`)
            rl.close()


        } 

        else {
            console.log("Sinto muito, o número está incorreto!")

            if(escolhaUser > randomizador) {
                console.log("*Dica*\nO número mágico é **menor** que seu palpite!")
                somaTentativas++
                vida--
                console.log(`Você tem ${vida} restantes.`)
                resetVida()
            } 

            else if(escolhaUser < randomizador){
                console.log("*Dica*\nO número mágico é **maior** que seu palpite!")
                somaTentativas++
                vida--
                console.log(`Você tem ${vida} restantes.`)
                resetVida()
            }

            else {console.log("Digite um número válido!")
            somaTentativas++
            vida--
            console.log(`Você tem ${vida} restantes.`)
            resetVida()}
        }

    })
}

function resetVida() {
    if(vida > 0) {
        entrada()
    }
}

resetVida()
