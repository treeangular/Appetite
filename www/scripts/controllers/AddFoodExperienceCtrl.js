angular.module('appetite.controllers').controller('AddFoodExperienceCtrl', function($scope, $rootScope, $window, Parse, $q, $state) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"AddFoodExperienceCtrl");

    var fileToUpdate = undefined;
    var isFileToUpdate;

    $scope.$watch('foodPicture', function (value) {
        if (value) {
            $scope.foodPicture = value;

            isFileToUpdate = true;
            window.resolveLocalFileSystemURL(value, function (entry) {

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
            $scope.foodPicture = "styles/img/plate7.png";

        }
    }, true);

    $scope.ShareFoodExperience = function (foodExperience) {

        if(angular.isDefined(fileToUpdate))
        {
            var promise = shareFoodExperience(fileToUpdate,foodExperience);

            promise.then(function(user) {
                console.log("Shared food experience");
                $state.go('tab.dash');

            }, function(reason) {
                console.log("Ooops we got an error signing up: " + reason);
                //$rootScope.TypeNotification = ErrorConst.TypeNotificationError;
                //$rootScope.MessageNotification = reason;
            });
        }
        else
        {
            console.log("No food picture defined");
        }
    };

    function shareFoodExperience(fileToUpdate,foodExperience)
    {
        //$rootScope.$broadcast(loadingRequestConst.Start);
        var deferred = $q.defer();

        Parse.shareFoodExperience(fileToUpdate,foodExperience).then(

            function(result){
                //avocarrot.createStory('Released', { name: releaseInfo }, "Releasing is caring!");
                deferred.resolve(result);
                console.log("Should be saved");

            },function(error){
                deferred.reject(error);
                console.log("Should not be saved => ERROR!");
            })

        return deferred.promise;
    }
});