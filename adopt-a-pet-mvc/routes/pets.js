const express = require("express");
const router = express.Router();
//controllers:
const { getPetsByType, getSinglePet } = require("../controllers/pets");

router.route("/animals/:pet_type").get(getPetsByType);

router.route("/animals/:pet_type/:pet_id").get(getSinglePet);

module.exports = router;
