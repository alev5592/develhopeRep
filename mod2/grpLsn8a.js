/* Array oggetti users : con nome e mail 
creare una funzione che controlli che ci siano mail con un determinato dominio */

let users = [{
    name: "Marco",
    email: ""
},
{
    name: "Giacomo",
    email: "giacomo123@outlook.com"
}
]
let myDominio = "gmail"

function filterUsers(array, domain) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                let filterdArray = array.filter((user) => {
                    if (!user.email) {
                        reject(new Error("Attenzione il campo mail utente è vuoto"));
                    }
                    return user.email.includes(domain);
                })
                resolve(filterdArray);
            }
            else {
                reject(new Error("Fornisci un array valido"))
            }
        }, 2000);
    })
}

console.log("Sto processando...")
filterUsers(users, myDominio).then((x) => {
    console.log("Il tuo array è", x)

}).catch((error) => {
    console.log(error.message);
})