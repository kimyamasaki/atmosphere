
<<<<<<< HEAD
var currentSum = 0;
var currentQuestion = 0;

app.controller('quizController', function($scope, $route) {
  var questions = {
    q1: {
      question: "What is your opinion on people.",
=======
app.controller('quizController', function($scope, $route) {
  var questions = {
    q1: {
      question: "Q1: What is your opinion on people.",
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
		  options: ["I can always find the good, even in the most unlikeable people!", "I keep my problems to myself.", "Sheesh, I hate people."],
      nextUrl: '#quiz/q2',
    },
    q2: {
<<<<<<< HEAD
      question: "You just finished a long day on at work and have arrived home. How do you feel?",
=======
      question: "Q2: You just finished a long day on at work and have arrived home. How do you feel?",
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
		  options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
      nextUrl: '#quiz/q3',
    },
    q3: {
<<<<<<< HEAD
      question: "You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
=======
      question: "Q3: You just talked with your friend and the conversation got a little heated. The situation is tense right now. What do you do?",
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
		  options: ["Try to put youself in your friend's shoes. Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
      nextUrl: '#quiz/q4',
    },
    q4: {
<<<<<<< HEAD
    	question: "You just complete a test and you didn't do too hot on it. How are you feeling?",
=======
    	question: "Q4: You just complete a test and you didn't do too hot on it. How are you feeling?",
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
		  options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
      nextUrl: '#quiz/q5',
    },
    q5: {
<<<<<<< HEAD
    	question: "What do you most want to do right now?",
		  options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
      nextUrl: '#quiz/results',
=======
    	question: "Q5: What do you most want to do right now?",
		  options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
      nextUrl: '#quiz/q2',
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
    }
  };


  var question = $route.current.params.question;
  $scope.question = questions[question];


<<<<<<< HEAD
  $scope.isQuizOver = function(){
    if (currentQuestion == 5){
      $scope.quizOver = true;
      console.log("Quiz over is: " + $scope.quizOver);
    }
  }

  $scope.isQuizOver();


=======
  var currentSum = 0;
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
  $scope.nextQuestion = function() {
    var checked = document.getElementsByName('answer');
    var ans;

    for (var i = 0, length = checked.length; i < length; i++) {
      if (checked[i].checked) {
          ans = checked[i].value;
<<<<<<< HEAD
          console.log("Answer picked: " + ans);

          currentSum = currentSum + parseInt(ans);
          console.log("current sum is: "+ currentSum);
      }
    }


    currentQuestion++;
=======
      }
    }

    console.log("Last answer: " + ans);
    currentSum = currentSum + parseInt(ans);

    var currentQuestion = 1;
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
    console.log("--We are on question " + currentQuestion + "--");
    var copyCurrentSum = currentSum;

    //I'm sorry this is really huge, but it needs to divide by a
    //certain number based on what question you are on.

    if(currentQuestion == 1){
<<<<<<< HEAD
      console.log("Total sum: "+ copyCurrentSum + " out of 3");
      copyCurrentSum = copyCurrentSum/3
      console.log("divided by 3 is "+ copyCurrentSum);
      document.body.classList.add('light');
=======

      console.log("Total sum: "+ copyCurrentSum +" out of 3");
      copyCurrentSum = copyCurrentSum/3
      console.log("divided by 3 is "+ copyCurrentSum);
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
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

<<<<<<< HEAD
    if(currentQuestion == 6){
      $scope.quizOver = true;
    }

=======
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
    $scope.changeClass(copyCurrentSum);
  };

  // Background transitions
<<<<<<< HEAD
  var weather = document.getElementById("weather");
  var sunny = document.getElementById('sun');
  var cloudy = document.getElementById('cloud');
  var rainy = document.getElementById('rain');

  $scope.changeClass = function(copyCurrentSum) {
    console.log("I am being called");

    if (copyCurrentSum <= .47) {
      document.body.classList.add('light');
      // cloudy.style.visibility = "hidden";
      // rainy.style.visibility = "hidden";
      document.body.classList.add('sun');
      console.log("Happy");

    } else if (copyCurrentSum >= .80) {
      document.body.classList.add('dark');
      document.body.classList.add('rain');
      console.log("Sad");

    } else {
      document.body.classList.add('medium');
      document.body.classList.add('cloud');
=======
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
>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
      console.log("Neutral");
    }
  };
});
<<<<<<< HEAD
=======



>>>>>>> 6b4f70df2ef5088225a74889a1033f0e1e7fc09d
