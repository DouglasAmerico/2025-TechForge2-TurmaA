const prompt = require("prompt-sync")();
const recepcaoDeDados = (nomeAluno) => {
    let aluno = {
        nome : undefined,
        idade: undefined,
        turma: undefined
    }

    aluno.nome = nomeAluno;
    aluno.idade = prompt("Informe a idade do(a) "+nomeAluno+": ");
    aluno.turma = prompt("Informe a turma do(a) "+nomeAluno+":");

    return aluno;
}
let sala = [];
sala.push(recepcaoDeDados("Douglas Americo"));
sala.push(recepcaoDeDados("Murilo"));
console.log(sala);