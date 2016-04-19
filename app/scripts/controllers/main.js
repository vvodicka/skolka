'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('MainCtrl', function ($scope, $interval) {
       $scope.mobileHighlight = 0;

        if(!$scope.bigScreen) {
            $interval(changeMobileHighlight, 1000);
        }

        function changeMobileHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1)%3;
        }
    });
