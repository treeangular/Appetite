/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:19
 * To change this template use File | Settings | File Templates.
 */
angular.module('authentication').controller('SignInCtrl', function($scope, $rootScope, Parse, $q, $state) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"SignInCtrl");

    function signInUser(email, password)
    {
        //$rootScope.$broadcast(loadingRequestConst.Start);
        var deferred = $q.defer();

        Parse.signIn(email, password).then(

            function(result){
                //avocarrot.createStory('Released', { name: releaseInfo }, "Releasing is caring!");
                deferred.resolve(result);

            },function(error){
                deferred.reject(error);
            })

        return deferred.promise;
    }

    function signUpUser(email, password)
    {
        //$rootScope.$broadcast(loadingRequestConst.Start);
        var deferred = $q.defer();

        Parse.signUp(email, password).then(

            function(result){
                //avocarrot.createStory('Released', { name: releaseInfo }, "Releasing is caring!");
                deferred.resolve(result);

            },function(error){
                deferred.reject(error);
            })

        return deferred.promise;
    }


    $scope.signInUser = function (user) {

        signInUser(user.Email, user.Password).then(function(result) {
            console.log("We signed In user: " + result.get("email"));
            $state.transitionTo('tab.friends');
            //console.log(user.get("email"));
            //$location.path('/Main');

        }, function(reason) {
            console.log("Ooops we got an error signing in : " + reason);
            //$rootScope.TypeNotification = ErrorConst.TypeNotificationError;
            //$rootScope.MessageNotification = reason;
        });
    };

    $scope.signUpUser = function (user) {

        var promise = signUpUser(user.Email, user.Password);
        promise.then(function(user) {
            console.log("We signed Up user: " + user.get("email"));
            $state.transitionTo('tab.friends');
            //console.log(user.get("email"));
            //$location.path('/Main');

        }, function(reason) {
            console.log("Ooops we got an error signing up: " + reason);
            //$rootScope.TypeNotification = ErrorConst.TypeNotificationError;
            //$rootScope.MessageNotification = reason;
        });
    };
});
