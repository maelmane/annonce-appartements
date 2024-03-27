const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    Colocation_name: {
        required: true,
        type: String
    },
    Apartment_ID: {
        required: true,
        type: Number
    },
    Number_of_bedroom: {
        required: true,
        type: Number
    },
    Number_of_Bathrooms: {
        required: true,
        type: Number
    },
    Price: {
        required: true,
        type: Number
    },
    Apartment_description: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    included: {
        required: true,
        type: Array
    },
    Rented: {
        required: true,
        type: Boolean
    }, 
    Date_de_disponibilite: {
        required: true,
        type: String
    }
})
module.exports = mongoose.model('Data', dataSchema)