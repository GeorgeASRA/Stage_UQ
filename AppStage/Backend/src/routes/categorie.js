const express = require("express");
const categorie = require("../models/categorie");
const categorieSchema = require("../models/categorie");

const router = express.Router();

//Create categorie
router.post('/createCategorie', (req, res) => {
    const categorie = categorieSchema(req.body);
    categorie
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//Liste categories
router.get('/categories', (req, res) => {
    categorie
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router;