// 3) Desenvolva um algoritmo que imprima na tela todos os números pares de 0 a 100.

for(let i = 0;i <= 100; i++) {
    if (i % 2 == 0) {
        document.querySelector('h1').innerHTML += i + "<br>"  
    }
}