/**
 * Created by jiachiliu on 6/27/15.
 */

(function () {
    'use strict';

    angular.module('angularBoilerplate')
        .factory('HomeService', ['$http', '$q', function ($http, $q) {

            var defer = $q.defer();

            var successFunction = function (response) {
                defer.resolve(response);
            };

            var errorFunction = function(){
                defer.reject();
            };

            var _loadUser = function (userId) {
                $http.get('/user/' + userId).success(successFunction).error(errorFunction);
                return defer.promise;
            };

            return {
                loadUser: _loadUser
            };
        }]);
})();