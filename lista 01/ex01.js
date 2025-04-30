// 1) Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em
//     Km/l), dado que são conhecidos a distância total percorrida e o volume de combustível
//     consumido para percorrê-la (medido em litros).
//     FÓRMULA:
    
//     ONDE:
//     CM = CONSUMO MÉDIO
//     DIST = DISTÂNCIA
//     VOL = VOLUME DE COMBUSTÍVEL CONSUMIDO

let CM 
// let DIST = 17
let DIST = parseInt(prompt("Informe a distância percorrida Km/1: "))
// let VOL = 2
let VOL = parseInt(prompt("Informe o volume do combustível consumido: "))

CM = DIST / VOL

document.querySelector('h1').innerHTML = CM.toFixed(2)

// console.log(CM = DIST / VOL)
// console.log(`O consumo médio do carro é ${CM}`)
console.log(`O consumo médio do carro é ${CM.toFixed(2)}`)