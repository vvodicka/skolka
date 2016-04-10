'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
