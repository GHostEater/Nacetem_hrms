var app = angular.module("hermes");

var StaffSummaryCtrl = function ($scope,$rootScope,Staff) {

	$rootScope.page = "staffSummary";

	Staff.getStaff()
		 .then(function(data){
		 	$scope.staffs = data;

			$scope.maleStaff = _.where($scope.staffs,{"sex":"Male"});
			$scope.femaleStaff = _.where($scope.staffs,{"sex":"Female"});
		 });
};

app.controller("StaffSummaryCtrl",StaffSummaryCtrl);