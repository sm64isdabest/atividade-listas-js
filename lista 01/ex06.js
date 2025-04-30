// 6) Crie um programa que calcule a média de três notas de um aluno. Considere que você
// tenha as três notas. Utilizando a seguinte fórmula para calcular a média do aluno: media =
// (nota1 + nota2 + nota3) / 3

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let media

media = (nota1 + nota2 + nota3) / 3

document.querySelector('h1').innerHTML = "A média é: " + media.toFixed(1)