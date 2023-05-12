const express = require("express");
const app = express();
const port = 8000;
const petList = require("./petList");

//1. Index Route mit allen Pet Types
app.get("/", (req, res) => {
  res.send(`<h1>Adopt a Pet!</h1>
  <p>Browse through the links below to find your new furry friend:</p>
  <ul>
    <a href="/animals/dogs"><li>Dogs</li></a>
    <a href="/animals/cats"><li>Cats</li></a> 
    <a href="/animals/rabbits"><li>Rabbits</li></a>
  </ul>`);
});

//2. Route mit allen Pets des jeweiligen Pet Types
app.get("/animals/:pet_type", (req, res) => {
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
});

//3. Route für Detailansicht des Pets
app.get("/animals/:pet_type/:pet_id", (req, res) => {
  const { pet_type, pet_id } = req.params;
  const findPet = petList[pet_type][pet_id];
  res.send(`<h1>${findPet.name}</h1>
  <img src="${findPet.url}"/>
  <p>${findPet.description}</p>
  <ul>
    <li>${findPet.breed}</li>
    <li>${findPet.age}</li>
  </ul>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
