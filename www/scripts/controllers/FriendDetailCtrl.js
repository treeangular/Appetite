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

    Parse.getFriendDetail($stateParams.friendId).then(function(friendDetail) {
            var friendDetails = friendDetail;
            console.log(friendDetails.get("Name"));
            //$scope.Name = friendDetails.get("Name");
    });
})