angular.module('appetite.controllers').controller('AddFoodExpririenceCtrl', function($scope, $rootScope, Parse, $q, $state) {

    if($rootScope.gaPlugIn !== undefined)
        $rootScope.gaPlugIn.trackPage(function(){}, function(){},"AddFoodExpririenceCtrl");

});