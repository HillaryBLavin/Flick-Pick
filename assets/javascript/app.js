var searchAPILKey = "api_key=2429acb131d788573608b3142e21e670", //key provided by The Movie Databse API
    queryURL = 'https://api.themoviedb.org/3/movie/550?' + searchAPILKey




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



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});