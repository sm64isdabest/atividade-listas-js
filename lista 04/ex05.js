// 5) Escreva uma função que receba dois números e retorne o menor deles.

let numero1 = parseFloat(prompt("Digite um número: "))
let numero2 = parseFloat(prompt("Digite um número: "))

const MenorNumero = () => {
    if (numero1>numero2) {
        return numero2
    } else {
        return numero1
    }
}

document.querySelector('h1').innerHTML = MenorNumero()