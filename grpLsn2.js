function operations(operator, ...numbers){
    let result=0;

    function runOperations(){

        if(operator =="+"){
            result= numbers.reduce((a,number) => a+number,0)
        }
        else if(operator =="/"){
            if(numbers.some(number => number === 0)){
                console.log("Impossibile dividere per 0!");
            }else{
                result = numbers.reduce((a,number) => a/number);
            }
        }
        else if(operator=="*"){
            result = numbers.reduce((a,number) => a*number,1);
        }
        else if(operator=="-"){
            result = numbers.reduce((a,number) => a-number,0);
        }
        else {
            console.log("Errore , scegli uo'operatore valido!");
        }
    
        console.log("Il risultato è :",result);
    }

    console.log("Sto calcolando il risultato");
    setTimeout(runOperations,2000);
    let id = setInterval(() => console.log("."),500);
    setTimeout (() => {
        clearInterval(id)
    },1550)

}

let somma = operations("+",1,2,3,4)
/*
let sottrazione = operations("-",1,2,3,4);
let divisione = operations("/",1,2,3,4);
let moltiplicazione = operations("*",1,2,3,4);*/