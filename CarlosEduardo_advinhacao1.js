const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function random(dado) {
    const aleatorio = Math.floor(Math.random() * dado) + 1
    return aleatorio;
}

function jogarDado() {
    rl.question("Escreva quantos lados possui o dado rolado: \nDigite [SAIR] para encerrar\nR: ", (input) => {

        if (input === "sair" || input === "SAIR") {

            console.log(`Até a próxima!`)
            rl.close()
        } else {

            let chooseDice = parseInt(input)

            aleatorio = random(chooseDice)

            console.log(`O dado rolou ${aleatorio} !`)
            jogarDado()
        }
    })
}
jogarDado()