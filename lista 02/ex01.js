// 1) Faça um Algoritmo que leia um número inteiro e mostre uma mensagem indicando se
// este número é positivo ou negativo.

let inteiro = parseInt(prompt("Digite um valor inteiro: "))

if (inteiro > 0) {
    document.querySelector('h1').innerHTML = "O valor é positivo."
} else if (inteiro < 0) {
    document.querySelector('h1').innerHTML = "O valor é negativo."
} else {
    document.querySelector('h1').innerHTML = "O valor equivale a 0."
}
