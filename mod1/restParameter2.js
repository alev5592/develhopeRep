/*Scrivi una funzione filterOutOdds che accetta 
un numero qualsiasi di argomenti e restituisce
 un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.*/

function filterOutOdds(...numbers){

    let even = []
    even = numbers.filter(number => number%2 ===0)

    /*  oppure avremmo potuto usare direttamente
    questo altro modo di agire.
    let eventNumbers = numbers.filter(number => number%2 ===0)
    return eventNumbers;
    */
    return even;
}

console.log(filterOutOdds(1,2,3,4,5,6));