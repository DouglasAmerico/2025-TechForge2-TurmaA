//Crie um array com dez números, calcule e mostre a quantidade de números negativos 
// e a soma dos números positivos desse array.

let numeros = [12,-10,25,42,-3,174,-1212,-17,0,1];
let qtdNumerosNegativos=0,somaNumerosPositivos=0;

for(let i=0;i<10;i++){
    if(numeros[i] < 0){
        qtdNumerosNegativos++;
    }else{
        somaNumerosPositivos+= + numeros[i];
    }
}

console.log("Existem "+qtdNumerosNegativos+" numeros negativos no vetor");
console.log("A soma dos numeros positivos foi "+somaNumerosPositivos);

