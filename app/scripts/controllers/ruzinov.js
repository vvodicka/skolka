'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:RuzinovCtrl
 * @description
 * # RuzinovCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('RuzinovCtrl', function ($scope) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
