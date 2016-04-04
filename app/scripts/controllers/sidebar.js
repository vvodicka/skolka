'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('SidebarCtrl', function ($scope, $mdSidenav, $mdMedia) {

        $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
            $scope.bigScreen = big;
        });
        
        $scope.toggleSidebar = function (navID) {
            $mdSidenav(navID).toggle();
        };
    });
