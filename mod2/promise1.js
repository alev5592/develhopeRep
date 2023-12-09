/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
*/

let person = { name: "John", age: 19 };

function fetchDataFromAPI(callback) {

    let data = person;
    console.log("Sto recuperando i dati...")

    handleData(data).then((x) => {
        console.log(x)
        console.log(data);
    }).catch((error) =>{
        console.log(error)
    });

}

function handleData(data) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(data.age >= 18){
                resolve("L'utente è maggiorenne");
            }
            else{
                reject(`L'utente deve essere maggiorenne!`)
            } 
        },2000)
    });

}

fetchDataFromAPI(handleData);