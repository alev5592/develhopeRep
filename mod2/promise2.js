/*
-Crea una catena di Promises per simulare un'operazione asincrona 
in più fasi. -La prima Promise recupera i dati dell'utente 
{ id: 1, name: 'John' }. -La seconda Promise recupera 
i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console 
il nome dell'utente e i titoli dei post.
*/

let utente = {
  id: 1,
  nome: "John"
};

let post = ['Post 1', 'Post 2', 'Post 3'];

function fetchUserData() {

  console.log("Sto recuperando i dati...")
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if((typeof(utente.id) == "number") && typeof(utente.nome) === 'string'){
        resolve(utente)
      }
      else{
        console.log("ERROR : Name must be a STRING, ID must be a NUMBER")
      }
    },1000)
  })
}
  

function fetchUserPosts(userId, userName) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Array.isArray(post)){
        resolve(`I post dell'utente ID: ${userId} Nome: ${userName} sono corretti!`)
      }
      else {
        reject(`ERRORE I post dell'utente ID: ${userId} Nome: ${userName} non sono validi!`)
      }
    },3000)
  })
  
}

// Chiamo Prima Promise 

fetchUserData().then((success) => {
  console.log(success)})
  .catch((error) => {
    console.log(error);
  })

// Chiamo Seconda Promise

fetchUserPosts(utente.id,utente.nome).then((success) => {
  console.log(success)
  console.log(post)})
.catch((error => {console.log(error)}))
