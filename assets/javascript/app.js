// Flick-Pick JavaScript Basic Logic
    // 1. Present user with choices
    // 2. Send API query based on user's choices
    // 3. Return results from API query to display in the DOM

//---------- WELCOME TO FLICK PICK! ---------------\\

// Create global variables and objects

    // screenTypeOption - an object that holds the intial question and two possible answers
    var screenTypeOption = {
        question: "Do you want to watch a TV Show or a Movie?",
        options: ['<img src="assets/images/TVshow.png" class="opt" alt="TV Show"', '<img src="assets/images/MOVie.png" class="opt" alt="Movie">']
    },
    // tvQuestions - an array that holds the tv questions and their possible answers
    tvQuestions = [
        { // TV Ratings Choices
            question: "Who's watching? Pick a rating!", // What is the rating you want?
            options: ['Programs designed to be appropriate for all children.', 'Programs designed for children ages 7 and above.', 'Program most parents would find suitable for all ages.', 'Programs containing materials that parents may find unsuitable for younger children.', 'Programs containing some material is unsuitable for children under 14 years of age.', 'Programs specifically designed to be viewed by adults and unsuitable for children under 17.'],
            valuesID: ['TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA']
        },
        { //TV Genres
            question: "What kinda show d'you wanna watch?", // What Genre are you looking for?
            options: ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Kids', 'Mystery', 'News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'Talk Show', 'War & Politics', 'Western'],
            valuesID: [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37]
        }
    ],
    // movieQuestions - an array that holds the movie questions and their possible answers
    movieQuestions = [
        { // Movie Ratings Choices
            question: "Who's watching? Pick a rating!", // What is the rating you want?
            options: ['G: For all ages.', 'NC-17: Parents would consider too strong for viewing by their children and teens.', 'NR: No rating information.', 'PG: Some material may not be suitable for children under 10.', 'PG-13: Some material may be inappropriate for children under 13. ', 'R: If under 17, requires accompanying parent or adult guardian 21 or older.'],
            valuesID: ['G', 'NC-17', 'NR', 'PG', 'PG-13', 'R']
        },
        { // Movie Genres
            question: "What kinda movie d'you wanna watch?", // What Genre are you looking for?
            options: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'TV Movie', 'War', 'Western'],
            valuesID: [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 53, 10770, 10752, 37]
        }
    ];

    // Initialize global variables for the user's choice of rating and genre, to be used later for API query
    userRating = '',
    userGenre = '',
    // Variables for the rest of the query parameters
    apiKey = "?api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    language = '&language=en-US', //string term to set english language movies
    sort = '&sort_by=popularity.desc', //string term set sort option
    certCountry = '&certification_country=US',
    cert = '&certification=',
    video = '&include_video=false',

    // testURL for quick debugging //
    testURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2429acb131d788573608b3142e21e670&language=en-US&sort_by=popularity.asc&certification_country=US&certification=R&include_video=false&with_genres=28'
    //----------------------------------//
    
    // Empty global variables to be defined based on user choices and used for API queries
    tvQueryURL = '',
    movieQueryURL = '',
    movieTitle = [],
    tvTitle = [],
    movieSynopsis = [],
    tvSynopsis = [];


// 1. Present user with choices
// Start Button on-click event - starts the app
$('#startBtn').on('click', function () {
    // When start button is clicked, the button is hidden, and ...
    $("#start").hide();
    // chooseScreen function begins
    chooseScreen();
});

// chooseScreen function - displays the initial choice for the user (TV vs Movie)
function chooseScreen() {
    // Display initial question
    $("#question").html("<h5>" + screenTypeOption.question + "</h5>");
    // Display choices using for-loop
    for (i = 0; i < screenTypeOption.options.length; i++) {
        $("#answerList").append("<class='firstChoice' id='choice" + (i+1) + "'>" + screenTypeOption.options[i] + "</>");
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
// Define tvRatingsChoice - this will display TV Show Ratings options
function tvRatingsChoice() {
    // Display first question in tvQuestions
    $("#question").html("<h5>" + tvQuestions[0].question + "</h5>");
    // Display choices using for-loop
    for (i = 0; i < tvQuestions[0].valuesID.length; i++) {
        $("#answerList").append("<button class='buttonRating' id='tv-rating-choice' title='" + tvQuestions[0].options[i] + "' data-value='" + tvQuestions[0].valuesID[i] + "'>" + tvQuestions[0].valuesID[i] + "</button>");
    }
}

// ------------------------ TV SECTION NOT FULLY FUNCTIONAL ---------------------------\\
// ------------ NEEDS CAROUSEL AND FINAL RECOMMENDATION ON-CLICK FUNCTIONS ------------\\
// Create on-click event for when user selets a rating
$(document.body).on("click", "#tv-rating-choice", function() {
    userRating = $(this).data("value");
    console.log(userRating);
    $("#question").empty();
    $("#answerList").empty();
    tvGenreChoice();
})
// Define tvGenreChoice - this will display TV Show genre options
function tvGenreChoice() {
    // Display second question in tvQuestions
    $("#question").html("<h5>" + tvQuestions[1].question + "</h5>");
    // Display choices using for-loop
    for (i = 0; i < tvQuestions[1].options.length; i++) {
        $("#answerList").append("<button class='waves-effect waves-light btn-large' id='tv-genre-choice' data-value='" + tvQuestions[1].valuesID[i] + "'>" + tvQuestions[1].options[i] + "</button>");
    }
}
// Create on-click event for when user selets a genre
$(document.body).on("click", "#tv-genre-choice", function() {
    userGenre = $(this).data("value");
    console.log(userGenre);
    $("#question").empty();
    $("#answerList").empty();
    tvQuery();
})

// Define tvQuery - the ajax call to The Movie Database API
function tvQuery() {
    tvQueryURL = 'https://api.themoviedb.org/3/discover/tv' + apiKey + language + sort + certCountry + cert + userRating + '&include_adult=false' + video + '&page=1&with_genres=' + userGenre;
    $.ajax({
        url: tvQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Insert code for writing the results to the DOM here
        if (response.results.length > 0) {
            // Create a new div
            finalRecDiv = $("<div>"); // Create a new div
            finalRecDiv.html("<h5>How about one of these?</h5>"); // Add text
            clickPoster = $("<div>"); // Create a new div
            clickPoster.html("<p>Click the poster for more info!</p>"); // Add text
            newDiv = $("<div>");
            // Add .carousel (per Materialize Carousel documentation)
            newDiv.addClass("carousel carousel-slider center");
            for (i = 0; i < 3; i++) {
                // This will handle the situation if response has no title
                var title = response.results[i].name;
                var overview = response.results[i].overview;
                // Create an image tag for each of the first three results from the ajax call
                var img = $('<img>');
                // Add the poster as the src
                img.attr("src", 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + response.results[i].poster_path)
                // Add .carousel-item (per Materialize Carousel documentation)
                img.attr("class", 'carousel-item');
                // Add id for use in on-click event 
                img.attr("id", "tvshow-" + (i+1));
                // Add data-value for title
                img.data("title", title);
                //Add data-value for overview
                img.data("synopsis", overview);
                // Append image to the new div
                img.appendTo(newDiv);
                // Append new divs to #recommendation
                finalRecDiv.appendTo('#recommendation');
                newDiv.appendTo('#recommendation');
                clickPoster.appendTo('#recommendation');
                // Store Movie Title and Synopsis to global variables to display on-click
                tvTitle.push(title);
                tvSynopsis.push(overview);
            }

            $('.carousel').carousel();
        }

        console.log(tvQueryURL);
        $(document.body).on("click", "#tvshow-1", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + tvTitle[0] + "</h4><p>" + tvSynopsis[0] + "</p>");
        });
        $(document.body).on("click", "#tvshow-2", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + tvTitle[1] + "</h4><p>" + tvSynopsis[1] + "</p>");
        });
        $(document.body).on("click", "#tvshow-3", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + tvTitle[2] + "</h4><p>" + tvSynopsis[2] + "</p>");
        });
    
        resetGlobals();


    });
    
    
}

// MOVIE LOGIC
// On-click even for "Movie"
$(document.body).on("click", "#choice2", function() {
    // Empty the contents of the question and answer list divs
    $("#question").empty();
    $("#answerList").empty();
    movieRatingsChoice();
})
// Define movieRatingsChoice - this will display Movie Ratings options
function movieRatingsChoice() {
    // Display first question in movieQuestions
    $("#question").html("<h5>" + movieQuestions[0].question + "</h5>");
    // Display choices using for-loop
    for (i = 0; i < movieQuestions[0].options.length; i++) {
        $("#answerList").append("<button class='waves-effect waves-light btn-large' id='movie-rating-choice' data-value='" + movieQuestions[0].valuesID[i] + "'>" + movieQuestions[0].options[i] + "</button>");
    }
}
// Create on-click event for when user selets a rating
$(document.body).on("click", "#movie-rating-choice", function() {
    userRating = $(this).data("value");
    console.log(userRating);
    $("#question").empty();
    $("#answerList").empty();
    movieGenreChoice();
})
// Define movieGenreChoice - this will display Movie genre options
function movieGenreChoice() {
    // Display second question in movieQuestions
    $("#question").html("<h5>" + movieQuestions[1].question + "</h5>");
    // Display choices using for-loop
    for (i = 0; i < movieQuestions[1].options.length; i++) {
        $("#answerList").append("<button class='waves-effect waves-light btn-large' id='movie-genre-choice' data-value='" + movieQuestions[1].valuesID[i] + "'>" + movieQuestions[1].options[i] + "</button>");
    }
}
// Create on-click event for when user selets a genre
$(document.body).on("click", "#movie-genre-choice", function() {
    userGenre = $(this).data("value");
    console.log(userGenre);
    $("#question").empty();
    $("#answerList").empty();
    movieQuery();
})



// Define movieQuery - the ajax call to The Movie Database API
function movieQuery() {
    movieQueryURL = 'https://api.themoviedb.org/3/discover/movie' + apiKey + language + sort + certCountry + cert + userRating + '&include_adult=false' + video + '&page=1&with_genres=' + userGenre;
    $.ajax({
        url: movieQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Insert code for writing the results to the DOM here
        finalRecDiv = $("<div>"); // Create a new div
        finalRecDiv.html("<h5>How about one of these?</h5>"); // Add text
        clickPoster = $("<div>"); // Create a new div
        clickPoster.html("<p>Click the poster for more info!</p>"); // Add text
        if (response.results.length > 0) {
            // Create a new div
            newDiv = $("<div>");
            // Add .carousel (per Materialize Carousel documentation)
            newDiv.addClass("carousel carousel-slider center");
            for (i = 0; i < 3; i++) {
                // This will handle the situation if response has no title
                var title = response.results[i].title;
                var overview = response.results[i].overview;
                // Create an image tag for each of the first three results from the ajax call
                var img = $('<img>');
                // Add the poster as the src
                img.attr("src", 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + response.results[i].poster_path)
                // Add .carousel-item (per Materialize Carousel documentation)
                img.attr("class", 'carousel-item');
                // Add id for use in on-click event 
                img.attr("id", "movie-" + (i+1));
                // Add data-value for title
                img.data("title", title);
                //Add data-value for overview
                img.data("synopsis", overview);
                // Append image to the new div
                img.appendTo(newDiv);
                // Append new divs to #recommendation
                finalRecDiv.appendTo('#recommendation');
                newDiv.appendTo('#recommendation');
                clickPoster.appendTo('#recommendation');
                // Store Movie Title and Synopsis to global variables to display on-click
                movieTitle.push(title);
                movieSynopsis.push(overview);
            }

            $('.carousel').carousel();
        }

        $(document.body).on("click", "#movie-1", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + movieTitle[0] + "</h4><p>" + movieSynopsis[0] + "</p>");
        });
        $(document.body).on("click", "#movie-2", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + movieTitle[1] + "</h4><p>" + movieSynopsis[1] + "</p>");
        });
        $(document.body).on("click", "#movie-3", function() {
            $("#recommendation").empty();
            // Hook into contentDiv
            // Adds title and overview to DOM 
            $("#recommendation").html("<h4>" + movieTitle[2] + "</h4><p>" + movieSynopsis[2] + "</p>");
        });
        resetGlobals();


    });
    
    
}


// Reset global variables
function resetGlobals() {
    userRating = '',
    userGenre = '',
    tvQueryURL = '',
    movieQueryURL = '';
  

}


// function calliTunesTV() {
//     $.getJSON("https://itunes.apple.com/search?term=" + tvTitle[i], function (result) {
//         if (result.results.length > 0) { //Runs if array returns a result
//             if (result.results[i].kind === "tv-episode") {
//                 //displays results in the DOM 
//                 // $('body').append(result.results[i].previewUrl + '<br>')
//                 console.log(result.results[i].previewURL);

//             }
//         }
//     })
// }

// function calliTunesMovie() {
//     $.getJSON("https://itunes.apple.com/search?term=" + movieTitle[i], function (result) {
//         if (result.results.length > 0) { //Runs if array returns a result
//             if (result.results[i].kind === "feature-movie") {
//                 //displays results in the DOM 
//                 // $('body').append(result.results[i].previewUrl + '<br>')
//                 console.log(result.results[i].previewURL);

//             }
//         }
//     })
// }