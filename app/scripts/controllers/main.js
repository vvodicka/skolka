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

        var int;

        if (!$scope.bigScreen) {
            startSlideshow();
        }

        function startSlideshow() {
            int = $interval(changeMobileHighlight, 5000);
        }

        function changeMobileHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1) % 3;
        }

        function nextHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1) % 3;
        }

        function previousHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight - 1) % 3;
        }

        $scope.nextHighlight = function () {
            $interval.cancel(int);
            nextHighlight();
            startSlideshow()
        };

        $scope.previousHighlight = function () {
            $interval.cancel(int);
            previousHighlight();
            startSlideshow()
        }

    });
