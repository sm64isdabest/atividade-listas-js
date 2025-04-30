// 4) Escreva um programa que “solicite um número” (1 a 7) e determine o dia da semana
// correspondente (1 para domingo, 2 para segunda-feira, etc)

let dia = parseInt(prompt("Digite um número de 1 a 7: "))

switch(dia) {
    case 1:
        document.querySelector('h1').innerHTML = "Domingo"
        break;
    case 2:
        document.querySelector('h1').innerHTML = "Segunda-feira"
        break;
    case 3:
        document.querySelector('h1').innerHTML = "Terça-feira"
        break;
    case 4:
        document.querySelector('h1').innerHTML = "Quarta-feira"
        break;
    case 5:
        document.querySelector('h1').innerHTML = "Quinta-feira"
        break;
    case 6:
        document.querySelector('h1').innerHTML = "Sexta-feira"
        break;
    case 7:
        document.querySelector('h1').innerHTML = "Sábado"
        break;
    default:
        document.querySelector('h1').innerHTML = "Dia inválido."
}