/*
 * core/config.js
 */
(function(){
  var app = angular.module('app');
  app.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider){
       var routeObj = {
         controller:'main',
         templateUrl: 'assets/js/templates/main.html'
       };
       $routeProvider.when('/page/:page', routeObj);
       $routeProvider.when('/page/', routeObj);
       $routeProvider.when('/', routeObj);
     }
  ]);
})();
