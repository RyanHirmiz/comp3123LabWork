//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

const mongoose = require('mongoose');

const Movie = mongoose.Schema({

    title: {
        type: String,
    },
    
    runningtime:{

        type:String
    }, 
    
    genre:{

        type:String
    },

    rating: 
    {
        type: String
    },

    director: 
    {
        type: String
    }, 

    status: 
    {
        type: String
    }


    


})

const movie = module.exports = mongoose.model('movie', Movie);

