const express = require('express');

const router = express.Router()

module.exports = router;

//Get tous les propriétés
router.get('/proprietes', (req, res) => {
    res.send('Get All API')
})

//Get une propriété selon son ID
router.get('/proprietes/:id', (req, res) => {
    res.send(req.params.id)
})