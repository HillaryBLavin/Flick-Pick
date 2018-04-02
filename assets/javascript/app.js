// Object for Questions and User Options

var userQuestions = 
    [
        {question: "Do you want to watch a TV Show or a Movie?",
        options: ["Television", "Movie"]},
        {question: "What is the rating you want?",
        options: ["Choice", "Something", "Um", "I don't know"]},
        {question: "What Genre are you looking for?",
        options: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV movie", "Thriller", "War", "Western", "Kids", "News", "Reality", "Sci-Fi $ Fantasy", "Soap"]}
    ],

    currentQuestion,
    userSelect;

    searchAPILKey = "api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    language = '&language=en-US', //string term to set english language movies
    sort = '&sort_by=popularity.asc', //string term set sort option
    certContry = '&certification_country=US',
    cert = '&certification=',
    rating = 'PG-13',
    video = '&include_video=false',
    movieQuery = [],
    tvQuery = [],

    

    //Query by latest movie or TV 
    searchMovies = 'https://api.themoviedb.org/3/discover/movie?' + searchAPILKey + language + sort + certContry + cert + rating + '&include_adult=false&include_video=false&page=1', // Movies
    searchTV = 'https://api.themoviedb.org/3/discover/tv?' + searchAPILKey + language + sort + certContry + cert + rating + '&include_adult=false&include_video=false&page=1', //TV

    //Query by movie or TV search query
    queryMovie = 'https://api.themoviedb.org/3/search/movie?' + searchAPILKey + language + '&query=' + movieQuery + '&page=1',
    queryTV = 'https://api.themoviedb.org/3/search/tv?' + searchAPILKey + language + '&query=' + tvQuery + '&page=1',

    //Query by latest movie or TV 
    searchLatestMovies = 'https://api.themoviedb.org/3/movie/latest?' + searchAPILKey + language,
    searchTVShows = 'https://api.themoviedb.org/3/tv/latest?' + searchAPILKey + language,

    //Ratings Search
    searchMovieRatings = 'https://api.themoviedb.org/3/certification/movie/list?' + searchAPILKey,
    searchTVRatings = 'https://api.themoviedb.org/3/certification/tv/list?' + searchAPILKey,

    queryURL = 'https://api.themoviedb.org/3/search/keyword?api_key=2429acb131d788573608b3142e21e670&query=aliens&page=1'





//AJAX Query Call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

// Start Button Coding
$('#startBtn').on('click', function(){
    // When start button is clicked, the button is also hidden, and ...
    $(this).hide();
    // Start App function begins
	startApp();
});

// New  Function
function startApp(){

    // Loads New Question
	newQuestion();}

    // Selects New Question
function newQuestion(){
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('<h2>#' + (currentQuestion+1) + '</h2>');
	$('#question').html('<h3>' + userQuestions[currentQuestion].question + '</h3>');
    for(var i = 0; i < userQuestions.options.length; i++){
		var choices = $('<div>');
		choices.text(userQuestions[currentQuestion].options[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
    }
    
    	
        // Maybe include some code here to save the choice in the database?
	};



//Database target variables for movies
//page  .page
//adult  .results["0"].adult
// genre  .results["0"].genre_ids["0"]
// title  .results["0"].title
//overview  .results[0].overview
//poster .results["0"].poster_path
//certification: .certifications.US["0"].certification
//certification meaning: .certifications.US["0"].meaning


//Database target variables for TV
//page  .page
// genre  .results["0"].genre_ids["0"]
//name  .results["0"].name
//overview  .results[0].overview
//poster .results["0"].poster_path
//certification: .certifications.US["0"].certification
//certification meaning: .certifications.US["0"].meaning


// # of pages and results in the database
// total_pages: 17687 movies / 3643 TV
//total_results: 353728 movies /72850 TV

//We can Query Multiple Genre ID
/*"genre_ids": [
    28,
    53,
    12,
    878
],*/





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



// Flick-Pick JavaScript Pseudocode
//-------- Basic Logic -----------|
// 1. Present User with choices
// 2. Store User's choices in Firebase
// 3. Retrieve User's choices from Firebase
// 4. Send API query based on User's choices
// 5. Return results from API query to display in the DOM

// -------- Expanded Logic -------|
// Initialize Firebase
// Create global variables, as needed, for example...
//Movie Database API Key and Query URL's
// Search Term Query Variables 
// 1. Present User with choices
// AND
// 2. Store Usesr's choices in Firebase (add more choices as needed)
// Create on-click event to "Start App"
// Create on-click event to submit 1st choice (How much time does the user have?)
// Assign data value from user chocie to a query parameter for API
// Push user choice to Firebase    
// Create on-click event to submit 2nd choice (...)
// Assign data value from user chocie to a query parameter for API
// Push user choice to Firebase
// Create on-click event to submit 3rd choice (...)
// Assign data value from user chocie to a query parameter for API
// Push user choice to Firebase
// Create on-click event to submit 3rd choice (...)
// Assign data value from user chocie to a query parameter for API
// Push user choice to Firebase
// 3. Retrieve User's choices from Firebase
// AND
// 4. Send API query based on User's choices
// Get user choices from Firebase
// Concatenate query parameters to API query
//AJAX Query Call
// 5. Return results from API query to display in the DOM
// Hook into contentDiv
// Use jQuery to create DOM elements for API query results 
// <img> tag for poster
// <h> or <p> tag(s) for title, synopsis, etc.