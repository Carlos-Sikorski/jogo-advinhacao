const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

senha = "";

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

rl.question("Digite a quantidade de caracteres da senha que deseja criar.\nR: ", (input) => {

    let comprimentoSenha = parseInt(input)

    for(let i = 0; i < comprimentoSenha; i++) {

    const aleatorio = Math.floor(Math.random() * caracteres.length)

    senha+=caracteres.charAt(aleatorio)

    }

    console.log(senha)
    rl.close()

})
