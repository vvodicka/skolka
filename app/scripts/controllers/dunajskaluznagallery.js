'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:DunajskaluznagalleryCtrl
 * @description
 * # DunajskaluznagalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('DunajskaluznagalleryCtrl', function ($scope) {
      $scope.images = [
          {thumb: './images/photos/36.jpg', img: './images/photos/36.jpg'},
          {thumb: './images/photos/38.jpg', img: './images/photos/38.jpg'},
          {thumb: './images/photos/39.jpg', img: './images/photos/39.jpg'}
      ];
  });