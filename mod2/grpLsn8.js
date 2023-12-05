function number(){
    let numero =
    Math.floor(Math.random() *10 );
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(numero > 5){
                resolve(numero)
            }
            else{
                reject("il numero è minore di 5")
            }
        },2000)
    });
}

number().then((data) => console.log("Il tuo numero è:", data)).catch((error) => console.log('Errore',error))