const createCard = (id, title, desc, imgUrl, year ) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parYearEl = document.createElement("p");
    const xDel = document.createElement("p");
  
    divEl.classList.add("card");
    parYearEl.classList.add("year");
    parDescEl.classList.add("description");
    xDel.classList.add("remove");

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    xDel.setAttribute("class", "remove");

    xDel.textContent = "X";
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parYearEl.textContent = year;
  
   
  
    divEl.append(imgEl, h3El, parDescEl, parYearEl, xDel);
    document.querySelector(".wrapperMovies").appendChild(divEl);

  // Aggiungere una 'X' ad ogni card, rappresentante il movie, al cui click rimuove lo stesso dal server NON FUNZIONA

  xDel.addEventListener("click", () => {
    fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
        }})
        .then (() => location.reload());
})
};

 export { createCard };
