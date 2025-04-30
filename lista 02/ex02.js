// 2) Tendo-se como dados de entrada a altura e o sexo (M ou F) de uma pessoa, construa um
// algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// para homens: (72,7 * h) – 58;
// para mulheres: (62,1 * h) – 44,7.

let h = parseFloat(prompt("Digite sua altura: "))
let sexo = prompt("Digite M para masculino, F para feminino: ")
let PM
let PF

PM = (72.7 * h) - 58
PF = (62.1 * h) - 44.7

if (sexo == "M") {
    document.querySelector('h1').innerHTML = "Seu peso ideal: " + PM.toFixed(2)
} else if (sexo == "F") {
    document.querySelector('h1').innerHTML = "Seu peso ideal: " + PF.toFixed(2)
} else {
    document.querySelector('h1').innerHTML = "Sexo inválido."
}