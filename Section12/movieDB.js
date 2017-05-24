var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Froze",
        rating: 3.8,
        hasWatched: true
    },
    {
        title: "Mad Max Fury Road",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 2,
        hasWatched: false
    }
]

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += '"' + movie.title + '" ';
    result += "- " + movie.rating + " star";
    console.log(result);
});
