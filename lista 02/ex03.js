// 3) Faça um algoritmo para ler: nome do cliente, saldo, débito e crédito. Após, calcular e
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual
// for maior
// ou igual a zero escrever a mensagem &#39;Saldo Positivo&#39;, senão escrever a mensagem ';Saldo
// Negativo';.

let nome = prompt("Digite seu nome: ")
let saldo = parseFloat(prompt("Digite seu saldo: "))
let debito = parseFloat(prompt("Digite seu débito: "))
let credito = parseFloat(prompt("Digite seu crédito: "))

document.querySelector('h1').innerHTML = nome

let saldo_atual = saldo - debito + credito
document.querySelector('h2').innerHTML = "Seu saldo atual: R$" + saldo_atual.toFixed(2)

if (saldo_atual >= 0) {
    document.querySelector('h3').innerHTML = "Saldo Positivo"
} else {
    document.querySelector('h3').innerHTML = "Saldo Negativo"
}
