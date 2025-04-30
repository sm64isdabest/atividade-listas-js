// 2) Crie uma função que receba um número como parâmetro e retorne verdadeiro se o
// número for par e falso se for ímpar.

let numero = parseFloat(prompt("Digite um número: "))

const ParOuImpar = () => {
    if (numero % 2 == 0) {
        return true
    }
}

if (ParOuImpar(true)) {
    document.querySelector('h1').innerHTML = "Verdadeiro"
} else {
    document.querySelector('h1').innerHTML = "Falso"
}