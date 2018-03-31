var searchAPILKey = "&apikey=AIzaSyBh6UUWjvXnig9f2jgFP2QvkXvv85Ku1wM", //key provided by ROVI api
   
    queryURL = 'http://api.rovicorp.com/TVlistings/v9/listings/services/postalcode/' + postalCode + '/info?locale=en-US&countrycode=US' + searchAPILKey + sigKey; //sets query URL for API search

//http: //api.rovicorp.com/TVlistings/v9/listings/services/postalcode/32804//info?locale=en-US&countrycode=US&apikey=3525ukrmb2p9pg7j4bmc2pwp&sig=b98b446b4eb43195f9b39b756da3f6e4


//const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
//const url = queryURL;

$.ajax({
    type: 'GET',
    url: corsAnywhere + url,
    success: function (response) {
        console.log(response);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);
    },
});





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFe-NJF9oE00PqC_i-v4Vd4I5gedHBaOs",
    authDomain: "flick-pick-cd9d9.firebaseapp.com",
    databaseURL: "https://flick-pick-cd9d9.firebaseio.com",
    projectId: "flick-pick-cd9d9",
    storageBucket: "flick-pick-cd9d9.appspot.com",
    messagingSenderId: "667190536611"
  };
  firebase.initializeApp(config);
