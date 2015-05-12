var app = angular.module("hermes");

var StaffListCtrl = function ($scope,$http,$rootScope,$location) {
	$rootScope.page = "staffList";
	$rootScope.field = "name";

	$http.get('services/staffAPI.php')
	.success(function(data){
		$scope.staffs = data;
	});

	$scope.table = function(staff_id){
		$location.url('/staff/'+staff_id);
	};

};

app.controller("StaffListCtrl",StaffListCtrl);