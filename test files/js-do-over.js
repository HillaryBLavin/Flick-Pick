// Flick-Pick JavaScript Basic Logic
    // 1. Present user with choices
    // 2. Send API query based on user's choices
    // 3. Return results from API query to display in the DOM

//---------- WELCOME TO FLICK PICK! ---------------\\

// Create global variables and objects

    // screenTypeOption - an object that holds the intial question and two possible answers
    var screenTypeOption = {
        question: "Do you want to watch a TV Show or a Movie?",
        options: ['TV Show', 'Movie']
    },
    // tvQuestions - an array that holds the tv questions and their possible answers
    tvQuestions = [
        { // TV Ratings Choices
            question: "What is the rating you want?",
            options: ['TV-Y: Programs designed to be appropriate for all children.', 'TV-Y7: Programs designed for children ages 7 and above.', 'TV-G: Program most parents would find suitable for all ages.', 'TV-PG: Programs containing materials that parents may find unsuitable for younger children.', 'TV-14: Programs containing some material is unsuitable for children under 14 years of age.', 'TV-MA: Programs specifically designed to be viewed by adults and unsuitable for children under 17.'],
            valuesID: ['TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA']
        },
        { //TV Genres
            question: "What Genre are you looking for?",
            options: ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Kids', 'Mystery', 'News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'Talk Show', 'War & Politics', 'Western'],
            valuesID: [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37]
        }
    ],
    // movieQuestions - an array that holds the movie questions and their possible answers
    movieQuestions = [
        { // Movie Ratings Choices
            question: "What is the rating you want?",
            options: ['G: For all ages.', 'NC-17: Parents would consider too strong for viewing by their children and teens.', 'NR: No rating information.', 'PG: Some material may not be suitable for children under 10.', 'PG-13: Some material may be inappropriate for children under 13. ', 'R: If under 17, requires accompanying parent or adult guardian 21 or older.'],
            valuesID: ['G', 'NC-17', 'NR', 'PG', 'PG-13', 'R']
        },
        { // Movie Genres
            question: "What Genre are you looking for?",
            options: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'TV Movie', 'War', 'Western'],
            valuesID: [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 53, 10770, 10752, 37]
        }
    ];

    // Initialize global variables for the user's choice of rating and genre, to be used later for API query
    userRating = '',
    userGenre,

// 1. Present user with choices
// Start Button on-click event - starts the app
$('#startBtn').on('click', function () {
    // When start button is clicked, the button is hidden, and ...
    $(this).hide();
    // chooseScreen function begins
    chooseScreen();
});

// chooseScreen function - displays the initial choice for the user (TV vs Movie)
function chooseScreen() {
    // Display initial question
    $("#question").html("<h4>" + screenTypeOption.question + "</h4>");
    // Display choices using for-loop
    for (i = 0; i < screenTypeOption.options.length; i++) {
        $("#answerList").append("<button class='waves-effect waves-light btn-large' id='choice" + (i+1) + "'>" + screenTypeOption.options[i] + "</button>");
    }
}

// Create two logic flows based on the user's choice between "TV Show" and "Movie"

// TV LOGIC
// On-click event for "TV Show"
$(document.body).on("click", "#choice1", function() {
    // Empty the contents of the question and answer list divs
    $("#question").empty();
    $("#answerList").empty();
    tvRatingsChoice();
})
// Define tvRatingsChoice - this will display options for TV Show
function tvRatingsChoice() {
    // Display first question in tvQuestions
    $("#question").html("<h4>" + tvQuestions[0].question + "</h4>");
    // Display choices using for-loop
    for (i = 0; i < tvQuestions[0].options.length; i++) {
        $("#answerList").append("<button class='waves-effect waves-light btn-large' id='rating-choice' data-value='" + tvQuestions[0].valuesID[i] + "'>" + tvQuestions[0].options[i] + "</button>");
    }
}
// Create on-click event for when user selets a rating
$(document.body).on("click", "#rating-choice", function() {
    var userRating = $(this).data("value");
})








// MOVIE LOGIC
// On-click even for "Movie"
$(document.body).on("click", "#choice2", function() {
    // Empty the contents of the question and answer list divs
    $("#question").empty();
    $("#answerList").empty();
    movieRatingsChoice();
})

