'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:RuzinovgalleryCtrl
 * @description
 * # RuzinovgalleryCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('RuzinovgalleryCtrl', function ($scope, Gallery) {
        $scope.images = [];

        Gallery.getPaths().then(function(paths) {
            Gallery.getFolderContents("ruzinov").then(function (response) {
                response.map(function (image) {
                    $scope.images.push({thumb: paths.IMAGES_URL + '/ruzinov/' + image, img: paths.IMAGES_URL + '/ruzinov/' + image})
                });
            });
        });
    });
