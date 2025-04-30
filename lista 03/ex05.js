// 5) Crie um algoritmo que leia dois valores inteiros e a operação que deseja realizar entre
// eles (1 – soma; 2 – subtração; 3 – multiplicação; 4 – divisão). Calcule o valor final
// utilizando os números digitados e a operação indicada.

// document.querySelector('h1').innerHTML += "1 - soma;<br>2 - subtração;<br>3 - multiplicação;<br>4 - divisão"

let inteiro1 = parseInt(prompt("Digite um valor inteiro: "))
let inteiro2 = parseInt(prompt("Digite um valor inteiro: "))

let escolha = parseInt(prompt("1 - soma;\n2 - subtração;\n3 - multiplicação;\n4 - divisão: "))

switch (escolha){
    case 1:
        document.querySelector('h2').innerHTML = "Soma: " + inteiro1 + " + " + inteiro2 + " = " + (inteiro1+inteiro2)
        break;
    case 2:
        document.querySelector('h2').innerHTML = "Subtração: " + inteiro1 + " - " + inteiro2 + " = " + (inteiro1-inteiro2)
        break;
    case 3:
        document.querySelector('h2').innerHTML = "Multiplicação: " + inteiro1 + " * " + inteiro2 + " = " + (inteiro1*inteiro2)
        break;
    case 4:
        document.querySelector('h2').innerHTML = "Divisão: " + inteiro1 + " / " + inteiro2 + " = " + (inteiro1/inteiro2)
        break;
    default:
        document.querySelector('h2').innerHTML = "Valor inválido."
}