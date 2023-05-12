const petList = require("../utils/petList");

const getPetsByType = (req, res) => {
  const { pet_type } = req.params;
  const pets = petList[pet_type]; // Liste mit allen Pets dieses Types
  const petsHTML = pets
    .map(
      (pet, index) =>
        `<li>
              <a href="/animals/${pet_type}/${index}">
              ${pet.name}
              </a>
          </li>`
    )
    .join(""); // mit join() das , rausnehmen
  res.send(`<h1>${pet_type}</h1>
    <ul>${petsHTML}</ul>`);
};

const getSinglePet = (req, res) => {
  const { pet_type, pet_id } = req.params;
  const findPet = petList[pet_type][pet_id];
  res.send(`<h1>${findPet.name}</h1>
  <img src="${findPet.url}"/>
  <p>${findPet.description}</p>
  <ul>
    <li>${findPet.breed}</li>
    <li>${findPet.age}</li>
  </ul>`);
};

module.exports = { getPetsByType, getSinglePet };
