'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('MainCtrl', function ($scope, $interval, $timeout) {
        $scope.mobileHighlight = -1;

        if (!$scope.bigScreen) {
            $timeout(function () {
                $scope.mobileHighlight = 0;
                $interval(changeMobileHighlight, 3000);
            }, 50000);
        }

        function changeMobileHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1) % 3;
        }
    });
