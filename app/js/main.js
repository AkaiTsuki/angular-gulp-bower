(function(){
    'use strict';

    angular.module('angularBoilerplate', ['ngAnimate',
    'ui.router',
    'ui.bootstrap'
    ]).config(function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("home", {
          url: "/home",
          templateUrl: "partials/home.html",
          controller: function($scope) {
            $scope.username = "Test User";
          }
        });
    });
    
    
})();