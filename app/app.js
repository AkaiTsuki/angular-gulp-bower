(function () {
    'use strict';

    angular.module('angularBoilerplate', ['ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ngMockE2E'
    ]).config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "home/home.html",
            controller: 'HomeController',
            resolve: {
                userData : function(HomeService) {
                    return HomeService.loadUser(1);
                }
            }
        });
    }).run(function($httpBackend){
        var user = {
            "username": "jsmith",
            "firstName": "John",
            "lastName": "Smith"
        };

        $httpBackend.whenGET('/user/1').respond(user);
        $httpBackend.whenGET(/^(\w+\/)*(\w)+.html$/).passThrough();
    });


})();