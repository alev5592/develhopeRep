//Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.

function calculateAverageAge(persons) {
    let sum =0;

    for(let i=0; i< persons.length; i++){
        sum = sum+persons[i].age;
    }
    let avg = sum/persons.length;

    return avg;
}
  
const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
  
const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
  