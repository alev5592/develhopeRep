// scrivere la calcolatrice usando le callback

function calcolatrice (operatore, ...array){
    const risultato = operatore(...array)
    return risultato;
}

function somma (...array){
    return array.reduce((acc,num) => acc +num);
}

function mult (...array) {
    if(array.includes(0)){
        return "il risultato è 0";
    } else{
        return array.reduce((acc,num) => acc*num);
    }
}

function dividi(...array){
    if(array.includes(0)){
        return "Impossibile dividere per 0 !!!";
    }
    else{
        return array.reduce((acc,num) => acc/num)
    }
}

function sottrazione(...array){
    return array.reduce((acc,num) => acc-num);
}


const arrayNumeri = [1,5,6,8];

//moltiplicazione con arrow function diretta! :D

let finalResult = calcolatrice((...numeri) => {
    return numeri.reduce((a,num) => a*num);
},...arrayNumeri);
console.log(`Arrow function speciale : ${finalResult}`)

//______________________________________________________

const result = calcolatrice(somma, ...arrayNumeri);


const id = setInterval(() =>{
   console.log(result) 
},500);

setTimeout(()=>{
    clearInterval(id);
},2000);
