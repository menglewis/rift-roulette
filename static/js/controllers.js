'use strict';

var DiabloControllers = angular.module('DiabloControllers', []);

DiabloControllers.controller('rouletteCtrl', ['$scope', '$localForage', 'API',
    function($scope, $localForage, API) {
        $scope.season = false;
        $scope.hardcore = false;

        $localForage.getItem('player1').then(function(d) {
            $scope.player1 = d;
        });
        $localForage.getItem('player2').then(function(d) {
            $scope.player2 = d;
        });
        $localForage.getItem('player3').then(function(d) {
            $scope.player3 = d;
        });
        $localForage.getItem('player4').then(function(d) {
            $scope.player4 = d;
        });

        $scope.clearProfile = function(profile) {
            if (profile === 1) {
                $localForage.setItem('player1', null);
                $scope.player1 = null;
            } else if (profile === 2) {
                $localForage.setItem('player2', null);
                $scope.player2 = null;
            } else if (profile === 3) {
                $localForage.setItem('player3', null);
                $scope.player3 = null;
            } else if (profile === 4) {
                $localForage.setItem('player4', null);
                $scope.player4 = null;
            }
        };

        $scope.lookupPlayer = function(battletag, player) {
            var name = battletag.replace("#", "-");
            API.profile(name).then(function(d) {
                if (player === 1) {
                    $localForage.setItem('player1', d.data);
                    $scope.player1 = d.data;
                } else if (player === 2) {
                    $localForage.setItem('player2', d.data);
                    $scope.player2 = d.data;
                } else if (player === 3) {
                    $localForage.setItem('player3', d.data);
                    $scope.player3 = d.data;
                } else if (player === 4) {
                    $localForage.setItem('player4', d.data);
                    $scope.player4 = d.data;
                }
            });
        };
        $scope.heroFilter = function(hero) {
            return ($scope.hardcore == hero.hardcore && $scope.season == hero.seasonal);
        };

        $scope.roulette = function() {
            var party = {};
            if ($scope.player1) {
                var filtered = $scope.player1.heroes.filter($scope.heroFilter);
                if (filtered.length > 0) {
                    party.player1 = filtered[Math.floor(Math.random() * filtered.length)];
                } else {
                    party.player1 = null;
                }
            }
            if ($scope.player2) {
                var filtered = $scope.player2.heroes.filter($scope.heroFilter);
                if (filtered.length > 0) {
                    party.player2 = filtered[Math.floor(Math.random() * filtered.length)];
                } else {
                    party.player2 = null;
                }
            }
            if ($scope.player3) {
                var filtered = $scope.player3.heroes.filter($scope.heroFilter);
                if (filtered.length > 0) {
                    party.player3 = filtered[Math.floor(Math.random() * filtered.length)];
                } else {
                    party.player3 = null;
                }
            }
            if ($scope.player4) {
                var filtered = $scope.player1.heroes.filter($scope.heroFilter);
                if (filtered.length > 0) {
                    party.player4 = filtered[Math.floor(Math.random() * filtered.length)];
                } else {
                    party.player4 = null;
                }
            }
            $scope.party = party;
        }
    }
]);
