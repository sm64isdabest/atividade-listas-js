// 7) A velocidade de um carro foi registrada por um radar. Escreva um programa que receba
// essa velocidade e caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da
// velocidade permitida.

let velocidade = parseFloat(prompt("Digite a velocidade de seu carro (km/h): "))

if (velocidade > 80) {
    document.querySelector('h1').innerHTML = "Você foi multado por R$" + (5*(velocidade-80))
} else {
    document.querySelector('h1').innerHTML = "Você não foi multado"
}