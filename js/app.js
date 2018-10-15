document.addEventListener('DOMContentLoaded',() => {
  console.log("it works");

  const createEndangeredSpeciesItem = function(formIn){
    const div = document.createElement('div');
    div.classList.add('animal')

    const name = document.createElement('h1');
    name.textContent = formIn.target[0].value;
    div.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = formIn.target[1].value;
    div.appendChild(species);

    const continent = document.createElement('p');
    continent.textContent = formIn.target[2].value;
    div.appendChild(continent);

    return div;
  };

  const handleFormSubmit = function(event){
    event.preventDefault()
    const EndangeredSpeciedItem = createEndangeredSpeciesItem(event);
    const speciesList = document.querySelector('#species-list');
    speciesList.appendChild(EndangeredSpeciedItem);
    form.reset()
  };

  const handleDeleteBtnClicked = function(event){
    const EndangeredSpeciesList = document.querySelector('#species-list');
    while (EndangeredSpeciesList.firstChild) {
      EndangeredSpeciesList.removeChild(EndangeredSpeciesList.firstChild)
    };

  };

  const deleteBtn = document.querySelector("#delete-all")
  deleteBtn.addEventListener("click",handleDeleteBtnClicked);

  const form = document.querySelector("#info-form");
  form.addEventListener('submit',handleFormSubmit)
})
