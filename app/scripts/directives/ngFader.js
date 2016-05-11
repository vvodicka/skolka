(function () {
    'use strict';
    angular.module('ngFader', [])
        .directive('ngFader', function ($interval) {
            return {
                restrict: 'E',
                scope: {
                    imgs : '='
                },
                link: function link(scope) {
                    //Set your interval time. 4000 = 4 seconds
                    scope.setTime = 4000;

                    scope.images = scope.imgs;

                    /*****************************************************
                     STOP! NO FURTHER CODE SHOULD HAVE TO BE EDITED
                     ******************************************************/

                    //Pagination dots - gets number of images
                    scope.numberOfImages = scope.images.length;
                    scope.dots = function (num) {
                        return new Array(num);
                    };

                    //Pagination - click on dots and change image
                    scope.selectedImage = 0;
                    scope.setSelected = function (idx) {
                        scope.stopSlider();
                        scope.selectedImage = idx;
                    };

                    //Slideshow controls
                    scope.sliderBack = function () {
                        scope.stopSlider();
                        scope.selectedImage === 0 ? scope.selectedImage = scope.numberOfImages - 1 : scope.selectedImage--;
                        scope.startSlider();
                    };

                    scope.sliderForward = function () {
                        scope.stopSlider();
                        scope.autoSlider();
                        scope.startSlider();
                    };

                    scope.autoSlider = function () {
                        scope.selectedImage < scope.numberOfImages - 1 ? scope.selectedImage++ : scope.selectedImage = 0;
                    };

                    scope.stopSlider = function () {
                        $interval.cancel(scope.intervalPromise);
                        scope.activePause = true;
                        scope.activeStart = false;
                    };

                    scope.toggleStartStop = function () {
                        if (scope.activeStart) {
                            scope.stopSlider();
                        } else {
                            scope.startSlider();
                        }
                    };

                    scope.startSlider = function () {
                        scope.intervalPromise = $interval(scope.autoSlider, scope.setTime);
                        scope.activeStart = true;
                        scope.activePause = false;
                    };
                    scope.startSlider();

                    scope.show = function (idx) {
                        if (scope.selectedImage == idx) {
                            return "show";
                        }
                    };


                },
                template: '<div class="ng-fader">' +
                //images will render here
                '<ul class="image-fader">' +
                '<li ng-repeat="image in images track by $index" md-swipe-right="sliderBack()" md-swipe-left="sliderForward()"><img data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-class="show($index)"/></li>' +
                '</ul>'
            };
        });

}());
