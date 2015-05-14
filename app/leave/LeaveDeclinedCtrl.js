var app = angular.module("hermes");

var LeaveDeclinedCtrl = function ($scope,$rootScope,$http,$log,$location) {

    $rootScope.page = "leaveDeclined";

    $http.get("services/leaveAPI.php")
        .success(function(data){
            $scope.leave = data;

            $scope.leaveDeclined = _.where($scope.leave,{"status":"2"});
        });
    $scope.table = function(leave_id){
        $location.url('/leave/review/'+leave_id);
    };
};

app.controller("LeaveDeclinedCtrl",LeaveDeclinedCtrl);