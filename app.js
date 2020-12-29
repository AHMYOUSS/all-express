const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'statics')))
app.get('/', (req, res) => {
    res.render('index')
});

app.post('/',bodyParser.urlencoded({extended:true}) ,(req, res) => {
    res.render('index', {
        name: req.body.name 
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});