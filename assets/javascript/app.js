var topics = [tea, coffee, sweets, jazz, rain]

for (var i = 0; i < topics.length; i++) { 
    var buttons = $('<button>'+ topics[i] + '</button>') 
    buttons.appendTo('#topicsButton'); 
} 
