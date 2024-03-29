'use strict';

//angular.module('BookCrossingApp')
angular.module('appetite.controllers').directive('bcaCamera', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, elm, attrs, ctrl) {
            elm.bind('click', function() {

                navigator.camera.getPicture(onSuccess, onFail,
                    { quality: 100,
                        destinationType:Camera.DestinationType.FILE_URI,
                        encodingType: Camera.EncodingType.JPEG,
                        sourceType : Camera.PictureSourceType.PHOTOLIBRARY ,//CAMERA,
                        targetWidth: 128,
                        targetHeight: 128
                    });
                function onSuccess(imageData) {

                    $scope.$apply(function() {
                        ctrl.$setViewValue(imageData);
                    });
                }

                function onFail(message) {
                    //alert('Failed because: ' + message);
                    ctrl.$setValidity('Failed because: ' + message, false);
                }

            });
        }
    };
});


angular.module('appetite.controllers').directive('bcaCameraTakePicture', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, elm, attrs, ctrl) {
            elm.bind('click', function() {

                navigator.camera.getPicture(onSuccess, onFail,
                    //Options => http://docs.phonegap.com/en/2.6.0/cordova_camera_camera.md.html#Camera
                    { quality: 100,
                        destinationType:Camera.DestinationType.FILE_URI,
                        encodingType: Camera.EncodingType.JPEG,
                        sourceType : Camera.PictureSourceType.CAMERA,
                        targetWidth: 128,
                        targetHeight: 128
                    });
                function onSuccess(imageData) {
//
                    $scope.$apply(function() {
                        ctrl.$setViewValue(imageData);
                    });
                }

                function onFail(message) {
                    //alert('Failed because: ' + message);
                    ctrl.$setValidity('Failed because: ' + message, false);
                }

            });
        }
    };
});
