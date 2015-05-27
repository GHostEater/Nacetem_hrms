var app = angular.module("hermes");

var Menu = function($rootScope){

    var Toggle = function(){
        $rootScope.menu = 1;

        $rootScope.menuToggle = function (){
            var i;
            if ($rootScope.menu === 1) i = 1;
            if ($rootScope.menu === 0) i = 0;

            if (i === 1){
                $rootScope.menu = 0;
            }
            else if (i === 0){
                $rootScope.menu = 1;
            }
        };
    };

    return{
        Toggle: Toggle
    };
};

app.factory("Menu",Menu);