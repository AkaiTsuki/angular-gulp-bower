(function () {
    'use strict';

    angular.module('angularBoilerplate').controller('HomeController', ['$scope', 'userData', function ($scope, userData) {
        $scope.username = userData.firstName + " " + userData.lastName;
    }]);
})();