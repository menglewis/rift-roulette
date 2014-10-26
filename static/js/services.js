'use strict';

var DiabloServices = angular.module('DiabloServices', []);

DiabloServices.factory('API', function($http, API_URL) {
    return {
        profile: function(name) {
            return $http.jsonp(API_URL + "profile/" + name + "/?callback=JSON_CALLBACK");
        }
    }
});
