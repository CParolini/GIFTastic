    $('button').on('click', function() {
        var x = $(this).data('sport');

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var animalDiv = $('<div>');
                    var p = $('<p>').text("Rating: " + response.data[i].rating);
                    var animalImage = $('<img>');
                    animalImage.attr('src', response.data[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $('#GIFArea').prepend(animalDiv);
                }
            })
        $('#GIFArea').empty();
        $('.submit').on('click', function(){
          var newSport = $('<button data-sport="">');
          $(".buttonArea").append(newSport);
        })
    })
