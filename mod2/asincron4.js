/*
Implementa la funzione lanciaDadi che:

1- Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
2- Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
3- Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
4- Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

*/
function lanciaDadi(){
    return Math.floor(Math.random() * 6) + 1;
}

let messaggio = () => {console.log(`Dado 1 = ${dice1}, Dado 2 = ${dice2}`)}

setTimeout(() =>{
    dice1 = lanciaDadi()
    dice2 = lanciaDadi()
},2000);


setTimeout(messaggio,2000);

console.log(`Lancio dei dadi in corso...`)


  
