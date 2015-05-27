var app = angular.module("hermes");

var LeaveSummaryCtrl = function ($scope,$rootScope,Leave) {

	$rootScope.page = "leaveSummary";

	Leave.getLeave()
		 .then(function(data){
		 	$scope.staffs = data;

			$scope.staffNo = $scope.staffs.length;
			$scope.maleStaff = _.where($scope.staffs,{"sex":"Male"});

			$scope.maleStaffNo = $scope.maleStaff.length;
			$scope.femaleStaff = _.where($scope.staffs,{"sex":"Female"});
			$scope.femaleStaffNo = $scope.femaleStaff.length;
		 });
};

app.controller("LeaveSummaryCtrl",LeaveSummaryCtrl);