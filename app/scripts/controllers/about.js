'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
