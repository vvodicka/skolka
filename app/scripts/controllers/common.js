'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('CommonCtrl', function ($scope, $mdMedia, $translate, $location, $timeout) {

    $scope.isSafari = false;

    $scope.$watch(function () {
      return $mdMedia('gt-sm');
    }, function (big) {
      $scope.bigScreen = big;
    });

    $scope.$watch(function () {
      return $mdMedia('md');
    }, function (medium) {
      $scope.mediumScreenMenuItem = medium ? 'medium-screen-menu-item' : '';
      $scope.mediumScreen = medium;
    });

    $scope.$watch(function () {
      return $mdMedia('lg');
    }, function (largeScreen) {
      $scope.largeScreen = largeScreen;
    });

    $scope.selectedLanguage = {code: 'sk'};

    $scope.languages = [
      {code: 'sk'},
      {code: 'gb'}
    ];

    $scope.changeLanguage = function (selectedValue) {
      $translate.use(selectedValue.code);
    };

    $scope.go = function (path) {
      $location.path(path);
    };

  });
