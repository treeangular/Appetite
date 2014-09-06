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
angular.module('authentication').controller('SignInCtrl', function($scope, $rootScope, Parse) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"SignInCtrl");

    $scope.signInUser = Parse.signIn($scope.user).then(function(user) {
        console.log(user.get("email"));
    });

});
