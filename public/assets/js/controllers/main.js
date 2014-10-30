/*
 * controllers/main.js
 */
(function() {
  var app = angular.module('app');
  app.controller('main', ['$scope','$route','$routeParams','data',
    function($scope, $route, $routeParams, data){
      $scope.$routeParams = $routeParams;
      $scope.data = data;
      $scope.currentPage = $routeParams.page;
      $scope.loading = true;
      if(!$routeParams.page || isNaN($routeParams.page)) $routeParams.page = 0;
      $scope.$watch('data.models',function(){
        if(data.models && data.models.Items.Item.length > 0) {
          $scope.loading = false;
	}
      });
      $scope.pageChanged = function() {
        $scope.loading = true;
	delete data.models
	window.location.hash = '#/page/'+$scope.currentPage;
        $scope.data.fetch($scope.currentPage);
      };

      $scope.getImg = function(item) {
        var elem = _.deepFind1(item,'MediumImage');
        console.log(elem);
        if(elem.length > 0) {
          return elem[0].MediumImage.URL;
         } else {
          return "http://placehold.it/160x160";
        }
    };
    }]);
})();
