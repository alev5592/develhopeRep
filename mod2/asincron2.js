/*
1-Crea una funzione chiamata "contoAllaRovescia" che diminuirà il
 conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.

2-Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.

3-Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.

4-Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.
*/

let tempoRimanente = 10;
console.log(`Conto alla rovescia in corso: ${tempoRimanente}`);
function contoAllaRovescia() {
  tempoRimanente--;
  console.log(tempoRimanente);
}

const id = setInterval(contoAllaRovescia,1000);

setTimeout(() =>{
    clearInterval(id)
    console.log("Conto alla rovescia terminato");
},10500);







