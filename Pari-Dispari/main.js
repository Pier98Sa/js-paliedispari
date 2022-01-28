/*FUNZIONI*/
//funzione per generare un numero randomico da 1 a 5
function numRandom1To5 (){
    return Math.floor(Math.random() * 5) + 1;
}

//funzione per sapere se la somma di due numeri è un numero pari o dispari
function pariDispari ( num1,num2 ){
    //sommo due numeri
    let sommaNumeri = num1 + num2;
    //inizializzo la variabile per stampare l'esito
    let risultato;
    //eseguo il controllo
    if(sommaNumeri % 2 == 0){
        risultato = "pari";
    }else{
        risultato = "dispari";
    }
    //do il risultato
    return risultato  
}

/*PROGRAMMA*/

//variabili
//l'user scegli pari o disparo
let choosePariDispari = prompt("scegli pari o dispari");
console.log(choosePariDispari);
//l'user sceglie un numero tra 1 e 5 con validazione del numero in entrata
let numUser = 0;
do{
    numUser= parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
}while(isNaN(numUser) || numUser < 1 || numUser > 5)


console.log(numUser);

//il pc estrae il suo numero
let numPc = numRandom1To5();

console.log(numPc);

//si sommano i due numeri e vediamo se la somma ci da un numero pari o dispari
let risultato = pariDispari (numUser,numPc);
console.log(risultato);


//si controlla se l'esito pronosticato dall'user è giusto o sbagliato
if ( choosePariDispari == risultato) {
    console.log('Il giocatore ha vinto');
} else {
    console.log("Ha vinto il computer");
}


