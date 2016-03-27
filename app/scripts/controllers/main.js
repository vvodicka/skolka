'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
