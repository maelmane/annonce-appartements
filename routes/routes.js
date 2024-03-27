const express = require('express');

const router = express.Router()
module.exports = router;

const Model = require('../models/model');

//Post Method
router.post('/proprietes', async (req, res) => {
    const data = new Model({
        Colocation_name: req.body.Colocation_name,
        Apartment_ID: req.body.Apartment_ID,
        Number_of_bedroom: req.body.Number_of_bedroom,
        Number_of_Bathrooms: req.body.Number_of_Bathrooms,
        Price: req.body.Price,
        Apartment_description: req.body.Apartment_description,
        Address: req.body.Address,
        included: req.body.included,
        Rented: req.body.Rented,
        Date_de_disponibilite: req.body.Date_de_disponibilite
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Get tous les propriétés
router.get('/proprietes', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get une propriété selon son ID
router.get('/proprietes/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})