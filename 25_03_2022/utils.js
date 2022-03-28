const createCard = (title, desc, imgUrl, price, index) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
  
    divEl.id = index;
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
  
    divEl.append(imgEl, h3El, parDescEl, parPriceEl);
    document.querySelector(".wrapperMovies").appendChild(divEl);
  };
  
  const createModal = (title, movieYear, movieDescription, poster) => {
    const create = (elem) => document.createElement(elem);
  
    const wrapper = create("div");
    const img = create("img");
    const info = create("div");
    const h1 = create("h1");
    const year = create("p");
    const desc = create("p");
  
    wrapper.classList.add("modalWrapper");
    info.classList.add("info");
    img.setAttribute("src", poster);
    img.setAttribute("alt", "");
  
    h1.textContent = title;
    year.textContent = movieYear;
    desc.textContent = movieDescription;
  
    info.appendChild(h1);
    info.appendChild(year);
    info.appendChild(desc);
  
    wrapper.appendChild(img);
    wrapper.appendChild(info);
  
    const host = document.querySelector("#modalHost");
    host.appendChild(wrapper);
  };
  
  export { createCard, createModal };
  // export default createCard;