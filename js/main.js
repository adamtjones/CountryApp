(function() {
    'use strict';
    angular
        .module('coffee', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            
            //maybe don't need this:
            $urlRouterProvider.otherwise('/');

            //def need these:
            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/home.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
            })
            .state('results', {
                url: '/results/:country',
                templateUrl: '/views/partials/results.html',
                controller: 'resultsController',
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            });

        });
})();