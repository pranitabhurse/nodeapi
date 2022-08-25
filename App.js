const express = require('express');
const app = express();
const mongoose = require('mongoose')
const connectDB = require('./Src/Connections/Connections')
var cors = require('cors')
const router = express.Router()
module.exports = router;
var bodyParser = require('body-parser');
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

connectDB()
app.get('/',(req, res)=>{
    res.send('Welcome to api')
})


app.use('/', require('./Src/Router/Router'))

var PORT = process.env.PORT || 3032;
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));