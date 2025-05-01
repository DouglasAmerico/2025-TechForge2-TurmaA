//Solicite ao usuário para inserir nomes em um array até que ele deseje parar. 
//A cada informação de nome novo, deve ser solicitado ao usuário se quer 
// inserir mais nomes (s/n)
//Caso escolha (n) deve mostrar a quantidade
//Caso escola (s) deve solicitar mais nomes

const prompt = require("prompt-sync")();
let nomes = [];
let respostaSN,i=0,qtd=0;

do{
    nomes[i]= prompt("Informe um nome da posição "+i+": ");//insere o nome do array
    i++;//controla os indices para inserir os valores no array
    qtd++;//controla a quantidade de nomes inseridos
    respostaSN= prompt("Deseja informar mais nomes? (s/n)");//solicita se o usuario
    //quer informar mais nomes
}while(respostaSN == "s" || respostaSN == "S");//verifica se a resposta foi sim
    //ou seja, se o usuario gostaria de informar mais nomes

console.log("Foram informados "+qtd+" nomes");//mostra a quantidade de nomes inseridos
console.log(nomes);//mostra os valores do array