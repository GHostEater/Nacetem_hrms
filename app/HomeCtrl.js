var app = angular.module("hermes");

var HomeCtrl = function ($scope,$rootScope,$location) {
	
	$rootScope.page = "home";
	
};

app.controller("HomeCtrl",HomeCtrl);