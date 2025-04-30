// 5) Faça um algoritmo que calcule o salário líquido de um funcionário, considerando o
// salário bruto e os descontos de INSS (10% do salário bruto) e imposto de renda (5% do
// salário bruto).

let SL
let SB = parseFloat(prompt("Digite o salário bruto: "))
let INSS
let IR

INSS = (10 * SB) / 100
IR = (5 * SB) / 100
SL = (SB) - (INSS + IR)

document.querySelector('h1').innerHTML = "Seu salário líquido: " + SL.toFixed(2)
