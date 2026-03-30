const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function random(i) {
    const aleatorio = Math.floor(Math.random() * i)
    return opcoes[aleatorio];
}

const opcoes = ["Pedra", "Papel", "Tesoura"]

let escolhaComputador = [];
let escolhaUser = [];
let resultado = "";

console.log("***SEJA BEM VINDO AO JOGO - PEDRA, PAPEL E TESOURA DO LIONS-DEV***")

rl.question("Pedra, Papel, tesoooura!\nDigite sua escolha [0]Pedra [1]Papel [2]Tesoura\nR: ", (input) => {

    if (input === "0" || input === "1" || input === "2") {

        let inputNumber = parseInt(input);

        escolhaUser.push(opcoes[input])

        let computadorSorteador = random(opcoes.length)

        escolhaComputador.push(computadorSorteador)

        console.log(`O usuário tirou ${escolhaUser} e o adversário tirou ${escolhaComputador}`)

        comparacao(inputNumber, computadorSorteador)

        console.log(escolhaUser)
        console.log(computadorSorteador)

    }

})



function comparacao(user, computer) {

    switch (true) {

        case (user === computer):
            console.log("***EMPATE***")
            rl.close()
            break;

        case (user === '0' && computer === '2'):
            console.log("Você venceu! Parabéns!")
            rl.close()
            break;

        case (user === '1' && computer === '0'):
            console.log("Você venceu! Parabéns!")
            rl.close()
            break;

        case (user === '2' && computer === '1'):
            console.log("Você venceu! Parabéns!")
            rl.close()
            break;

        default:
            console.log("Você perdeu!")
            rl.close()
            break;

    }

}




