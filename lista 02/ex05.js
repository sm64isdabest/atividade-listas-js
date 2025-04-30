// 5) Elabore um Algoritmo que leia o número de horas semanais trabalhadas de um
// programador. Calcule o salário sabendo-se que ele ganha R$35,00 por hora. Quando o
// número de horas excederem a 44 calcule o excesso de pagamento armazenando-o na
// variável Excesso, caso contrário zerar tal variável. A hora excedente de trabalho vale R$
// 50,00. No final do processamento imprimir o salário total e o salário excedente.

let horas = parseInt(prompt("Horas semanais que um programador trabalhou: "))

let salario_total = horas * 35
document.querySelector('h1').innerHTML = "Salário total: R$" + salario_total

if (horas > 43) {
    let salario_exc = horas * 50
    document.querySelector('h2').innerHTML = "Salário excedente: R$" + salario_exc
}



