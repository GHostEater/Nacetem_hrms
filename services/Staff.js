var app = angular.module("hermes");

var Staff = function($http,$q){
    var getStaff = function(){
        var deferred = $q.defer();

        $http.get("services/staffAPI.php")
            .success(function(data){
                deferred.resolve(data);
            });

        return deferred.promise;
    };

    return{
        getStaff: getStaff
    };
};

app.factory("Staff",Staff);
