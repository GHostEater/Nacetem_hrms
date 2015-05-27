var app = angular.module('hermes');

var LeaveApplyCtrl = function($scope,$rootScope,Staff,Leave,$upload,$filter,$location){
	$rootScope.page = "leaveApply";
	$scope.staffSelected = 0;
	
	Staff.getStaff()
		.then(function(data){
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
		    		 "reason":$scope.reason
					 }
			})
			.success(function(data){
                $scope.success = data;
				Leave.getLeaveStats();
				$location.url('/leave/pending');

			});
	};
};

app.controller("LeaveApplyCtrl",LeaveApplyCtrl);