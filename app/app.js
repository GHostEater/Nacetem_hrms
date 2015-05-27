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
  .run(function(Auth,Menu,Leave){

        Menu.Toggle();

        Auth.Session()
            .then(function(data){
                Auth.AuthCheck(data);
            });
        Leave.getLeaveStats();
  });