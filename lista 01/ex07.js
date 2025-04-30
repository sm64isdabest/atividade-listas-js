// 7) Crie um algoritmo que leia o preço de um produto, calcule e mostre o seu PREÇO
// PROMOCIONAL, com 5% de desconto para pagamento à vista.

let PV = parseFloat(prompt("Digite o preço de um produto: "))
let PP = PV - ((PV * 5) / 100) 

document.querySelector('h1').innerHTML = "Preço promocional: R$ " + PP