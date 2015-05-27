var app = angular.module("hermes");

var LeaveApprovedCtrl = function ($scope,$rootScope,Leave) {

	$rootScope.page = "leaveApproved";

	Leave.getLeave()
		 .then(function(data){
		 	$scope.leave = data;

		 	$scope.leaveApproved = _.where($scope.leave,{"status":"1"});
		 });
};

app.controller("LeaveApprovedCtrl",LeaveApprovedCtrl);