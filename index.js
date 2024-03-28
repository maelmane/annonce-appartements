const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

