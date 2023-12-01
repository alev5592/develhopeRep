/* costruire 2 array di oggetti, non riassegnabili, leads, users,
function che simuli un ritardo di 2 secondi
*/

const leads = [
    {
        nome : 'Mario',
        age : 27
    },
    {
        nome : 'Cora',
        age : 23
    }
]

const users = [
    {
        nome : 'Paolo',
        age : 17
    },
    {
        nome : 'Francesca',
        age : 69
    }
]

function funzioneGet(callback, data){

    console.log("Sto processando i tuoi dati...")

    setTimeout(() => {

        callback(data)

    },2000);

}

function gestisciDati(data){

    console.log(data);

}

funzioneGet(gestisciDati, leads);
funzioneGet(gestisciDati, users);
