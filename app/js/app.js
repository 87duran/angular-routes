var app = angular.module('angularRoutes', ['ngRoute']);

app.config(function($routeProvider) {
	//routing goes here
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/main.html',
			controller: 'mainCtrl',
			resolve: {
				username: function() {
					return prompt("what is your name?");
				},
				age: function() {
					return prompt('what is your age?');
				}
			}
		})
		.when('/other', {
			templateUrl: 'app/views/banana.html'
		});

});