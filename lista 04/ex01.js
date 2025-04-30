// 1) Escreva uma função que recebe dois números como parâmetros e retorna a soma deles.
let numero1 = parseFloat(prompt("Digite um número: "))
let numero2 = parseFloat(prompt("Digite um número: "))

const Soma = () => {
    let resultado = (numero1+numero2)
    return resultado
}

document.querySelector('h1').innerHTML = numero1 + " + " + numero2 + " = " + Soma()