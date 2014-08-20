/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:16
 * To change this template use File | Settings | File Templates.
 */
Appetite.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})
