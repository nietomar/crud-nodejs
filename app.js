const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.use('/',require('./router'))

app.get('/',(req, res) => {
    res.send('Hola')
})

app.listen(8000, () => {
    console.log('Server corriendo en http://localhost:8000')
})