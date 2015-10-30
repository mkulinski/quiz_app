
$(document).ready(function(){
  var count = 1;
  var randomNumber = Math.floor((Math.random() * 100) + 1);

//New Game
  $(".new").click(function(){
    $("#userGuess").val('');
    $("#count").text('0');
    $("#feedback").text("Make your Guess!");
    randomNumber = Math.floor((Math.random() * 100) + 1);
  });
    //require user input a number between 1 and 100
	$("input").on("change", function() {
		var initGuess = $("#userGuess").val();
		if (initGuess > 100 || initGuess < 1) {
		alert("Enter a Number Between 1 and 100");
		}
	});
 //grab input from user and display how close they are
  $("#guessButton").click(function(e){
  	//init variables
  	var initGuess = $("#userGuess").val();
	var guess = Math.abs(initGuess - randomNumber);

  	//add each guess to the guesslist
    $(function addToGuestList() {
    	$("#guessList").append('<li>'+ initGuess + '</li>');
    });

    //tells them how close they are
    $(function userInput() {
		  if (guess == 0) {
		    $("#feedback").text("You Got It!");
		  } else if (guess <= 10){
		    $("#feedback").text("close!");
		  } else if (guess <= 25) {
		  	$("#feedback").text("almost there");
		  } else if (guess <= 50) {
		  	$("#feedback").text("still kinda far");
		  } else if (guess <= 100) {
		  	$("#feedback").text("so far");
		  } else {
		  	$("#feedback").text("So Close It Hurts");
		  }
    });
    
    //counter
    $(function counter(){
      var userNumber = $("#userGuess").val();
      $("#count").text(count);
      count++
    });
  
    e.preventDefault();
  });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


