// 8) Crie um algoritmo onde o usuário leia a moeda da compra (Euro / Dólar / Libra) e o seu
// valor. Calcule o valor da compra em reais sabendo que a cotação é a seguinte:
// 1 (E)uro = R$ 3,33
// 1 (D)ólar = 3,17
// 1 (L)ibra = 3,85

let reais = parseInt(prompt("Digite um valor em reais: "));
let escolha = prompt("Escolha E para Euro, D para Dólar e L para Libra: ");

let euro = 3.33;
let dolar = 3.17;
let libra = 3.85;

let valor;

if (escolha == "E") {
    valor = euro * reais;
    document.querySelector('h1').innerText = "R$" + valor;
} else if (escolha == "D") {
    valor = dolar * reais;
    document.querySelector('h1').innerText = "R$" + valor;
} else if (escolha == "L") {
    valor = libra * reais;
    document.querySelector('h1').innerText = "R$" + valor;
};