// 4) Escreva uma função que receba um número inteiro e retorne o número de dígitos que ele
// possui. (Explorar o método toString() e a propriedade length do JavaScript)

let inteiro = parseInt(prompt("Digite um número inteiro: "))

const NumeroDeDigitos = () => {
    // toString() converte um valor para texto.
    let texto = inteiro.toString(10);
    let digitos = texto.length
    // .length diz quantos dígitos/carácteres possuí um valor.
    return digitos
}

document.querySelector('h1').innerHTML = inteiro + " possuí o total de " + NumeroDeDigitos() + " dígitos."