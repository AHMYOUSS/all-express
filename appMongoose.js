const express = require('express');
const path = require('path');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const URL_db = 'mongodb://127.0.0.1:27017/appdbs'

let userSchema = mongoose.Schema({
    name: String,
    age: Number
})

let User = mongoose.model('user',userSchema)

app.use('/',express.static(path.join(__dirname,'statics')))
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index', {
        user: []
    })
});

app.post('/', (req, res) => {
    mongoose.connect(URL_db,{ useNewUrlParser: true }  ,(err)=>{
        console.log('connect db')
        mongoose.disconnect()
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});