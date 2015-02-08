
// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
	$scope.weather = app.weather;

	$scope.questions = [
	  {name:'Question 1', url:'#quiz/q1'},
	  {name:'Question 2', url:'#quiz/q2'},
	  {name:'Question 3', url:'#quiz/q3'},
	  ]
});