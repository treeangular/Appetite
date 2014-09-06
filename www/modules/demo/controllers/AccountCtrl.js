/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 9/08/14
 * Time: 17:18
 * To change this template use File | Settings | File Templates.
 */
angular.module('demo').controller('AccountCtrl', function($scope, $rootScope) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"AccountCtrl");

});