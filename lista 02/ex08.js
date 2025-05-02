// 8) Elabore um algoritmo que dada uma idade de um nadador, classifique-o em uma das
// seguintes categorias:
// - Infantil A = 5 a 7 anos
// - Infantil B = 8 a 11 anos
// - Juvenil A = 12 a 13 anos
// - Juvenil B = 14 e 17 anos
// - Adultos = Maiores de 18 anos

let idade = parseInt(prompt("Digite a idade de um nadador: "))

switch (idade) {
    case 5,6,7: {
        document.querySelector('h1').innerHTML = "Infantil A"
        break;
    } case 8,9,10,11: {
        document.querySelector('h1').innerHTML = "Infantil A"
        break;
    }
}