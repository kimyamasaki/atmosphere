
var currentSum = 0;
var currentQuestion = 0;

app.controller('quizController', function($scope, $route) {
  var questions = {
    q1: {
      question: "Generally, what is your opinion on people?",
		  options: ["I can always find the good in everyone!", "I keep my problems to myself.", "Sheesh, I hate people."],
      nextUrl: '#quiz/q2',
    },
    q2: {
      question: "You just finished a long day at work and have arrived home. How do you feel?",
		  options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
      nextUrl: '#quiz/q3',
    },
    q3: {
      question: "A conversation with your friend got a little heated. The situation is tense. What do you do?",
		  options: ["Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
      nextUrl: '#quiz/q4',
    },
    q4: {
    	question: "You just completed a test but you didn't do too well on it. How are you feeling?",
		  options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
      nextUrl: '#quiz/q5',
    },
    q5: {
    	question: "If you could do anything right now, what would you do?",
		  options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
      nextUrl: '#quiz/results',
    }
  };

  var results = ["You are fine and dandy today!", "You seem alright.", "You seem to be a little under the weather."];

  //console.log(results);


  var question = $route.current.params.question;
  $scope.question = questions[question];

  $scope.resultMessage = function(copyCurrentSum){
    copyCurrentSum = copyCurrentSum/15
    //console.log('The final average is' + copyCurrentSum);

    if (copyCurrentSum <= .47) {

      results = results[0];
      document.getElementById("moodResults").innerHTML = results;
      console.log(results);
    } else if (copyCurrentSum >= .80) {
      results = results[2];
      document.getElementById("moodResults").innerHTML = results;
      console.log(results);
    } else {
      results = results[1];
      document.getElementById("moodResults").innerHTML = results;
      console.log(results);
    }
  }

  $scope.isQuizOver = function(){
    if (currentQuestion == 5){
      $scope.quizOver = true;
      console.log("Quiz over is: " + $scope.quizOver);
      $scope.resultMessage(currentSum);

    }
  }

  $scope.isQuizOver();


  $scope.nextQuestion = function() {
    var checked = document.getElementsByName('answer');
    var ans;

    for (var i = 0, length = checked.length; i < length; i++) {
      if (checked[i].checked) {
          ans = checked[i].value;
          console.log("Answer picked: " + ans);

          currentSum = currentSum + parseInt(ans);
          console.log("current sum is: "+ currentSum);
      }
    }


    currentQuestion++;
    console.log("--We are on question " + currentQuestion + "--");
    var copyCurrentSum = currentSum;

    //I'm sorry this is really huge, but it needs to divide by a
    //certain number based on what question you are on.

    if(currentQuestion == 1){
      console.log("Total sum: "+ copyCurrentSum + " out of 3");
      copyCurrentSum = copyCurrentSum/3
      console.log("divided by 3 is "+ copyCurrentSum);
      document.body.classList.add('light');
    };

    if(currentQuestion == 2){

      console.log("Total sum: "+ copyCurrentSum +" out of 6");
      copyCurrentSum = copyCurrentSum/6
      console.log("divided by 6 is "+ copyCurrentSum);
    };

    if(currentQuestion == 3){

      console.log("Total sum: "+ copyCurrentSum +" out of 9");
      copyCurrentSum = copyCurrentSum/9
      console.log("divided by 9 is "+ copyCurrentSum);
    };

    if(currentQuestion == 4){

      console.log("Total sum: "+ copyCurrentSum +" out of 12");
      copyCurrentSum = copyCurrentSum/12
      console.log("divided by 12 is "+ copyCurrentSum);
    };

    if(currentQuestion == 5){

      console.log("Total sum: "+ copyCurrentSum +" out of 15");
      copyCurrentSum = copyCurrentSum/15
      console.log("divided by 15 is "+ copyCurrentSum);
    };

    if(currentQuestion == 6){
      $scope.quizOver = true;
    }

    $scope.changeClass(copyCurrentSum);
  };

  // Background transitions
  var weather = document.getElementById("weather");
  var sunny = document.getElementById('sun');
  var cloudy = document.getElementById('cloud');
  var rainy = document.getElementById('rain');

  $scope.changeClass = function(copyCurrentSum) {

     if (copyCurrentSum <= .47) {
      document.body.classList.add('light');
      document.body.classList.remove('medium');
      document.body.classList.remove('dark');
<<<<<<< HEAD

=======
      // cloudy.style.visibility = "hidden";
      // rainy.style.visibility = "hidden";
>>>>>>> 572866134188d282319cb3b7c426a5ff2e413d07
      document.body.classList.add('sun');
      document.body.classList.remove('rain')
      document.body.classList.remove('cloud')
      console.log("Happy");

    } else if (copyCurrentSum >= .80) {
      document.body.classList.add('dark');
      document.body.classList.remove('medium');
      document.body.classList.remove('light');

      document.body.classList.add('rain');
      document.body.classList.remove('sun')
      document.body.classList.remove('cloud')
      console.log("Sad");

    } else {
      document.body.classList.add('medium');
      document.body.classList.remove('light');
      document.body.classList.remove('dark');

      document.body.classList.add('cloud');
      document.body.classList.remove('rain')
      document.body.classList.remove('sun')
      console.log("Neutral");
    }
  };

});
