angular.module('appetite.controllers').controller('AddFoodExperienceCtrl', function($scope, $rootScope, $window) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"AddFoodExperienceCtrl");

    $scope.showFoodPicture = false;
    var fileToUpdate = undefined;
    var isFileToUpdate;

    $scope.ShareFoodExperience = function () {
        console.log('Controler is working  . . .');
    };

    $scope.$watch('foodPicture', function (value) {
        if (value) {
            $scope.foodPicture = value;
            $scope.showFoodPicture = true;

            isFileToUpdate = true;
            window.resolveLocalFileSystemURI(value, function (entry) {

                var reader = new FileReader();

                reader.onloadend = function (evt) {
                    //consloe.log('read onloderend');
                    //console.log(JSON.stringify(evt.target));
                    //console.log(evt.target.result);
                    var byteArray = new Uint8Array(evt.target.result);
                    var output = new Array(byteArray.length);
                    var i = 0;
                    var n = output.length;
                    while (i < n) {
                        output[i] = byteArray[i];
                        i++;
                    }

                    fileToUpdate = output;
                }

                reader.onerror = function (evt) {
                    console.log(JSON.stringify(evt));
                }

                //console.log('pre read');

                entry.file(function (s) {
                    reader.readAsArrayBuffer(s);
                }, function (error) {
                    console.log(error);
                    //alert('ee');
                });

                //reader.readAsArrayBuffer(entry.file(function(s) { console.log('ss');}, function(e) { console.log('e');});
                console.log('fired off the read...');
            });
        }
        else {
            console.log(">> $scope.$watch(else value is not set or something like this.");
            $scope.foodPicture = "styles/img/bookToAdd.png";

        }
    }, true);

});