/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 6/09/14
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 23/08/14
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */

angular.module('authentication')
/**
 * Parse Service com as a back-end for the application.
 */
    .factory('Parse', function ($q, $rootScope) {

        var signIn = function signIn(userToRegister)
        {

            var user = new Parse.User();
            var deferred = $q.defer();
            console.log("trying to register " + userToRegister.email);
            user.set("username", userToRegister.email);
            user.set("password", userToRegister.password);
            user.set("email", userToRegister.email);

            user.signUp(user).then(function(user){
                deferred.resolve(user)
            }, function(error){
                deferred.reject("error signing in..");
            })

            return deferred.promise;
        };


        var parseService = {
            name: "Parse",
            signIn: signIn
        };

        return parseService;

    });
