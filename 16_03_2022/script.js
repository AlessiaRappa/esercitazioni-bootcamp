const quotes = [
    "Io sono tuo padre!",
    "Guerra nessuno fatto grande",
    "Fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
  ];


document.querySelector("button").addEventListener("click", () => {
  var randomNum = Math.floor(Math.random()*quotes.length);
 document.getElementById("qui").innerHTML = quotes[randomNum];
}); 





