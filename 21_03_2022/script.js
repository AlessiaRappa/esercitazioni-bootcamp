//Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

let personList = [
    personOne= {
         firstName: "Mario",
         lastName: "Rossi",
         number: "1234567890",
    },
    personTwo = {
         firstName: "Irene",
         lastName: "Verdi",
         number: "3456789012",
     },
    personThree = {
         firstName: "Elisa",
         lastName: "Bianchi",
         number: "5678901234",
     },
    personFour = {
         firstName: "Carlo",
         lastName: "Neri",
         number: "7890123456",
     },
     personFive = {
         firstName: "Francesco",
         lastName: "Neri",
         number: "9012345678",
     }
  ];

 
  const q = (selector) => document.querySelector(selector);
  const ul = q("ul");
  const search = q("#search");
  const add = q("button");
  const newFirstName = q("#newFirstName");
  const newLastName = q("#newLastName");
  const newNumber = q("#newNumber");



//mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui) 


function updateContact() {
  const contactsListEl = ul;
  contactsListEl.textContent = "";

  for (index in personList) {
    const contactEl = document.createElement("li");
    contactEl.textContent = personList[index].firstName + " " + personList[index].lastName + " " + personList[index].number ;
   contactsListEl.appendChild(contactEl);
  }
}
updateContact();

//permette l'aggiunta di nomi alla lista dei contatti
add.addEventListener("click",() => {
  personList.push({
  firstName: `${newFirstName.value}`,
  lastName: `${newLastName.value}`,
  number: `${newNumber.value}`,
 
});
newFirstName.value = "";
newLastName.value = "";
newNumber.value = "";
updateContact();
});

//permetta la rimozione di un determinato contatto  
const deleteLiElContent = (element) => {
  element.addEventListener("click", () => { 
    element.textContent = "";
  });
};
const liEls = document.querySelectorAll("li");
liEls.forEach((contactEl) => deleteLiElContent(contactEl));

//filtrare i contatti utilizzando una ricerca testuale 
search.addEventListener("keyup", () => {
  const value = search.value;
   const results = personList.filter((person) =>
 person.lastName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || person.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
   );
   ul.innerHTML = results.map((element) => 
 `<li> ${element.firstName}  ${element.lastName} ${element.number}</li>`).join("");;
  });
  




