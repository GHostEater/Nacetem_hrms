var app = angular.module("hermes");

var StaffListCtrl = function ($scope,$rootScope,$location,Staff) {
	$rootScope.page = "staffList";
	$rootScope.field = "name";

    Staff.getStaff()
        .then(function(data){
            $scope.staffs = data;
        });

	$scope.table = function(staff_id){
		$location.url('/staff/'+staff_id);
	};

};

app.controller("StaffListCtrl",StaffListCtrl);