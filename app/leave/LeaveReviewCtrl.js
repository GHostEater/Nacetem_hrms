var app = angular.module("hermes");

var LeaveReviewCtrl = function ($scope,$rootScope,Leave,$log,$routeParams,$location,$upload) {

	$rootScope.page = "leaveReview";
	$scope.approveSuccess = 0;
	$scope.declineSuccess = 0;

	Leave.getLeave()
		 .then(function(data){
		 	$scope.leave = _.find(data,{"leave_id":$routeParams.leave_id});
		 	$scope.histories = _.where(data,{"staff_id":$scope.leave.staff_id,"status":"3"});
		 });

	$scope.approve = function(leave_id){
		$upload.upload({
		    url: 'services/approveLeave.php',
		    method: 'POST',
		    fields: {"leave_id":leave_id
					 }
			})
		.success(function(data){
                $scope.success = data;
			    $scope.approveSuccess = 1;
			    Leave.getLeaveStats();
			    $location.url('/leave/pending');
		});
	};

	$scope.decline = function(leave_id){
		$upload.upload({
		    url: 'services/declineLeave.php',
		    method: 'POST',
		    fields: {"leave_id":leave_id
					 }
			})
		.success(function(data){
                $scope.success = data;
			    $scope.declineSuccess = 1;
			    Leave.getLeaveStats();
			    $location.url('/leave/pending');
		});
	}
};

app.controller("LeaveReviewCtrl",LeaveReviewCtrl);