'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:DunajskaluznagalleryCtrl
 * @description
 * # DunajskaluznagalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
  .controller('DunajskaluznagalleryCtrl', function ($scope, Gallery) {
      $scope.images = [];

      Gallery.getPaths().then(function(paths) {
          Gallery.getFolderContents("dunajska-luzna").then(function (response) {
              response.map(function (image) {
                  $scope.images.push({thumb: paths.IMAGES_URL + '/dunajska-luzna/' + image, img: paths.IMAGES_URL + '/dunajska-luzna/' + image})
              });
          });
      });

  });
