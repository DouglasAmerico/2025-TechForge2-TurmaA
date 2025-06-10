const prompt = require("prompt-sync")();

function soma(a,b){
    return a+b;
}

let aa = Number(prompt("Informe o primeiro valor: "));
let bb = Number(prompt("Informe o segundo valor: "));

console.log(soma(aa,bb));