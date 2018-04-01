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