'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:RuzinovgalleryCtrl
 * @description
 * # RuzinovgalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('RuzinovgalleryCtrl', function ($scope, Gallery, IMAGES_URL) {
        $scope.images = [];

        Gallery.getFolderContents("ruzinov").then(function (response) {
            response.map(function (image) {
                $scope.images.push({thumb: IMAGES_URL + '/ruzinov/' + image, img: IMAGES_URL + '/ruzinov/' + image})
            });
        });
    });
