// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte ? Se dobbiamo confrontare qualcosa che "cosa" ci serve ?


let giocatore = Math.floor(Math.random() * 6) + 1;
console.log("il dato dei giocatore " + giocatore);
let computer = Math.floor(Math.random() * 6) + 1;
console.log("il dato del computer " + computer);

if (giocatore > computer) {
    console.log("Vince il giocatore!");
} else if (computer > giocatore) {
    console.log("Vince il computer!");
} else {
    console.log("Avete pareggiato!");
}



