/*Prima acquisisco la parola tramite il prompt poi:
    1. acquisisco la parola con un prompt;
    2. con split divido la stringa in tante sotto stringhe quante le lettere;
    3. con reverse ne inverto l'ordine;
    4. con join le unisco in una sola stringa;
    5. poi eseguo il confronto;
    6. in fine restituisco l'esito.
    */


function palindromo(messaggio) {
   //inizializzo le variabili
    let revParola;
    let esito;

    //acquisisco la stringa, in cui elimino gli spazi e la trasformo tutti i caratteri in maiuscolo
    
    let parola ;

    do{
        parola = prompt(messaggio).replaceAll(" ","").toUpperCase().replaceAll(/[^\w\s]|_/g, ""); 
    }while(!isNaN(parola))


   //divido la parola o le parole in caratteri, ne inverto l'ordine e poi li riunisco
    revParola = parola.split("").reverse().join("");
    
    //confronto le due stringhe
    if (revParola === parola){

        esito = ("è un palindromo");
    
    }else{
        esito = ("non è un palindromo");
    }

    return esito;


}

//button
const buttonInsert = document.getElementById("Insert");

buttonInsert.addEventListener("click", function(){
    document.getElementById("risultato").innerHTML = palindromo("Inserisci una parola o una frase");
    const htmlEsito = document.getElementById('esito');
        htmlEsito.classList.remove('d-none');
  });

