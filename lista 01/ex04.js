// 4) Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa. O IMC
// é calculado pela fórmula: IMC = peso / (altura * altura)

let peso = parseInt(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let IMC
IMC = peso / (altura * altura)

document.querySelector('h1').innerHTML = "Seu IMC é: " + IMC.toFixed(2)