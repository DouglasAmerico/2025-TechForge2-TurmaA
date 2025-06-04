const prompt = require("prompt-sync")();
const qtdNotas = 3;
let classe = [],qtdAluno;

do{
    qtdAluno = prompt("Informe quantos alunos tem na sala: ");
    if(qtdAluno < 1 || qtdAluno > 1000){
        console.log("Informe uma quantidade entre 1 e 1000");
    }
}while(qtdAluno < 1 || qtdAluno > 1000);

for (let index = 0; index < qtdAluno; index++) {
    let aluno = {
       nome : undefined,
        idade : undefined,
        notas : [],
        media : 0
    }

    aluno.nome = prompt("Informe o nome do aluno: ");
    aluno.idade = prompt("Informe a idade do aluno: ");
    for (let index2 = 0; index2 < qtdNotas; index2++) {
       aluno.notas[index2] = prompt("Informe a nota "+index2+" do aluno "+aluno.nome+": ");
       aluno.media = aluno.media + aluno.notas[index2];
    }
    aluno.media = aluno.media / qtdNotas;

    classe.push(aluno);
}

console.log(classe);