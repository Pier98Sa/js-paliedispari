/*Prima acquisisco la parola tramite il prompt poi:
    1. acqusisco la parola con un prompt;
    2. con split divido la stringa in tante sotto stringhe quante le lettere;
    3. con reverse ne inverto l'ordine;
    4. con join le unisco in una sola stringa;
    5. poi eseguo il confronto;
    6. in fine restituisco l'esito.
    */


function palindromo(messaggio) {

    let parola = prompt(messaggio).replaceAll(" ","").toUpperCase();
    let revParola;
    revParola = parola.split("").reverse().join("");
    let esito;
    if (revParola === parola){

        esito = alert("è un palindromo");
    
    }else{
        esito = alert("non è un palindromo");
    }

    return esito;


}

palindromo("Inserisci una parola o una frase");