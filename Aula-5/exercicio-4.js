let livros = ["HP1","HP2","HP3","HP4","HP5","HP6","HP7"];

do{
    for(let i=0;i < livros.length;i++){
        console.log("Posição:  "+i+" - Livro: "+livros[i]);
    }
    livros.pop();
    console.log("-----------------------------");
}while(livros.length != 0);

console.log("Não existe mais livros");
