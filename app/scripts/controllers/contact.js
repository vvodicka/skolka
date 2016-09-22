'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('ContactCtrl', function ($scope, $location, $anchorScroll, uiGmapGoogleMapApi, $timeout) {

        uiGmapGoogleMapApi.then(function (maps) {
            $timeout(function () {
                $scope.map = {
                    center: {latitude: 48.102315, longitude: 17.232117},
                    zoom: 10,
                    options: {mapTypeControl: false}
                };

                $scope.showMap = true;
            }, 0);
        });

        $scope.zoomToRuzinov = function () {
            $scope.map = {center: {latitude: 48.140011, longitude: 17.171488}, zoom: 17};
            //$location.hash('map');
            $anchorScroll('map');
        };

        $scope.zoomToDunajskaLuzna = function () {
            $scope.map = {center: {latitude: 48.074811, longitude: 17.275818}, zoom: 17};
            //$location.hash('map');
            $anchorScroll('map');
        }
    });
