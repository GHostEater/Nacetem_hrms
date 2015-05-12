var app = angular.module("hermes");

var StaffSearchCtrl = function ($scope,$http,$rootScope,$location) {
	$rootScope.page = "staffSearch";
	$rootScope.field = "name";

	$http.get('services/staffAPI.php')
	.success(function(data){
		$scope.staffs = data;
	});

};

app.controller("StaffSearchCtrl",StaffSearchCtrl);