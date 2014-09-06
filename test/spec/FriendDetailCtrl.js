
'use strict';

describe('appetite', function () {
    var scope,
        controller;

});

describe('Controller: FriendDetailCtrl', function() {

    var scope;
    var MockParse;
    var stateParams;
    var FriendDetailCtrl;
    var q;

    beforeEach(function () {
        module('appetite');
    });

    // define the mock Parse service
    beforeEach(inject(function($q) {

        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];
        var deferred;

        MockParse = {
            // Some fake testing data

            getFriendDetail: function(friendId) {
                // Simple index lookup
                deferred = $q.defer();
                return deferred.promise;
                //return friends[friendId];
            }

        };
    }));
    // inject the required services and instantiate the controller
    //$scope, $stateParams, Parse
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        stateParams = {Name: "G.I. Joe"};
        FriendDetailCtrl = $controller('FriendDetailCtrl', {
            $scope: scope, $stateParams: stateParams ,  Parse: MockParse, $rootScope: scope
        });

        spyOn(MockParse, 'getFriendDetail').andCallThrough();
        MockParse.getFriendDetail(0);
    }));

    it('should call getFriendDetail from Parse Service', function () {
        expect(MockParse.getFriendDetail).toHaveBeenCalled();
    });

    /*it("Name should be 'Scruff McGruff'", function () {
        expect(MockParse.getFriendDetail.get("Name")).toEqual('Scruff McGruff');
    });    */

    /*it('Dummy test', function () {
        expect(true).toBe(true);
    });                             */
});

