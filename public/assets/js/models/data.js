/*
 * models/data.js
 */
(function() {
  var app = angular.module('app');
  app.service('data', ['$http', function($http){
    var value = {
      page: '1'
    };
    value.fetch = function(page, $scope){
      if(value.page != page) {
        if(page) value.page = page;
	var url = 'http://code.atmosol.com/~rcervantes/product-adv-php/?ResponseGroup=Large,SearchBins,Variations,Reviews&Operation=ItemSearch&MerchantID=Amazon&SearchIndex=Apparel&Brand=Gerber&BrowseNode=16023581&Sort=salesrank&callback=console.log&ItemPage='+value.page;
        $http({
          method: 'GET',
          url: url
	 })
        .success(function(data, status) {
          value.status = status;
  	  value.string = data;
  	  value.request = angular.fromJson(data.substr(0,(data.length - 1)).substr(12)); 
  	  value.models = value.request.data; 
	  value.totalResults = (value.models) ? value.models.Items.TotalResults : 0;
	  value.totalPages = (value.models) ? value.models.Items.TotalPages : 0;
        })
        .error(function(data, status) {
          value.status = status;
  	  value.request = data || "Request failed";
        });
      }
    };
  
    value.fetch();

    return value;
  }]);
})();
