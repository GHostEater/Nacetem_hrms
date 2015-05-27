var app = angular.module('hermes');

var AddStaffCtrl = function($scope,$rootScope,$http,$log,$upload,$filter){
	$rootScope.page = "addStaff";

	$scope.addStaffSuccess = 0;



	$scope.submit = function(){

		$scope.date_birth2 = $filter('date')($scope.date_birth, "yyyy-MMMM-dd");
		$scope.date_confirmation2 = $filter('date')($scope.date_confirmation, "yyyy-MMMM-dd");
		$scope.date_first_app2 = $filter('date')($scope.date_first_app, "yyyy-MMMM-dd");
		$scope.date_present_app2 = $filter('date')($scope.date_present_app, "yyyy-MMMM-dd");
		$scope.date_last_promotion2 = $filter('date')($scope.date_last_promotion, "yyyy-MMMM-dd");


		$upload.upload({
		    url: 'services/addStaff.php',
		    headers: {'Content-Type': $scope.file.type},
		    method: 'POST',
		    file: $scope.file,
		    fields: {"surname":$scope.surname,
		    		 "first":$scope.first,
		    		 "middle":$scope.middle,
		    		 "date_birth":$scope.date_birth2,
		    		 "sex":$scope.sex,
		    		 "state":$scope.state,
		    		 "lga":$scope.lga,
		    		 "cadre":$scope.cadre,
		    		 "designation":$scope.designation,
		    		 "conraiss":$scope.conraiss,
		    		 "date_confirmation":$scope.date_confirmation2,
		    		 "date_first_app":$scope.date_first_app2,
		    		 "date_present_app":$scope.date_present_app2,
		    		 "date_last_promotion":$scope.date_last_promotion2,
		    		 "qualifications":$scope.qualifications,
		    		 "remarks":$scope.remarks
					 }
			})
			.success(function(data) {
				console.log(data);
			  	$scope.addStaffSuccess = 1;
			  	var form = document.getElementById("form");
			    form.reset();
				});
	};
	$scope.reset = function(){
		$scope.addStaffSuccess = 0;
	};
};

app.controller('AddStaffCtrl',AddStaffCtrl);