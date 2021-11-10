// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//chiesdi la mailall'utente
const mailUtente = prompt("Inserisci la tua mail");

//inserisco nell'array email valide
const mailValide = ["giuseppe10@libero.it", "alessadnro30@gmail.com", "vittorio152@gmail.com"];
let mailGiusta = false;

//ciclo di controllo per vedere se l'email è valida
for (let i = 0; i < mailValide.length; i++) {
    if (mailValide[i] == mailUtente) {
        mailGiusta = true;
    }
}
if (mailGiusta == true) {
    alert("Benvenuto nel sito");
} else {
    alert("Accesso non autorizzato")
}
