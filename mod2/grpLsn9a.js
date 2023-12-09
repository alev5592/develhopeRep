/* array di oggetti con utenti {nome età} (al terzo deve mancare l'età)
aggiungere età in maniera randomica*/

const usersData = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie" },
    { name: "Diana", age: 20 }
];

function checkAge(array){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Array.isArray(array)){
                const nuoviUtenti = array.map((user) => {
                    if(!user.age){
                        const randomAge= Math.floor(Math.random()*100);
                        return {name: user.name, age: randomAge}
                    }
                    return user
                })
                resolve(nuoviUtenti);
            }else{
                console.log("Errore");
            }
        },2000)
    })
}

async function processingData(array){
    try {
        const a = await checkAge(array)
        console.log(a);
    } catch (error) {
        console.log(error)
    }
}

processingData(usersData);


