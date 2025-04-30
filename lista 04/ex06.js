// 6) Crie uma função que receba uma temperatura em Celsius e retorne a temperatura
// equivalente em Fahrenheit. A fórmula de conversão é F = C * (9/5) + 32.

let C = parseInt(prompt("Digite uma temperatura em Celsius: "))

const Fahrenheit = () => {
    let F = (C*(9/5)+32)
    return F
}

document.querySelector('h1').innerHTML = "Fahrenheit = " + Fahrenheit() + "°"