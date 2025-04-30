// 7) Escreva uma função que receba dois números e retorne o maior deles.

let numero1 = parseFloat(prompt("Digite um número: "))
let numero2 = parseFloat(prompt("Digite um número: "))

const MaiorNumero = () => {
    if (numero1>numero2) {
        return numero1
    } else {
        return numero2
    }
}

document.querySelector('h1').innerHTML = MaiorNumero()