'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('CommonCtrl', function ($scope, $mdMedia, $translate, $location) {

        $scope.$watch(function () {
            return $mdMedia('gt-sm');
        }, function (big) {
            $scope.bigScreen = big;
            $scope.asd = 123;
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
        };

        $scope.go = function ( path ) {
            $location.path( path );
        };

    });
