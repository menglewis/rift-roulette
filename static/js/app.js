'use strict';

var Diablo = angular.module('Diablo', [
    'LocalForageModule',
    'ui.bootstrap',
	'DiabloControllers',
	'DiabloServices'
]);

Diablo.constant('API_URL', 'http://us.battle.net/api/d3/');

Diablo.config(['$localForageProvider', function($localForageProvider) {
    $localForageProvider.config({
        driver: 'localStorageWrapper',
        name: 'diablo',
        storeName: 'diablo'
    });
}]);
