'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('CommonCtrl', function ($scope, $mdMedia) {
        $scope.$watch(function () {
            return $mdMedia('gt-xs');
        }, function (big) {
            $scope.bigScreen = big;
        });
    });
