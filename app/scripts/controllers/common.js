'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('CommonCtrl', function ($scope, $mdMedia, $translate) {
        $scope.$watch(function () {
            return $mdMedia('gt-sm');
        }, function (big) {
            $scope.bigScreen = big;
        });

        //$translate.use('en');

        $scope.languages = [
            {code : 'us'},
            {code : 'sk'}
        ];

        $scope.aboutOpen = false;

        $scope.$watch('demo.isOpen', function(isOpen) {
            if (isOpen) {
                $timeout(function() {
                    $scope.tooltipVisible = self.isOpen;
                }, 600);
            } else {
                $scope.tooltipVisible = self.isOpen;
            }
        });

    });
