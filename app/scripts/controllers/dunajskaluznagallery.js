'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:DunajskaluznagalleryCtrl
 * @description
 * # DunajskaluznagalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('DunajskaluznagalleryCtrl', function ($scope, Gallery, IMAGES_URL) {
      $scope.images = [];

      Gallery.getFolderContents("dunajska-luzna").then(function (response) {
          response.map(function (image) {
              $scope.images.push({thumb: IMAGES_URL + '/dunajska-luzna/' + image, img: IMAGES_URL + '/dunajska-luzna/' + image})
          });
      });
  });
