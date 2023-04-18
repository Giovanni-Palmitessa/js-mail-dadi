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

const eleBtnPlay = document.querySelector('#btn-play');
const eleScoreUser = document.querySelector('#score-player');
const eleScoreComputer = document.querySelector('#score-computer');
const eleOutput = document.querySelector('.output')



eleBtnPlay.addEventListener('click', 
    function () {
        const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
        eleScoreUser.innerHTML = userNumber;
        console.log(`Questo è il numero random dell'utente: ` + userNumber);
        
        const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
        eleScoreComputer.innerHTML = computerNumber;
        console.log(`Questo è il numero random del computer: ` + computerNumber);
        
        let message
        
        if (userNumber > computerNumber) {
            message = `L'utente ha vinto!`
            console.log(`L'utente ha vinto! il numero ${userNumber} è maggiore di ${computerNumber}`);
        } else if (computerNumber > userNumber) {
            message = 'Il computer ha vinto!'
            console.log(`Il computer ha vinto! il numero ${computerNumber} è maggiore di ${userNumber}`);
        } else {
            message = 'pareggio'
            console.log(`Non ha vinto nessuno! Il numero ${userNumber} è uguale al numero ${computerNumber}`);
        }
        
        eleOutput.innerHTML = message;
        console.log(message);
    }
    
);

