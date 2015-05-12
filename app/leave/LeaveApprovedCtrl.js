var app = angular.module("hermes");

var LeaveApprovedCtrl = function ($scope,$rootScope,$http,$log,$location) {

	$rootScope.page = "leaveApproved";

	$http.get("services/leaveAPI.php")
		 .success(function(data){
		 	$scope.leave = data;

		 	$scope.leaveApproved = _.where($scope.leave,{"status":"1"});
		 });
	$scope.table = function(leave_id){
		$location.url('/leave/review/'+leave_id);
	};
};

app.controller("LeaveApprovedCtrl",LeaveApprovedCtrl);