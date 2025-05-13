//Quando o usuário optar por não inserir mais nomes, o programa deve usar a 
//          propriedade length do array de nomes para  solicitar a inserção de 
//          nota para cada aluno. 
//As notas devem ser armazenadas em um segundo array, de forma que haja 
//          correspondência entre cada nome no array de alunos e sua respectiva 
//          nota no array de notas. 
//Por fim, o programa deve exibir os nomes e suas notas de forma organizada, 
//          mostrando claramente os dados coletados.


const prompt = require("prompt-sync")();
let continuar,i=0;
let nomes = [], notas = [];
do{
    nomes[i]= prompt("Informe o nome para ser inserido na posicao "+i+": ");
    i++;
    continuar= prompt("Quer inserir mais nomes? (s/n): ");
}while(continuar == "s");

for(let cont=0;cont < nomes.length;cont++){
    notas[cont]= prompt("Informe a nota do aluno(a) "+nomes[cont]+": ");
}

for(let cont=0; cont < nomes.length;cont++){
    console.log("Aluno(a) "+nomes[cont]+" ficou com a nota "+notas[cont]);
}