const favoriteAuthor = { name: "Don Winslow", genre: "True Crime", nationality: "English" };

function favoriteBook() {  
    return { title: "The Force", author: "Don Winslow" };
}

function getBookRecommendations() {  
    return [
        {id: 1, title: "Kings of Cool", author: "Don Winslow"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Gray Man", author: "Mark Greaney"}
    ];
}

module.exports = {
    favoriteAuthor: favoriteAuthor,  
    favoriteBook: favoriteBook,
    getBookRecommendations: getBookRecommendations
}