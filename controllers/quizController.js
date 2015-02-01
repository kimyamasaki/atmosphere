
app.controller('quizController', function($scope, $route) {
  var questions = {
    q1: {
      question: "Q1: What is your opinion on people.",
		  options: ["I can always find the good, even in the most unlikeable people!", "I keep my problems to myself.", "Sheesh, I hate people."],
      nextUrl: '#quiz/q2',
    },
    q2: {
      question: "Q2: You just finished a long day on at work and have arrived home. How do you feel?",
		  options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
      nextUrl: '#quiz/q3',
    },
    q3: {
      question: "Q3: You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
		  options: ["Try to put youself in your friend's shoes. Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
      nextUrl: '#quiz/q4',
    },
    q4: {
    	question: "Q4: You just complete a test and you didn't do too hot on it. How are you feeling?",
		  options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
      nextUrl: '#quiz/q5',
    },
    q5: {
    	question: "Q5: What do you most want to do right now?",
		  options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
      nextUrl: '#quiz/q2',
    }
  };


  var question = $route.current.params.question;
  $scope.question = questions[question];


  var currentSum = 0;
  $scope.nextQuestion = function() {
    var checked = document.getElementsByName('answer');
    var ans;

    for (var i = 0, length = checked.length; i < length; i++) {
      if (checked[i].checked) {
          ans = checked[i].value;
      }
    }

    console.log("Last answer: " + ans);
    currentSum = currentSum + parseInt(ans);

    var currentQuestion = 1;
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

    $scope.changeClass(copyCurrentSum);
  };

  // Background transitions
  $scope.changeClass = function(copyCurrentSum) {
    document.body.classList.remove('light');
    document.body.classList.remove('medium');
    document.body.classList.remove('dark');

    if (copyCurrentSum <= .47) {
      document.body.classList.add('light');
      console.log("Happy");
    } else if (copyCurrentSum >= .85) {
      document.body.classList.add('dark');
      console.log("Sad");
    } else {
      document.body.classList.add('medium');
      console.log("Neutral");
    }
  };
});



