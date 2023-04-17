// DADI

/*
Generare un numero random da 1 a 6 per l'utente
Generare un numero random da 1 a 6 per il computer
Stabilire il vincitore in base al numero più alto
SE numeroutente > numeroComputer 
    stampa ha vinto l'utente
ALTRIMENTI SE numeroComputer > numeroUtente
    stampa ha vinto il computer
ALTRIMENTI STAMPA 
    è lo stesso numero

*/

const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(`Questo è il numero random dell'utente: ` + userNumber);

const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(`Questo è il numero random del computer: ` + computerNumber);

