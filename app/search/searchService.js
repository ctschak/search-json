mainApp.factory('searchService', ['$http', function ($http) {
	'use strict';
	return {
		 searchAll: function (url) {
			  return $http.get(url);
		 },
		 searchTitleOnly: function (url) {
			  return $http.get(url);
		 },
		 searchTitleDescription: function (url,data) {
			  return $http.post(url,data,{
				  headers: {
					   'Content-Type': 'application/json'
					 }
			  });
		 }
	};
}]);
