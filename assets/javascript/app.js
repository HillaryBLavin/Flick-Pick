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

    currentQuestion = 0,
    userSelect,
    searchAPILKey = "?api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    language = '&language=en-US', //string term to set english language movies
    sort = '&sort_by=popularity.asc', //string term set sort option
    certContry = '&certification_country=US',
    cert = '&certification=',
    video = '&include_video=false',


    // Sets Initial variables for the database
    userRating = 'PG-13',
    userScreen = "", //Movies or TV
    userGenre = "", //Main Genre selection
    userSubGen = "", //Sub Genre selection
    userQuery = ""; //Keyword search term




// 1. Link to Firebase
var movieData = firebase.database(); //currently not sure it's working

// Flick-Pick JavaScript Pseudocode

// 1. Present User with choices
// Start Button Coding
$('#startBtn').on('click', function(){
    // When start button is clicked, the button is also hidden, and ...
    $(this).hide();
    // Start App function begins
	startApp();
});
// New  Function - Run the App
function startApp(){

    // Loads New Question
    newQuestion();
}

// Selects New Question
function newQuestion(){
	answered = true;
	
	//sets up new questions & answerList
	$('#question').html('<h4>' + userQuestions[currentQuestion].question + '</h4>');
    for(var i = 0; i < userQuestions.options.length; i++){
		var choices = $('<div>');
		choices.text(userQuestions[currentQuestion].options[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
    }
	};

// 2. Store User's choices in Firebase
$(document.body).on("click", ".thisChoice", function () {

    // Grabs user inputs from text boxes and assign to variables
    var userRating = $('#').val().trim(),
        userScreen = $('#').val().trim(), //Movies or TV
        userGenre = $('#').val().trim(), //Main Genre selection
        userSubGen = $('#').val().trim(), //Sub Genre selection
        userQuery = $('#').val().trim() //Keyword search term

    // Test for variables entered
    console.log(userRating);
    console.log(userScreen);
    console.log(userGenre);
    console.log(userSubGen);
    console.log(userQuery);

    // Creates local "temporary" object for holding user data
    // Will push this to firebase
    var newMovieData = {
        ratings: userRating,
        screenType: userScreen,
        genre: userGenre,
        subgenre: userSubGen, //Sub Genre selection
        query: userQuery
    }

    // pushing trainInfo to Firebase
    movieData.ref().push(newMovieData);

    // clear text-boxes
    $("keywordInput").val("");

    // Prevents page from refreshing
    return false;
});


// 3. Retrieve User's choices from Firebase
movieData.ref().on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // assign firebase variables to snapshots.
    var firebaseRatings = childSnapshot.val().ratings;
    var firebaseScreenType = childSnapshot.val().screenType;
    var firebaseGenre = childSnapshot.val().genre;
    var firebaseSubGenre = childSnapshot.val().subgenre;
    var firebaseQuery = childSnapshot.val().query;

    // Test for correct times and info
    console.log(firebaseRatings);
    console.log(firebaseScreenType);
    console.log(firebaseGenre);
    console.log(firebaseSubGenre);
    console.log(firebaseQuery);

    //Sets Query URL for movies and TV's
    queryURL = 'https://api.themoviedb.org/3/discover/' + firebaseScreenType + searchAPILKey + language + sort + certContry + cert + firebaseRatings + '&include_adult=false&include_video=false&page=1' // Movies

    // 4. Send API query based on User's choices
    //AJAX Query Call
    function newMovie(queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // 5. Return results from API query to display in the DOM
            console.log(response);

            if (response.data.length > 0) {

                for (i = 0; i < response.data.length; i++) {

                    //build imgs, use src as still image, add attr for data-still, data-animate, data-state (still or animated)
                    var img = $('<img>');
                    img.attr("src", response.results[i].poster_path);

                    //creates new divs for each image that comes through the response
                    newDiv = $("<div>");
                    newDiv.addClass("#"); //Adds "giphyBox" class to new image

                    //if response has no title this is how to handle
                    var title = response.results[i].title;
                    if (title === "") {
                        title = response.results[i].name;
                    }
                    var overview = response.results[i].overview;

                    // Hook into contentDiv
                    newDiv.html("<p>Title: " + title + "</p><p>Overview: " + overview + "</p>").append(img); //Adds movie or tv title and overview to DOM along with image
                    newDiv.prependTo('#'); //inserts to the DOM
                }
            }
        });
    }
});
