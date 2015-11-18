document.addEventListener("DOMContentLoaded", function () {

	//mini-database
	var questionsAndAnswers = [
	 {
	 question: "Which of these foods has the most calories?",
	 answers: [
	 "One medium-size baked potato with a teaspoon of butter",
	 "A four ounce roasted chicken breast (skinless)",
	 "Two ounces of candy corn (approximately 32 pieces)",
	 "A 16oz fountain cola"
	 ],
	 theGoodOne: 4
	 },
	 {
	 question: "Which of these foods has the most calories?",
	 answers: [
	 "One medium-size baked potato with a teaspoon of butter",
	 "A four ounce roasted chicken breast (skinless)",
	 "Two ounces of candy corn (approximately 32 pieces)",
	 "A 16oz fountain cola"
	 ],
	 theGoodOne: 4
	 }

	 ];

	//global variables to store the number of right and wrong answers
	var userScore = 0;

	//global variable counters
	var q = 0;
	var rb1 = 0;
	var rb2 = 1;
	var rb3 = 2;
	var rb4 = 3;
	var ans = 0;
	document.querySelector(".guessButton").addEventListener("click", function () {



		//write live question and answers
		var questionLive =  questionsAndAnswers[q].question;
		var id;
		for(var i =  0; i <questionsAndAnswers.answers.length; ++i) {
			id =  "r" + (i+1);
			document.getElementById[id].innerHTML = questionsAndAnswers[q].answers[i];
		}

		questionsAndAnswers[q].theGoodOne;


		//progress the question and answer choice counters
		q = q + 1;
		rb1 = rb1 + 4;
		rb2 = rb2 + 4;
		rb3 = rb3 + 4;
		rb4 = rb4 + 4;
		ans = ans + 1;

		//checks if answer is right or wrong, gets score and alerts user
		var radio = document.querySelector('#options input[type=radio]:checked');
		if (radio.value == questionsAndAnswers.answers[ans]) {
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

		//radio.checked = false;
		//radio.checked = !radio.checked;
	});
});