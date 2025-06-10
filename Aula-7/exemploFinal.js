let pessoa = {
  nome: "Douglas",
  idade: 29,
  pf: {},
  pj: {
    razaoSocial: "Empresa do Douglas Limitada",
    cnpj: "999.999.999.999"
  }
}

let pf = {
    cpf: "000.000.000-00",
    sobrenome: "Américo"
}

pessoa.pf = pf;

console.log(pessoa);