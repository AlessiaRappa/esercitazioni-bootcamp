   const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
   ];

//per stampare tutta la lista 
  const ul = document.querySelector("#lista");
  
   const htmlMovies = movies.map((movie) => `<li>${movie}</li>` );
   ul.innerHTML = htmlMovies.join("");


//aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input

   const input = document.querySelector("#input");
   const button = document.querySelector("#button");
  

   button.addEventListener("click", () => {
   const value= input.value;
   const results = movies.filter((movie) =>
   movie.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    
   const htmlMovies = results.map((movie) => `<li>${movie}</li>` );
   ul.innerHTML = htmlMovies.join("");
   });

    
