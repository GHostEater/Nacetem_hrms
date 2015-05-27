var app = angular.module("hermes");

var StaffSearchCtrl = function ($scope,$rootScope,Staff) {
	$rootScope.page = "staffSearch";

    Staff.getStaff()
        .then(function(data){
            $scope.staffs = data;
        });

};

app.controller("StaffSearchCtrl",StaffSearchCtrl);