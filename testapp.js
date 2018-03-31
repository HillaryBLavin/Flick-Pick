var searchAPILKey = "api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    queryURL = 'https://api.themoviedb.org/3/movie/550?' + searchAPILKey

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});