var app = angular.module('angularRoutes');

app.controller('mainCtrl', function($scope, username, age) {
	$scope.test = 'hello world';
	$scope.username = username;
	$scope.age = age;
});