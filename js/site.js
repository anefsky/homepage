var populateBackgroundImage = function(selector, image) {
	var selectorEl = document.querySelector(selector);
	selectorEl.style.backgroundImage = 'url(' + image + ')';
}

var myApp = angular.module("myApp", []);

myApp.controller('myCntl', function($scope, $http) {
	$http.get("data/person.json")
	.then(function(response) {
		$scope.person = response.data.person;
		populateBackgroundImage('#profile .my-pic', $scope.person.personImage);
		populateBackgroundImage('header', $scope.person.heroImage);

	});
});
