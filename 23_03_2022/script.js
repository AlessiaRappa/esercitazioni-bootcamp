//Vengano catturati tutti gli elementi presenti nell'array
//Utilizzare fetch per la chiamata, ma gestire il tutto servendoci di async/await!!
async function getProductsAPI() {
    const res = await fetch ("https://fakestoreapi.com/products")
const data = await res.json();
return data;
}
getProductsAPI().then((data) => { 
    data.map((product) => 
    createCard(
        product.title,
        product.description,
        product.image,
        product.price + " $")
    );

 //Al click sulla card (quindi il singolo prodotto), questo viene rimosso dalla lista   
    const cardEls = document.querySelectorAll(".card");
  
    cardEls.forEach((element) => {
        element.addEventListener("click", () =>
        element.classList.toggle("remove"));
        });
    });


//Renderizzare delle cards relative a ogni singolo oggetto
const createCard = (title, desc, imgURL, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
    
    divEl.classList.add("card");
    parDescEl.classList.add("text");

    imgEl.setAttribute ("src", imgURL)
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;

    divEl.append(h3El, parDescEl, imgEl, parPriceEl);
    document.querySelector(".cardsWrapper").appendChild(divEl);
};
createCard();







  
 

