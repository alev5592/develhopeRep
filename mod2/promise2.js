/*-Crea una catena di Promises per simulare un'operazione asincrona 
in più fasi. -La prima Promise recupera i dati dell'utente 
{ id: 1, name: 'John' }. -La seconda Promise recupera 
i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console 
il nome dell'utente e i titoli dei post.
*/
let utente = {

  id: 1,
  name: 'John',
};

function checkPromiseID(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof (data.id) === "number") {
        resolve("ID Valido!");
      }
      else {
        reject(`L'ID deve essere un numero`)
      }
    }, 2000)
  });
}

function checkPromiseName(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof (data.name) === 'string') {
        resolve("Il nome è valido!");
      }
      else {
        reject(`Inserire un nome che sia una stringa!`)
      }
    }, 2000)
  });
}

function checkPromisePost(arrayPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof (arrayPost) === 'string') {
        resolve("Post corretto");
      }
      else {
        reject(`Inserire un post valido !`)
      }
    }, 2000)
  });
}
function fetchUserData() {
  let data = utente;
  console.log("Sto recuperando i dati...")

  const check1 = checkPromiseID(data).then((x) => {
    console.log(x);
  }).catch((error) => {
    console.log(error)
  });

  const check2 = checkPromiseName(data).then((x) => {
    console.log(x);
  }).catch((error) => {
    console.log(error)
  });
}

function fetchUserPosts(userId, userName) {

  let post = ['Post 1', 'Post 2', 'Post 3'];
  for (let i = 0; i < post.length; i++) {
    let checkPost = checkPromisePost(post[i]).then((x) => {
      if(i===0){
        console.log(x)
        console.log(`ID : ${userId} | Username: ${userName} ha postato:`)
      }
      console.log(post[i]);
    }).catch((error) => {
      console.log(error)
    });
  }
}

fetchUserData()
fetchUserPosts(utente.id, utente.name)