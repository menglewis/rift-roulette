'use strict';

var Diablo = angular.module('Diablo', [
    'LocalForageModule',
    'ui.bootstrap',
    'DiabloControllers',
    'DiabloServices',
    'DiabloDirectives'
]);

Diablo.constant('API_URL', 'http://us.battle.net/api/d3/');
