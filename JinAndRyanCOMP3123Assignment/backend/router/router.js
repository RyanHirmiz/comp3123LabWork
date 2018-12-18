//Team Member #1: Jin Kwan Kim
//Student ID: 101058670

//Team Member #2: Ryan Hirmiz
//Student ID: 101086605

const express = require('express');
const router  = express.Router();

const Movie = require('../DatabaseModel/moviedatabase');
router.get('/movies', (req, res, next)=>{
Movie.find(function(err,movies){

    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(movies);
    }
});
});
//add movie

// add movie
router.post('/movies', (req, res, next)=> {
    let newMovie = new Movie({
        title: req.body.title,
        runningtime: req.body.runningtime,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director,
        status: req.body.status

    });
    newMovie.save((err, movie)=> {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({message: "Movie added successfully"});
        }

    })
})
//update movie
router.put('/movies/:id', function(req,res){
    console.log('updating a movie');
    Movie.findByIdAndUpdate(req.params.id,
        {
            $set: {id:  req.body.id, title: req.body.title, runtime: req.body.runtime, genre: req.body.genre, rating: req.body.rating, director: req.body.director, status: req.body.status}
        },
        {
            new: true
        },
        function(err, updatedMovie){
            if(err){
                res.send("movie is not updated");
            }else{
                res.json(updatedMovie);
            }
        });
});

//delete movie
router.delete('/movies/:id', (req, res, next)=>{
    Movie.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
})


module.exports = router;