let playlist = {
    nome: "Músicas para Relaxar",
    criador: "DJ Paz",
    musicas: [ 
      { 
        titulo: "Sons da Floresta", 
        artista: "Natureza Sonora", 
        duracao: "3:45" 
    },
      { 
        titulo: "Ondas Calmas", 
        artista: "Mar Adentro", 
        duracao: "4:12" 
    },
      { 
        titulo: "Céu Estrelado", 
        artista: "Noite Serena", 
        duracao: "5:02" 
    }
    ],
    publica: true
  };

console.log(playlist.musicas[1].duracao);

