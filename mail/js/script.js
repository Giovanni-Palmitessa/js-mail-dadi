// MAIL

/*

Creare un array con varie mail
Chiedere all'utente la mail tramite prompt
SE mail è presente nell'array 
    stampa Mail presente
ALTRIMENTI 
    stampa Mail non presente nel database.
FINE SE

*/

let emails = ['ginobuonvino@gmail.com', 'pincopallo@hotmail.it', 'gianboolean@live.it', 'alexthelion@hotmail.it'];

let userEmail = prompt('Scrivi qui la tua email:');

for (i = 0; i < emails.length; i++) {
    console.log(emails[i]);
}

if (userEmail = emails) {
    console.log('La mail inserita è presente nel database')
} else {
    console.log('La mail inserita non è presente nel database. Registrati e riprova!')
}