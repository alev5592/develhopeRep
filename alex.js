/*
- Print the team in alphabetical order (surname name).
- Print the team in age order (name age).
- Print the team middle age.
- Print who has a pet (name petName).
- Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).
- Print if there are some members with the same name (name).
*/

function ageSort(array) {
    let sortedAges = array.sort(
        (p1, p2) => (p1.age < p2.age) ? 1 : (p1.age > p2.age) ? -1 : 0);
        
    return sortedAges;
}

function surnameSort(array) { // ordina per nome
    array.sort(function(a,b){
        const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
        const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
    });
    return array;
}

function middleAge(array){ // funzione per trovare età media studenti
    let avg= array.reduce((a, person) => a + person.age,0)/ array.length

    return Math.floor(avg);
}

//const array = [Alessandro, Hegel, Davide, Giampiero]
const team = [
    {
        name: "Hegel",
        surname: "Minniti",
        age: 23,
        hobby: "Musica, videogames",
        favoriteFood: "Impossibile scegliere",
        favoriteVideoGame: "Palia",
        favoriteFilm: "Sette anime",
        favoriteBook: "Nessuno si salva da solo",
        petName: "Ginger, Yuki, Reneé, Ciccio",
    },
    {
        name: "Martina",
        surname: "Mancuso",
        age: 32,
        city: "Milano",
        hobby: "reading",
        favoriteFood: "indian food",
        favoriteVideoGame: "tomb rider",
        favoriteFilm: "mamma mia",
        favoriteBook: "solo bagaglio a mano",
        petName: "Neve",
    },
    {
        name: "Alessandro",
        surname: "Vaccaro",
        age: 31,
        city: "Pisa",
        hobby: "Wrestling, musica , videogames",
        favoriteFood: "Pizza",
        favoriteVideoGame: "World Of Warcraft",
        favoriteFilm: "Il Miglio Verde",
        favoriteBook: "Il Ciclo dell'Odio",
        petName: "Giorgio",
    },
    {
        name: "Giampiero",
        surname: "Franconieri",
        age: 25,
        city: "Rizziconi",
        hobby: "Power Lifting",
        favoriteFood: "Spaghetti allo scoglio",
        favoriteVideoGame: "Forza Horizon 4",
        favoriteFilm: "Il buono, il brutto e il cattivo",
        favoriteBook: "",
        petName: ""
    },
    {
        name: "Davide",
        surname: "Lodde",
        age: 30,
        city: "Cagliari, Sardegna",
        hobby: "Development",
        favoriteFood: "Impossibile scegliere",
        favoriteVideoGame: "Impossibile scegliere",
        favoriteFilm: "Impossibile scegliere",
        favoriteBook: "Impossibile scegliere",
        petName: "Impossibile scegliere"
    }
];

let ageArray = ageSort(team.slice(0))
let sortedName = surnameSort(team)
let ageMid = middleAge(team)

for(let i=0; i < sortedName.length; i++){
    console.log(`Surname : ${sortedName[i].surname} , Name : ${sortedName[i].name}`);
}

for(let i=0; i < ageArray.length; i++ ){
    console.log(`Name : ${ageArray[i].name}, Age : ${ageArray[i].age}`);
}

console.log(`Middle Age : ${ageMid}`);
