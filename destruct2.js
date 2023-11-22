/*Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti,
 utilizza la destrutturazione dell'oggetto per creare variabili nome, 
 età e voto che contengano i valori dell'oggetto nidificato.*/

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

//destrutturiamo

let {
  info: {name:studName, age:studAge},
  grades: {math: matematica, science:scienza}
} = student;

console.log(studName);
console.log(studAge);
console.log(matematica);
console.log(scienza);
