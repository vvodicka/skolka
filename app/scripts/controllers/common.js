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

        $scope.$watch(function () {
            return $mdMedia('md');
        }, function (medium) {
            $scope.mediumScreenMenuItem = medium ? 'medium-screen-menu-item' : '';
        });

        $scope.selectedLanguage = {code : 'sk'};

        $scope.languages = [
            {code : 'sk'},
            {code : 'gb'}
        ];

        $scope.changeLanguage = function(selectedValue) {
            $translate.use(selectedValue.code);
        }

    });
