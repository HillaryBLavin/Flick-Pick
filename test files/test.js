//Initialization of key variables and databases

// 1.0 - Initialize Firebase
var config = {
    apiKey: "AIzaSyAFe-NJF9oE00PqC_i-v4Vd4I5gedHBaOs",
    authDomain: "flick-pick-cd9d9.firebaseapp.com",
    databaseURL: "https://flick-pick-cd9d9.firebaseio.com",
    projectId: "flick-pick-cd9d9",
    storageBucket: "flick-pick-cd9d9.appspot.com",
    messagingSenderId: "667190536611"
};
firebase.initializeApp(config);

// 1.1 - Link to Firebase
var movieData = firebase.database(); //currently not sure it's working


// 2.0 - Sets Objects for Questions and User Options
var userQuestions = [{
            question: "Do you want to watch a TV Show or a Movie?",
            options: ["Television", "Movie"],
            valuesID: ['television', 'movie']
        },
        { // Movie Ratings Choices
            question: "What is the rating you want?",
            options: ['NR: No rating information.', 'TV-Y: Programs designed to be appropriate for all children.', 'TV-Y7: Programs designed for children ages 7 and above.', 'TV-G: Program most parents would find suitable for all ages.', 'TV-PG: Programs containing materials that parents may find unsuitable for younger children.', 'TV-14: Programs containing some material is unsuitable for children under 14 years of age.', 'TV-MA: Programs specifically designed to be viewed by adults and unsuitable for children under 17.'],
            valuesID: ['NR', 'TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA']
        },
        { //TV Ratings Choices
            question: "What is the rating you want?",
            options: ['G: For all ages.', 'NC-17: Parents would consider too strong for viewing by their children and teens.', 'NR: No rating information.', 'PG: Some material may not be suitable for children under 10.', 'PG-13: Some material may be inappropriate for children under 13. ', 'R: If under 17, requires accompanying parent or adult guardian 21 or older.'],
            valuesID: ['G', 'NC-17', 'NR', 'PG', 'PG-13', 'R']
        },
        { //Movie Genres
            question: "What Genre are you looking for?",
            options: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "TV Movie", "War", "Western"],
            valuesID: [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 53, 10770, 10752, 37]
        },
        { //TV Genres
            question: "What Genre are you looking for?",
            options: ["Action & Adventures", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", 'Kids', "Mystery", "News", "Reality", "Sci-Fi $ Fantasy", "Soap", "Talk Show", 'War & Politics', "Western"],
            valuesID: [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37]
        }
    ],

    //2.1 - Sets Additional Global Variables
    currentQuestion,
    userSelect,
    value,
    searchAPILKey = "?api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    language = '&language=en-US', //string term to set english language movies
    sort = '&sort_by=popularity.asc', //string term set sort option
    certContry = '&certification_country=US',
    cert = '&certification=',
    video = '&include_video=false',


    //2.3 - Sets Initial globl variables for the database
    userRating = '',
    userScreen = "", //Movies or TV
    userGenre = "", //Main Genre selection
    userSubGen = "", //Sub Genre selection
    userQuery = ""; //Keyword search term



// Process Javascript Coding

// 3.0 - Present User with choices

// 3.1 - Start Button Coding
$('#startBtn').on('click', function () {
    // When start button is clicked, the button is also hidden, and ...
    $(this).hide();
    // Start App function begins
    startApp();
});

// 3.2 - Function for startApp 


function startApp() {

    // Clears prior elements
    $('#finalMessage').empty();

    // Resets Values
    currentQuestion = 0;

    // Loads New Question
    newQuestion();
}


//need to add if then for movie vs. tv questions
// 3.3 - Selects New Question
function newQuestion() {

    answered = true;

    //3.3.1 - sets up new questions & answerList

    $('#question').html('<h4>' + userQuestions[currentQuestion].question + '</h4>');
    for (var i = 0; i < 24; i++) {
        var choices = $('<div>');
        choices.text(userQuestions[currentQuestion].options[i]);
        choices.attr({
            'data-index': i
        });
        choices.addClass('thisChoice');
        choices.attr({
            'value': userQuestions[currentQuestion].valuesID[i]
        });
        $('#answerList').append(choices);
    }

    //clicking an answer will setup nextQuestion
    $('.thisChoice').on('click', function () {

        userSelect = $(this).data('index');
        value = $(this).attr('value');
        console.log(value);

        // Grabs user inputs from text boxes and assign to variables
        if (currentQuestion === 0) {
            var movieData = firebase.database();
            userScreen = value;
            console.log(value);
            var newMovieData = {
                screenType: userScreen
            };
            movieData.ref().push(newMovieData);
            console.log(newMovieData);
        } else if (currentQuestion === 1) {
            var movieData = firebase.database()
            userRating = value; //Movie Ratings selection
            var newMovieData = {
                ratings: userRating,
            }
            movieData.ref().push(newMovieData);
            console.log(userRating);
        } else if (currentQuestion === 2) {
            var movieData = firebase.database()
            userRating = value; //Movie Ratings selection
            var newMovieData = {
                ratings: userRating,
            }
            movieData.ref().push(newMovieData);
            console.log(userRating);
        } else if (currentQuestion === 3) {
            var movieData = firebase.database()
            userGenre = value; //Main Genre selection 
            var newMovieData = {
                genre: userGenre,
            }
            movieData.ref().push(newMovieData);
            console.log(userGenre);
        } else if (currentQuestion === 4) {
            var movieData = firebase.database()
            userGenre = value; //Main Genre selection
            var newMovieData = {
                genre: userGenre,
            }
            movieData.ref().push(newMovieData);
            console.log(userGenre);
        };
      
        nextQuestion();

        //     MovieData.ref().push(newMovieData);
    });

}

// Next Question function
function nextQuestion() {

    // Clears Previous Elements
    $('#answerList').empty(); // Clears the AnswerList <div> (no other empty needed)

    // Set Answered to 'true'
    answered = true;


    // If the current question reaches the end of the trivia list, show the recommendations 
    if (currentQuestion == (userQuestions.length - 1)) {

        // This is where we'd link to recommendation function
        // insert code here
        // this code doesn't exist yet

        // Otherwise add another question
    } else {
        currentQuestion++;
        newQuestion();
    }
}



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