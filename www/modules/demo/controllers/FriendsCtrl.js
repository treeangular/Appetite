/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:16
 * To change this template use File | Settings | File Templates.
 */
angular.module('demo').controller('FriendsCtrl', function($scope, MockFriends, $rootScope) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"FriendsCtrl");

    $scope.friends = MockFriends.all();
})
