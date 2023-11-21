/*Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.*/

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

//forEach
studenti.forEach(i => console.log(i.nome));

//find
const promosso = studenti.find(studente => studente.voto >90);
console.log(promosso);

//reduce

const avg = studenti.reduce((a,studente) => a+studente.voto / studenti.length, 0);
console.log(avg);

//map

let maiusc = studenti.map(studente => studente.nome.toUpperCase());
console.log(maiusc);

//filter

let prom = studenti.filter(studente => studente.voto > 85);
console.log(prom);

