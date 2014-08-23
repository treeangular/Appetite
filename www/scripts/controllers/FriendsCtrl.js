/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:16
 * To change this template use File | Settings | File Templates.
 */
angular.module('appetite.controllers').controller('FriendsCtrl', function($scope, MockFriends) {
    $scope.friends = MockFriends.all();
})
