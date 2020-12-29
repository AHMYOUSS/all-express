const express = require('express');
const app = express()
const path = require('path');
const bodyParser = require('body-Parser');
const MongoClient = require('mongodb').MongoClient



app.set('view engine','ejs')
app.use('/',express.static(path.join(__dirname,'statics')))

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/',bodyParser.urlencoded({extended: true}) ,(req, res) => {
    MongoClient.connect('mongodb://localhost:27017/firstDB',(err,client)=>{
    console.log('connect dbs')
    let db =client.db()
        db.collection('users').insertOne({
            name:req.body.name ,
            age:+req.body.age
        }).then(result => {
            console.log(result)
            res.redirect('/')
        })

    client.close() 
})
});

app.listen(3000, () => {console.log('App listening on port 3000!');});