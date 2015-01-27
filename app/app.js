var app = angular.module('quizApp', []);


app.directive('quiz', function(quizQuestions) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				// scope.score = 0;
			};

			scope.getQuestion = function() {
				var q = quizQuestions.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
				} else {
					scope.quizOver = true;
				}
			};



			scope.class="blue";
			scope.changeClass = function(copyCurrentSum) {
				if (copyCurrentSum <= .47) {
					scope.class = "red";
					console.log("Happy");
				} else if (copyCurrentSum >= .85) {
					scope.class = "blue";
					console.log("Sad");
				} else {
					scope.class = "green";
					console.log("Neutral");
				}
			};


			var currentSum = 0;
			//var oldAns = 0;
			scope.nextQuestion = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();



				console.log("Last answer: " + ans);
				currentSum = currentSum + parseInt(ans);
				//console.log("This is the current sum of numbers: " + currentSum);

				scope.id++;

				var currentQuestion = scope.id;
				console.log("--We are on question " + currentQuestion + "--");
				var copyCurrentSum = currentSum;

				//I'm sorry this is really huge, but it needs to divide by a
				//certain number based on what question you are on.

				if(currentQuestion == 1){

					console.log("Total sum: "+ copyCurrentSum +" out of 3");
					copyCurrentSum = copyCurrentSum/3
					console.log("divided by 3 is "+ copyCurrentSum);
				};

				if(currentQuestion == 2){

					console.log("Total sum: "+ copyCurrentSum +" out of 6");
					copyCurrentSum = copyCurrentSum/6
					console.log("divided by 6 is "+ copyCurrentSum);
				};

				if(currentQuestion == 3){

					console.log("Total sum: "+ copyCurrentSum +" out of 9");
					copyCurrentSum = copyCurrentSum/9
					console.log("divided by 12 is "+ copyCurrentSum);
				};

				if(currentQuestion == 4){

					console.log("Total sum: "+ copyCurrentSum +" out of 12");
					copyCurrentSum = copyCurrentSum/12
					console.log("divided by 12 is "+ copyCurrentSum);
				};

				if(currentQuestion == 5){

					console.log("Total sum: "+ copyCurrentSum +" out of 15");
					copyCurrentSum = copyCurrentSum/15
					console.log("divided by 12 is "+ copyCurrentSum);
				};

				scope.getQuestion();
				scope.changeClass(copyCurrentSum);

			}

			scope.reset();
		}
	}
});

app.factory('quizQuestions', function() {
	var questions = [
		{
			question: "Q1: What is your opinion on people.",
			options: ["I can always find the good, even in the most unlikeable people!", "I keep my problems to myself.", "Sheesh, I hate people."],
		},
		{
			question: "Q2: You just finished a long day on at work and have arrived home. How do you feel?",
			options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
		},
		{
			question: "Q3: You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
			options: ["Try to put youself in your friend's shoes. Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
		},
		{
			question: "Q4: You just complete a test and you didn't do too hot on it. How are you feeling?",
			options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
		},
		{
			question: "Q5: What do you most want to do right now?",
			options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});
