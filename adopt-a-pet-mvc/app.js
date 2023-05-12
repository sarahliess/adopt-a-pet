const express = require("express");
const app = express();
const port = 8000;
const petsRouter = require("./routes/pets");

app.use("/", petsRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
      <a href="/animals/dogs"><li>Dogs</li></a>
      <a href="/animals/cats"><li>Cats</li></a> 
      <a href="/animals/rabbits"><li>Rabbits</li></a>
    </ul>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
