/* ROULETTE RUSSA

- se devo settere di studiare
- se fare una pausa
- se continuare a studiare

2 secondi di attesa che ci dicano " vediamo cosa farai oggi..."

*/

let scelta = "Vediamo cosa farai oggi..."
console.log(scelta);

const possibilita = ["Smettere di Studiare", "Fare una Pausa", "Continua a studiare!"]

function roulette (array){
    let indice = Math.floor(Math.random() * array.length);
    console.log(array[indice]);
}

setTimeout(roulette,2000,possibilita)
