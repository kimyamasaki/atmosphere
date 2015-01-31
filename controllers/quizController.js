// // create the controller and inject Angular's $scope
// app.controller('q1Controller', function($scope) {
//   console
//   $scope.question = 'This is aq?';

//   $scope.formData = {};


//   $scope.list = [{
//   		'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   		// 'id': '1'
//   	}, {
//   		'answer': 'Suspendisse fringilla porta aliquet.',
//   		// 'id': '2'
//   	}, {
//   		'answer': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
//   		// 'id': '3'
//   	}]


// 	var currentSum = 0;
// 	//var oldAns = 0;
// 	$scope.nextQuestion = function() {
// 		console.log($scope.formData);
// 	}
// });


app.controller('quizController', function($scope, $route) {
  var questions = {
    q1: {
        question: "Q1: What is your opinion on people.",
		options: ["I can always find the good, even in the most unlikeable people!", "I keep my problems to myself.", "Sheesh, I hate people."],
    },
    q2: {
        question: "Q2: You just finished a long day on at work and have arrived home. How do you feel?",
		options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
    },
    q3: {
        question: "Q3: You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
		options: ["Try to put youself in your friend's shoes. Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
    },
    q4: {
    	question: "Q4: You just complete a test and you didn't do too hot on it. How are you feeling?",
		options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
    },
    q5: {
    	question: "Q5: What do you most want to do right now?",
		options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
    }
  };

  console.log($route);

  var question = $route.current.params.question;
  $scope.question = questions[question];
});