/**
 * Created by vladislav.vodicka on 20. 4. 2016.
 */
(function () {
    'use strict';
    angular.module('unhideWhen', [])
        .directive('unhideWhen', function () {
            return {
                restrict: 'E',
                transclude: 'true',
                scope: {
                    expr: '='
                },
                link: function (scope, element) {
                    scope.elem = element;
                },
                controller: function ($scope) {
                    $scope.$watch('expr', function (expr) {
                        if (expr === true) {
                            $scope.elem[0].className = $scope.elem[0].className.replace('hidden', '');
                        }
                    });
                },
                template: '<ng-transclude></ng-transclude>'
            };
        });
}());
