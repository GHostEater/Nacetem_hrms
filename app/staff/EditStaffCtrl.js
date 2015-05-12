var app = angular.module('hermes');

var EditStaffCtrl = function($scope,$rootScope,$http,$log,$upload,$filter,$routeParams){
	$rootScope.page = "editStaff";

	delete $scope.file;

	$scope.editStaffSuccess = 0;
	$scope.changeImg = 0;

	$http.get('services/staffAPI.php')
			.success(function(data){
				$scope.staffs = data;
				$scope.staff = _.find($scope.staffs, {"staff_id":$routeParams.staff_id});
			});

	$scope.imgToggle = function (){
	    if ($scope.changeImg === 1) i = 1;
	    if ($scope.changeImg === 0) i = 0;

	    if (i === 1){
	      delete $scope.file;
	      $('.file').replaceWith($('.file').clone());
	      $scope.changeImg = 0;
	    }
	    else if (i === 0){
	      $scope.changeImg = 1;
	    }
	}

	$scope.submit = function(){

		if ($scope.file){
			$scope.date_birth2 = $filter('date')($scope.staff.date_birth, "yyyy-MMMM-dd");
			$scope.date_confirmation2 = $filter('date')($scope.staff.date_confirmation, "yyyy-MMMM-dd");
			$scope.date_first_app2 = $filter('date')($scope.staff.date_first_app, "yyyy-MMMM-dd");
			$scope.date_present_app2 = $filter('date')($scope.staff.date_present_app, "yyyy-MMMM-dd");
			$scope.date_last_promotion2 = $filter('date')($scope.staff.date_last_promotion, "yyyy-MMMM-dd");


			$upload.upload({
			    url: 'services/editStaffwPhoto.php', 
			    headers: {'Content-Type': $scope.file.type},
			    method: 'POST',
			    file: $scope.file,
			    fields: {"sn":$scope.staff.staff_id,
			    		 "surname":$scope.staff.surname,
			    		 "first":$scope.staff.first_name,
			    		 "middle":$scope.staff.middle_name,
			    		 "date_birth":$scope.date_birth2,
			    		 "sex":$scope.staff.sex,
			    		 "state":$scope.staff.state,
			    		 "lga":$scope.staff.lga,
			    		 "cadre":$scope.staff.cadre,
			    		 "designation":$scope.staff.designation,
			    		 "conraiss":$scope.staff.conraiss,
			    		 "date_confirmation":$scope.date_confirmation2,
			    		 "date_first_app":$scope.date_first_app2,
			    		 "date_present_app":$scope.date_present_app2,
			    		 "date_last_promotion":$scope.date_last_promotion2,
			    		 "qualifications":$scope.staff.qualifications,
			    		 "remarks":$scope.staff.remarks,
						 },
				})
				.success(function(data) {
				  	$scope.editStaffSuccess = 1;
					});
		}
		else{
			$scope.date_birth2 = $filter('date')($scope.staff.date_birth, "yyyy-MMMM-dd");
			$scope.date_confirmation2 = $filter('date')($scope.staff.date_confirmation, "yyyy-MMMM-dd");
			$scope.date_first_app2 = $filter('date')($scope.staff.date_first_app, "yyyy-MMMM-dd");
			$scope.date_present_app2 = $filter('date')($scope.staff.date_present_app, "yyyy-MMMM-dd");
			$scope.date_last_promotion2 = $filter('date')($scope.staff.date_last_promotion, "yyyy-MMMM-dd");


			$upload.upload({
			    url: 'services/editStaff.php',
			    method: 'POST',
			    fields: {"sn":$scope.staff.staff_id,
			    		 "surname":$scope.staff.surname,
			    		 "first":$scope.staff.first_name,
			    		 "middle":$scope.staff.middle_name,
			    		 "date_birth":$scope.date_birth2,
			    		 "sex":$scope.staff.sex,
			    		 "state":$scope.staff.state,
			    		 "lga":$scope.staff.lga,
			    		 "cadre":$scope.staff.cadre,
			    		 "designation":$scope.staff.designation,
			    		 "conraiss":$scope.staff.conraiss,
			    		 "date_confirmation":$scope.date_confirmation2,
			    		 "date_first_app":$scope.date_first_app2,
			    		 "date_present_app":$scope.date_present_app2,
			    		 "date_last_promotion":$scope.date_last_promotion2,
			    		 "qualifications":$scope.staff.qualifications,
			    		 "remarks":$scope.staff.remarks,
						 },
				})
				.success(function(data) {
				  	$scope.editStaffSuccess = 1;
					});
		}
	};
	$scope.reset = function(){
		$scope.editStaffSuccess = 0;
	};
};

app.controller('EditStaffCtrl',EditStaffCtrl);