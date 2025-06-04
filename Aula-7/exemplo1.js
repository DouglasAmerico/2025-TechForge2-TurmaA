let postBlog = {
    titulo: "Minha Viagem Incrível",
    autor: "Aventureiro Anônimo",
    conteudo: "Bla bla bla...",
    tags: ["viagem", "natureza", "aventura"], // <-- Array como valor!
    comentarios: [] // Um array vazio para futuros comentários
  };


postBlog.tags.push(12345);
console.log(postBlog.tags[3]);