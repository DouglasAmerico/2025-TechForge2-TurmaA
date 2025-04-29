const prompt = require("prompt-sync")();

let qtdO = prompt("Digite a quantidade de O's: ");
let precoTabela = prompt("Digite o valor da tabela: ");
let precoSuporte = prompt("Digite o valor do suporte: ");
let qtdEstabelecimentos = qtdO / 25;

console.log("Valor gasto nas tabelas estabelecidas necessários para quantidade de O's será de R$" + 
    (precoTabela * qtdEstabelecimentos) + (precoSuporte * qtdEstabelecimentos));