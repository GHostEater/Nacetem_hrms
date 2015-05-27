var app = angular.module("hermes");

var Leave = function($http,$q,$rootScope){
    var getLeave = function(){
        var deferred = $q.defer();

        $http.get("services/leaveAPI.php")
            .success(function(data){
                deferred.resolve(data);
            });

        return deferred.promise;
    };
    var getLeaveStats = function(){
        $http.get('services/leaveAPI.php')
            .success(function(data){
                $rootScope.leavePendingLength = _.where(data,{"status":"0"}).length;
                $rootScope.leaveApprovedLength = _.where(data,{"status":"1"}).length;
                $rootScope.leaveDeclinedLength = _.where(data,{"status":"2"}).length;
                $rootScope.leaveCompleted = [];
                for (var i = 0; i < data.length; i++){
                    var today = new Date();
                    var date = new Date(data[i].end);

                    if (today >= date && data[i].status != '3'){
                        $rootScope.leaveCompleted.push(data[i]);
                    }

                }
                $rootScope.leaveCompletedLength = $rootScope.leaveCompleted.length;
            });
    };

    return{
        getLeave: getLeave,
        getLeaveStats: getLeaveStats
    };
};

app.factory("Leave",Leave);