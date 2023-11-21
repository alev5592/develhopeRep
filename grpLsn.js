let users =[
    {
        id: 1,
        name: "Mario",
        surname: "Rossi",
        age: 35,
        languages: ["html", "css", "javascript"]
    },
    {
        id: 2,
        name: "Franco",
        surname: "Verdi",
        age: 34,
        languages: ["python","javascript"]
    }
];

//users.forEach(e => console.log(e.name));

for(let i=0; i<users.length; i++){
    //console.log(users[i].name);
}

//const nickName = users.map(ciao => `${ciao.name.toLowerCase()}.${ciao.surname.toLowerCase()}`);
//console.log(nickName);

let nickNames = [];
for (let i=0; i< users.length; i++){
    let nickN = `${users[i].name.toLowerCase()}.${users[i].surname.toLowerCase()}`;
    nickNames.push(nickN) ;
}
//console.log(nickNames);

//let peopleWithR = users.find(user => user.name.includes("r"));
//console.log(peopleWithR.name);

//let hmtlUsers = users.filter(user => user.languages.includes("html"));
//console.log(hmtlUsers);

let hmtlUsers = [];
for(let i=0; i<users.length; i++){
    if(users[i].languages.includes("html")){
        hmtlUsers.push(users[i]);
    }
}

console.log(hmtlUsers)

let totalLanguages = 0;
for(let i=0; i<users.length; i++){
    totalLanguages += users[i].languages.length;
}

let avg = totalLanguages / users.length;

console.log(avg);