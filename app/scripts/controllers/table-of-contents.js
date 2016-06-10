'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('tableOfContents', function ($scope, $interval) {
        $scope.mobileHighlight = 0;

        var int;

        if (!$scope.bigScreen) {
            startSlideshow();
        }

        function startSlideshow() {
            int = $interval(changeMobileHighlight, 2000);
        }

        function changeMobileHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1) % 6;
        }

        function nextHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight + 1) % 6;
        }

        function previousHighlight() {
            $scope.mobileHighlight = ($scope.mobileHighlight - 1) % 6;
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
        };
    });
