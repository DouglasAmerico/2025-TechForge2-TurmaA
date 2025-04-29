//Foi feita uma pesquisa entre os habitantes de uma região. 
// Foram coletados os dados de idade, sexo (M/F) 
// e salário. Faça um algoritmo que informe:
//a média de salário do grupo;
//maior e menor idade do grupo;
//quantidade de mulheres com salário até R$ 400,00 menores de idade.
///Encerre a entrada de dados quando for digitada uma idade maior que 80 anos.

const prompt = require("prompt-sync")();
let idade,sexo,salario,media=0,qtdPessoasResponderam=0;
let maiorIdade,menorIdade,qtdMulheresSal400MenorIdade=0;

do{
    idade= prompt("Informe a idade: ");
    sexo = prompt("Informe o sexo: ");
    salario = prompt("Informe o salario: ");
    media= media + salario;
    if(qtdPessoasResponderam == 0){
        maiorIdade= idade;
        menorIdade= idade;
    }else{
        if(idade > maiorIdade){
            maiorIdade= idade;
        }else if(idade < menorIdade){
            menorIdade= idade
        }
    }
    qtdPessoasResponderam++;
    if(salario < 400 && sexo == "f" && idade <18){
        qtdMulheresSal400MenorIdade++;
    }
}while(idade <= 80);

media = media/qtdPessoasResponderam;
console.log("A media dos salarios foi "+media);
console.log("A menor idade foi: "+menorIdade);
console.log("A maior idade foi: "+maiorIdade);
console.log("Teve "+qtdMulheresSal400MenorIdade+" mulheres com salario de ate 400, menores de idade");



