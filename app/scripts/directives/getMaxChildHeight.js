/**
 * Created by vladislav.vodicka on 20. 4. 2016.
 */
(function () {
    'use strict';
    angular.module('getMaxChildHeight', [])
        .directive('getMaxChildHeight', function () {
            return {
                restrict: 'A',
                scope: false,
                link: function (scope, element) {
                    scope.element = element;
                    scope.$watch(element, scope.updateHeight());
                },
                controller: function ($scope, $timeout) {
                    //viac krat volane, lebo to blblo kvoli obrazkom a inemu obsahu
                    $scope.updateHeight = function () {
                        $timeout(function () {
                            $scope.element.height(getLargestHeight());
                        }, 100);

                        $timeout(function () {
                            $scope.element.height(getLargestHeight());
                        }, 300);

                        $timeout(function () {
                            $scope.element.height(getLargestHeight());
                        }, 1000);
                    };

                    function getLargestHeight() {
                        var largestHeight = 0;
                        for (var i in $scope.element[0].childNodes) {
                            var child = $scope.element[0].childNodes[i];
                            if (child.nodeType == 1) {
                                if (child.offsetHeight > largestHeight) {
                                    largestHeight = child.offsetHeight;
                                }
                            }
                        }
                        return largestHeight;
                    }
                }
            };
        });
}());
