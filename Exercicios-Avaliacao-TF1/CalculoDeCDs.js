//Um colecionador de CD's decidiu distribuir sua coleção em prateleiras. 
// Cada prateleira requer que sejam comprados 2 suportes para parede e uma tábua. 
// A capacidade de uma prateleira é de 25 discos. Faça uma função que receba: 
// a quantidade de CDs; o preço da tábua e o preço dos suportes. 
// O retorno da função deve ser quanto será gasto em prateleiras. 
// Utilize o esquema dos cinco passos para resolver esse algoritmo.

const prompt = require("prompt-sync")();

let qtdCDs = prompt("Informe a quantidade de CDs: ");
let precoTabua = prompt("Informe o preço da tabua: ");
let precoSuporte = prompt("Informe o preço do suporte: ");

let qtdTabuasCompletas=0,qtdTabuasIncompletas=0;

qtdTabuasCompletas= parseInt(qtdCDs/25);
qtdTabuasIncompletas= qtdCDs%25;
if(qtdTabuasIncompletas > 0){
    qtdTabuasIncompletas= 1;
}

qtdTabuasCompletas= qtdTabuasCompletas + qtdTabuasIncompletas;
console.log("Precisou de "+qtdTabuasCompletas+" de tabuas");
console.log("Com um custo de "+precoTabua+"$ por tabua e "+precoSuporte+"$ por suporte");
precoTabua= qtdTabuasCompletas*precoTabua;
precoSuporte= (qtdTabuasCompletas*precoSuporte)*2;
console.log("Com custo total de "+(precoTabua + precoSuporte));