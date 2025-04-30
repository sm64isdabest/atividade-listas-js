// 2) Faça um algoritmo que imprima de 1 a 100 e a cada múltiplo de 10 emita uma
// mensagem: “Múltiplo de 10”.

for(let i = 1;i <= 100; i++) {
    document.querySelector('h1').innerHTML += i + "<br>"
    if (i % 10 == 9) {
        document.querySelector('h1').innerHTML += " Múltipo de 10: "
    }
}