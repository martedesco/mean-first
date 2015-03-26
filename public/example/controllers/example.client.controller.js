angular.module('example').controller('ExampleController', ['$scope',
	'Authentication',
	function($scope, Authentication) {
		$scope.authentication = Authentication;
		//Nav-bar collapsing menu
		$scope.isCollapsed = true;

	}
]);