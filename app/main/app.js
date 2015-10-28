
var mainApp = angular.module("mainApp",[
	'ngResource',
  'ui.router'
]);

mainApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider ) {
    'use strict';

  //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'app/search/search.tpl.html',
            controller: 'searchCtrl'
        })
	      ;

        //Re-directs
        $urlRouterProvider.otherwise('/search');

});
mainApp.run(function ($log, $rootScope, $state, $urlRouter,$location) { // Inject Service to load data
    $log.debug("mainApp.run");
    $state.transitionTo('search');
});
