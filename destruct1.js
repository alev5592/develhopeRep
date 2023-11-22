/*Dato un oggetto person con le proprietà nome ed età,
 utilizza la destrutturazione dell'oggetto per creare variabili 
 nome ed età che contengano i valori dell'oggetto.
*/

const person = { name: "Alice", age: 30 }; 

const {name: myName, age: myAge} = person

console.log(myName);
console.log(myAge);
