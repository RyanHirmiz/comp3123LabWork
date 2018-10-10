const favoriteMovie = { name: "GoodFellas", genre: "Crime", nationality: "English" };

function favoriteMovie() {  
    return { title: "GoodFellas", director: "Martin Scoresse" };
}

function getMovieRecommendations() {  
    return [
        {id: 1, title: "Casino", director: "Martin Scoresse"},
        {id: 2, title: "Avatar", director: "James Cameron"},
        {id: 3, title: "The Lion King", director: "Roger Allers"}
    ];
}

module.exports = 
{
    favoriteDirector: favoriteDirector,  
    favoriteMovie: favoriteMovie,
    getMovieRecommendations: getMovieRecommendations
}