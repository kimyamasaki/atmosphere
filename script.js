// create the module and name it scotchApp
var app = angular.module('quizApp', ['ngRoute']);

app.weather = 1;

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