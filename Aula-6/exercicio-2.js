const prompt = require("prompt-sync")();

let filme = {
    titulo : "Piratas do Caribe",
    diretor : "hdbskjfgskglkndkl",
    anoDeLancamento : 2003,
    genero : "Ficção" 
}

let atributoAMais = prompt("Informe o nome do novo Atributo ");
let nomeAtributoAMais = prompt("Informe o valor do novo atributo: ");
filme[atributoAMais]= nomeAtributoAMais;

console.log(filme);
console.log(filme.diretor);

