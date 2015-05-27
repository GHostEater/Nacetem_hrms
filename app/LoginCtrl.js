var app = angular.module("hermes");

var LoginCtrl = function ($scope,$rootScope,$location,Auth) {
	if ($rootScope.name) {
		$location.url('/');
	}

	$scope.login = function(){
		Auth.Login($scope.username,$scope.password)
            .then(function(data){
                $rootScope.name = data.name;
                $rootScope.error = data.error;

                if ($rootScope.name){
                    $rootScope.authenticated = 1;
                    $location.url('/');
                }
                else if($rootScope.error){
                    $rootScope.authenticated = 0;
                }
            });
	};
};

app.controller("LoginCtrl",LoginCtrl);