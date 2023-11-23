/*Crea una funzione chiamata somma che accetta 
un numero qualsiasi di argomenti e restituisce la 
somma di tali argomenti.
Utilizza il parametro rest per 
raccogliere gli argomenti. 
-Stampa in console l'output della funzione somma.*/

function somma(...numbers){
    let sum = numbers.reduce((a, number) => a+number, 0);
    return sum;
}

console.log(somma(1,6,9,11));





