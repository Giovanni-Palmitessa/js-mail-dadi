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

let flag = false

for (let i = 0; i < emails.length; i++) {
    if (userEmail == emails[i]) {
        flag = true
    }
}

if (flag == true) {
    console.log(`La mal inserita è presente nel database!`)
} else {
    console.log('La mail inserita non è presente nel database. Registrati e riprova!')
}
