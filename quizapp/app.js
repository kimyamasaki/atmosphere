var app = angular.module('quizApp', []);

app.directive('quiz', function(quizQuestions) {
	// $(this).css({"background-color": "red"});

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
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizQuestions.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					// scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			// scope.checkAnswer = function() {
			// 	if(!$('input[name=answer]:checked').length) return;

			// 	var ans = $('input[name=answer]:checked').val();

			// 	if(ans == scope.options[scope.answer]) {
			// 		scope.score++;
			// 		scope.correctAns = true;
			// 	} else {
			// 		scope.correctAns = false;
			// 	}

			// 	scope.answerMode = false;
			// };

			scope.nextQuestion = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				console.log(ans);
				// if(ans == scope.options[0]) {
				// 	scope.score++;
				// }

				if (ans < scope.options[1]) {//} && (ans < 4)) {
					console.log("small");
					scope.score--;
				} else if (ans > scope.options[1]){ //} && (ans > -1)) {
					console.log("big")
					scope.score++;
				} else { //} && (ans > -1)) {
					console.log("equal")
				}

				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizQuestions', function() {
	var questions = [
		{
			question: "Which of these choices best describe you.",
			options: ["I can always find the good, even in the most unlikeable people.", "I keep my problems to myself.", "Sheesh, I hate people."],
			// answer: 0
		},
		{
			question: "sfasfsadgsafasfda",
			options: ["Hey There!", "Hi", "Go away!"],
			// answer: 0
		},
		{
			question: "You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
			options: ["Try to put youself in your friend's shoes. Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
			// answer: 3
		},
		{
			question: "You just complete a test",
			options: ["Atlanta", "Sydney", "Athens"],
			// answer: 0
		},
		{
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Marie Curie"],
			// answer: 1
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
