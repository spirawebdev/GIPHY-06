
$(document).ready(function () {
    
    //Api Key and Stuff
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2T0N6Y12oTEnnTOf44fmMkIx0eexxc16&limit=10");
    xhr.done(function(response) { console.log("success got data", response); });
    // Example queryURL for Giphy API
    
 
    
    // Create array named topics
    var topics = ['tea', 'coffee', 'sweets', 'jazz', 'rain']
    // Create a for loop that creates a button for every value in the array
    for (var i = 0; i < topics.length; i++) { 
        var buttons = $("<button type=" + "button" + ">" + topics[i] + "</button>")
        $("#buttonContainer").append(buttons); 
        console.log(topics[i]);
    }; 



// create an onclick function that grabs images from the GIPHY api
    $('button').on('click', function() {
       var jiffs = response;
       jiffs;
        console.log($(this).text())
    });





    // Search button will create more buttons to click

    $('#searchButton').on('click', function() {
        search = $('#searchBar').val().trim();
        console.log(search)
        alert('potato')
    });

    

//Somehow pause gif ( I have absolutely no clue how to do this)










});