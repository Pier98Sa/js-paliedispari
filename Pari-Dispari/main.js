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

//variabili button
let buttonPlay = document.getElementById("play-game");
let buttonReset = document.getElementById("reset-game");

//evento del click su gioca
buttonPlay.addEventListener('click',
    function() {
        //variabili da inizializzare
        let choosePariDispari ;
        let numUser = 0;
        let esitoPartita;

        //l'user scegli pari o disparo e validazione che la parola sia quella corretta
        do{
            choosePariDispari = prompt("scegli pari o dispari").toUpperCase();
        } while(choosePariDispari != "pari".toUpperCase() && choosePariDispari != "dispari".toUpperCase())
        
        //l'user sceglie un numero tra 1 e 5 e validazione del numero in entrata
        do{
            numUser= parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
        }while(isNaN(numUser) || numUser < 1 || numUser > 5)

        //il pc estrae il suo numero
        let numPc = numRandom1To5();

        //si sommano i due numeri e vediamo se la somma ci da un numero pari o dispari
        let risultato = pariDispari (numUser,numPc);

        //si controlla se l'esito pronosticato dall'user è giusto o sbagliato
        if ( choosePariDispari == risultato.toUpperCase()) {
            esitoPartita = ('Il giocatore ha vinto');
        } else {
            esitoPartita = ("Ha vinto il computer");
        }  

        //stampa del numero dell'utente
        document.getElementById('user-number').innerHTML = numUser;

        //stampa del pronostico dell'utente
        document.getElementById('esito-user').innerHTML = choosePariDispari;

        //stampa del numero del computer
        document.getElementById('computer-number').innerHTML = numPc;

        //stampa del esito
        document.getElementById('esito').innerHTML = esitoPartita;
        
        //rimozione della classe none
        const htmlEsitoPartita = document.getElementById('box-esito');
        htmlEsitoPartita.classList.remove('d-none');
    }    
    
);

//evento del click su reset
buttonReset.addEventListener('click',
    function(){
        //resetto i dati alla versione iniziale
        document.getElementById('user-number').innerHTML = "";
        document.getElementById('esito-user').innerHTML = "";
        document.getElementById('computer-number').innerHTML = "";
        //riaggiungo la classe d-none
        const htmlEsitoPartita = document.getElementById('box-esito');
        htmlEsitoPartita.classList.add('d-none');
    
    }   
);



