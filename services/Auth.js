var app = angular.module("hermes");

var Auth = function($http,$q,$upload,$rootScope,$location){
    var Login = function(username,pass){
        var deferred = $q.defer();

        $upload.upload({
            url: 'services/login.php',
            method: 'POST',
            fields: {"username":username,
                "password":pass}
        })
            .success(function(data){
                deferred.resolve(data);
            });

        return deferred.promise;
    };
    var Logout = function(){
        var deferred = $q.defer();

        $http.get("services/logout.php")
            .success(function(data){
                deferred.resolve(data);
            });
        return deferred.promise;
    };
    var Session = function(){
        var deferred = $q.defer();

        $http.get('services/session.php')
            .success(function(data){
                deferred.resolve(data);
            });
        return deferred.promise;
    };
    var AuthCheck = function(auth){
        $rootScope.name = auth.name;
        if ($rootScope.name){
            $rootScope.authenticated = 1;
        }
        else {
            $location.url('/login');
            $rootScope.authenticated = 0;
        }
    };

    return{
        Login: Login,
        Logout: Logout,
        Session: Session,
        AuthCheck: AuthCheck
    };
};

app.factory("Auth",Auth);