//Movie Database API Key and Query URL's

var searchAPILKey = "api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    searchMovies = 'https://api.themoviedb.org/3/search/movie?' + searchAPILKey + '&query=' + tvSearch,
    searchTVShows = 'https://api.themoviedb.org/3/search/tv?' + searchAPILKey + '&query=' + movieSearch,
    queryURL = searchMovies;


//AJAX Query Call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});


// Search Term Query Variables 

var tvSearch = ['super'],
movieSearch = ['aliens'],


// Initialize Firebase
var config = {
apiKey: "AIzaSyDjD9JW3pXYNwd6NcnISWaJ3L1ITqH1lHM",
authDomain: "project1-10736.firebaseapp.com",
databaseURL: "https://project1-10736.firebaseio.com",
projectId: "project1-10736",
storageBucket: "project1-10736.appspot.com",
messagingSenderId: "511473984981"
};
firebase.initializeApp(config);



//
