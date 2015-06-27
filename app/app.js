(function(){
    'use strict';

    angular.module('angularBoilerplate', ['ngAnimate',
    'ui.router',
    'ui.bootstrap'
    ]).config(function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("home", {
          url: "/home",
          templateUrl: "home/home.html",
          controller: 'HomeController'
        });
    });
    
    
})();