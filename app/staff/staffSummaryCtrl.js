var app = angular.module("hermes");

var StaffSummaryCtrl = function ($scope,$rootScope,$http,$log) {

	$rootScope.page = "staffSummary";

	$http.get("services/staffAPI.php")
		 .success(function(data){
		 	$scope.staffs = data;

			$scope.maleStaff = _.where($scope.staffs,{"sex":"Male"});
			$scope.femaleStaff = _.where($scope.staffs,{"sex":"Female"});
		 });
};

app.controller("StaffSummaryCtrl",StaffSummaryCtrl);