document.addEventListener("DOMContentLoaded", function() {
	//store questions and answers
	var qAndA = {
		question: ["The expression of power can best be described as",
					"Which of these foods has the most calories?",
					"Which one of the following set/rep protocols maximally overloads the greatest number muscle fibers, all other factors being equal?",
					"There are a number of established principles of training. Three of them are the principles of:",
					"The primary energy provided to fuel sport and activity participations is provided by:",
					"The most pure aerobic activity you can engage in is:",
					"Which one of the following is not a two-jointed muscle?"],
		choices: ["Force x Speed x Time x Effort", "Speed x Force divided by Momentum", "Distance moved divided by Speed x Volume", "Force x Distance divided by Time",
					"One medium-size baked potato with a teaspoon of butter", "A four ounce roasted chicken breast (skinless)", "Two ounces of candy corn (approximately 32 pieces)", "A 16oz fountain cola",
					"Five sets of 5 repetitions at 65% of your 1RM", "Five sets of 10 repetitions at 60% of your 1RM", "Three sets of maximum repetitions (to volitional muscular fatigue) at 75% of your 1RM", "60% of your 1RM x 10 reps, 65% x 8 reps, 70% x 6 reps, and 75% x 4 reps",
					"Modification, Energy Systems, and Effort", "Overload, Recovery/Adaptation, and Progression", "Volume, Specificity, and Genetics", "Aerobic, Anaerobic, and immediate ATP-PC sources",
					"Dietary carbohydrates", "Dietary polyunsaturated fats", "Daily vitamins and mineral intake", "Protein supplementation",
					"A two and a half hour soccer match", "Running a marathon", "Running an ultra-marathon", "Sleeping",
					"Biceps Femoris", "Vastus Medialis", "Gastrocnemius", "Biceps Brachii"],
		answers: [4,3,3,2,1,4,2]
	};

	//global variable counters
	var q = 0;
	var rb1 = 0;
	var rb2 = 1;
	var rb3 = 2;
	var rb4 = 3;
	var ans = 0;

	//global variables to store the number of right and wrong answers
	var userScore = {
		correct: 0,
		incorrect: 0
	};


	document.querySelector("#guessButton").addEventListener("click", function(){
		//Get current setup
		var questionLive = qAndA.question[q];
		var rb1Live = qAndA.choices[rb1];
		var rb2Live = qAndA.choices[rb2];
		var rb3Live = qAndA.choices[rb3];
		var rb4Live = qAndA.choices[rb4];
		var ansLive = qAndA.answers[ans];

		//write live question and answers
		(function showUp() {
			document.getElementById("questions").innerHTML += "test questions";
			document.getElementById("questions").innerHTML += "<p>" + questionLive + "</p>";
			document.getElementById("#r1").innerHTML += rb1Live;
			document.getElementById("#r2").innerHTML += rb2Live;
			document.getElementById("#r3").innerHTML += rb3Live;
			document.getElementById("#r4").innerHTML += rb4Live;
		})();

		//progress the question and answer choice counters
		q = q + 1;
		rb1 = rb1 + 4;
		rb2 = rb2 + 4;
		rb3 = rb3 + 4;
		rb4 = rb4 + 4;
		ans = ans + 1;

		/*compare user answer to correct answer
		if (document.querySelector('input[name="radios"]:checked'.value) == ansLive){
			userScore.correct++;
			alert("got it!")
		} else{
			alert("dont got it!")
			userScore.incorrect++;
		}*/

		var radios = document.getElementsByName('radios');

		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked == ansLive) {
				userScore.correct++;
				alert("You are correct!");
			} else {
					alert("dont got it!");
					userScore.incorrect++;
			}
		}


	});
});