function checkEmail(mail, callback){
    const error = new Error("La tua mail non è valida!");
    if(mail.includes("@")){
        callback(null, `la tua mail: ${mail} è valida`);
    }
    else{
        callback(error, null);
    }
}
let mail = "al.vaccarooutlook.com"; // stampa un errore di script, ma è quello che vogliamo|
// se aggiungiamo la @ funzionerà normalmente!

function handleError(error, data){
    if(error){
        console.log(error)
    }
    else console.log(data);
}
checkEmail(mail, handleError);