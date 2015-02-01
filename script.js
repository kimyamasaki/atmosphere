// create the module and name it scotchApp
var app = angular.module('quizApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })
    .when('/quiz/:question', {
    	templateUrl: 'pages/quiz.html',
    	controller: 'quizController'
    })
});

// window.onload = function() {
// 	console.log(document.getElementById('hammer-pad'));

// 	var mc = new Hammer(document.getElementById('hammer-pad'));
// 	mc.on('pan', function(ev) {
// 		alert('The user panned');
// 	});
// };

// app.directive('quiz', function(quizQuestions) {
//   return {
//     restrict: 'AE',
//     scope: {},

//     link: function(scope, elem, attrs) {
//       scope.start = function() {
//         scope.id = 0;
//         scope.quizOver = false;
//         scope.inProgress = true;
//         scope.getQuestion();
//       };


//       scope.reset = function() {
//         scope.inProgress = false;
//         // scope.score = 0;
//       };

//       scope.getQuestion = function() {
//         var q = quizQuestions.getQuestion(scope.id);
//         if(q) {
//           scope.question = q.question;
//           scope.options = q.options;
//           scope.answer = q.answer;
//         } else {
//           scope.quizOver = true;
//         }
//       };



//       scope.class="blue";
//       scope.changeClass = function(copyCurrentSum) {
//         if (copyCurrentSum <= .47) {
//           scope.class = "red";
//           console.log("Happy");
//         } else if (copyCurrentSum >= .85) {
//           scope.class = "blue";
//           console.log("Sad");
//         } else {
//           scope.class = "green";
//           console.log("Neutral");
//         }
//       };

//       // scope.nextQuestion1 = function() {
//       //   console.log('hi');
//       //   };

//       var currentSum = 0;
//       //var oldAns = 0;
//       $scope.nextQuestion = function() {
//         console.log('hi');

//         if(!$('input[name=answer]:checked').length) return;

//         var ans = $('input[name=answer]:checked').val();



//         console.log("Last answer: " + ans);
//         currentSum = currentSum + parseInt(ans);
//         //console.log("This is the current sum of numbers: " + currentSum);

//         scope.id++;

//         var currentQuestion = scope.id;
//         console.log("--We are on question " + currentQuestion + "--");
//         var copyCurrentSum = currentSum;

//         //I'm sorry this is really huge, but it needs to divide by a
//         //certain number based on what question you are on.

//         if(currentQuestion == 1){

//           console.log("Total sum: "+ copyCurrentSum +" out of 3");
//           copyCurrentSum = copyCurrentSum/3
//           console.log("divided by 3 is "+ copyCurrentSum);
//         };

//         if(currentQuestion == 2){

//           console.log("Total sum: "+ copyCurrentSum +" out of 6");
//           copyCurrentSum = copyCurrentSum/6
//           console.log("divided by 6 is "+ copyCurrentSum);
//         };

//         if(currentQuestion == 3){

//           console.log("Total sum: "+ copyCurrentSum +" out of 9");
//           copyCurrentSum = copyCurrentSum/9
//           console.log("divided by 12 is "+ copyCurrentSum);
//         };

//         if(currentQuestion == 4){

//           console.log("Total sum: "+ copyCurrentSum +" out of 12");
//           copyCurrentSum = copyCurrentSum/12
//           console.log("divided by 12 is "+ copyCurrentSum);
//         };

//         if(currentQuestion == 5){

//           console.log("Total sum: "+ copyCurrentSum +" out of 15");
//           copyCurrentSum = copyCurrentSum/15
//           console.log("divided by 12 is "+ copyCurrentSum);
//         };

//         scope.getQuestion();
//         scope.changeClass(copyCurrentSum);

//       }

//       scope.reset();
//     }
//   }
// });
