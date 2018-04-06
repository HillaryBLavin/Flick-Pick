
//TV Epsidose iTunes API Search and Results
$.getJSON("https://itunes.apple.com/search?term=bigbangtheory", function (result) {
    if (result) {
        //$('body').append("yay");
        //$('body').append(JSON.stringify(result.results));
    }
    if (result.results.length > 0) {

        for (i = 0; i < result.results.length; i++) {
            if (result.results[i].kind === "tv-episode") {
                $('body').append(result.results[i].kind + '<br>');
                $('body').append(result.results[i].previewUrl + '<br>')
                console.log(result.results[i].kind)
                console.log(result.results[i].previewUrl)
            }
        }
    }
})


//Feature Movies iTunes API Search and Results
$.getJSON("https://itunes.apple.com/search?term=thor", function (result) {
    if (result) {
        //$('body').append("yay");
        //$('body').append(JSON.stringify(result.results));
    }
    if (result.results.length > 0) {
        console.log(result)
        for (i = 0; i < result.results.length; i++) {
            if (result.results[i].kind === "feature-movie") {
                $('body').append(result.results[i].kind + '<br>');
                $('body').append(result.results[i].previewUrl + '<br>')
                console.log(result.results[i].kind)
                console.log(result.results[i].previewUrl)
            }
        }
    }
})
