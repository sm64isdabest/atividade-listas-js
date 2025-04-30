// 3) Crie uma função que receba um ano e retorne uma mensagem informando se o ano é
// bissexto ou não. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for
// também divisível por 400.

let ano = parseInt(prompt("Digite um ano: "))

const Bissexto = () => {
    if (ano % 4 == 0) {
        return true
    } 
}

if (Bissexto(true)) {
    document.querySelector('h1').innerHTML = ano + " é um ano bissexto."
} else {
    document.querySelector('h1').innerHTML = ano + " não é um ano bissexto."
}