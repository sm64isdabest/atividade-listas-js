// 3) Desenvolva um Algoritmo que:
// • Leia 4 (quatro) números;
// • Calcule o quadrado de cada um;
// • Mostrar na tela os valores lidos e seus respectivos quadrados.

let A = parseInt(prompt("Digite um número: "))
let B = parseInt(prompt("Digite um número: "))
let C = parseInt(prompt("Digite um número: "))
let D = parseInt(prompt("Digite um número: "))

A = A*A
B = B*B
C = C*C
D = D*D

document.querySelector('h1').innerHTML = "A: " + A + " B: " + B + " C: " + C + " D: " + D