import {createCard} from "./utils.js";

//Creare una pagina web che mostri i risultati ottenuti dalla seguente API: https://edgemony-backend.herokuapp.com/movies
const getMoviesData = async (URL) => {
    const res = await fetch (`${URL}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
    },
});

if (res.status >= 200 && res.status <= 299) {
     return await res.json();
  } else {
    const h1El = document.createElement("h1");
    h1El.textContent = "404 pagina non trovata";
    document.body.append(h1El);
    }
};

getMoviesData("https://edgemony-backend.herokuapp.com/movies").then((resultAPI) => {
    resultAPI.map((movie) =>
    createCard(
      movie.id,
     movie.title,
     movie.description,
     movie.poster,
     movie.year)
      
    );
  });

//Creare un form che permetta all'utente di aggiungere un nuovo movie all'interno 
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: ["animation"],
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
  }).then((data) => {
    location.reload();

  });
});



 
