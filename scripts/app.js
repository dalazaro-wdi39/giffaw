$(document).on("ready", function(){

  $('form').on('submit', function(event){
    event.preventDefault();

    $.ajax({

    	// What kind of request
    	method: "GET",

    	// The URL for the request
    	url: "http://api.giphy.com/v1/gifs/search",

      dataType: 'json',

    	// The data to send aka query parameters
    	data: $('form').serialize(),

    	// Code to run if the request succeeds;
    	// the response is passed to the function
    	success: onSuccess,

    	// Code to run if the request fails; the raw request and
    	// status codes are passed to the function
    	error: onError
    });

    function onSuccess(response){
      for (i = 0; i <= 25; i++){
    	   $("div.gif-gallery").append(`<img src="${response.data[i].images.fixed_height.url}">`);
      };
    }


    function onError(xhr, status, errorThrown) {
    	alert("Sorry, there was a problem!");
    	console.log("Error: " + errorThrown);
    	console.log("Status: " + status);
    	console.dir(xhr);
    }

  });

});
