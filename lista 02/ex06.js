// 6) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para
// todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor
// das compras do cliente e calcule o preço final de um desconto.
// Sabendo que:
// - Homens ganham 5% de desconto
// - Mulheres ganham 15% de desconto

let nome = prompt("Digite seu nome: ")
let sexo = prompt("Digite seu sexo (M = Masculino, F = Feminino): ")
let valor = parseFloat(prompt("Digite o valor de suas compras: "))

document.querySelector('h1').innerHTML += nome

if (sexo == "M") {
    document.querySelector('h2').innerHTML += "Preço final: R$" + (valor-((valor*5)/100))
} else if (sexo == "F") {
    document.querySelector('h2').innerHTML += "Preço final: R$" + (valor-((valor*15)/100))
} else {
    document.querySelector('h2').innerHTML += "Sexo inválido."
}