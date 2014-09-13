/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 11/09/14
 * Time: 20:00
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('appetite', function () {

});

describe('Controller: AuthenticationCtrl', function() {

    var scope;
    var MockParse;
    var stateParams;
    var AuthenticationCtrl;
    var q;
    var rtv;

    beforeEach(function () {

        module('appetite');
    });

    // define the mock Parse service
    beforeEach(inject(function($q) {


        var deferred;

        MockParse = {
            // Some fake testing data

            signIn: function(email, password) {
                deferred = $q.defer();
                return deferred.promise;

            },
            signUp: function(email, password) {
                deferred = $q.defer();
                return deferred.promise;
            }

        };
    }));
    // inject the required services and instantiate the controller
    //$scope, $stateParams, Parse
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        AuthenticationCtrl = $controller('AuthenticationCtrl', {
            $scope: scope, $stateParams: stateParams ,  Parse: MockParse, $rootScope: scope
        });
        var email = "";
        var password ="";

        spyOn(MockParse, 'signIn').andCallThrough();
        spyOn(MockParse, 'signUp').andCallThrough();

        var promise = MockParse.signIn(email, password);

        promise.then(function (value) {
            rtv = value;
        });

        var promise2 = MockParse.signUp(email, password);

        promise2.then(function (value) {
            rtv = value;
        });
    }));

    it('should call signIn from Parse Service', function () {
        expect(MockParse.signIn).toHaveBeenCalled();
    });

    it('should call signUp from Parse Service', function () {
        expect(MockParse.signUp).toHaveBeenCalled();
    });


});