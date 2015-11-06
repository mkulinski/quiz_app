document.addEventListener("DOMContentLoaded", function() {


	(function question() {
		var randomNumber = Math.floor((Math.random() * 4));

		switch (0) {
			case 0:
				document.getElementById("question").innerHTML += "How much wood can a woodchuck throw?";
				document.getElementById("answerOne").innerHTML += "tessss1";
				document.getElementById("answerTwo").innerHTML += "3";
				document.getElementById("answerThree").innerHTML += "5";
				document.getElementById("answerFour").innerHTML += '<span id="right">7</span>';
				break;
			case 1:
				document.getElementById("question").innerHTML += "How tall am I?";
				document.getElementById("answerOne").innerHTML += "tessss1";
				document.getElementById("answerTwo").innerHTML += "3";
				document.getElementById("answerThree").innerHTML += "5";
				document.getElementById("answerFour").innerHTML += "7";
				break;
			case 2:
				document.getElementById("question").innerHTML += "What's the square root of F U?";
				document.getElementById("answerOne").innerHTML += "tessss1";
				document.getElementById("answerTwo").innerHTML += "3";
				document.getElementById("answerThree").innerHTML += "5";
				document.getElementById("answerFour").innerHTML += "7";
				break;
			case 3:
				document.getElementById("question").innerHTML += "What is you times me?";
				document.getElementById("answerOne").innerHTML += "tessss1";
				document.getElementById("answerTwo").innerHTML += "3";
				document.getElementById("answerThree").innerHTML += "5";
				document.getElementById("answerFour").innerHTML += "7";
				break;
			default:
				alert("hit default");
		}

	})();


	document.querySelector("#guessButton").addEventListener("click", function(e){
		//document.getElementById('.answer').checked ;
		var x = document.getElementById('answer').checked
		//grabs what radio button has been checked
		if(x == ) {
			alert("Woah, this actually worked")
		} else {
			alert("You Wrong!")
		}

		question();

	}, false);
});