var app = angular.module("hermes");

var LeavePendingCtrl = function ($scope,$rootScope,$http,$log,$location) {

	$rootScope.page = "leavePending";

	$http.get("services/leaveAPI.php")
		 .success(function(data){
		 	$scope.leave = data;

		 	$scope.leavePending = _.where($scope.leave,{"status":"0"});
		 });
	$scope.table = function(leave_id){
		$location.url('/leave/review/'+leave_id);
	};
};

app.controller("LeavePendingCtrl",LeavePendingCtrl);