//Crie um programa que permita ao usuário construir uma lista de tarefas. 
//Comece com um array vazio chamado tarefas. Pergunte se o usuário deseja 
// adicionar uma tarefa e, se sim, use o método push() para inserir a descrição 
// fornecida. Após cada adição, mostre a lista atualizada. Repita o processo 
// até que o usuário decida parar e, ao final, exiba a lista completa de tarefas.
const prompt = require("prompt-sync")();
let tarefas = [],continuar,tarefa;

do{
    tarefa= prompt("Qual a mensagem? ");//recebe o valor do usuario e insere na 
    // variavel tarefa
    tarefas.push(tarefa);//pega o valor da variavel tarefa e insere no array 
    // de tarefas
    continuar = prompt("Deseja inserir mais tarefas? (s/n) ");
}while(continuar == "s");

for(let i=0;i<tarefas.length;i++){
    console.log("Posição: "+i+" Tarefa: "+tarefas[i]);
}
