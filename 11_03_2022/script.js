/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: la variabile const PI essendo dichiarata fuori dal blocco codice ha uno scope globale quindi può essere chiamata anche dentro una funzione.

const PI = 3.14;

console.log(PI);             //stampa 3.14

if (PI >= 3) {
  console.log(PI);           //stampa 3.14
}


// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: la variabile var favColour può essere chiamata dentro l'istruzione condizionale perchè essendo dichiarata fuori dal blocco codice ha scope globale a prescindere dal fatto che è dichiarata anche dentro l'istruzione condizionale. La variabile let monthsInAYear è accessibile ovunque essendo  definita nello script.


var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);       //stampa Il mio colore preferito è:  violet
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");    //stampa Ci sono 12 mesi in un anno.




// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: la variabile let theSecond è definita  all'interno della funzione, ha scope locale.
// Il secondo console.log da un messaggio di errore, la variabile let theSecond è dichiarata all'interno di una funzione quindi ha scope locale e non è accessibile dall’esterno.

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);                    //stampa Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.
  return true;                                                        // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);      //messaggio di errore
}