//Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt 
//e che faccia il console.log della somma soltanto dopo 10 secondi. 
// ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, 
//eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!
//La presenza di un bottone però potrebbe annullare quel intervallo!

let firstNum = parseInt(prompt("Inserisci il primo numero: "));
let secondNum = parseInt(prompt("Inserisci il secondo numero: "));
 

//setTimeout()
// const sum = (() => {
// const res= firstNum + secondNum;
// console.log(res);
// });

// setTimeout(sum, 10000);


//setInterval()
const sum = (() => {
    const res= firstNum + secondNum;
    console.log(res);
    });
    
    const sumInt= setInterval(sum, 10000);
    
    
const q = (selector) => document.querySelector(selector);
const button = q("button");
    
button.addEventListener("click",() => {
    setInterval(() => {clearInterval(sumInt)})
    });