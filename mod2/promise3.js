/*
-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona.
*/
let candidate = { nickName: "Cora Jade", age : 22, finalRating: 96 };


function handleData(data) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(data.age >= 18 && data.finalRating >59){
                resolve("Congratulations! You've been admitted to WWE Performance Center!");
            }
            else{
                reject(`We're sorry. You're not ready for WWE. Hope to see you on next tryout!`)
            } 
        },2000)
    });
}

let data = candidate;

console.log("Processing Data...")

handleData(data).then((x) => {
    console.log(x)
    console.log(data);
    }).catch((error) =>{
        console.log(error)
});
