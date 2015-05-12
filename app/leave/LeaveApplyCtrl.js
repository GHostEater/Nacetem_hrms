var app = angular.module('hermes');

var LeaveApplyCtrl = function($scope,$rootScope,$http,$log,$upload,$filter,$location){
	$rootScope.page = "leaveApply";
	$scope.staffSelected = 0;
	
	$http.get('services/staffAPI.php')
		.success(function(data){
			$scope.staffs = data;
		});

	$scope.selectStaff = function(staff_id){
		$scope.staff_id = staff_id;
		$scope.staffSelected = 1;

		$scope.staffPicked = _.find($scope.staffs,{"staff_id":staff_id});
	};

	$scope.reset = function(){
		$scope.staffSelected = 0;
	};

	$scope.submit = function(){

		$scope.start = $filter('date')($scope.starting, "yyyy-MMMM-dd");
		$scope.end = $filter('date')($scope.end, "yyyy-MMMM-dd");


		$upload.upload({
		    url: 'services/leaveApply.php',
		    method: 'POST',
		    fields: {"staff_id":$scope.staff_id,
		    		 "leave_type":$scope.leave_type,
		    		 "start":$scope.start,
		    		 "end":$scope.end,
		    		 "reason":$scope.reason,
					 },
			})
			.success(function(data){
				$http.get('services/leaveAPI.php')
				    .success(function(data){
				      $rootScope.leavePendingLength = _.where(data,{"status":"0"}).length;
				      $rootScope.leaveApprovedLength = _.where(data,{"status":"1"}).length;
				  	});
				$location.url('/leave/pending');

			});
	};
};

app.controller("LeaveApplyCtrl",LeaveApplyCtrl);