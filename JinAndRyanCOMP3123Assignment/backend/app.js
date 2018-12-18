//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const Movie = require('./DatabaseModel/moviedatabase');

const route = require('./router/router');



app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);
const port = 3000;


app.listen(port, ()=>{
console.log('Port is listening at ' + port);
})

mongoose.connect('mongodb://college:college1@ds227664.mlab.com:27664/product',{ useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log('MongoDb connection estabilished successsfully',{ useNewUrlParser: true } );
})



mongoose.connection.on('error', (err)=>{
    console.log(err);
})

