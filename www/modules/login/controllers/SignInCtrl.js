/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 6/09/14
 * Time: 17:12
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:19
 * To change this template use File | Settings | File Templates.
 */
angular.module('authentication').controller('SignInCtrl', function($scope, $rootScope, Parse, $q) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"SignInCtrl");

    function signInUser(email, password)
    {
        //$rootScope.$broadcast(loadingRequestConst.Start);
        var deferred = $q.defer();

        Parse.signIn(email, password, function (isSuccess, result) {

            if (isSuccess) {
                $rootScope.$apply(function () {
                    deferred.resolve(result);
                });

            } else {
                $rootScope.$apply(function () {
                    deferred.reject(result);
                });
            }

        });

        return deferred.promise;
    }

    $scope.signInUser = function (user) {

        var promise = signInUser(user.Email, user.Password);
        promise.then(function() {
            console.log("We siggned In user" + user.get("email"));
            //console.log(user.get("email"));
            //$location.path('/Main');

        }, function(reason) {
            console.log("Ooops we got an error: " + reason);
            //$rootScope.TypeNotification = ErrorConst.TypeNotificationError;
            //$rootScope.MessageNotification = reason;
        });


    };

});
