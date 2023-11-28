function performOperation(a, b, callback) {
    const sum = a+b;

    if(typeof sum === "number"){
        callback(null,sum);
    }
    else{
        callback(/*new Error"*/`la tua somma non è un numero!`,null);
    }
}

function displayResult(error, sum) {
    if(error){
        console.log(error)
    }
    else {
        console.log(sum);
    }
}

performOperation(5, 3,displayResult)