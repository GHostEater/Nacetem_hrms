var app = angular.module("hermes");

var LeaveCompletedCtrl = function ($scope,$rootScope,$http,$upload,$location) {

    $rootScope.page = "leaveCompleted";

    $scope.leaveCompleted = [];

    $http.get("services/leaveAPI.php")
        .success(function(data){
            for (var i = 0; i < data.length; i++){
                var today = new Date();
                var date = new Date(data[i].end);

                if (today >= date && data[i].status != '3'){
                    $scope.leaveCompleted.push(data[i]);
                }

            }
        });

    $scope.acceptLeave = function(leave_id){
        $upload.upload({
            url: 'services/completeLeave.php',
            method: 'POST',
            fields: {"leave_id":leave_id}
        })
            .success(function(data){
                $location.url('/leave/completed');
            });
    }
};

app.controller("LeaveCompletedCtrl",LeaveCompletedCtrl);