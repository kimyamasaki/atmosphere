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
