var app = angular.module("hermes",['ngRoute','ngSanitize','ngAnimate','angularFileUpload','ui.tinymce']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/home.html',
    controller: 'HomeCtrl'
  })
  .when('/staff',{
    templateUrl: 'app/staff/staffSummary.html',
    controller: 'StaffSummaryCtrl'
  })
  .when('/staff/search', {
    templateUrl: 'app/staff/staffSearch.html',
    controller: 'StaffSearchCtrl'
  })
  .when('/staff/list', {
    templateUrl: 'app/staff/staffList.html',
    controller: 'StaffListCtrl'
  })
  .when('/staff/add', {
    templateUrl: 'app/staff/addStaff.html',
    controller: 'AddStaffCtrl'
  })
  .when('/staff/edit/:staff_id',{
    templateUrl: 'app/staff/editStaff.html',
    controller: 'EditStaffCtrl'
  })
  .when('/staff/:staff_id', {
    templateUrl: 'app/staff/staffDetail.html',
    controller: 'StaffDetailCtrl'
  })
  .when('/leave', {
    templateUrl: 'app/leave/leaveSummary.html',
    controller: 'LeaveSummaryCtrl'
  })
  .when('/leave/pending',{
    templateUrl: 'app/leave/leavePending.html',
    controller: 'LeavePendingCtrl'
  })
  .when('/leave/approved',{
    templateUrl: 'app/leave/leaveApproved.html',
    controller: 'LeaveApprovedCtrl'
  })
  .when('/leave/declined',{
    templateUrl: 'app/leave/leaveDeclined.html',
    controller: 'LeaveDeclinedCtrl'
  })
  .when('/leave/completed',{
    templateUrl: 'app/leave/leaveCompleted.html',
    controller: 'LeaveCompletedCtrl'
  })
  .when('/leave/apply',{
    templateUrl: 'app/leave/leaveApply.html',
    controller: 'LeaveApplyCtrl'
  })
  .when('/leave/review/:leave_id',{
    templateUrl: 'app/leave/leaveReview.html',
    controller: 'LeaveReviewCtrl'
  })
  .when('/login', {
    templateUrl: 'app/login.html',
    controller: 'LoginCtrl'
  })
  .when('/logout', {
    templateUrl: 'app/logout.html',
    controller: 'LogoutCtrl'
  })
  .otherwise({
    redirectTo: '/login'
  });
}])
  .run(function($rootScope, $http, $location){

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

    $http.get('services/session.php')
  .success(function(data){
    $rootScope.name = data.name;
    if ($rootScope.name){
      $rootScope.authenticated = 1;
    }
    else {
      $location.url('/login');
      $rootScope.authenticated = 0;
    }
  });
    $http.get('services/leaveAPI.php')
    .success(function(data){
      $rootScope.leavePendingLength = _.where(data,{"status":"0"}).length;
      $rootScope.leaveApprovedLength = _.where(data,{"status":"1"}).length;
      $rootScope.leaveDeclinedLength = _.where(data,{"status":"2"}).length;
    });

  });