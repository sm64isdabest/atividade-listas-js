// 1) Escreva um algoritmo que leia um valor inteiro N e que imprima a sua tabuada de 1 até
// 10.
let N = parseInt(prompt("Digite um valor inteiro: "))
for (let i = 1; i <= 10; i++) {
    document.querySelector('h1').innerHTML += N + " * " + i + " = " + (N*i) + "<br>"
}