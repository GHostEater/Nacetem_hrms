var app = angular.module("hermes");

var LeaveReviewCtrl = function ($scope,$rootScope,$http,$log,$routeParams,$location,$upload) {

	$rootScope.page = "leaveReview";
	$scope.approveSuccess = 0;
	$scope.declineSuccess = 0;

	$http.get("services/leaveAPI.php")
		 .success(function(data){
		 	$scope.leave = _.find(data,{"leave_id":$routeParams.leave_id});
		 	$scope.histories = _.where(data,{"staff_id":$scope.leave.staff_id,"status":"1"});
		 });

	$scope.approve = function(leave_id){
		$upload.upload({
		    url: 'services/approveLeave.php',
		    method: 'POST',
		    fields: {"leave_id":leave_id,
					 },
			})
		.success(function(data){
			$scope.approveSuccess = 1;

			$http.get('services/leaveAPI.php')
		    .success(function(data){
		      $rootScope.leavePendingLength = _.where(data,{"status":"0"}).length;
		      $rootScope.leaveApprovedLength = _.where(data,{"status":"1"}).length;
		  	});
			$location.url('/leave/pending');
		});
	};

	$scope.decline = function(leave_id){
		$upload.upload({
		    url: 'services/declineLeave.php',
		    method: 'POST',
		    fields: {"leave_id":leave_id,
					 },
			})
		.success(function(data){
			$scope.declineSuccess = 1;

			$http.get('services/leaveAPI.php')
		    .success(function(data){
		      $rootScope.leavePendingLength = _.where(data,{"status":"0"}).length;
		      $rootScope.leaveDeclinedLength = _.where(data,{"status":"2"}).length;
		  	});
			$location.url('/leave/pending');
		});
	}
};

app.controller("LeaveReviewCtrl",LeaveReviewCtrl);