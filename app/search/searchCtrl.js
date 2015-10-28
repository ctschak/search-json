mainApp.controller('searchCtrl', function ($scope, $rootScope, $log, $state, $stateParams, searchService) {

    'use strict';
    $log.info('+ searchCtrl()');
    $scope.test="ANGULAR TEST";
    $scope.results;
    $scope.totalCount=0;
    $scope.searchAll = function(){
      console.log("inside searchAll ===== "+$scope.searchText);
      var serviceURL = "data/search.json";
      var errorFn = function(data){
			$scope.error = "No Data Found";
  		}
  		var successFn = function(data) {
        console.log("successFn data"+data);

        $scope.results = data;
        $scope.totalCount = data.hits.total;
        $state.go("search");
  		}
      searchService.searchAll(serviceURL).success(successFn).error(errorFn);
    }

    $scope.searchTitleOnly =function(){
      console.log("inside searchTitleOnly");
      //TODO
    }

    $scope.searchTitleDescription =function(){
      console.log("inside searchTitleDescription");
      //TODO
    }

});
