
$(document).ready(function () {
    
    //Api Key and Stuff
    //var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2T0N6Y12oTEnnTOf44fmMkIx0eexxc16&limit=10");
   
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2T0N6Y12oTEnnTOf44fmMkIx0eexxc16&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
    
    // Create array named topics
    var topics = ['tea', 'coffee', 'sweets', 'jazz', 'rain']
    // Create a for loop that creates a button for every value in the array
    for (var i = 0; i < topics.length; i++) { 
        var buttons = $("<button type=" + "'button' " + "class='boot'" + ">" + topics[i] + "</button>")
        $("#buttonContainer").append(buttons); 
        console.log(topics[i]);
    }; 

// create an onclick function that grabs images from the GIPHY api
// $('button').on('click', function() {
//     console.log("moop");
//     var mlep =  $('.potato').append("<img src=" + queryURL[0].images.downsized_large + "/>" );
       
//    });
       
// Put search info back into for loop
$("#searchButton").on('click', function() {
    var searchValue = $('#searchBar').val();
    topics.push(searchValue);
    console.log(topics);
    var buttons = $("<button type=" + "'button' " + "class='boot'" + ">" + searchValue + "</button>")
        $("#buttonContainer").append(buttons); 


    

    
});

});

