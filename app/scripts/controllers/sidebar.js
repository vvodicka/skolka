'use strict';

/**
 * @ngdoc function
 * @name skolkaApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the skolkaApp
 */
angular.module('skolkaApp')
    .controller('SidebarCtrl', function ($scope, $mdSidenav) {
        
        $scope.toggleSidebar = function (navID) {
            $mdSidenav(navID).toggle();
        };
    });
