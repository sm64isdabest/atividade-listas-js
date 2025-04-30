// 8) Escreva uma função que receba uma string como parâmetro e retorne a mesma string,
// mas com todas as letras maiúsculas. Dica: Pesquise por toUpperCase do JavaScript e
// compreenda o funcionamento.

let string = prompt("Digite uma frase ou palavra: ")

const StringCaixaAlta = () => {
    let stringalto = string.toUpperCase()
    return stringalto
}

document.querySelector('h1').innerHTML = StringCaixaAlta()