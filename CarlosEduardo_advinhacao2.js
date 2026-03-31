const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function random(i) {
    const aleatorio = Math.floor(Math.random() * i)
    return aleatorio;
}

const opcoes = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"]

let escolhaComputador = [];
let escolhaUser = [];
let resultado = "";

console.log("***SEJA BEM VINDO AO JOGO - PEDRA, PAPEL E TESOURA DO LIONS-DEV***")

function sortear() {
    rl.question("Pedra, Papel, tesoura, lagarto e Spock!!!!\nDigite sua escolha [0]Pedra [1]Papel [2]Tesoura [3]Lagarto [4]Spock\nDigite [SAIR] para encerrar.\nR: ", (input) => {

        if (input === "sair" || input === "SAIR") {
            console.log("Até a próxima!")
            rl.close()
        } else {

            if (input === "0" || input === "1" || input === "2" || input === "3" || input === "4") {

                let inputNumber = parseInt(input);

                escolhaUser.push(opcoes[input])

                let computadorSorteador = random(opcoes.length)

                escolhaComputador.push(computadorSorteador)

                console.log(`O usuário tirou ${escolhaUser} e o adversário tirou ${opcoes[escolhaComputador]}`)

                comparacao(inputNumber, computadorSorteador)

            } else {
                console.log("Não entendi, por favor, digite um número válido!")
                sortear()
            }

        }

    })
}


function comparacao(user, computer) {

    switch (true) {

        case (user === computer):
            console.log("***EMPATE***\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 0 && computer === 2):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 0 && computer === 3):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 1 && computer === 0):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 1 && computer === 4):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 2 && computer === 1):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 2 && computer === 3):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 3 && computer === 4):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

        case (user === 3 && computer === 1):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;


        case (user === 4 && computer === 0):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;


        case (user === 4 && computer === 0):
            console.log("Você **venceu**! Parabéns!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;


        default:
            console.log("Você **perdeu**!\n")
            escolhaUser = []
            escolhaComputador = []
            sortear()
            break;

    }

}

sortear()




