var app = angular.module("hermes");

var StaffDetailCtrl = function ($scope,$rootScope,$routeParams,$upload,Staff) {

	$rootScope.page = "staffDetail";

	$scope.staffDeleteSuccess = 0;

    Staff.getStaff()
        .then(function(data){
            $scope.staffs = data;
            $scope.staff = _.find($scope.staffs,{"staff_id":$routeParams.staff_id});
        });

	$scope.deleteStaff = function(){
		$upload.upload({
		    url: 'services/deleteStaff.php',
		    method: 'POST',
		    fields: {"sn":$scope.staff.staff_id}
		})
		.success(function(data){
			$scope.staffDeleteSuccess = 1;
		})
	};
};

app.controller("StaffDetailCtrl",StaffDetailCtrl);