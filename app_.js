const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const bodyParserMW = bodyParser.urlencoded({
    extended: true
})

app.get('/',(req,res,next)=>{
    res.setHeader('Content-Type','text/html')
    res.write('<form action="/" method="POST">')
    res.write('<input name="username">')
    res.write('<input name="age" type="number">')
    res.write('<input  type="submit">')
    res.write('</form>')
    res.end()
})
app.post('/',bodyParserMW,(req,res,next)=>{
    console.log(req.body.username)
    res.send(req.body.username);
   
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});     