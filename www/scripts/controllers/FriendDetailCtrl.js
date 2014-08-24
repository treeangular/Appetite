/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:17
 * To change this template use File | Settings | File Templates.
 */
angular.module('appetite.controllers').controller('FriendDetailCtrl', function($scope, $stateParams, Parse, $q, $rootScope) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"FriendDetailCtrl");

    function getFriendDetails(friendId)
    {
        var deferred = $q.defer();

        Parse.getFriendDetail(friendId).then(
            function(result){

                deferred.resolve(result);

            },function(error){
                deferred.reject(error);
            })

        return deferred.promise;

    }

    var promise = getFriendDetails($stateParams.friendId);
    promise.then(function(friendDetail) {

        $scope.friendDetail = friendDetail;


    }, function(reason) {

    });

})