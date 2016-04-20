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
                link: function (scope, element, attrs) {
                    var largestHeight = 0;
                    for(var child in element[0].childNodes) {
                        console.log(element[0].childNodes[child]);

                        if(element[0].childNodes[child].nodeType == 1) {
                            GetHeight(element[0].childNodes[child]);
                        }
                    }

                    attrs.$set('style', 'height: '+largestHeight*5);
                }
            };
        });

    function GetHeight(elem) {
        var oDiv = elem;
        var sOriginalOverflow = oDiv.style.overflow;
        var sOriginalHeight = oDiv.style.height;
        oDiv.style.overflow = "";
        oDiv.style.height = "";
        var height = oDiv.offsetHeight;
        oDiv.style.height = sOriginalHeight;
        oDiv.style.overflow = sOriginalOverflow;
        console.log(elem);
        console.log("Real height is " + height);
    }

}());
