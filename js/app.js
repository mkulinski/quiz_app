document.addEventListener("DOMContentLoaded", function() {

	//mini-database
	var qAndA = {
		question: [
			"Which of these foods has the most calories?",
			"Which one of the following set/rep protocols maximally overloads the greatest number muscle fibers, all other factors being equal?",
			"There are a number of established principles of training. Three of them are the principles of:",
			"The primary energy provided to fuel sport and activity participations is provided by:",
			"The most pure aerobic activity you can engage in is:",
			"Which one of the following is not a two-jointed muscle?"],
		choices: [
			"One medium-size baked potato with a teaspoon of butter", "A four ounce roasted chicken breast (skinless)", "Two ounces of candy corn (approximately 32 pieces)", "A 16oz fountain cola",
			"Five sets of 5 repetitions at 65% of your 1RM", "Five sets of 10 repetitions at 60% of your 1RM", "Three sets of maximum repetitions (to volitional muscular fatigue) at 75% of your 1RM", "60% of your 1RM x 10 reps, 65% x 8 reps, 70% x 6 reps, and 75% x 4 reps",
			"Modification, Energy Systems, and Effort", "Overload, Recovery/Adaptation, and Progression", "Volume, Specificity, and Genetics", "Aerobic, Anaerobic, and immediate ATP-PC sources",
			"Dietary carbohydrates", "Dietary polyunsaturated fats", "Daily vitamins and mineral intake", "Protein supplementation",
			"A two and a half hour soccer match", "Running a marathon", "Running an ultra-marathon", "Sleeping",
			"Biceps Femoris", "Vastus Medialis", "Gastrocnemius", "Biceps Brachii"],
		answers: [4,3,3,2,1,4,2]
	};

	//global variables to store the number of right and wrong answers
	var userScore = 0;

	//global variable counters
	var q = 0;
	var rb1 = 0;
	var rb2 = 1;
	var rb3 = 2;
	var rb4 = 3;
	var ans = 0;
	document.querySelector(".guessButton").addEventListener("click", function(){

		//Get current setup
		var questionLive = qAndA.question[q];
		var rb1Live = qAndA.choices[rb1];
		var rb2Live = qAndA.choices[rb2];
		var rb3Live = qAndA.choices[rb3];
		var rb4Live = qAndA.choices[rb4];
		var ansLive = qAndA.answers[ans];

		//write live question and answers
		document.getElementById("questions").innerHTML = "<p>" + questionLive + "</p>";
		document.getElementById("r1").innerHTML = rb1Live;
		document.getElementById("r2").innerHTML = rb2Live;
		document.getElementById("r3").innerHTML = rb3Live;
		document.getElementById("r4").innerHTML = rb4Live;

		//progress the question and answer choice counters
		q = q + 1;
		rb1 = rb1 + 4;
		rb2 = rb2 + 4;
		rb3 = rb3 + 4;
		rb4 = rb4 + 4;
		ans = ans + 1;

		//checks if answer is right or wrong, gets score and alerts user
		var radio = document.querySelector('#content input[type=radio]:checked');
		if (radio.value == ansLive) {
			userScore++;
			alert("You are correct!");
			document.getElementById("score").innerHTML = "Score: " + userScore;
		} else {
			alert("Wrong answer!");
		}

		//clear radio button
		if (radio.checked == true) {
			radio.checked = false;
		}
	});
});