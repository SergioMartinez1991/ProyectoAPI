const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const db = 'NutricionPersonal'
// const dbUser = 'Sergio1991'
// const dbPass = '15dpr0445r.'

// const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.l1pxxjb.mongodb.net/${db}?retryWrites=true&w=majority`



mongoose.connect(process.env.MONGOURI);

app.use('/NutricionPersonal', require('./src/routes'));


app.listen(process.env.PORT, () => console.log("The server is Alive!!"))

app.get('/',(req, res) => res.send("Hola Mundo Sergio"))


