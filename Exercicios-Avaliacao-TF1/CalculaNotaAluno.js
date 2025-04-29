//Faça um algoritmo que ajude o professor a calcular as notas dos alunos de TADS. 
// Sabendo que são informadas 4 notas, Prova1, Prova2, Trabalho1 e Trabalho2. 
// Realize o cálculo da Média desses 4 valores e depois apresente a situação do 
// aluno de acordo com o seguinte critério: 
//média >= 7.0, aprovado;
//média entre 4.0 e 6.99, recuperação; 
//média < 4.0, reprovado.

const prompt = require("prompt-sync")();

let p1,p2,t1,t2,media=0;
p1= Number(prompt("Inserira o valor da prova 1: "));
p2= Number(prompt("Inserira o valor da prova 2: "));
t1= Number(prompt("Inserira o valor da trabalho 1: "));
t2= Number(prompt("Inserira o valor da trabalho 2: "));

media = (p1+p2+t1+t2)/4;
console.log("A media é: "+media);

if(media >= 7){
    console.log("Aluno aprovado");
}else if(media >= 4){
    console.log("Aluno em recuperação");
}else{
    console.log("Aluno reprovado");
}