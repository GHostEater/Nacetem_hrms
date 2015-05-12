var app = angular.module("hermes");

var LogoutCtrl = function($scope,$rootScope,$http,$location) {
	$http.get('services/logout.php')
	.success(function(data){
		$scope.logout = data.loggedout;
		if ($scope.logout) {
			$rootScope.authenticated = 0;
			delete $rootScope.name;	
		};
		
	});
};

app.controller("LogoutCtrl",LogoutCtrl);