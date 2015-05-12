var app = angular.module("hermes");

var LoginCtrl = function ($scope,$http,$rootScope,$upload,$location) {
	if ($rootScope.name) {
		$location.url('/');
	};

	$scope.login = function(){
		$upload.upload({
	    url: 'services/login.php',
	    method: 'POST', 
	    fields: {"username":$scope.username,
				 "password":$scope.password},
		})
		.success(function(data){
			$rootScope.name = data.name;
			$rootScope.error = data.error;

			if ($rootScope.name){
				$rootScope.authenticated = 1;
				$location.url('/');
		   }
		   else if($rootScope.error){
		   		$rootScope.authenticated = 0;
		   };
		});
	};
};

app.controller("LoginCtrl",LoginCtrl);