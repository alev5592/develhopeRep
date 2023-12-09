/* Acquisto online di prodotti

variabile con all'interno un oggetto,
coppie chiave:valore -> prodotto: numero prodotto

funzione 1 controllare l'esistenza del prodotto

funzione 2 processare ordine 

*/

const products ={
    iphone: 4,
    mac: 3,
}

function checkProduct(item, quantity) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(products[item] >= quantity){
                resolve()
            }else {
                reject(`Il prodotto non è disponibile`)
            }
        },2000)
    })
}

async function processOrder(item, quantity){
    try {
        await checkProduct(item,quantity);
        console.log("Il prodotto è disponibile!");
    }   catch (error) {
        console.log(error);
    }
}

processOrder("mac",2);