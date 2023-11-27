/*Dato un array originalArray, crea un nuovo array chiamato cloneArray
che sia una copia superficiale di originalArray utilizzando l'operatore spread.
*/

const originalArray = [1, 2, 3, 4, 5];

const cloneArray =[...originalArray]; /* così facendo se pusho un elemento
                                        dentro l'array di origine, non intacco 
                                        la sua copia*/

originalArray.push(6); 

console.log("Array di origine:",originalArray)
console.log("Array clone indipendente:",cloneArray);