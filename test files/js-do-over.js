// Flick-Pick JavaScript Basic Logic
    // 1. Present user with choices
    // 2. Send API query based on user's choices
    // 3. Return results from API query to display in the DOM


// Create global variables
var userQuestions = [], // An array for the questions presented to the user
    currentQuestion = 0, // Used to calculate the currently displayed question
    searchAPILKey = "?api_key=2429acb131d788573608b3142e21e670", // Key for The Movie Databse API query
    language = '&language=en-US', // Query parameter for US-English
    sort = '&sort_by=popularity.asc', // Query parameter for "sort by popularity"
    certContry = '&certification_country=US', 
    cert = '&certification=',
    video = '&include_video=false';


// 1. Present user with choices
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


// AND
// 2. Store User's choices in Firebase (add more choices as needed)
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