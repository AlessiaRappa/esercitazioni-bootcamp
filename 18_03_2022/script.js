const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
  ];


const aggiungiNome = document.querySelector("#aggiungiNome");
const aggiungiUniverso = document.querySelector("#aggiungiUniverso");
const button = document.querySelector("button");
const cerca = document.querySelector("#cerca");
const ul = document.querySelector("ul");

//visualizzazione dati iniziale
ul.innerHTML = people.map((person) => `<li>${person}</li>`).join("");
 
//filtrare i dati nella lista utilizzando una ricerca testuale
cerca.addEventListener("keyup", () => {
const value = cerca.value;


const results = people.filter((person) =>
person.toLocaleLowerCase().includes(value.toLocaleLowerCase())
);

ul.innerHTML = results.map((person) => `<li>${person}</li>`).join("");
});

//possibilità di aggiungere un nuovo elemento tramite due campi di testo (nome e universo)
button.addEventListener("click",() => {
  people.push(aggiungiNome.value + " - " + aggiungiUniverso.value);
  ul.innerHTML = people.map((person) => `<li> ${person}</li>`).join("")
  aggiungiNome.value = "";
  aggiungiUniverso.value = "";
});
